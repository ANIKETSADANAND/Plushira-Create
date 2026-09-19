# Plushira Create — Website

A premium, editorial, Pinterest-inspired stationery brand site, built with
**React + Vite + Tailwind CSS**.

---

## 1. Requirements

- [Node.js](https://nodejs.org) 18 or newer
- npm (comes with Node)

## 2. Setup

Unzip this project, open a terminal inside the folder, then:

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) — the site will
hot-reload as you edit files.

## 3. Building for production

```bash
npm run build
```

This creates a `dist/` folder with the finished, optimized site — plain
HTML/CSS/JS, ready to upload anywhere. Preview the production build
locally with:

```bash
npm run preview
```

## 4. Deploying

`dist/` is a fully static site, so it deploys anywhere that serves static
files:

- **Vercel** — `npx vercel` (auto-detects Vite), or connect the repo in
  the Vercel dashboard.
- **Netlify** — drag-and-drop the `dist/` folder onto
  [app.netlify.com/drop](https://app.netlify.com/drop), or connect the
  repo (build command `npm run build`, publish directory `dist`).
- **GitHub Pages / any static host / your own domain** — upload the
  contents of `dist/` to the host's public directory.

## 5. Project structure

```
plushira-create-site/
├── index.html              Vite entry HTML (page title, meta tags, fonts)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx             React root
│   ├── App.jsx               Assembles every section, in page order
│   ├── index.css             Design tokens, animations, all component CSS
│   ├── assets/
│   │   ├── plushira-wordmark.png   Horizontal logo — navbar, drawer, footer
│   │   └── plushira-mark.png       Circular logo — hero visual
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── OurWork.jsx
│   │   ├── FeaturedProduct.jsx
│   │   ├── Triad.jsx                 (Write / Create / Imagine)
│   │   ├── Philosophy.jsx
│   │   ├── ComingSoon.jsx
│   │   ├── About.jsx
│   │   ├── Shop.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Frame.jsx                 Image frame + elegant placeholder
│   │   ├── BotanicalSprites.jsx      Shared leaf/sprig/fern SVG symbols
│   │   └── Toast.jsx
│   ├── data/
│   │   ├── work.js            "Our Work" category cards
│   │   ├── comingSoon.js      Coming Soon cards
│   │   └── products.js        Shop products (currently: My Ninja Journal)
│   └── hooks/
│       └── useReveal.js       Scroll fade-in animation
```

## 6. Adding real product photography

Nothing on the site invents a photo — every spot without a real image
shows a soft, on-brand placeholder instead. To swap one in:

1. Drop the image file into `src/assets/` (e.g. `ninja-journal.jpg`).
2. Open the matching file and set the import:

   - **My Ninja Journal photo** → `src/components/FeaturedProduct.jsx`
     and `src/data/products.js`
     ```js
     import ninjaJournal from "../assets/ninja-journal.jpg";
     ```
     then set it as the `image` used by that section/entry.
   - **About / studio photo** → `src/components/About.jsx`
   - **Our Work category photos** → `src/data/work.js`, set the `image`
     field for each category (import the file at the top of the file
     first).
   - **Coming Soon photos** → `src/data/comingSoon.js`, same pattern.

3. Save — Vite hot-reloads immediately in dev mode.

## 7. Adding prices and shop links later

Edit `src/data/products.js`. Each product supports:

```js
{
  name: "My Ninja Journal",
  tagline: "Small Steps + Big Dreams",
  description: "...",
  image: ninjaJournal,     // imported image, or null for a placeholder
  tone: "blush",
  status: "Coming soon",   // or null once it's live
  price: "₹499",           // or null to show "Price to be announced"
  links: [
    { label: "Meesho", url: "https://..." },
    { label: "Amazon", url: "https://..." },
  ],
}
```

Add more objects to the array for future products — the Shop grid and
card layout handle any number automatically.

## 8. Notes on the design

- Colours, type and spacing are defined as CSS custom properties at the
  top of `src/index.css`, and mirrored into `tailwind.config.js` so
  Tailwind's utility classes (`bg-blush`, `text-ink-soft`, `font-serif`,
  etc.) are available if you extend the site with new Tailwind-based
  markup.
- Botanical leaf illustrations are inline SVG (`BotanicalSprites.jsx`),
  kept at low opacity and placed only at section corners.
- Scroll-in animation (`useReveal.js`) and the sticky/blurred navbar
  respect `prefers-reduced-motion`.
- No fake prices, reviews, ratings or purchase links appear anywhere —
  by design, matching the brand brief.
