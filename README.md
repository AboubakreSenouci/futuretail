# FutureTail

Fashion e-commerce analytics platform with AI-powered product insights and market trend analysis.

## Features

- **Deep Dive Analysis** — Comprehensive product comparison with market pricing and positioning
- **Trend Search** — Discover fashion trends with reverse image search and text-based filtering
- **Market Insights** — Real-time pricing analysis and competitor benchmarking

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS, HeroUI Components
- **Charts:** Chart.js, Recharts
- **Icons:** Lucide React

## Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── (dashboard)/             # Dashboard layout group
│   │   ├── deep-dive/           # Deep dive analysis pages
│   │   └── trend-search/        # Trend search pages
│   ├── globals.css              # Global styles & design tokens
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   ├── layout/                  # Layout components (Sidebar, Topbar, Navlink)
│   └── ui/                      # Reusable UI components (Button, Typography, etc.)
├── features/
│   ├── deep-dive/               # Deep dive feature module
│   │   ├── components/          # Feature-specific components
│   │   ├── data.ts              # Mock data
│   │   └── types.ts             # TypeScript types
│   └── trend-search/            # Trend search feature module
│       ├── components/          # Feature-specific components
│       ├── data.ts              # Mock data
│       └── types.ts             # TypeScript types
├── lib/                         # Utility functions
├── constants/                   # Application constants
├── types/                       # Global TypeScript types
└── public/                      # Static assets
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Building

```bash
npm run build
npm start
```
