export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "general" | "pricing" | "process" | "warranty" | "materials";
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Jak długo trwa realizacja zamówienia?",
    answer:
      "Standardowy czas realizacji to 3-4 tygodnie od momentu zatwierdzenia projektu i wpłaty zaliczki. W przypadku większych projektów lub okresów zwiększonego popytu, termin może się wydłużyć do 5-6 tygodni. Dokładny termin ustalamy indywidualnie dla każdego zamówienia.",
    category: "process",
  },
  {
    id: 2,
    question: "Czy wycena i projekt są bezpłatne?",
    answer:
      "Tak, pierwsza konsultacja, pomiar oraz wstępny projekt z wyceną są całkowicie bezpłatne i niezobowiązujące. Dopiero po Twojej akceptacji i podpisaniu umowy rozpoczynamy produkcję mebli.",
    category: "pricing",
  },
  {
    id: 3,
    question: "Jaką gwarancję oferujecie na meble?",
    answer:
      "Udzielamy 5-letniej gwarancji na wszystkie produkowane przez nas meble. Gwarancja obejmuje wady produkcyjne, materiałowe oraz usterki montażowe. Dodatkowo oferujemy bezpłatny serwis w pierwszym roku użytkowania.",
    category: "warranty",
  },
  {
    id: 4,
    question: "Z jakich materiałów wykonujecie meble?",
    answer:
      "Używamy tylko wysokiej jakości materiałów: płyty laminowane Egger i Kronospan, MDF, drewno lite, blaty kwarcowe i laminowane HPL. Wszystkie materiały posiadają certyfikaty jakości i są bezpieczne dla zdrowia (norma E1).",
    category: "materials",
  },

  {
    id: 5,
    question: "Czy montujecie meble poza Bydgoszczą?",
    answer:
      "Tak, realizujemy projekty w promieniu 50 km od Bydgoszczy bez dodatkowych opłat za dojazd. Dla dalszych lokalizacji koszt transportu ustalamy indywidualnie.",
    category: "general",
  },
  {
    id: 6,
    question: "Jaka jest minimalna wartość zamówienia?",
    answer:
      "Nie mamy sztywno ustalonej minimalnej wartości zamówienia. Realizujemy zarówno pojedyncze meble, jak i kompleksowe wyposażenie całych mieszkań. Każde zlecenie traktujemy indywidualnie.",
    category: "pricing",
  },
  {
    id: 7,
    question: "Czy mogę wprowadzić zmiany w projekcie?",
    answer:
      "Zmiany w projekcie są możliwe do momentu rozpoczęcia produkcji. Na etapie projektowania możesz wprowadzać dowolne modyfikacje - zmienimy projekt aż będzie idealnie odpowiadał Twoim potrzebom.",
    category: "process",
  },
  {
    id: 8,
    question: "Jakie systemy płatności akceptujecie?",
    answer:
      "Akceptujemy płatności gotówką, przelewem bankowym oraz kartą płatniczą. Standardowo pobieramy 40% zaliczki przy podpisaniu umowy, pozostałą kwotę po zakończeniu montażu. Możliwa jest również płatność ratalna.",
    category: "pricing",
  },
  {
    id: 9,
    question: "Czy demontujecie stare meble?",
    answer:
      "Tak, oferujemy usługę demontażu i utylizacji starych mebli. Koszt tej usługi ustalamy indywidualnie w zależności od zakresu prac. Przy większych zamówieniach często oferujemy tę usługę gratis.",
    category: "general",
  },
  {
    id: 10,
    question: "Czy współpracujecie z architektami wnętrz?",
    answer:
      "Tak, regularnie współpracujemy z architektami wnętrz i projektantami. Jeśli masz już gotowy projekt, chętnie go zrealizujemy. Możemy też polecić sprawdzonych projektantów.",
    category: "general",
  },
  {
    id: 11,
    question: "Jak dbać o meble na wymiar?",
    answer:
      "Wraz z meblami dostarczamy instrukcję pielęgnacji. Ogólnie: używaj łagodnych środków czystości, unikaj nadmiernej wilgoci, regularnie sprawdzaj i dokręcaj połączenia. W razie pytań, nasz serwis zawsze służy pomocą.",
    category: "warranty",
  },
  {
    id: 12,
    question: "Czy można zamówić same fronty?",
    answer:
      "Tak, wykonujemy również same fronty meblowe na wymiar - zarówno do kuchni, jak i innych mebli. To świetne rozwiązanie, gdy chcesz odświeżyć wygląd istniejących mebli.",
    category: "general",
  },
  {
    id: 13,
    question: "Jakie okucia stosujecie?",
    answer:
      "Używamy okuć renomowanych producentów: Blum, Hettich, GTV. Standardowo montujemy zawiasy z cichym domykiem, prowadnice tandembox oraz systemy push-to-open. Możesz wybrać okucia według własnych preferencji.",
    category: "materials",
  },
  {
    id: 14,
    question: "Czy robicie meble na wymiar do małych przestrzeni?",
    answer:
      "Specjalizujemy się w maksymalnym wykorzystaniu przestrzeni! Małe mieszkania to dla nas wyzwanie, które uwielbiamy. Projektujemy meble wielofunkcyjne i rozwiązania oszczędzające miejsce.",
    category: "general",
  },
];
