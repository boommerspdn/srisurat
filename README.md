# Srisurat Website

This is a [Next.js](https://nextjs.org/) project that requires a [Strapi](https://strapi.io/) backend for content management.

## Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, pnpm, or bun
- Access to a running Strapi instance (see `.env` for API URLs)

## Environment Variables

The project uses the following environment variables (see `.env`):

- `STRAPI_API_URL`: URL of the Strapi API (e.g., `https://fearless-splendor-0f91c45bda.strapiapp.com`)
- `STRAPI_MEDIA_URL`: URL for Strapi media assets
- `DOMAIN_NAME`: The domain name for this site
- `TOKEN`: (if required) API token for authentication

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Configure environment:**
   - Copy `.env` if needed and update the values to match your Strapi instance.

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Deploy this app to your preferred platform (e.g., [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/)). Make sure the environment variables are set in your deployment environment.

## Notes

- This project fetches content from Strapi. Ensure your Strapi backend is running and accessible.
- For more details, see the code in the `app/` and `components/` directories.

---

Built with [Next.js](https://nextjs.org/) and [Strapi](https://strapi.io/).
