import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/entries' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    native: z.string(),
    nativeLang: z.enum(['si', 'ta']),
    romanised: z.string(),
    kicker: z.string(),
    layer: z.enum(['Buddhist', 'Hindu', 'Royal', 'Water', 'Colonial', 'Plantation']),
    period: z.string(),
    summary: z.string(),
    lookFor: z.array(z.string()),
    misreadings: z.array(z.object({ myth: z.string(), truth: z.string() })).default([]),
    places: z.array(
      z.object({
        placeSlug: z.string(),
        where: z.string(),
        note: z.string(),
        best: z.boolean().default(false),
      })
    ),
    respect: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().optional() })).default([]),
  }),
});

export const collections = { entries };
