# UKUKEE - Craft Artist Portfolio

A professional, elegant portfolio website for UKUKEE craft artist, built with React, Vite, and Tailwind CSS. Designed with a luxury aesthetic inspired by Cartier's timeless design language.

## 🎨 Design Philosophy

This portfolio embodies elegance and refinement with:
- **Timeless Design**: Inspired by Cartier's aesthetic with serif typography and warm color palette
- **Warm Color Palette**: Rich terraccotta, bronze, amber, and cream tones
- **Sophisticated Typography**: Playfair Display for headings, Lato for body text
- **Subtle Interactions**: Smooth animations and micro-interactions that enhance rather than distract
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop experiences

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm installed on your system

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` and automatically reload when you make changes.

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Hero.tsx         # Landing hero section
│   ├── About.tsx        # About section with statistics
│   ├── Portfolio.tsx    # Portfolio grid with category filter
│   ├── Process.tsx      # Six-step creative process
│   ├── Contact.tsx      # Contact form and information
│   └── Footer.tsx       # Footer with links
├── App.tsx             # Main app component
├── main.tsx            # React entry point
└── index.css           # Tailwind and custom styles
```

## 🎯 Key Features

### ✨ Header & Navigation
- Fixed navigation with smooth scroll behavior
- Mobile-responsive hamburger menu
- Dynamic background on scroll
- Elegant underline hover effects

### 🖼️ Hero Section
- Large, impactful typography
- Animated content reveal
- Call-to-action buttons
- Scroll indicator

### 📋 About Section
- Statistics showcase (12+ years, 500+ pieces, 40+ collections)
- Compelling narrative text
- Hover animations on image areas

### 🎨 Portfolio Section
- Category-based filtering system
- Responsive grid layout (1-3 columns)
- Hover effects with smooth transitions
- Year and category badges

### 🔧 Process Section
- Six-step creative process visualization
- Alternating layout for visual rhythm
- Detailed descriptions for each step
- Elegant step numbering

### 📧 Contact Section
- Functional contact form with validation
- Studio location and social links
- Success message feedback
- CTA for custom commissions

### 🔗 Footer
- Comprehensive navigation links
- Quick access to services
- Social media connections
- Back-to-top button

## 🎨 Color Palette

- **Cream** (#faf8f3) - Primary background
- **Gold** (#d4a574) - Accent, highlights
- **Amber** (#c49860) - Secondary accent
- **Terra** (#8b5a3c) - Primary text
- **Bronze** (#704214) - Hover states
- **Rust** (#a74c2f) - Alternative accent

## 🔤 Typography

- **Display Font**: Playfair Display (serif)
  - Headlines and titles
  - Weights: 400, 500, 600, 700
  
- **Body Font**: Lato (sans-serif)
  - Body text and UI
  - Weights: 300, 400, 500, 700

## ⚡ Performance Optimizations

- Vite's fast HMR (Hot Module Replacement) for development
- Tree-shaking and code splitting for production builds
- Optimized CSS with Tailwind's purging
- Semantic HTML5 structure
- Smooth animations using CSS transforms
- Lazy-loaded images (placeholder system ready)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive utilities for seamless adaptation.

## 🎬 Animations & Interactions

- Fade-in animations on page load
- Slide animations on scroll
- Hover lift effect on portfolio items
- Smooth transitions on all interactive elements
- Button state feedback
- Form validation feedback

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

## 🎯 Customization Guide

### Update Brand Information
Edit the following sections to personalize the portfolio:
- `Header.tsx` - Navigation links and logo
- `Hero.tsx` - Hero text and CTAs
- `About.tsx` - Artist bio and statistics
- `Process.tsx` - Process steps and descriptions
- `Contact.tsx` - Contact details and location

### Add Portfolio Items
Update the `portfolioItems` array in `Portfolio.tsx`:
```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    description: 'Description',
    year: 2024,
  },
  // Add more items...
]
```

### Replace Placeholder Images
The current placeholders are CSS-based. To add real images:
1. Place images in `public/images/` folder
2. Replace placeholder divs with `<img>` tags
3. Add proper alt text for accessibility

### Customize Colors
Edit `tailwind.config.js` to adjust the color scheme:
```javascript
colors: {
  cream: '#faf8f3',
  gold: '#d4a574',
  // Update these values...
}
```

## 🌐 SEO

The site includes:
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Fast loading performance
- Mobile-responsive design

## 📝 Best Practices Implemented

✅ Semantic HTML5 elements
✅ Responsive design patterns
✅ Accessible navigation and forms
✅ Performance optimization
✅ Clean, modular component structure
✅ Type-safe with TypeScript
✅ Professional typography hierarchy
✅ Smooth, purposeful interactions
✅ SEO-friendly structure
✅ Cross-browser compatibility

## 🤝 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Traditional Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Configure server to serve `index.html` for SPA routing

## 📄 License

This project is created for UKUKEE. All rights reserved.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Created with intention and precision for UKUKEE**
