# Adrián Trujillo — Personal Portfolio

A bilingual (EN/ES), light/dark personal portfolio & interactive CV, built to showcase my work in **CRM & Automation, Workflow Design and Data & BI**.

🌐 **Live:** _deploying on Vercel_ · 📄 [Download CV](public/Adrian-Trujillo-CV.pdf)

## Highlights

- **Bilingual** English / Spanish with an instant language toggle
- **Light & dark** themes (system-aware, no flash on load)
- Smooth **scroll animations, magnetic buttons, animated counters** and a custom cursor (all respecting `prefers-reduced-motion`)
- Sections: About · Skills · Experience timeline · Projects · Education · Strengths · Contact
- SEO-ready: Open Graph metadata + JSON-LD `Person` schema

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript
- [Framer Motion](https://www.framer.com/motion/) for animation
- Plain CSS (CSS variables + CSS Modules) — no UI framework
- Fonts via `next/font`: Space Grotesk + Inter

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
app/         layout, page, global styles, favicon
components/   sections + animation primitives (Reveal, Magnetic, Cursor…)
content/      bilingual CV content (single source of truth)
lib/          theme + i18n providers
public/       CV PDF, photo, assets
```

---

© Adrián Trujillo · adri.truji.pregin@gmail.com · [LinkedIn](https://linkedin.com/in/adriantrujillop) · [GitHub](https://github.com/truujjii)
