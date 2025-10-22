# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Johan Becerra, built with Node.js, Express, and EJS templating. The site showcases projects, skills, and professional information. It's deployed on Vercel and uses Tailwind CSS for styling.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (with auto-reload via nodemon)
npm run dev

# Server will run at http://localhost:3000
```

## Architecture

### Server Entry Point
- [src/index.js](src/index.js) - Main Express server configuration
  - Configures EJS as the view engine
  - Sets up static file serving from `src/public`
  - Imports and mounts the main router
  - Uses ES modules (`type: "module"` in package.json)

### Routing
- [src/routes/index.js](src/routes/index.js) - All application routes
  - `/` - Home page (index.ejs)
  - `/about` - About page with dynamic age calculation based on birthdate (August 23, 2003)
  - `/projects` - Projects showcase page
  - `/contact` - Contact form page

### Views (EJS Templates)
- `src/views/` - Page templates
  - `index.ejs` - Home page
  - `about.ejs` - About page (receives `edad` variable from route)
  - `projects.ejs` - Projects page
  - `contact.ejs` - Contact page
- `src/views/partials/` - Reusable components
  - `head.ejs` - HTML head with Tailwind CSS, Font Awesome, Google Fonts (Inter), and AOS animations
  - `navigation.ejs` - Site navigation
  - `footer.ejs` - Site footer

### Static Assets
- `src/public/` - Static files served by Express
  - `main.css` - Custom CSS styles
  - `img/` - Images and media files

### Styling Stack
- Tailwind CSS (loaded via CDN in head.ejs)
- Custom theme configuration in head.ejs:
  - Primary color: #3B82F6 (blue)
  - Secondary color: #10B981 (green)
  - Dark: #111827
  - Light: #F9FAFB
- Font: Inter (Google Fonts)
- Icons: Font Awesome 6.0.0
- Animations: AOS (Animate On Scroll) library

### Contact Form
The contact form is integrated with Formspree (check contact.ejs for the form action URL).

## Deployment

The site is configured for Vercel deployment:
- [vercel.json](vercel.json) specifies build and routing configuration
- Entry point: `src/index.js`
- Uses `@vercel/node` builder
- Live site: https://johan-becerra23.vercel.app/

## Key Implementation Details

### Age Calculation
The `/about` route dynamically calculates age from birthdate (August 23, 2003) and passes it to the template. When modifying this route, ensure the age calculation logic remains intact.

### ES Modules
The project uses ES modules (import/export syntax). When adding new files or dependencies, use:
- `import` instead of `require()`
- `export default` or named exports
- The `__dirname` equivalent is computed using `fileURLToPath(import.meta.url)`

### Port Configuration
The server uses `process.env.port || 3000`. Note the lowercase `port` (not `PORT`), which may need adjustment for some deployment environments.
