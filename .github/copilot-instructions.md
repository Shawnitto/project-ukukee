# UKUKEE Portfolio - Copilot Instructions

## Project Overview

Professional craft artist portfolio website for UKUKEE built with React + Vite + Tailwind CSS. Elegant, luxury design inspired by Cartier aesthetic with warm color palette.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Google Fonts (Playfair Display, Lato)

## Project Components

- **Header**: Navigation with mobile menu
- **Hero**: Landing section with CTAs
- **About**: Artist bio with statistics
- **Portfolio**: Filterable gallery (6 categories)
- **Process**: 6-step creative process visualization
- **Contact**: Functional contact form
- **Footer**: Navigation and social links

## Key Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Smooth animations and micro-interactions
✅ Contact form with validation
✅ Category-based portfolio filtering
✅ SEO optimized with meta tags
✅ Performance optimized with Vite
✅ Semantic HTML5 structure
✅ Professional typography hierarchy

## Running the Project

**Development**: `npm install && npm run dev`
**Production Build**: `npm run build`
**Preview**: `npm run preview`

## Color Palette (Warm Tones)

- Cream (#faf8f3) - Background
- Gold (#d4a574) - Accent
- Amber (#c49860) - Secondary
- Terra (#8b5a3c) - Primary text
- Bronze (#704214) - Hover
- Rust (#a74c2f) - Alternative

## Customization Points

- Update portfolio items in `src/components/Portfolio.tsx`
- Modify contact details in `src/components/Contact.tsx`
- Replace color values in `tailwind.config.js`
- Add real images replacing CSS placeholders
- Customize text in each component section

## File Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Process.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge)
Fully responsive from 320px and up

## Performance Guidelines

- Lazy-load images when adding real assets
- Keep animations under 0.8s duration
- Use CSS transforms for smooth animations
- Monitor bundle size with `npm run build`

## Additional Notes

- Mobile menu uses hamburger icon with animated transitions
- Portfolio items support lazy loading
- Contact form has local state management
- All buttons include hover and focus states
- Smooth scroll behavior on anchor links
