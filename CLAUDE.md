# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev --turbopack` - Start development server with Turbopack
- **Build**: `npm run build` - Build for production
- **Start**: `npm start` - Start production server  
- **Lint**: `npm run lint` - Run ESLint for code quality

## Architecture Overview

This is a Next.js 15.3.5 portfolio website for AI development services, built with:

### Core Technologies
- **Framework**: Next.js with App Router
- **Language**: TypeScript 5 with strict mode
- **Styling**: Bootstrap 5 + custom CSS (not Tailwind)
- **Markdown Processing**: React Markdown with gray-matter for front matter parsing
- **Deployment**: Netlify with Next.js plugin

### Project Structure
```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx          # Root layout with analytics and metadata
│   ├── page.tsx            # Homepage
│   ├── services/           # Service pages (50+ pages)
│   └── novice-to-navigator/ # Educational content (33 articles)
├── components/
│   └── layout/             # Header and Footer components
├── content/
│   ├── articles/           # Markdown files for educational content (33 articles)
│   └── services/           # Markdown files for service pages (50+ pages)
├── data/
│   ├── articles.ts         # Article metadata and structure (7 sections)
│   └── services.ts         # Service metadata (3 categories: Location, Industry, Technical)
└── lib/
    ├── markdownUtils.ts    # Markdown processing utilities
    ├── articleUtils.ts     # Article management utilities  
    └── serviceUtils.ts     # Service management utilities
```

### Content Architecture

**Educational Content ("Novice to Navigator")**:
- 33 articles organized in 7 progressive sections
- Each article has corresponding audio files (WAV format)
- Structured learning path from AI basics to implementation

**Service Pages**:
- 50+ specialized service pages across 3 categories:
  - Location-based (Greenville, Greer, Simpsonville, Spartanburg)
  - Industry-specific (Healthcare, Finance, Real Estate, etc.)
  - Technical services (Custom Chatbots, LLM Development, RAG, etc.)

### Key Conventions

**Styling**: Uses Bootstrap 5 classes and custom CSS in `/public/styles.css`. Do NOT use Tailwind classes.

**Routing**: Dynamic routes use Next.js App Router:
- `/services/[slug]` for service pages
- `/novice-to-navigator/[slug]` for articles

**Content Management**: 
- All content metadata is centralized in `/src/data/` files
- Markdown files in `/src/content/` directories
- Audio files in `/public/audio/` directory

**TypeScript Configuration**: Uses strict mode with path aliases (`@/*` → `./src/*`)

## Deployment

Deploys to Netlify with configuration in `netlify.toml`. Build command is `npm run build` and publish directory is `.next`.

## SEO & Analytics

- Google Analytics (G-P4CX07CNRW) configured in root layout
- Comprehensive metadata and Open Graph tags
- Sitemap generation for all pages
- Social media optimization for LinkedIn, Twitter, etc.