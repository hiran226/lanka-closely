# Research 2 — Free hosting (via Perplexity, 2026-11-10)

Thread: https://www.perplexity.ai/session/7deac230-0a55-4709-940d-97431c60351c

| Service | Free limits | Card at signup | Trial? | Commercial | Notes |
|---|---|---|---|---|---|
| Cloudflare Workers static assets | 20,000 files/version, 25 MiB/file, static asset requests free & unlimited; 100k/day only if Worker code runs | No | No, ongoing | Yes | free *.workers.dev; custom domain needs Cloudflare nameservers |
| Cloudflare Pages | same static generosity | No | No | Yes | Still works, but Cloudflare now steers new projects to Workers Static Assets |
| GitHub Pages | 1 GB repo guidance | No | No | Not for commercial/e-commerce | *.github.io |
| Netlify Free | 300 credits/month (bandwidth 20 credits/GB ≈ 15 GB) hard cap | No | No | OK | credit model makes traffic less predictable |
| Vercel Hobby | 100 GB transfer | No | No | **Non-commercial only** | |
| Render static | shared bandwidth allowance; suspends when exceeded | No to start | No | OK | |

GitHub account: free, no payment details. Cloudflare account: free plan, no card.

**Decision:** GitHub (code) + Cloudflare Workers Static Assets with Git integration (auto-deploy on push). Advice the user got is sound; Cloudflare is the most generous free static host and needs no card.
