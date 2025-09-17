export const siteConfig = {
  name: "Grand Kuchnie - Meble na Wymiar Bydgoszcz",
  shortName: "Grand Kuchnie",
  description:
    "Projektujemy i wykonujemy meble na wymiar w Bydgoszczy. Kuchnie, szafy, garderoby, meble łazienkowe. 20 lat doświadczenia, 5 lat gwarancji.",
  url: "https://grandkuchnie.pl",
  ogImage: "https://grandkuchnie.pl/og-image.jpg",

  company: {
    name: "Grand Kuchnie Sp. z o.o.",
    nip: "9532814567",
    regon: "523698741",
    krs: "0000852147",
    established: "2015",
  },

  contact: {
    phone: "+48 576 060 832",
    email: "kontakt@meble-bydgoszcz.pl",
    hours: {
      weekdays: "7:00 - 17:00",
      saturday: "Zamknięte",
      sunday: "Zamknięte",
    },
  },

  address: {
    street: "ul. Gdańska 15",
    postalCode: "85-006",
    city: "Bydgoszcz",
    region: "kujawsko-pomorskie",
    country: "Polska",
    googleMapsUrl: "https://maps.google.com/?q=Grand+Kuchnie+Bydgoszcz",
    coordinates: {
      lat: 53.1235,
      lng: 18.0084,
    },
  },

  showroom: {
    name: "Showroom Grand Kuchnie",
    address: "ul. Gdańska 15, 85-006 Bydgoszcz",
    area: "250 m²",
    parking: "Bezpłatny parking dla klientów",
    accessibility: "Obiekt przystosowany dla niepełnosprawnych",
  },

  social: {
    facebook: "https://facebook.com/grandkuchnie",
    instagram: "https://instagram.com/grandkuchnie",
    youtube: "https://youtube.com/@grandkuchnie",
    linkedin: "https://linkedin.com/company/grandkuchnie",
    pinterest: "https://pinterest.com/grandkuchnie",
  },

  seo: {
    defaultTitle: "Grand Kuchnie - Meble na Wymiar Bydgoszcz",
    titleTemplate: "%s | Grand Kuchnie Bydgoszcz",
    defaultDescription:
      "Projektujemy i wykonujemy meble na wymiar w Bydgoszczy. Kuchnie, szafy, garderoby. 20 lat doświadczenia, darmowy projekt 3D, 5 lat gwarancji.",
    keywords: [
      "meble na wymiar Bydgoszcz",
      "kuchnie na wymiar Bydgoszcz",
      "szafy na wymiar Bydgoszcz",
      "garderoby Bydgoszcz",
      "meble łazienkowe Bydgoszcz",
      "zabudowy wnęk Bydgoszcz",
      "Grand Kuchnie",
      "meble Bydgoszcz",
      "stolarz Bydgoszcz",
      "projektowanie kuchni Bydgoszcz",
    ],
    author: "Grand Kuchnie Bydgoszcz",
    robots: "index, follow",
    googleSiteVerification: "your-google-verification-code",
    bingSiteVerification: "your-bing-verification-code",
  },

  features: {
    freeConsultation: true,
    freeDesign: true,
    free3DVisualization: true,
    freeMeasurement: true,
    freeTransport: true,
    freeAssembly: false, // Assembly included in price
    warranty: "5 lat",
    productionTime: "3-4 tygodnie",
    paymentMethods: ["Gotówka", "Przelew", "Karta", "Raty"],
    serviceArea: "Bydgoszcz i okolice do 50km",
  },

  testimonials: {
    enabled: true,
    autoRotate: true,
    rotateInterval: 8000,
  },

  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    facebookPixelId: "XXXXXXXXXXXXXXX",
    hotjarId: "XXXXXXX",
  },

  legal: {
    privacyPolicyUrl: "/polityka-prywatnosci",
    termsUrl: "/regulamin",
    cookiePolicyUrl: "/polityka-cookies",
    complaintFormUrl: "/formularz-reklamacji",
  },

  navigation: {
    main: [
      { name: "Strona główna", href: "/" },
      { name: "Usługi", href: "/uslugi" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "O nas", href: "/o-nas" },
      { name: "Proces realizacji", href: "/proces" },
      { name: "Cennik", href: "/cennik" },
      { name: "Kontakt", href: "/kontakt" },
    ],
    services: [
      { name: "Kuchnie na wymiar", href: "/uslugi/kuchnie" },
      { name: "Szafy i garderoby", href: "/uslugi/szafy-garderoby" },
      { name: "Meble łazienkowe", href: "/uslugi/lazienka" },
      { name: "Zabudowy salonowe", href: "/uslugi/salon" },
      { name: "Meble biurowe", href: "/uslugi/biuro" },
      { name: "Meble do sypialni", href: "/uslugi/sypialnia" },
    ],
    footer: [
      { name: "O firmie", href: "/o-nas" },
      { name: "Realizacje", href: "/portfolio" },
      { name: "Opinie klientów", href: "/opinie" },
      { name: "FAQ", href: "/faq" },
      { name: "Blog", href: "/blog" },
      { name: "Kariera", href: "/kariera" },
    ],
  },

  images: {
    logo: "/images/logo.svg",
    logoLight: "/images/logo-light.svg",
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    defaultOgImage: "/images/og-default.jpg",
    heroImages: [
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098858-Clipboard_06-22-2025_107_opt.webp",
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1754927991105-MEBLE-SYCZEN-89-of-91-scaled_opt.webp",
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1755073547211-szafgozdz-1_opt.webp",
      "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1748596199233-1a,k%20(3)_opt.webp",
    ],
  },

  api: {
    baseUrl: process.env.PUBLIC_API_URL || "https://api.grandkuchnie.pl",
    timeout: 10000,
    retryAttempts: 3,
  },

  forms: {
    contactEmail: "kontakt@grandkuchnie.pl",
    notificationEmail: "powiadomienia@grandkuchnie.pl",
    emailjsServiceId: "service_xxxxxxx",
    emailjsTemplateId: "template_xxxxxxx",
    emailjsUserId: "user_xxxxxxxxxxxxxxx",
  },

  chatbot: {
    enabled: true,
    provider: "tawk", // tawk, crisp, messenger, etc.
    tawkPropertyId: "xxxxxxxxxxxxxxxx",
    tawkWidgetId: "xxxxxxxxxxxxx",
  },
};

export default siteConfig;
