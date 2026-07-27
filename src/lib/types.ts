// Typy dla całej aplikacji
// src/lib/types.ts
export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}

// Schemat galerii zgodny z centralnym galleries.json (panel AWS).
// Standardowy schemat portfolio: { src, alt?, category? } — nazwy pól spójne
// z pozostałymi stronami portfolio Karola.
// Obrazy docelowo pobierane z media.torweb.pl/<domena>/galleries.json;
// hostowane w centralnej bibliotece media.meblesystem.pl (migracja 2026-07-27).
export interface GalleryImage {
  src: string;
  alt?: string;
  // typowe kategorie: kuchnie | szafy | garderoby | zabudowy | sypialnie |
  // lazienki | biuro | lozka | biurowe — pole trzymane jako string dla spójności
  // z centralnym galleries.json (bez sztywnej unii).
  category?: string;
  // pola legacy zachowane dla kompatybilności ze starszymi danymi
  id?: string;
  title?: string;
  description?: string;
}

// Alias zgodny z nazewnictwem centralnym (galleries.json / pozostałe strony portfolio)
export type PortfolioImage = GalleryImage;

export interface KitchenType {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  priceRange?: "budget" | "medium" | "premium";
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface ContactInfo {
  phone: string;
  mobile: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday?: string;
  };
}

export interface CompanyInfo {
  name: string;
  fullName: string;
  nip: string;
  regon: string;
  established: number;
  customersServed: number;
}

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: number;
}

export interface CarouselOptions {
  autoPlay?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
}
