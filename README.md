# neuronez LAB

Story-driven site for the neuronez private AI lab. Two-person studio (Tanay & Ankita) sharing philosophy, process, and selected work as a calm scroll experience.

## Stack
- Next.js 14 (App Router)
- TypeScript + Tailwind CSS v4
- IBM Plex Mono via `@fontsource`
- Framer Motion for scroll-fade sections
- Simple reusable primitives (`Navbar`, `Section`, `FadeIn`, etc.)

## Develop locally
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to explore the storytelling flow. `npm run build` mirrors the Vercel production build.

## Structure
```
src/
├─ app/
│  ├─ page.tsx          # Scroll narrative
│  ├─ about/…           # Static pages (about, services, insights, contact)
│  └─ globals.css       # Theme + typography
├─ components/          # Navbar, Section, HeroSection, Craft, Process, Work, Stories, etc.
├─ lib/                 # Utility helpers + placeholder data
└─ app/icon.svg         # Custom lab flask favicon
```

## Notes
- All typography uses IBM Plex Mono to match the reference aesthetic.
- Each section is a full-viewport panel using Framer Motion fade/translate transitions.
- Adjust colors/animation timings inside `globals.css`, `Section.tsx`, or `FadeIn.tsx`.
