export interface TeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  image: string;
  experience: string;
  specialization: string[];
  contact?: {
    email?: string;
    phone?: string;
  };
  social?: {
    linkedin?: string;
    facebook?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "jan-kowalski",
    name: "Jan Kowalski",
    position: "Właściciel / Główny Projektant",
    description:
      "Z pasją do mebli od ponad 20 lat. Specjalizuje się w projektowaniu kuchni i kompleksowych rozwiązaniach dla całych mieszkań. Każdy projekt traktuję indywidualnie, dbając o najmniejsze detale.",
    image: "/team/jan-kowalski.jpg",
    experience: "20+ lat",
    specialization: [
      "Projektowanie kuchni",
      "Planowanie przestrzeni",
      "Doradztwo",
    ],
    contact: {
      email: "jan@grandkuchnie.pl",
      phone: "+48 601 234 567",
    },
    social: {
      linkedin: "https://linkedin.com/in/jan-kowalski",
    },
  },
  {
    id: "anna-nowak",
    name: "Anna Nowak",
    position: "Projektant Wnętrz",
    description:
      "Absolwentka ASP w Warszawie, specjalizuje się w nowoczesnym designie. Tworzy projekty łączące funkcjonalność z estetyką. Uwielbia wyzwania związane z małymi przestrzeniami.",
    image: "/team/anna-nowak.jpg",
    experience: "12 lat",
    specialization: ["Design nowoczesny", "Małe przestrzenie", "Kolorystyka"],
    contact: {
      email: "anna@grandkuchnie.pl",
    },
  },
  {
    id: "piotr-wisniewski",
    name: "Piotr Wiśniewski",
    position: "Kierownik Produkcji",
    description:
      "Odpowiedzialny za jakość wykonania każdego mebla. Dba o terminowość realizacji i najwyższe standardy produkcji. Stolarz z 15-letnim doświadczeniem.",
    image: "/team/piotr-wisniewski.jpg",
    experience: "15 lat",
    specialization: ["Stolarka", "Kontrola jakości", "Technologie CNC"],
    contact: {
      email: "produkcja@grandkuchnie.pl",
    },
  },
  {
    id: "marta-zajac",
    name: "Marta Zając",
    position: "Specjalista ds. Obsługi Klienta",
    description:
      "Pierwszy kontakt z naszą firmą. Pomoże w umówieniu konsultacji, odpowie na pytania i poprowadzi przez cały proces realizacji. Zawsze uśmiechnięta i pomocna.",
    image: "/team/marta-zajac.jpg",
    experience: "8 lat",
    specialization: ["Obsługa klienta", "Koordynacja projektów", "Doradztwo"],
    contact: {
      email: "kontakt@meble-bydgoszcz.pl",
      phone: "+48 576 060 832",
    },
  },
  {
    id: "tomasz-kaminski",
    name: "Tomasz Kamiński",
    position: "Główny Montażysta",
    description:
      "Kieruje zespołem montażystów. Dba o profesjonalny montaż i perfekcyjne wykończenie. Rozwiązuje najtrudniejsze wyzwania montażowe.",
    image: "/team/tomasz-kaminski.jpg",
    experience: "18 lat",
    specialization: [
      "Montaż mebli",
      "Instalacje AGD",
      "Rozwiązywanie problemów",
    ],
    contact: {
      email: "montaz@grandkuchnie.pl",
    },
  },
  {
    id: "katarzyna-lewandowska",
    name: "Katarzyna Lewandowska",
    position: "Projektant 3D",
    description:
      "Tworzy fotorealistyczne wizualizacje 3D. Dzięki jej pracom możesz zobaczyć swoje meble przed rozpoczęciem produkcji. Mistrzyni detali i światła.",
    image: "/team/katarzyna-lewandowska.jpg",
    experience: "10 lat",
    specialization: ["Wizualizacje 3D", "Modelowanie", "Rendering"],
    contact: {
      email: "wizualizacje@grandkuchnie.pl",
    },
  },
  {
    id: "marcin-wojcik",
    name: "Marcin Wójcik",
    position: "Stolarz / Craftsman",
    description:
      "Specjalista od mebli z litego drewna i forniru. Wykonuje najbardziej wymagające projekty. Połączenie tradycyjnego rzemiosła z nowoczesnymi technologiami.",
    image: "/team/marcin-wojcik.jpg",
    experience: "22 lata",
    specialization: ["Lite drewno", "Fornir", "Detale stolarskie"],
  },
  {
    id: "aleksandra-mazur",
    name: "Aleksandra Mazur",
    position: "Marketing Manager",
    description:
      "Odpowiedzialna za wizerunek firmy i komunikację z klientami. Prowadzi media społecznościowe i dba o to, aby nasze realizacje docierały do szerokiego grona odbiorców.",
    image: "/team/aleksandra-mazur.jpg",
    experience: "6 lat",
    specialization: ["Marketing", "Social Media", "Content Creation"],
    contact: {
      email: "marketing@grandkuchnie.pl",
    },
    social: {
      linkedin: "https://linkedin.com/in/aleksandra-mazur",
      facebook: "https://facebook.com/grandkuchnie",
    },
  },
];

export const companyStats = {
  yearsInBusiness: 20,
  completedProjects: 5000,
  happyClients: 4800,
  teamMembers: 15,
  showroomArea: 250,
  awardsWon: 12,
  certificationsCount: 8,
  averageRating: 4.9,
};

export const certifications = [
  {
    name: "ISO 9001:2015",
    description: "System zarządzania jakością",
    year: "2020",
  },
  {
    name: "FSC",
    description: "Certyfikat zrównoważonej gospodarki leśnej",
    year: "2019",
  },
  {
    name: "Rzetelna Firma",
    description: "Certyfikat wiarygodności biznesowej",
    year: "2023",
  },
  {
    name: "Gwarancja Najwyższej Jakości",
    description: "Certyfikat jakości usług",
    year: "2022",
  },
];

export const awards = [
  {
    title: "Meble Roku 2023",
    organization: "Magazyn Wnętrza",
    year: "2023",
    category: "Kuchnie na wymiar",
  },
  {
    title: "Złoty Laur Klienta",
    organization: "Forum Biznesu",
    year: "2023",
    category: "Najlepsza obsługa",
  },
  {
    title: "Firma Roku Regionu Kujawsko-Pomorskiego",
    organization: "Regionalna Izba Gospodarcza",
    year: "2022",
    category: "Małe i średnie przedsiębiorstwa",
  },
];
