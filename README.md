# Iyah Manalo — Portfolio

Five-page editorial portfolio site. React + Tailwind CSS + GSAP + Framer Motion, built with Vite.

## Setup

This project was built in a sandboxed environment without internet access, so
dependencies could not be installed or the dev server test-run here. To run
it locally:

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
public/media/          all reels, beauty clips, featured-works clips, gallery images
public/media/posters/  auto-generated poster frames (used as <video poster>)
src/components/        ReelHero, ImageBouquet, VideoTile, Nav, Footer, RevealText
src/pages/              Home, About, Portfolio, Runway, Contact — one route each
src/lib/useInViewVideo.js   IntersectionObserver hook: plays a video only while
                            it's on screen, pauses otherwise
```

## How the "no carousel" requirement is met

Each of the 5 reels is rendered by its own `<ReelHero>` instance on its own
route/page (`/`, `/about`, `/portfolio` [woven into the bouquet], `/runway`,
`/contact`). There is no shared index, no slider library, and no shared video
element — every reel has independent play state, driven by whether it's in
the viewport.

The `beauty-*.mp4` and `Featured-Works-*.mp4` clips are used in grid layouts
(`VideoTile`) on the Portfolio and Runway pages — each grid tile is also
independently playing/pausing, not cycling through a single slot.

## Design tokens

Colors, type (Fraunces + Inter), spacing, and the signature "image bouquet"
concept are documented in `tailwind.config.js` and in the original brief.
Change `--bone / --linen / --sand / --espresso` in `tailwind.config.js` to
retheme.

## Content to personalize before launch

- Swap the Instagram/TikTok URLs and booking email in
  `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- Wire the contact form in `src/pages/Contact.jsx` to a real backend or
  form service (Formspree, Resend, etc.) — it currently only shows a
  local success state
- Replace placeholder bio/stat copy in `src/pages/About.jsx` with confirmed
  agency/measurement details if the client wants them public
