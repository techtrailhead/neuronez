# neuronez — Private AI Lab

First prototype of the neuronez marketing site. Built with a scientific, minimal aesthetic to highlight the lab's selective, research-driven AI practice.

## Stack
- [Next.js 14 App Router](https://nextjs.org/docs) with TypeScript
- Tailwind CSS v4 for styling + IBM Plex Sans via `next/font`
- Framer Motion for subtle fade-in interactions
- Reusable UI primitives: `Navbar`, `Hero`, `Section`, `Card`, and `FadeIn`

## Getting started
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to inspect the site. All content lives under `src/` and hot reloads as you edit.

## Folder structure
```
src/
├─ app/
│  ├─ page.tsx            # Home
│  ├─ services/page.tsx   # Services overview
│  ├─ about/page.tsx      # Philosophy + team
│  ├─ insights/page.tsx   # Lab Notes placeholder
│  └─ contact/page.tsx    # Contact + form
├─ components/            # Navbar, Hero, Section, Card, FadeIn
├─ lib/
│  ├─ data.ts             # Content + placeholder data
│  └─ utils.ts            # Helper utilities
└─ app/globals.css        # Tailwind + global styles
```

## Adding new pages or posts
1. **Create a new route** under `src/app/<route>/page.tsx`. Import `Section`, `Card`, and `FadeIn` for consistent layout.
2. **Add copy or placeholder data** inside `src/lib/data.ts` so future CMS or Markdown sources can plug in easily.
3. For Lab Notes posts, add entries to `insightPosts` (title, description, tag). Later you can swap this array with CMS-backed fetch logic.

## Notes
- `npm run lint` keeps the codebase consistent with Next.js ESLint defaults.
- Animations are intentionally light; adjust timing or motion variants in `FadeIn.tsx` as needed.
