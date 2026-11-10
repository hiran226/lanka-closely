# Lanka, Closely

A field guide to **reading** Sri Lanka. Instead of "what to see", each plate teaches what to *notice*: moonstones, guardstones, makara balustrades, stupas, vatadages, ancient tanks, the Sigiriya graffiti, Kandyan roofs, gopurams, Galle's VOC gate and tea-estate line rooms. Every plate also says where the best examples are.

- Static site built with [Astro](https://astro.build) 5, with no server code
- Hosted free on Cloudflare Workers (static assets)
- Photos from Wikimedia Commons, credited on each page and at `/about/#credits`
- Research notes, gathered with Perplexity, are in [`research/`](research/)

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Edit content

- Plates: `src/content/entries/*.md` (frontmatter schema in `src/content.config.ts`)
- Places on the map: `src/data/places.json`
- Etiquette notes: `src/data/etiquette.json`
- Photo credits: `src/data/credits.json`, with the matching image files in `src/assets/photos/`

Push to `main` and Cloudflare rebuilds and redeploys automatically.
