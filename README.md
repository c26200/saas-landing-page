# Nexus AI — Landing Page

A typographic landing page for a fictional AI product. Archivo Black at monumental scale,
one acid accent and a diagonal that cuts the hero; the rest of the page keeps the same
editorial rhythm instead of falling back to cards.

**[Live demo](https://saas-landing-page-rose-zeta.vercel.app)**

![Landing page preview](./preview.png)

## Sections

- **Hero** — oversized headline, acid diagonal, product metrics and two calls to action
- **Features** — five numbered rows (01–05) with a closing "Start Building" band
- **Pricing** — three tiers with the Pro plan inverted to acid
- **Footer** — links and copyright

## Stack

React 19 · Vite · Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/
│   ├── Navbar.jsx             # Sticky bar with the acid CTA
│   ├── Hero.jsx               # Headline, diagonal and metrics
│   ├── Features.jsx           # Numbered feature rows
│   └── Pricing.jsx            # Three plans, Pro highlighted
├── App.jsx
└── index.css                  # Signal tokens and layout
```

## Notes

Nexus AI is fictional: the copy, plan names and prices are placeholders. There is no
backend, and the call-to-action buttons do not submit anywhere. The page targets desktop
and stacks into a single column below 900 px.
