# Srisurat Website

The main branch serves local content and images recovered from https://srisurat.net on October 3, 2026. No Strapi account, API token, or environment variables are required.

## Development

Run `npm ci`, then `npm run dev`. Open http://localhost:3000.

Run `npm run build` for a production build and `npm start` to serve it.

## Editing content

Edit `lib/site-content.json` for text, contact links, SEO, and image paths. Images live in `public/content/`; keep their width and height fields accurate for the gallery. The local rich text blocks are rendered with the existing Strapi blocks renderer, which makes no API requests.

The `/api/og` route serves `public/content/social-preview.png`. Update that image if the hero or logo changes.

## Preserved CMS version

The local branch `codex/strapi-api` preserves the original Strapi integration, including the Google Ads script fix. It requires `STRAPI_API_URL`, `STRAPI_MEDIA_URL`, `DOMAIN_NAME`, and `TOKEN` as before. Switch to it with `git switch codex/strapi-api` from a clean working tree.

## Deployment

Deploy the main branch with the usual Next.js build command. Content and media are bundled with the repository. The Google Ads tag and Google Maps iframe still use their respective external services.
