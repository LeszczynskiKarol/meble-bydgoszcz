export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration?: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Konsultacja i pomiar",
    description:
      "Bezpłatna wycena naszego specjalisty, po której akceptacji przeprowadzamy dokładny pomiar przestrzeni oraz omawiamy Twoje potrzeby i oczekiwania. Napisz lub zadzwoń i daj znać, jakich mebli potrzebujesz.",
    icon: "📏",
    duration: "1-2 dni",
  },
  {
    id: 2,
    title: "Projekt i wizualizacja",
    description:
      "Przygotowanie spersonalizowanego projektu mebli wraz z wizualizacją 3D. Możliwość wprowadzania zmian aż do pełnej akceptacji. Tworzymy meble również na podstawie Twojego projektu, jeśli już go posiadasz.",
    icon: "🎨",
    duration: "3-5 dni",
  },
  {
    id: 3,
    title: "Produkcja",
    description:
      "Wykonanie mebli w naszym zakładzie to proces, w którym dokładnej kontroli podlega każdy szczegół i etap. Korzystamy z nowoczesnych maszyn i najwyższej jakości materiałów i wyposażenia, które pozwala osiągnąć najlepsze efekty.",
    icon: "🔨",
    duration: "3-4 tygodnie",
  },
  {
    id: 4,
    title: "Dostawa i montaż",
    description:
      "Profesjonalna dostawa i montaż mebli przez naszą ekipę. Sprawdzenie działania wszystkich elementów, dbając zarówno o precyzję i jakość wykonania, jak i zabezpieczenie prac. Nasi montażyści to ekipa na medal!",
    icon: "🚚",
    duration: "1-2 dni",
  },
];
