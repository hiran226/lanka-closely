import type { ImageMetadata } from 'astro';
import credits from '../data/credits.json';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.jpg', { eager: true });

export interface Credit {
  file: string;
  commonsTitle: string;
  sourceUrl: string;
  author: string;
  license: string;
  licenseUrl: string;
  alt: string;
  caption: string;
}

export function photo(key: string) {
  const img = files[`/src/assets/photos/${key}.jpg`]?.default;
  const credit = (credits as Record<string, Credit>)[key];
  if (!img || !credit) return undefined;
  return { img, credit, key };
}

export const allCredits = Object.entries(credits as Record<string, any>)
  .filter(([k]) => !k.startsWith('_'))
  .map(([key, c]) => ({ key, ...(c as Credit) }));
export const mapCredit = (credits as any)._map;

/** Photos for each plate: first is the lead image. */
export const platePhotos: Record<string, string[]> = {
  moonstone: ['moonstone', 'moonstone-polonnaruwa'],
  guardstone: ['guardstone'],
  makara: ['makara'],
  stupa: ['stupa', 'stupa-brick'],
  vatadage: ['vatadage'],
  wewa: ['wewa'],
  'mirror-wall': ['mirror-wall', 'frescoes', 'lion-paws'],
  'kandyan-roof': ['kandyan-roof', 'embekke'],
  gopuram: ['gopuram'],
  'voc-gate': ['voc-gate', 'galle-ramparts'],
  'line-rooms': ['line-rooms', 'tea-estate'],
};
