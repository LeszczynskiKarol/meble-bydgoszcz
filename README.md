# Meble Bydgoszcz - Modern Static Website

Nowoczesna strona statyczna dla firmy produkującej meble na wymiar w Bydgoszczy. Zbudowana z wykorzystaniem Astro, TypeScript, React i Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v4.3
- **TypeScript**: Full type safety
- **UI Components**: React 18 (dla interaktywnych elementów)
- **Styling**: Tailwind CSS 3.4
- **Hosting**: AWS S3 + CloudFront
- **CI/CD**: GitHub Actions
- **Image Optimization**: Sharp + Astro Image
- **SEO**: Astro SEO + automatyczny sitemap

## 📁 Struktura projektu

```
src/
├── components/       # Komponenty Astro i React
│   ├── layout/      # Header, Footer, Navigation
│   ├── sections/    # Hero, Features, Services, etc.
│   ├── cards/       # Karty dla różnych sekcji
│   └── ui/          # Przyciski, Carousel, Lightbox
├── content/         # Dane treściowe (TypeScript)
├── layouts/         # Layout bazowy
├── pages/           # Strony (routing)
├── styles/          # Globalne style CSS
└── lib/             # Typy i utilsy
```

## 🛠️ Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/your-org/meble-bydgoszcz.git
cd meble-bydgoszcz

# Instalacja zależności
npm install

# Uruchomienie środowiska deweloperskiego
npm run dev
```

## 📦 Komendy

| Komenda               | Opis                                            |
| --------------------- | ----------------------------------------------- |
| `npm run dev`         | Uruchamia serwer deweloperski na localhost:4321 |
| `npm run build`       | Buduje produkcyjną wersję strony                |
| `npm run preview`     | Podgląd zbudowanej strony                       |
| `npm run type-check`  | Sprawdzanie typów TypeScript                    |
| `npm run lint`        | Lintowanie kodu                                 |
| `npm run deploy`      | Wdrożenie na S3                                 |
| `npm run deploy:prod` | Pełne wdrożenie z invalidacją CloudFront        |

## 🌐 Wdrożenie

### Automatyczne (GitHub Actions)

Każdy push do brancha `main` automatycznie wdraża stronę na produkcję.

### Manualne

```bash
# Budowanie
npm run build

# Wdrożenie na S3
npm run deploy

# Invalidacja CloudFront
npm run invalidate
```

### Wymagane zmienne środowiskowe

Utwórz secrets w GitHub Repository:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## 📝 Zarządzanie treścią

### Dodawanie nowej usługi

1. Edytuj plik `src/content/services.ts`
2. Dodaj nowy obiekt do tablicy `services`
3. Dodaj odpowiednie zdjęcie do CDN

### Aktualizacja opinii

1. Edytuj plik `src/content/reviews.ts`
2. Dodaj nowe opinie do tablicy `reviews`

### Dodawanie zdjęć do galerii

1. Edytuj plik `src/content/gallery.ts`
2. Dodaj nowe obiekty do `galleryImages`
3. Upload zdjęć na CDN S3

## 🎨 Customizacja

### Kolory i zmienne CSS

Edytuj `src/styles/variables.css`:

```css
:root {
  --primary-color: #1a1a1a;
  --secondary-color: #764ba2;
  --accent-color: #f4f4f4;
  /* ... */
}
```

### Konfiguracja Tailwind

Edytuj `tailwind.config.mjs` dla własnych klas utility.

## 🔧 Konfiguracja AWS

### S3 Bucket

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::meble-bydgoszcz-static/*"
    }
  ]
}
```

### CloudFront

- Distribution ID: `E30UI5A1HXCG5O`
- Alternate Domain Names: `meble-bydgoszcz.pl`, `www.meble-bydgoszcz.pl`
- SSL Certificate: ACM w us-east-1

## 📊 Monitorowanie

### Google Analytics

GTM Container ID: `GTM-TSGMGQLP` (zmień w `src/content/site-config.ts`)

### Lighthouse Score

Cel: 95+ na wszystkich metrykach

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🔍 SEO

### Automatyczne generowanie

- Sitemap: `/sitemap-index.xml`
- Robots.txt: `/robots.txt`
- Canonical URLs
- Open Graph tags
- Structured Data (Schema.org)

### Optymalizacja obrazów

Wszystkie obrazy są automatycznie:

- Konwertowane do WebP/AVIF
- Lazy-loaded
- Responsive (srcset)

## 🤝 Współpraca

1. Fork repozytorium
2. Stwórz branch (`git checkout -b feature/AmazingFeature`)
3. Commit zmiany (`git commit -m 'Add AmazingFeature'`)
4. Push do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz Pull Request

## 📄 Licencja

Własnościowa - wszystkie prawa zastrzeżone © 2025 Meble Bydgoszcz

## 📞 Kontakt

- Email: kontakt@meble-bydgoszcz.pl
- Tel: +48 52 123 45 67
- Strona: https://www.meble-bydgoszcz.pl

## 🚧 TODO

- [ ] Integracja z CMS (Strapi/Contentful)
- [ ] Kalkulator cen online
- [ ] Konfigurator 3D mebli
- [ ] Chat/WhatsApp widget
- [ ] Blog sekcja
- [ ] Multi-language support (EN/DE)
- [ ] PWA support
- [ ] A/B testing
- [ ] Newsletter integration
