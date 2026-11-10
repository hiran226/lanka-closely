import places from '../data/places.json';
export interface Place { slug: string; name: string; nativeName: string; region: string; lat: number; lon: number; blurb: string }
export const allPlaces = places as Place[];
export const placeBySlug = (s: string) => allPlaces.find((p) => p.slug === s);
// Equirectangular bounds of the Commons "Location map Sri Lanka" SVG
export const BOUNDS = { top: 10.2, bottom: 5.6, left: 79.0, right: 82.3 };
export const toPct = (lat: number, lon: number) => ({
  x: ((lon - BOUNDS.left) / (BOUNDS.right - BOUNDS.left)) * 100,
  y: ((BOUNDS.top - lat) / (BOUNDS.top - BOUNDS.bottom)) * 100,
});
export const isTamilScript = (s: string) => /[஀-௿]/.test(s);
