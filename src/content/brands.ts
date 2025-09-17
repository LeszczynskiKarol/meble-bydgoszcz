export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: "materials" | "hardware" | "appliances" | "accessories";
  description: string;
  website?: string;
}

export const brands: Brand[] = [
  // Materiały - Płyty
  {
    id: "egger",
    name: "Egger",
    logo: "/brands/egger.svg",
    category: "materials",
    description:
      "Austriacki producent płyt laminowanych i MDF najwyższej jakości",
    website: "https://www.egger.com",
  },
  {
    id: "kronospan",
    name: "Kronospan",
    logo: "/brands/kronospan.svg",
    category: "materials",
    description: "Światowy lider w produkcji płyt drewnopochodnych",
    website: "https://www.kronospan.com",
  },
  {
    id: "pfleiderer",
    name: "Pfleiderer",
    logo: "/brands/pfleiderer.svg",
    category: "materials",
    description: "Niemiecki producent wysokiej jakości płyt meblowych",
    website: "https://www.pfleiderer.com",
  },
  {
    id: "cleaf",
    name: "Cleaf",
    logo: "/brands/cleaf.svg",
    category: "materials",
    description: "Włoskie laminaty o wyjątkowej strukturze i designie",
    website: "https://www.cleaf.it",
  },

  // Okucia
  {
    id: "blum",
    name: "Blum",
    logo: "/brands/blum.svg",
    category: "hardware",
    description: "Austriackie okucia premium - zawiasy, prowadnice, podnośniki",
    website: "https://www.blum.com",
  },
  {
    id: "hettich",
    name: "Hettich",
    logo: "/brands/hettich.svg",
    category: "hardware",
    description: "Niemieckie systemy okuć meblowych najwyższej jakości",
    website: "https://www.hettich.com",
  },
  {
    id: "gtv",
    name: "GTV",
    logo: "/brands/gtv.svg",
    category: "hardware",
    description: "Polski producent okuć i akcesoriów meblowych",
    website: "https://www.gtv.com.pl",
  },
  {
    id: "hafele",
    name: "Häfele",
    logo: "/brands/hafele.svg",
    category: "hardware",
    description: "Niemieckie okucia i systemy meblowe",
    website: "https://www.hafele.com",
  },

  // AGD
  {
    id: "bosch",
    name: "Bosch",
    logo: "/brands/bosch.svg",
    category: "appliances",
    description: "Niemiecka jakość sprzętu AGD do zabudowy",
    website: "https://www.bosch-home.pl",
  },
  {
    id: "siemens",
    name: "Siemens",
    logo: "/brands/siemens.svg",
    category: "appliances",
    description: "Innowacyjny sprzęt AGD klasy premium",
    website: "https://www.siemens-home.bsh-group.com",
  },
  {
    id: "aeg",
    name: "AEG",
    logo: "/brands/aeg.svg",
    category: "appliances",
    description: "Niemiecki sprzęt AGD - perfekcja w każdym detalu",
    website: "https://www.aeg.pl",
  },
  {
    id: "electrolux",
    name: "Electrolux",
    logo: "/brands/electrolux.svg",
    category: "appliances",
    description: "Szwedzka jakość i skandynawski design",
    website: "https://www.electrolux.pl",
  },
  {
    id: "whirlpool",
    name: "Whirlpool",
    logo: "/brands/whirlpool.svg",
    category: "appliances",
    description: "Amerykańska niezawodność w kuchni",
    website: "https://www.whirlpool.pl",
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "/brands/samsung.svg",
    category: "appliances",
    description: "Nowoczesne technologie w sprzęcie AGD",
    website: "https://www.samsung.com",
  },

  // Akcesoria kuchenne
  {
    id: "blanco",
    name: "Blanco",
    logo: "/brands/blanco.svg",
    category: "accessories",
    description: "Niemieckie zlewozmywaki i baterie kuchenne",
    website: "https://www.blanco.com",
  },
  {
    id: "franke",
    name: "Franke",
    logo: "/brands/franke.svg",
    category: "accessories",
    description: "Szwajcarska precyzja w zlewozmywakach i bateriach",
    website: "https://www.franke.com",
  },
  {
    id: "grohe",
    name: "Grohe",
    logo: "/brands/grohe.svg",
    category: "accessories",
    description: "Niemieckie baterie i systemy kuchenne premium",
    website: "https://www.grohe.pl",
  },
  {
    id: "hansgrohe",
    name: "Hansgrohe",
    logo: "/brands/hansgrohe.svg",
    category: "accessories",
    description: "Innowacyjne rozwiązania w armaturze kuchennej",
    website: "https://www.hansgrohe.pl",
  },
  {
    id: "kesseböhmer",
    name: "Kesseböhmer",
    logo: "/brands/kessebohmer.svg",
    category: "accessories",
    description: "Niemieckie systemy cargo i organizacji szafek",
    website: "https://www.kesseboehmer.com",
  },
  {
    id: "peka",
    name: "Peka",
    logo: "/brands/peka.svg",
    category: "accessories",
    description: "Szwajcarskie systemy organizacji wnętrz szafek",
    website: "https://www.peka-system.ch",
  },
];

export const brandCategories = {
  materials: {
    title: "Materiały",
    description: "Współpracujemy z najlepszymi producentami płyt i materiałów",
  },
  hardware: {
    title: "Okucia",
    description: "Używamy tylko sprawdzonych systemów okuć",
  },
  appliances: {
    title: "Sprzęt AGD",
    description: "Oferujemy sprzęt AGD wiodących marek",
  },
  accessories: {
    title: "Akcesoria",
    description: "Wysokiej klasy akcesoria kuchenne i łazienkowe",
  },
};
