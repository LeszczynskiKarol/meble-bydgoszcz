export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  completionDate: string;
  images: {
    main: string;
    gallery: string[];
  };
  features: string[];
  testimonial?: {
    author: string;
    text: string;
  };
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "kuchnia-fordon-2024",
    title: "Nowoczesna kuchnia w Fordonie",
    category: "Kuchnia",
    description:
      "Elegancka kuchnia w kolorze antracytu z wyspą centralną. Blat kwarcowy, sprzęt AGD w zabudowie, oświetlenie LED.",
    location: "Bydgoszcz, Fordon",
    completionDate: "2024-12",
    images: {
      main: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098858-Clipboard_06-22-2025_107_opt.webp",
      gallery: [
        "/portfolio/kuchnia-fordon-1.jpg",
        "/portfolio/kuchnia-fordon-2.jpg",
        "/portfolio/kuchnia-fordon-3.jpg",
      ],
    },
    features: [
      "Wyspa centralna z barem",
      "Blat kwarcowy 3cm",
      "Fronty lakierowane mat",
      "Szuflady Blum Tandembox",
      "Oświetlenie LED",
      "Sprzęt AGD Bosch",
    ],
    testimonial: {
      author: "Anna i Piotr K.",
      text: "Kuchnia przekroczyła nasze oczekiwania! Funkcjonalna, piękna i wykonana z najwyższą starannością.",
    },
    tags: ["nowoczesna", "wyspa", "antracyt", "kwarcowy blat"],
  },
  {
    id: "garderoba-centrum-2024",
    title: "Przestronna garderoba w centrum",
    category: "Garderoba",
    description:
      "Garderoba 12m² z lustrzanymi drzwiami przesuwnymi, wewnętrznym oświetleniem i systemem organizacji.",
    location: "Bydgoszcz, Centrum",
    completionDate: "2024-11",
    images: {
      main: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1754927991105-MEBLE-SYCZEN-89-of-91-scaled_opt.webp",
      gallery: [
        "/portfolio/garderoba-centrum-1.jpg",
        "/portfolio/garderoba-centrum-2.jpg",
        "/portfolio/garderoba-centrum-3.jpg",
      ],
    },
    features: [
      "Drzwi przesuwne z lustrem",
      "Oświetlenie automatyczne",
      "Szuflady z organizerem",
      "Wysuwane wieszaki",
      "Półki na buty",
      "Sejf w zabudowie",
    ],
    tags: ["garderoba", "lustro", "organizacja", "premium"],
  },
  {
    id: "salon-wyzyny-2024",
    title: "Zabudowa salonu na Wyżynach",
    category: "Salon",
    description:
      "Kompleksowa zabudowa ściany RTV z biblioteką. Fronty w połysku, oświetlenie ekspozycyjne, ukryte kable.",
    location: "Bydgoszcz, Wyżyny",
    completionDate: "2024-10",
    images: {
      main: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1755073547211-szafgozdz-1_opt.webp",
      gallery: [
        "/portfolio/salon-wyzyny-1.jpg",
        "/portfolio/salon-wyzyny-2.jpg",
        "/portfolio/salon-wyzyny-3.jpg",
      ],
    },
    features: [
      "Zabudowa RTV 4,5m",
      "Biblioteka na książki",
      "Oświetlenie LED RGB",
      "Fronty lakierowane połysk",
      "System ukrycia kabli",
      "Szafki z push-to-open",
    ],
    testimonial: {
      author: "Tomasz W.",
      text: "Salon wygląda teraz jak z katalogu! Wszystko idealnie dopasowane i przemyślane.",
    },
    tags: ["salon", "RTV", "biblioteka", "połysk"],
  },
  {
    id: "sypialnia-bartodzieje-2024",
    title: "Sypialnia z garderobą w Bartodziejach",
    category: "Sypialnia",
    description:
      "Kompletne wyposażenie sypialni: łóżko tapicerowane z pojemnikiem, szafy, toaletka i szafki nocne.",
    location: "Bydgoszcz, Bartodzieje",
    completionDate: "2024-09",
    images: {
      main: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1748596199233-1a,k%20(3)_opt.webp",
      gallery: [
        "/portfolio/sypialnia-bartodzieje-1.jpg",
        "/portfolio/sypialnia-bartodzieje-2.jpg",
        "/portfolio/sypialnia-bartodzieje-3.jpg",
      ],
    },
    features: [
      "Łóżko z pojemnikiem",
      "Zagłówek tapicerowany",
      "Toaletka z lustrem LED",
      "Szafy przesuwne",
      "Szafki nocne wiszące",
      "Komoda 6-szufladowa",
    ],
    tags: ["sypialnia", "tapicerowane", "pojemnik", "toaletka"],
  },
  {
    id: "kuchnia-kapusciska-2024",
    title: "Klasyczna kuchnia na Kapuściskach",
    category: "Kuchnia",
    description:
      "Kuchnia w stylu klasycznym z drewnianymi frontami, granitowym blatem i stylizowanymi uchwytami.",
    location: "Bydgoszcz, Kapuściska",
    completionDate: "2024-08",
    images: {
      main: "/portfolio/kuchnia-kapusciska-main.jpg",
      gallery: [
        "/portfolio/kuchnia-kapusciska-1.jpg",
        "/portfolio/kuchnia-kapusciska-2.jpg",
        "/portfolio/kuchnia-kapusciska-3.jpg",
      ],
    },
    features: [
      "Fronty dębowe",
      "Blat granitowy",
      "Stylizowane uchwyty",
      "Witryny przeszklone",
      "Okap ozdobny",
      "Cargo narożne",
    ],
    testimonial: {
      author: "Ewa i Marek L.",
      text: "Wymarzona kuchnia w klasycznym stylu. Ciepła, przytulna i bardzo funkcjonalna.",
    },
    tags: ["klasyczna", "drewno", "granit", "tradycyjna"],
  },
  {
    id: "lazienka-szwederowo-2024",
    title: "Meble łazienkowe w Szwederowie",
    category: "Łazienka",
    description:
      "Zabudowa łazienki z szafkami podumywalkowymi, lustrem LED i wysoką szafą słupkową.",
    location: "Bydgoszcz, Szwederowo",
    completionDate: "2024-07",
    images: {
      main: "/portfolio/lazienka-szwederowo-main.jpg",
      gallery: [
        "/portfolio/lazienka-szwederowo-1.jpg",
        "/portfolio/lazienka-szwederowo-2.jpg",
        "/portfolio/lazienka-szwederowo-3.jpg",
      ],
    },
    features: [
      "Szafki wodoodporne",
      "Blat konglomerat",
      "Lustro z oświetleniem",
      "Szafa słupkowa",
      "Organizery wewnętrzne",
      "Fronty bezuchwytowe",
    ],
    tags: ["łazienka", "wodoodporne", "LED", "minimalizm"],
  },
  {
    id: "biuro-jary-2024",
    title: "Domowe biuro w Jarach",
    category: "Biuro",
    description:
      "Funkcjonalne biuro domowe z biurkiem narożnym, regałami na książki i szafkami na dokumenty.",
    location: "Bydgoszcz, Jary",
    completionDate: "2024-06",
    images: {
      main: "/portfolio/biuro-jary-main.jpg",
      gallery: [
        "/portfolio/biuro-jary-1.jpg",
        "/portfolio/biuro-jary-2.jpg",
        "/portfolio/biuro-jary-3.jpg",
      ],
    },
    features: [
      "Biurko narożne 180x140",
      "Regały na książki",
      "Szafki z zamkami",
      "Organizery kablowe",
      "Półka na drukarkę",
      "Oświetlenie robocze",
    ],
    testimonial: {
      author: "Michał K.",
      text: "Idealne biuro do pracy zdalnej. Wszystko pod ręką, ergonomiczne i estetyczne.",
    },
    tags: ["biuro", "home office", "narożne", "ergonomiczne"],
  },
  {
    id: "pokoj-dzieciecy-miedzyń-2024",
    title: "Pokój dziecięcy w Miedzyniu",
    category: "Pokój dziecięcy",
    description:
      "Kolorowy pokój dla rodzeństwa z łóżkiem piętrowym, biurkami i dużą ilością miejsca do przechowywania.",
    location: "Bydgoszcz, Miedzyń",
    completionDate: "2024-05",
    images: {
      main: "/portfolio/pokoj-dzieciecy-miedzyn-main.jpg",
      gallery: [
        "/portfolio/pokoj-dzieciecy-miedzyn-1.jpg",
        "/portfolio/pokoj-dzieciecy-miedzyn-2.jpg",
        "/portfolio/pokoj-dzieciecy-miedzyn-3.jpg",
      ],
    },
    features: [
      "Łóżko piętrowe z barierkami",
      "Dwa biurka",
      "Szafy na ubrania",
      "Pojemniki na zabawki",
      "Kolorowe fronty",
      "Tablice magnetyczne",
    ],
    testimonial: {
      author: "Katarzyna P.",
      text: "Dzieci są zachwycone! Pokój jest nie tylko ładny, ale też bardzo praktyczny.",
    },
    tags: ["dziecięcy", "piętrowe", "kolorowe", "rodzeństwo"],
  },
  {
    id: "przedpokoj-osowa-2024",
    title: "Zabudowa przedpokoju na Osowej Górze",
    category: "Przedpokój",
    description:
      "Kompleksowa zabudowa przedpokoju z szafą wnękową, szafką na buty i panelem z wieszakami.",
    location: "Bydgoszcz, Osowa Góra",
    completionDate: "2024-04",
    images: {
      main: "/portfolio/przedpokoj-osowa-main.jpg",
      gallery: [
        "/portfolio/przedpokoj-osowa-1.jpg",
        "/portfolio/przedpokoj-osowa-2.jpg",
        "/portfolio/przedpokoj-osowa-3.jpg",
      ],
    },
    features: [
      "Szafa wnękowa 3m",
      "Szafka na 24 pary butów",
      "Panel z wieszakami",
      "Lustro na całą wysokość",
      "Siedzisko z pojemnikiem",
      "Oświetlenie automatyczne",
    ],
    tags: ["przedpokój", "wnękowa", "lustro", "organizacja"],
  },
  {
    id: "kuchnia-blonie-2024",
    title: "Minimalistyczna kuchnia na Błoniu",
    category: "Kuchnia",
    description:
      "Biała kuchnia w stylu minimalistycznym z ukrytymi uchwytami i zintegrowanym sprzętem AGD.",
    location: "Bydgoszcz, Błonie",
    completionDate: "2024-03",
    images: {
      main: "/portfolio/kuchnia-blonie-main.jpg",
      gallery: [
        "/portfolio/kuchnia-blonie-1.jpg",
        "/portfolio/kuchnia-blonie-2.jpg",
        "/portfolio/kuchnia-blonie-3.jpg",
      ],
    },
    features: [
      "Fronty białe mat",
      "System bezuchwytowy",
      "Blat kompozytowy",
      "AGD w zabudowie",
      "Lodówka side-by-side",
      "Organizery cargo",
    ],
    testimonial: {
      author: "Paweł i Agata S.",
      text: "Minimalizm w najlepszym wydaniu. Kuchnia jest piękna i super funkcjonalna.",
    },
    tags: ["minimalistyczna", "biała", "bezuchwytowa", "nowoczesna"],
  },
];

export const portfolioCategories = [
  "Wszystkie",
  "Kuchnia",
  "Garderoba",
  "Salon",
  "Sypialnia",
  "Łazienka",
  "Biuro",
  "Pokój dziecięcy",
  "Przedpokój",
];
