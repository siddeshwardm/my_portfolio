
# My Portfolio

A modern, animated personal portfolio built with React + TypeScript and styled with Tailwind (shadcn/ui). It includes sections for About, Skills, Experience, Projects, and a Contact form powered by EmailJS.

live here : https://portfolio-siddeshwardm.vercel.app/

## Overview

- Single-page portfolio with smooth animations (Framer Motion)
- Responsive navigation (desktop + mobile)
- Light/Dark mode toggle
- Projects showcase + links
- Contact form that sends email via EmailJS
- Custom visual effects (cursor fog, grid pattern, snowfall)

## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix UI primitives)
- React Router (routing + 404 page)
- Framer Motion (animations)
- EmailJS (contact form email delivery)

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- One package manager: npm / bun / pnpm / yarn

## Getting Started (Local)

1) Clone

```bash
git clone https://github.com/siddeshwardm/my_portfolio.git
cd my_portfolio
```

2) Install dependencies

```bash
# npm
npm install

# bun
bun install

# pnpm
pnpm install

# yarn
yarn
```

3) Start the dev server

```bash
npm run dev
# or: bun run dev / pnpm dev / yarn dev
```

Vite is configured to run on:

- `http://localhost:8080`

Try Snowfall effect:

```
npm install react-snowfall
```

## Scripts

```bash
npm run dev       # start dev server
npm run build     # production build
npm run build:dev # development-mode build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

Note: `npm run lint` runs ESLint and may report warnings/errors depending on the current rules and code.

## Configuration

### Contact Form (EmailJS)

The contact form uses EmailJS and is currently configured directly in the code (service ID, template ID, and public key).

- Update the EmailJS config in `src/components/sections/Contact.tsx`
- Update the destination email (`to_email`) in the same file

Recommendation (optional): for deployments, consider moving these values into Vite environment variables (e.g. `VITE_EMAILJS_PUBLIC_KEY`, etc.) and reading them via `import.meta.env`.

## Project Structure

- `src/pages/Index.tsx`: main landing page (composes all sections)
- `src/pages/NotFound.tsx`: 404 page
- `src/components/sections/*`: page sections (Hero, About, Skills, Experience, Projects, Contact)
- `src/components/layout/*`: layout pieces (Navbar, Footer, CursorFog)
- `src/components/ui/*`: shadcn/ui components
- `src/lib/*`: shared helpers (animations, utilities)

## Routing

Routes are defined in `src/App.tsx` using React Router.

- `/` → Index page
- `*` → NotFound

Add new routes above the catch-all `*` route.

## Deployment

This is a standard Vite app; you can deploy the `dist/` output to any static host.

### Vercel / Netlify

- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages (one option)

1) Run `npm run build`
2) Publish the `dist` folder (via GitHub Actions or manual upload)

Note: If you deploy under a subpath (e.g. `https://user.github.io/repo/`), you may need to set Vite’s `base` option in `vite.config.ts`.

## Customize Content

- Update text, links, and lists in the section files under `src/components/sections/`
- Update socials in the Hero/Contact section components
- Update projects inside `src/components/sections/Projects.tsx`

## License

This repository does not specify a license. If you intend others to reuse it, add a license file.
