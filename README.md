# Portfolio website (scaffold)

This repository is a minimal Next.js portfolio + blog scaffold inspired by the style/flow requested. It uses Markdown files in `/posts` for blog content and includes a simple SEO component.

Quick start (Windows PowerShell):

```powershell
# 1) Install dependencies
npm install

# 2) Run development server
npm run dev

# Open http://localhost:3000
```

Build for production:

```powershell
npm run build; npm start
```

Project notes and next steps:

- Replace `YourName` in `components/Layout.js` with your real name.
- Add more posts to `/posts` as `.md` files. Frontmatter fields supported: `title`, `date`, `excerpt`.
- For richer Markdown (MDX), or images handling, consider adding `@next/mdx` and `next/image` usage.
- Add `next-sitemap` or a sitemap generator for automatic sitemap.xml generation.
- Replace OG image (`/og-image.png`) in `public/` with your branded image.

Scripts added:

- `npm run generate:sitemap` — generate `public/sitemap.xml` from posts
- `npm run generate:rss` — generate `public/rss.xml` from posts
- The `postbuild` script runs both generators automatically after `npm run build`.

SEO tips:

- Fill per-page meta tags via the `meta` prop passed to `Layout` (or directly use `components/SEO.js`).
- Add structured data (JSON-LD) in the `SEO` component for author and site info.
