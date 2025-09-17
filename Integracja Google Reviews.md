# 📍 Integracja Google Reviews dla strony Astro

## 🎯 Przegląd

Integracja Google Places API ze stroną statyczną Astro hostowaną na AWS S3 + CloudFront. System pobiera aktualne opinie z Google Maps i wyświetla je na stronie.

## 🏗️ Architektura

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   Browser   │────▶│  CloudFront  │────▶│      S3      │
└─────────────┘     └──────────────┘     └──────────────┘
       │                    │
       │                    │ Cache (1h)
       ▼                    ▼
┌─────────────┐     ┌──────────────┐
│ API Gateway │────▶│    Lambda    │
└─────────────┘     └──────────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │ Google Places│
                    │     API      │
                    └──────────────┘
```

## 📋 Wymagania wstępne

- ✅ Konto AWS
- ✅ AWS CLI skonfigurowane
- ✅ Node.js 18+ 
- ✅ Google Cloud Platform konto
- ✅ Google Places API włączone
- ✅ API Key dla Google Maps

## 🚀 Szybki start

### 1. Sklonuj i skonfiguruj

```bash
# Utwórz katalog dla Lambda
mkdir lambda-google-reviews
cd lambda-google-reviews

# Skopiuj kod funkcji Lambda
cp ../lambda-google-reviews/index.js .

# Wróć do głównego katalogu
cd ..
```

### 2. Skonfiguruj zmienne środowiskowe

```bash
# .env
PUBLIC_REVIEWS_API_ENDPOINT=https://your-api.execute-api.region.amazonaws.com/prod/reviews
PUBLIC_GOOGLE_PLACE_ID=ChIJ...  # Twój Place ID

# Eksportuj dla Lambda
export GOOGLE_API_KEY="your-google-api-key"
export GOOGLE_PLACE_ID="your-google-place-id"
```

### 3. Deploy Lambda i API

```bash
# Użyj skryptu
chmod +x deploy-lambda.sh
./deploy-lambda.sh

# Lub manualnie
npm run deploy:lambda
```

### 4. Build i deploy strony

```bash
# Automatyczny deployment
npm run full-deploy

# Lub krok po kroku
npm run build
npm run deploy:s3
npm run deploy:invalidate
```

## 🔧 Konfiguracja

### Google Places API

1. Wejdź na [Google Cloud Console](https://console.cloud.google.com)
2. Utwórz nowy projekt lub wybierz istniejący
3. Włącz "Places API"
4. Utwórz API Key
5. Zabezpiecz klucz (ograniczenia HTTP referrer lub IP)

### Znajdowanie Place ID

```javascript
// Użyj Google Maps
// 1. Znajdź swoją firmę na Google Maps
// 2. Kliknij prawym przyciskiem -> "What's here?"
// 3. Place ID pojawi się w URL lub szczegółach

// Lub użyj Place ID Finder:
// https://developers.google.com/maps/documentation/places/web-service/place-id
```

### AWS Lambda Environment Variables

```bash
GOOGLE_API_KEY=AIzaSy...
GOOGLE_PLACE_ID=ChIJ...
```

## 📝 Użycie w Astro

### Podstawowe użycie

```astro
---
import Reviews from '../components/sections/Reviews.astro';
---

<Reviews
  title="Opinie klientów"
  subtitle="Zobacz co mówią o nas"
  apiEndpoint={import.meta.env.PUBLIC_REVIEWS_API_ENDPOINT}
/>
```

### Z fallback reviews

```astro
---
import Reviews from '../components/sections/Reviews.astro';
import { reviews } from '../content/reviews';
---

<Reviews
  title="Opinie klientów"
  fallbackReviews={reviews}
  apiEndpoint={import.meta.env.PUBLIC_REVIEWS_API_ENDPOINT}
/>
```

## 🛠️ Komendy npm

```bash
# Development
npm run dev              # Start dev server
npm run dev:with-api    # Dev z auto-reload Lambda

# Build
npm run build           # Build Astro

# Deployment
npm run deploy          # Full deployment
npm run quick-deploy    # Tylko S3 (bez CloudFront invalidation)
npm run deploy:lambda   # Deploy tylko Lambda

# Testing
npm run test:api       # Test API endpoint
npm run test:lighthouse # Lighthouse audit

# Utilities
npm run clean          # Clean build files
npm run clean:cache    # Invalidate CloudFront
npm run logs:lambda    # Zobacz logi Lambda
npm run stats          # Statystyki S3
```

## 🔍 Debugging

### Sprawdź logi Lambda

```bash
aws logs tail /aws/lambda/google-reviews-api --follow
```

### Test API lokalnie

```bash
curl https://your-api.execute-api.region.amazonaws.com/prod/reviews | jq
```

### Sprawdź CORS

```bash
curl -H "Origin: https://d2zn9iio3uwyfn.cloudfront.net" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     https://your-api.execute-api.region.amazonaws.com/prod/reviews -v
```

## 💰 Koszty

| Serwis | Free Tier | Szacowany koszt/miesiąc |
|--------|-----------|-------------------------|
| Lambda | 1M requests | $0 |
| API Gateway | 1M requests (12 mies.) | ~$3.50 |
| Google Places | $200 credit/miesiąc | $0 |
| CloudFront | 1TB transfer | Już opłacone |
| S3 | 5GB | Już opłacone |

## 🚨 Limity i ograniczenia

### Google Places API
- **Basic Data**: $0 (unlimited)
- **Contact Data**: $0 (unlimited) 
- **Atmosphere Data**: $5/1000 requests
- **Reviews**: Część Basic Data (FREE)
- **Limit**: 5 opinii na request

### AWS Lambda
- Timeout: 10 sekund
- Memory: 128 MB
- Concurrent executions: 1000

### CloudFront Cache
- Reviews: 1 godzina
- HTML: 5 minut
- Assets: 1 rok

## 🔒 Bezpieczeństwo

1. **Nie commituj kluczy API**
   ```bash
   # .gitignore
   .env
   .env.local
   ```

2. **Ogranicz API Key w Google Console**
   - HTTP referrers: `*.cloudfront.net`
   - API restrictions: Places API only

3. **Rate limiting w API Gateway**
   - Throttle: 100 req/s
   - Burst: 200 req

4. **Lambda permissions**
   - Minimum required IAM role
   - No VPC needed

## 📊 Monitoring

### CloudWatch Dashboards

```bash
# Utwórz dashboard
aws cloudwatch put-dashboard \
  --dashboard-name GoogleReviewsAPI \
  --dashboard-body file://dashboard.json
```

### Alerty

- Error rate > 1%
- Latency > 1000ms  
- 4xx errors > 10/min
- Google API quota 80%

## 🐛 Rozwiązywanie problemów

### Problem: CORS error

```javascript
// Lambda response musi zawierać:
headers: {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS'
}
```

### Problem: Brak opinii

1. Sprawdź Place ID
2. Sprawdź czy firma ma opinie w Google
3. Sprawdź logi Lambda
4. Sprawdź limity API

### Problem: Stare dane

1. Sprawdź CloudFront cache
2. Invaliduj: `npm run clean:cache`
3. Sprawdź Cache-Control headers

## 📚 Dokumentacja

- [Google Places API](https://developers.google.com/maps/documentation/places/web-service)
- [AWS Lambda](https://docs.aws.amazon.com/lambda/)
- [Astro Docs](https://docs.astro.build)
- [CloudFront Caching](https://docs.aws.amazon.com/cloudfront/latest/developerguide/Expiration.html)

## 📄 Licencja

MIT

## 👥 Wsparcie

W razie problemów:
1. Sprawdź logi Lambda
2. Sprawdź dokumentację
3. Otwórz issue na GitHub