# DVIT Consulting Website

Professional IT support and consulting website for small businesses, built with React, Vite, Tailwind CSS, and Framer Motion.

## Purpose

This website serves as the online presence for DVIT Consulting, providing information about IT services, contact details, and establishing credibility with potential clients in the San Antonio area.

## Tech Stack

- **React 18**: Component-based UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Netlify Forms**: Static form handling

## Project Structure

```
/
├── index.html              # Root HTML with Netlify form
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles with Tailwind
│   └── components/        # React components
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Services.jsx
│       ├── Process.jsx
│       ├── WhyChooseUs.jsx
│       ├── CTABanner.jsx
│       ├── Industries.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── public/
│   └── assets/            # Images and static assets
├── legacy-static/         # Original static site (backup)
└── dist/                  # Build output (generated)
```

## Development

### Prerequisites

- Node.js 16+ and npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Netlify Forms:**
   - The contact form uses Netlify Forms with the hidden form pattern for React compatibility
   - The hidden form in `index.html` enables Netlify to detect the form fields
   - No additional configuration needed

3. **Environment:**
   - Node version: 18+ (set in Netlify UI if needed)

### Other Platforms

The built site in `dist/` is a standard static site that can be deployed to:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## Features

- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth scroll reveals and micro-interactions with Framer Motion
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, prefers-reduced-motion support
- **Performance**: Fast load times with Vite's optimized build
- **SEO**: Semantic HTML structure and meta tags

## Legacy Static Site

The original static HTML/CSS/JS site is preserved in `legacy-static/` for reference or rollback if needed.
