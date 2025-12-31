# neuronez

Story-driven site for the neuronez private AI lab. This repo also hosts the
AIXcelerators landing experience at `/aixcelerators`.

## Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS
- IBM Plex Mono via `@fontsource`
- Framer Motion for scroll-fade sections

## Develop locally
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` for the main site and
`http://localhost:3000/aixcelerators` for the AIXcelerators page.

## Structure
```
src/
├─ app/
│  ├─ page.tsx                 # Neuronez narrative
│  ├─ aixcelerators/…          # AIXcelerators landing + manifesto
│  └─ globals.css              # Theme + typography
├─ components/                 # Shared primitives + AIXcelerators components
└─ lib/                         # Utility helpers + placeholder data
```

## Notes
- Neuronez uses IBM Plex Mono to match the reference aesthetic.
- AIXcelerators brings its own typography and palette within the route.
