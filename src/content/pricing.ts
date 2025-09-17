export interface PricingItem {
  id: string;
  category: string;
  name: string;
  priceFrom: number;
  priceTo?: number;
  unit: string;
  description?: string;
  includes?: string[];
  popular?: boolean;
}

export const pricingItems: PricingItem[] = [
  // Kuchnie
  {
    id: "kuchnia-standard",
    category: "Kuchnie",
    name: "Kuchnia Standard",
    priceFrom: 800,
    priceTo: 1200,
    unit: "mb",
    description: "Podstawowa linia kuchni z płyty laminowanej",
    includes: [
      "Płyta laminowana 18mm",
      "Uchwyty standard",
      "Zawiasy z cichym domykiem",
      "Prowadnice rolkowe",
      "Blat laminowany 38mm",
    ],
  },
  {
    id: "kuchnia-premium",
    category: "Kuchnie",
    name: "Kuchnia Premium",
    priceFrom: 1500,
    priceTo: 2500,
    unit: "mb",
    description: "Kuchnia z frontami lakierowanymi lub fornirowanymi",
    includes: [
      "Fronty lakierowane mat/połysk lub fornir",
      "System bezuchwytowy lub uchwyty premium",
      "Zawiasy Blum z cichym domykiem",
      "Szuflady Tandembox",
      "Blat kwarcowy lub granitowy",
      "Oświetlenie LED",
    ],
    popular: true,
  },
  {
    id: "wyspa-kuchenna",
    category: "Kuchnie",
    name: "Wyspa kuchenna",
    priceFrom: 3500,
    priceTo: 8000,
    unit: "szt",
    description: "Wyspa kuchenna z blatem i miejscem do siedzenia",
    includes: [
      "Konstrukcja wyspy",
      "Szafki i szuflady",
      "Blat premium",
      "Instalacja elektryczna",
      "Opcjonalnie zlew/płyta",
    ],
  },

  // Szafy i garderoby
  {
    id: "szafa-przesuwna",
    category: "Szafy",
    name: "Szafa przesuwna",
    priceFrom: 600,
    priceTo: 900,
    unit: "m²",
    description: "Szafa z drzwiami przesuwnymi",
    includes: [
      "System przesuwny aluminiowy",
      "Wypełnienie płyta lub lustro",
      "Półki i drążki",
      "Możliwość podziału drzwi",
    ],
    popular: true,
  },
  {
    id: "szafa-uchylna",
    category: "Szafy",
    name: "Szafa z drzwiami uchylnymi",
    priceFrom: 500,
    priceTo: 750,
    unit: "m²",
    description: "Klasyczna szafa z drzwiami uchylnymi",
    includes: [
      "Drzwi uchylne",
      "Zawiasy z cichym domykiem",
      "Półki i drążki",
      "Uchwyty do wyboru",
    ],
  },
  {
    id: "garderoba",
    category: "Szafy",
    name: "Garderoba na wymiar",
    priceFrom: 400,
    priceTo: 800,
    unit: "m²",
    description: "Zabudowa garderoby bez frontów",
    includes: [
      "System regałów i półek",
      "Szuflady",
      "Drążki na różnych wysokościach",
      "Organizery",
      "Opcjonalnie oświetlenie",
    ],
  },

  // Meble łazienkowe
  {
    id: "szafka-podumywalkowa",
    category: "Łazienka",
    name: "Szafka podumywalkowa",
    priceFrom: 800,
    priceTo: 2000,
    unit: "szt",
    description: "Szafka pod umywalkę na wymiar",
    includes: [
      "Materiały wodoodporne",
      "Fronty lakierowane",
      "Cichy domyk",
      "Organizery wewnętrzne",
    ],
  },
  {
    id: "zabudowa-pralki",
    category: "Łazienka",
    name: "Zabudowa pralki",
    priceFrom: 1200,
    priceTo: 2000,
    unit: "szt",
    description: "Szafka na pralkę i suszarkę w słupku",
    includes: [
      "Konstrukcja wzmocniona",
      "Półki nad pralką",
      "Fronty dopasowane do łazienki",
      "Wentylacja",
    ],
  },

  // Salon
  {
    id: "zabudowa-rtv",
    category: "Salon",
    name: "Zabudowa RTV",
    priceFrom: 600,
    priceTo: 1000,
    unit: "mb",
    description: "Meble pod telewizor z półkami",
    includes: [
      "Szafka RTV",
      "Półki wiszące",
      "Ukrycie kabli",
      "Opcjonalnie oświetlenie LED",
    ],
    popular: true,
  },
  {
    id: "biblioteczka",
    category: "Salon",
    name: "Biblioteczka/Regał",
    priceFrom: 400,
    priceTo: 700,
    unit: "mb",
    description: "Regał na książki na wymiar",
    includes: [
      "Półki o różnej wysokości",
      "Możliwość zamknięcia części",
      "Wzmocniona konstrukcja",
    ],
  },

  // Biuro
  {
    id: "biurko",
    category: "Biuro",
    name: "Biurko na wymiar",
    priceFrom: 800,
    priceTo: 2000,
    unit: "szt",
    description: "Ergonomiczne biurko do pracy",
    includes: [
      "Blat na wymiar",
      "Szuflady",
      "Półka na klawiaturę",
      "Organizery kablowe",
      "Opcjonalnie nadstawka",
    ],
  },

  // Sypialnia
  {
    id: "lozko-zabudowa",
    category: "Sypialnia",
    name: "Łóżko z zabudową",
    priceFrom: 2500,
    priceTo: 5000,
    unit: "kpl",
    description: "Łóżko z zagłówkiem i szafkami",
    includes: [
      "Rama łóżka",
      "Zagłówek tapicerowany",
      "Szafki nocne",
      "Opcjonalnie pojemnik na pościel",
    ],
  },

  // Przedpokój
  {
    id: "zabudowa-przedpokoj",
    category: "Przedpokój",
    name: "Zabudowa przedpokoju",
    priceFrom: 500,
    priceTo: 900,
    unit: "mb",
    description: "Kompleksowa zabudowa przedpokoju",
    includes: [
      "Szafa lub wieszaki",
      "Szafka na buty",
      "Lustro",
      "Siedzisko",
      "Półki",
    ],
  },

  // Usługi dodatkowe
  {
    id: "projekt-3d",
    category: "Usługi",
    name: "Projekt 3D",
    priceFrom: 0,
    unit: "szt",
    description: "Wizualizacja 3D mebli - GRATIS przy zamówieniu",
  },
  {
    id: "pomiar",
    category: "Usługi",
    name: "Pomiar",
    priceFrom: 0,
    unit: "szt",
    description: "Profesjonalny pomiar - GRATIS w Bydgoszczy",
  },
  {
    id: "transport",
    category: "Usługi",
    name: "Transport",
    priceFrom: 0,
    unit: "szt",
    description: "GRATIS w Bydgoszczy przy zamówieniu powyżej 5000 zł",
  },
  {
    id: "montaz",
    category: "Usługi",
    name: "Montaż",
    priceFrom: 10,
    priceTo: 15,
    unit: "% wartości",
    description: "Profesjonalny montaż mebli",
  },
  {
    id: "demontaz",
    category: "Usługi",
    name: "Demontaż starych mebli",
    priceFrom: 200,
    priceTo: 500,
    unit: "szt",
    description: "Demontaż i utylizacja starych mebli",
  },
];

export const pricingNotes = [
  "Wszystkie ceny są cenami netto, do których należy doliczyć 23% VAT",
  "Podane ceny są orientacyjne i mogą się różnić w zależności od użytych materiałów i stopnia skomplikowania projektu",
  "Dokładną wycenę otrzymasz po konsultacji i pomiarze",
  "Przy zamówieniach powyżej 15 000 zł oferujemy rabaty indywidualne",
  "Możliwość płatności ratalnej 0% na 10 rat",
  "Ceny obejmują 5 lat gwarancji na wszystkie meble",
];

export const paymentOptions = [
  {
    name: "Gotówka",
    description: "Płatność przy odbiorze",
    icon: "💵",
  },
  {
    name: "Przelew bankowy",
    description: "Tradycyjny przelew na konto firmowe",
    icon: "🏦",
  },
  {
    name: "Karta płatnicza",
    description: "Visa, Mastercard, przy montażu",
    icon: "💳",
  },
  {
    name: "Raty 0%",
    description: "10 rat bez odsetek i prowizji",
    icon: "📅",
  },
  {
    name: "Leasing",
    description: "Dla firm - korzystne warunki",
    icon: "📊",
  },
];

export const discounts = [
  {
    name: "Rabat za polecenie",
    value: "5%",
    description: "Dla klientów poleconych przez naszych klientów",
  },
  {
    name: "Rabat za większe zamówienie",
    value: "do 10%",
    description: "Przy zamówieniach powyżej 15 000 zł",
  },
  {
    name: "Rabat sezonowy",
    value: "do 15%",
    description: "Promocje w wybranych okresach roku",
  },
  {
    name: "Pakiet mieszkanie",
    value: "do 20%",
    description: "Przy kompleksowym wyposażeniu mieszkania",
  },
];
