// src/content/site-config.ts

import type { CompanyInfo, ContactInfo } from "../lib/types";

export const company: CompanyInfo = {
  name: "Meble Bydgoszcz",
  fullName: "Meble System",
  nip: "956-211-16-20",
  regon: "389437853",
  established: 2015,
  customersServed: 500,
};

export const contact: ContactInfo = {
  phone: "576 060 832",
  email: "kontakt@meble-bydgoszcz.pl",
  address: {
    street: "ul. Gdańska 31",
    city: "Bydgoszcz",
    postalCode: "85-005",
    country: "Polska",
  },
  hours: {
    weekdays: "7:00 - 17:00",
    saturday: "Zamknięte",
    sunday: "Zamknięte",
  },
};

export const seo = {
  default: {
    title: "Meble na wymiar Bydgoszcz - Projektowanie i Produkcja Mebli",
    titleTemplate: "%s | Meble-Bydgoszcz.pl",
    description:
      "Meble na wymiar Bydgoszcz - projektujemy i produkujemy kuchnie, szafy, garderoby, zabudowy wnęk. 15 lat doświadczenia, darmowy projekt 3D. Sprawdź nasze realizacje!",
    keywords: [
      "meble na wymiar Bydgoszcz",
      "kuchnie na wymiar",
      "szafy wnękowe",
      "garderoby",
      "meble kuchenne Bydgoszcz",
      "zabudowy na wymiar",
    ],
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url: "https://www.meble-bydgoszcz.pl/",
      siteName: "Meble Bydgoszcz",
      images: [
        {
          url: "https://www.meble-bydgoszcz.pl/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Meble na wymiar Bydgoszcz",
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
    },
  },
};

export const images = {
  cdn: {
    baseUrl: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/",
    fallbackUrl: "https://www.meblesystem.pl/wp-content/uploads/2024/04/",
  },
  optimization: {
    formats: ["webp", "avif"],
    sizes: {
      thumbnail: 150,
      small: 300,
      medium: 600,
      large: 1200,
      hero: 1920,
    },
  },
};

export const analytics = {
  gtm: "GTM-TSGMGQLP",
  ga4: "G-T3S5RL41KV",
};

export const cloudfront = {
  distributionId: "E30UI5A1HXCG5O",
  domain: "d5iooyiap052n.cloudfront.net",
};

export const aws = {
  region: "eu-central-1",
  bucket: "meble-bydgoszcz-static",
  acmArn:
    "arn:aws:acm:us-east-1:381492300277:certificate/58ee58fb-60d8-4249-9b2e-9e0d1c636076",
};
