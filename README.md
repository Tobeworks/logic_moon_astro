# Logic Moon Website

**Official website of Logic Moon (Tobias Lorsbach)** - Ambient, Drone & Neoclassical Music

---

## 🚀 Technology Stack

### Core
- **Astro** 5.17.3 - Static Site Generator
- **Vue** 3.x - Interactive Components
- **Tailwind CSS** 4.x - Utility-First Styling
- **TypeScript** - Type Safety

### Design System: "The Architectural Monolith"
- **Font:** Inter Variable (Sans) + Geist Mono Variable (Mono)
- **Colors:** Monolithic Palette (Stone/Beige tones)
- **Geometry:** 0px Border Radius (sharp, architectural)
- **Philosophy:** Extreme minimalism, typography-focused

### Libraries & Tools
- **Anime.js** - Animations
- **AOS** - Scroll Animations
- **Lenis** - Smooth Scrolling
- **Axios** - HTTP Client (Contact Form)
- **@fontsource-variable** - Self-hosted Variable Fonts

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup
```bash
# Clone repository
git clone <repository-url>
cd logicmoon_astro

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production
```bash
pnpm build
pnpm preview  # Preview production build
```

---

## 🎨 Design System

### Color Palette

```css
/* Surface Colors */
--color-surface: #141312
--color-surface-container: #211f1e
--color-surface-container-low: #1d1b1a
--color-surface-container-lowest: #0f0e0d

/* Primary Colors */
--color-primary: #e3c7a9
--color-primary-container: #c6ac8f
--color-on-primary: #3e2d18

/* Text Colors */
--color-on-surface: #e6e1df
--color-on-surface-variant: #d1c4b9
--color-outline: #9a8f85
--color-outline-variant: #4d453d
```

### Typography

```css
/* Sans Serif */
font-family: 'Inter Variable', sans-serif;
font-variation-settings: 'wght' 100..900;

/* Monospace */
font-family: 'Geist Mono Variable', monospace;

/* Headlines */
font-weight: 700;
letter-spacing: -0.02em;
tracking-tighter;

/* Labels */
font-size: 10px;
text-transform: uppercase;
letter-spacing: 0.2em;
```

### Key Design Principles

1. **Sharp Geometry** - All elements have 0px border-radius
2. **Grayscale Images** - 50% grayscale, full color on hover
3. **Extreme Whitespace** - Generous padding (py-32, px-16)
4. **Typography-First** - Large headlines, minimal decorative elements
5. **Tonal Shifts** - Sections separated by color, not borders

---

## 📁 Project Structure

```
logicmoon_astro/
├── src/
│   ├── assets/           # Images, fonts
│   ├── components/       # Vue & Astro components
│   │   ├── Navigation.vue
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Discography.vue
│   │   ├── Contact.vue
│   │   └── ...
│   ├── content/          # Markdown content
│   │   └── blog/         # Blog posts
│   ├── layouts/          # Astro layouts
│   │   └── Layout.astro
│   ├── pages/            # Route files
│   │   ├── index.astro
│   │   ├── news.astro
│   │   ├── news/[slug].astro
│   │   ├── discography.astro
│   │   ├── cover-art.astro
│   │   └── ...
│   ├── styles/           # Global CSS
│   │   └── global.css
│   └── releases.js       # Discography data
├── public/               # Static assets
├── package.json
├── astro.config.mjs
└── tailwind.config.mjs
```

---

## 🛠️ Development Commands

```bash
# Development
pnpm dev          # Start dev server (localhost:4321)
pnpm dev --host   # Expose to network

# Build
pnpm build        # Build for production
pnpm preview      # Preview production build

# Code Quality
pnpm astro check  # Type checking
```

---

## 📄 Content Management

### Blog Posts

Blog posts are stored in `src/content/blog/` as Markdown files:

```markdown
---
title: "Post Title"
description: "Short description"
pubDate: 2024-01-15
image: "/path/to/image.jpg"
draft: false
---

# Content here
```

### Discography

Releases are managed in `src/releases.js`:

```javascript
{
  id: 1,
  title: "Album Title",
  year: "2024",
  cover: "cover.jpg",
  bandcamp: "https://...",
  spotify: "https://...",
  release_id: "123456" // Bandcamp album ID for player
}
```

---

## 🎯 Key Features

### 1. **Discography System**
- Homepage: 8 releases preview + "View All" button
- `/discography`: Complete collection with modal player
- Bandcamp embedded player
- Grayscale hover effects

### 2. **News/Blog**
- Markdown-based content
- High-contrast reading experience
- Responsive typography
- Image support

### 3. **Cover Art Portfolio**
- `/cover-art` page
- Grid gallery with lightbox
- Contact CTA for commissions

### 4. **Contact Form**
- Backend: https://api.tobeworks.de/sendmail
- Minimalist design (bottom borders only)
- Success/Error states

### 5. **Mobile Navigation**
- Fullscreen overlay menu
- Centered links
- Smooth animations

---

## 🌐 Deployment

### Recommended Platforms

1. **Vercel** (Best for Astro)
   ```bash
   vercel deploy
   ```

2. **Netlify**
   - Build command: `pnpm build`
   - Publish directory: `dist/`

3. **GitHub Pages**
   ```bash
   pnpm build
   # Deploy dist/ to gh-pages branch
   ```

### Environment Variables

No environment variables required for static build.

For contact form, backend handles email sending.

---

## 📱 Responsive Breakpoints

```css
/* Mobile */
< 768px

/* Tablet */
768px - 1024px

/* Desktop */
> 1024px

/* Large Desktop */
> 1600px
```

---

## 🔧 Configuration Files

### `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [vue()],
  output: 'static',
});
```

### `tailwind.config.mjs`
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### `src/styles/global.css`
- Tailwind 4 `@theme` directive
- Custom color palette
- Font definitions
- Utility classes

---

## 🎨 Component Usage

### Navigation
```vue
<Navigation client:visible />
```

### Discography
```vue
<!-- Homepage (8 releases + button) -->
<Discography client:load />

<!-- Full page (all releases) -->
<Discography 
  client:load 
  is-full-page 
  section-id="full-discography"
  :show-header="false"
/>
```

---

## 📊 Performance

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization Strategies
- Static site generation
- Image optimization (WebP, AVIF)
- Lazy loading for images
- Minimal JavaScript
- Self-hosted fonts (variable)

---

## 🐛 Troubleshooting

### Common Issues

**1. Content not loading:**
```bash
rm -rf .astro
pnpm dev
```

**2. Build fails:**
```bash
rm -rf dist .astro node_modules
pnpm install
pnpm build
```

**3. Vue components not working:**
- Ensure `client:*` directive is set
- Check Vue component syntax

---

## 📝 Version History

- **5.0.0** - Current (Astro 5, Design System "Monolith")
- **4.x** - Previous (Astro 4)
- **3.x** - Legacy

---

## 👨‍💻 Credits

**Design & Development:** tobe.works  
**Music:** Logic Moon (Tobias Lorsbach)  
**Design System:** The Architectural Monolith  

---

## 📄 License

© Logic Moon Archive. All rights reserved.

---

## 🔗 Links

- [Logic Moon](https://logic-moon.de)
- [Bandcamp](https://logicmoon.bandcamp.com)
- [Spotify](https://open.spotify.com/artist/3cqJW0hZR5efv5YWJKVMw8)
- [YouTube](https://www.youtube.com/@LogicMoonMusic)
- [Instagram](https://www.instagram.com/logicmoonmusic)
