// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    author: z.string().default("Meble Bydgoszcz"),
    category: z.enum([
      "Poradniki",
      "Trendy i inspiracje",
      "Materiały i wykończenia",
      "Aranżacje wnętrz",
      "Kuchnie na wymiar",
      "Szafy i garderoby",
      "Łazienki",
      "Sypialnie",
      "Meble biurowe",
      "Wykończenia wnętrz",
      "Realizacje",
      "FAQ",
    ]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Powiązanie z usługą (opcjonalne)
    serviceSlug: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
