# Portfolio

Personal portfolio website built with Next.js and Tailwind CSS.

## Edit the content

Everything on the page (name, bio, projects, experience, links) lives in `src/content/site.ts`.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Pushing to `main` builds the site and publishes it to GitHub Pages via `.github/workflows/deploy.yml`.
In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions** once.
