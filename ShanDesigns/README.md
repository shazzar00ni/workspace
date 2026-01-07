# Shannon Lockett - Designer Portfolio Website

A modern, single-page portfolio website showcasing Shannon Lockett's design work with a dark gradient aesthetic, glass morphism effects, and smooth animations.

## Features

- **Modern Design**: Dark gradient background with glass morphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Portfolio Sections**:
  - Hero section with animated introduction
  - Featured work showcase
  - About me with professional background
  - Design services (Print Design, Branding, Illustration)
  - Project gallery with lightbox functionality
  - Client testimonials
  - Blog section with design insights
  - Contact form with validation
- **Performance Optimized**: Lazy loading, image optimization, service worker
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Shadcn UI

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn UI components
- **Animations**: Framer Motion
- **Forms**: React Hook Form with validation
- **Icons**: Lucide React, Heroicons
- **Routing**: React Router DOM
- **Backend**: Express.js, MongoDB (for future API integration)

## Important Notes

### Express 5.x Migration

The server now uses Express 5.x (upgraded from 4.x), which includes several breaking changes:

- **Node.js Requirement**: Express 5.x requires Node.js version 18 or higher
- **Route Matching**: The `path-to-regexp` library was upgraded from 0.1.x to 8.x, affecting how route patterns are matched. Regex-based routes may behave differently
- **Promise Handling**: Promise rejections in middleware are now automatically caught and handled as errors
- **Removed Dependencies**: Several deprecated dependencies have been removed (e.g., `array-flatten`, `methods`, `utils-merge`, `mime`)

For more details on Express 5 breaking changes, see the [Express 5 migration guide](https://expressjs.com/en/guide/migrating-5.html).

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository: