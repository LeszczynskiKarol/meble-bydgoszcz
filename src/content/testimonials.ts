export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  image?: string;
  verified?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anna Kowalska",
    location: "Bydgoszcz, Fordon",
    rating: 5,
    comment:
      "Wspaniała współpraca od początku do końca! Projektant dokładnie wysłuchał naszych potrzeb i zaproponował rozwiązania, o których nawet nie pomyśleliśmy. Kuchnia wygląda dokładnie jak na wizualizacji, a jakość wykonania przeszła nasze oczekiwania.",
    service: "Kuchnia na wymiar",
    date: "2024-12-15",
    verified: true,
  },
  {
    id: 2,
    name: "Piotr Nowak",
    location: "Bydgoszcz, Centrum",
    rating: 5,
    comment:
      "Szafa w przedpokoju idealnie wykorzystuje każdy centymetr przestrzeni. System przesuwny działa bez zarzutu, a wewnętrzna organizacja jest przemyślana. Montaż był szybki i profesjonalny. Polecam!",
    service: "Szafa przesuwna",
    date: "2024-11-28",
    verified: true,
  },
  {
    id: 3,
    name: "Małgorzata Wiśniewska",
    location: "Bydgoszcz, Błonie",
    rating: 5,
    comment:
      "Meble do łazienki wykonane perfekcyjnie. Materiały wysokiej jakości, odporne na wilgoć. Projekt uwzględnił wszystkie nasze wymagania, a realizacja przebiegła sprawnie. Bardzo dziękujemy!",
    service: "Meble łazienkowe",
    date: "2024-11-10",
    verified: true,
  },
  {
    id: 4,
    name: "Tomasz Jankowski",
    location: "Bydgoszcz, Kapuściska",
    rating: 5,
    comment:
      "Zabudowa salonu prezentuje się niesamowicie! Meble RTV z podświetleniem LED tworzą świetny klimat. Wszystko dopasowane co do milimetra. Obsługa na najwyższym poziomie.",
    service: "Zabudowa salonowa",
    date: "2024-10-22",
    verified: true,
  },
  {
    id: 5,
    name: "Ewa Zielińska",
    location: "Bydgoszcz, Wyżyny",
    rating: 5,
    comment:
      "Garderoba spełnia wszystkie moje marzenia! Mnóstwo miejsca na ubrania, buty i akcesoria. Oświetlenie włącza się automatycznie po otwarciu drzwi. Jakość wykonania bezbłędna!",
    service: "Garderoba",
    date: "2024-10-05",
    verified: true,
  },
  {
    id: 6,
    name: "Krzysztof Lewandowski",
    location: "Bydgoszcz, Bartodzieje",
    rating: 5,
    comment:
      "Biurko do domowego biura wykonane idealnie. Wygodne, funkcjonalne, z miejscem na wszystkie kable i sprzęt. Projekt uwzględnił ergonomię pracy. Jestem bardzo zadowolony!",
    service: "Meble biurowe",
    date: "2024-09-18",
    verified: true,
  },
  {
    id: 7,
    name: "Joanna Szymańska",
    location: "Bydgoszcz, Jary",
    rating: 5,
    comment:
      "Meble do pokoju dziecięcego są przepiękne! Bezpieczne, kolorowe i bardzo funkcjonalne. Dzieci są zachwycone łóżkiem piętrowym. Wszystko solidnie wykonane.",
    service: "Meble dziecięce",
    date: "2024-09-02",
    verified: true,
  },
  {
    id: 8,
    name: "Robert Mazur",
    location: "Bydgoszcz, Osowa Góra",
    rating: 5,
    comment:
      "Kuchnia wykonana rewelacyjnie! Fronty, blat, wszystko najwyższej jakości. Szuflady z cichym domykiem to prawdziwy luksus. Projekt 3D pozwolił zobaczyć efekt końcowy przed realizacją.",
    service: "Kuchnia na wymiar",
    date: "2024-08-20",
    verified: true,
  },
  {
    id: 9,
    name: "Agnieszka Kaczmarek",
    location: "Bydgoszcz, Szwederowo",
    rating: 5,
    comment:
      "Szafy do sypialni wykonane perfekcyjnie. Pojemne, eleganckie i idealnie wpasowane w przestrzeń. Wewnętrzne oświetlenie to świetny pomysł. Polecam tę firmę!",
    service: "Meble do sypialni",
    date: "2024-08-05",
    verified: true,
  },
  {
    id: 10,
    name: "Michał Ostrowski",
    location: "Bydgoszcz, Miedzyń",
    rating: 5,
    comment:
      "Kompleksowa realizacja - kuchnia, salon i przedpokój. Wszystko spójne stylistycznie i wykonane z dbałością o najmniejsze detale. Terminowość i profesjonalizm na najwyższym poziomie.",
    service: "Realizacja kompleksowa",
    date: "2024-07-15",
    verified: true,
  },
];
