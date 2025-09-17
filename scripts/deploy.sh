#!/bin/bash

# Deploy script for Meble Bydgoszcz website
# Usage: ./scripts/deploy.sh [environment]

set -e

# Configuration
AWS_REGION="eu-central-1"
S3_BUCKET="meble-bydgoszcz-static"
CLOUDFRONT_DISTRIBUTION="E30D0R03T5Q0AH"
ENVIRONMENT=${1:-production}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_dependencies() {
    log_info "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v aws &> /dev/null; then
        log_error "AWS CLI is not installed"
        exit 1
    fi
    
    log_info "All dependencies are installed"
}

build_project() {
    log_info "Building project for $ENVIRONMENT..."
    
    # Clean previous build
    rm -rf dist
    
    # Install dependencies
    log_info "Installing dependencies..."
    npm ci
    
    # Type check
    log_info "Running type check..."
    npm run type-check
    
    # Build
    log_info "Building project..."
    npm run build
    
    # Generate sitemap
    log_info "Generating sitemap..."
    node scripts/generate-sitemap.js
    
    log_info "Build completed successfully"
}

optimize_assets() {
    log_info "Optimizing assets..."
    
    # Find and compress images if needed
    find dist -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -exec echo "Processing {}" \;
    
    # Ensure all HTML files have proper headers
    find dist -name "*.html" -exec sed -i '' 's|</head>|<link rel="dns-prefetch" href="https://www.googletagmanager.com"></head>|g' {} \;
    
    log_info "Asset optimization completed"
}

deploy_to_s3() {
    log_info "Deploying to S3 bucket: $S3_BUCKET..."
    
    # Sync all files except HTML, XML, JSON
    aws s3 sync dist/ s3://$S3_BUCKET/ \
        --region $AWS_REGION \
        --delete \
        --cache-control "public, max-age=31536000, immutable" \
        --exclude "*.html" \
        --exclude "*.xml" \
        --exclude "*.json" \
        --exclude ".DS_Store" \
        --exclude "*.map"
    
    # Sync HTML files with shorter cache
    aws s3 sync dist/ s3://$S3_BUCKET/ \
        --region $AWS_REGION \
        --delete \
        --cache-control "public, max-age=3600, must-revalidate" \
        --content-type "text/html; charset=utf-8" \
        --exclude "*" \
        --include "*.html"
    
    # Sync XML files
    aws s3 sync dist/ s3://$S3_BUCKET/ \
        --region $AWS_REGION \
        --delete \
        --cache-control "public, max-age=86400" \
        --content-type "application/xml" \
        --exclude "*" \
        --include "*.xml"
    
    # Sync JSON files
    aws s3 sync dist/ s3://$S3_BUCKET/ \
        --region $AWS_REGION \
        --delete \
        --cache-control "public, max-age=3600" \
        --content-type "application/json" \
        --exclude "*" \
        --include "*.json"
    
    log_info "S3 deployment completed"
}

invalidate_cloudfront() {
    log_info "Creating CloudFront invalidation..."
    
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    
    log_info "Invalidation created with ID: $INVALIDATION_ID"
    
    # Wait for invalidation to complete
    log_info "Waiting for invalidation to complete..."
    aws cloudfront wait invalidation-completed \
        --distribution-id $CLOUDFRONT_DISTRIBUTION \
        --id $INVALIDATION_ID
    
    log_info "CloudFront invalidation completed"
}

verify_deployment() {
    log_info "Verifying deployment..."
    
    # Check main page
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://www.meble-bydgoszcz.pl)
    
    if [ $HTTP_STATUS -eq 200 ]; then
        log_info "Main page is accessible (HTTP $HTTP_STATUS)"
    else
        log_error "Main page returned HTTP $HTTP_STATUS"
        exit 1
    fi
    
    # Check a few key pages
    for path in "/kuchnie" "/realizacje" "/kontakt"; do
        HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "https://www.meble-bydgoszcz.pl$path")
        if [ $HTTP_STATUS -eq 200 ]; then
            log_info "Page $path is accessible"
        else
            log_warning "Page $path returned HTTP $HTTP_STATUS"
        fi
    done
    
    log_info "Deployment verification completed"
}

cleanup() {
    log_info "Cleaning up..."
    rm -f deploy.log
    log_info "Cleanup completed"
}

# Main execution
main() {
    log_info "Starting deployment for environment: $ENVIRONMENT"
    log_info "Timestamp: $(date)"
    
    check_dependencies
    build_project
    optimize_assets
    deploy_to_s3
    invalidate_cloudfront
    verify_deployment
    cleanup
    
    log_info "Deployment completed successfully!"
    log_info "Site URL: https://www.meble-bydgoszcz.pl"
}

# Run main function
main