// src/content/gallery.ts
//
// Jedno spójne źródło danych galerii dla strony głównej.
// Schemat zgodny z centralnym galleries.json (panel AWS): { src, alt?, category? }.
// Pole `id` zachowane (legacy). Obrazy docelowo z
// media.torweb.pl/<domena>/galleries.json; obecnie na S3 (piszemy.com.pl) —
// zostaje do etapu migracji.

import type { GalleryImage } from "../lib/types";

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198551-1_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "2",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098607-Clipboard_06-22-2025_82_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "3",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198681-Clipboard_06-22-2025_04_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "4",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394099251-Clipboard_06-22-2025_144_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "5",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198896-Clipboard_06-22-2025_27_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "6",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394199001-Clipboard_06-22-2025_44_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "7",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394098436-Clipboard_06-22-2025_65_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "8",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1756394198889-Clipboard_06-22-2025_26_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "9",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1755073547320-Zdjecia-Meble-2025-luty-II-7-of-42_opt_opt.webp",
    alt: "Kuchnia na wymiar Bydgoszcz",
    category: "kuchnie",
  },
  {
    id: "10",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1755073547262-szuba-1_opt_opt.webp",
    alt: "Szafa na wymiar Bydgoszcz",
    category: "szafy",
  },
  {
    id: "11",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1755073547211-szafgozdz-1_opt.webp",
    alt: "Meble na wymiar Bydgoszcz",
    category: "lozka",
  },
  {
    id: "12",
    src: "https://s3.eu-north-1.amazonaws.com/piszemy.com.pl/grandkuchnie/1755073547135-s78%20(3)_opt.webp",
    alt: "Szafa na wymiar Bydgoszcz",
    category: "szafy",
  },
  {
    id: "13",
    src: "https://media.meblesystem.pl/meblesystem.pl/lazienki-lakier/lazobokchelm-2-6.jpg",
    alt: "Meble łazienkowe na wymiar Bydgoszcz",
    category: "lazienki",
  },
  {
    id: "14",
    src: "https://media.meblesystem.pl/meblesystem.pl/lazienki-lakier/lop-7_opt.webp",
    alt: "Meble łazienkowe na wymiar Bydgoszcz",
    category: "lazienki",
  },
  {
    id: "15",
    src: "https://media.meblesystem.pl/meblesystem.pl/sypialnie/lo-1_opt.webp",
    alt: "Sypialnia na wymiar Bydgoszcz",
    category: "sypialnie",
  },
  {
    id: "16",
    src: "https://media.meblesystem.pl/meblesystem.pl/biura/rec-1-2.jpg",
    alt: "Meble biurowe na wymiar Bydgoszcz",
    category: "biurowe",
  },
];
