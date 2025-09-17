// src/content/navigation.ts

import type { NavItem } from "../lib/types";

export const navItems: NavItem[] = [
  {
    label: "Meble",
    href: "#",
    dropdown: [
      { label: "Kuchnie", href: "/kuchnie" },
      { label: "Szafy i garderoby", href: "/szafy-garderoby" },
      { label: "Zabudowy", href: "/zabudowy" },
      { label: "Sypialnie", href: "/sypialnie" },
      { label: "Łóżka", href: "/lozka" },
      { label: "Łazienki", href: "/lazienki" },
      { label: "Meble biurowe", href: "/meble-biurowe" },
    ],
  },
  {
    label: "Usługi",
    href: "#",
    dropdown: [
      { label: "Projektowanie wnętrz", href: "/projektowanie" },
      { label: "Wykończenia", href: "/wykonczenia" },
    ],
  },
  {
    label: "Realizacje",
    href: "/realizacje",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];
