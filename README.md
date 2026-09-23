# Meridian Wealth Partners

Next.js site with an embedded Sanity Studio.

## Requirements

- Node.js 20.12 or later
- npm
- An invite to your Sanity project (you'll receive it by email). Accept it before opening the Studio.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example env file and fill in the values from your brief:

   ```bash
   cp .env.example .env.local
   ```

   | Variable | Description |
   | --- | --- |
   | `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID |
   | `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name |
   | `WEBHOOK_URL` | Endpoint that form submissions are POSTed to |

3. Start the dev server:

   ```bash
   npm run dev
   ```

   - Site: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio). Log in with the account your invite was sent to.

## Where things live

| Path | Contents |
| --- | --- |
| `src/app` | Routes. `/` is the homepage; `/studio` is the Sanity Studio |
| `src/components/home` | Homepage sections |
| `src/lib/sanity.ts` | Configured Sanity client |
| `src/sanity/schemaTypes` | Sanity schema types |
| `src/sanity/queries.ts` | Homepage query |
| `sanity.config.ts` | Studio configuration |
