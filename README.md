# आत्मपरिचयः | Kunal Singh — Personal Portfolio & Technical Engineering Hub

> **Associate SAP BTP Consultant & Full Stack Developer**  
> Engineering enterprise SAP BTP extensions, Joule AI agents, SAP Integration Suite & scalable cloud architectures.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![SAP BTP](https://img.shields.io/badge/SAP-BTP-008fd3?logo=sap&logoColor=white)](https://www.sap.com/products/technology-platform.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](LICENSE)

---

## 🌟 Overview

This repository houses the modern, high-performance personal portfolio and technical documentation hub for **Kunal Singh** (Associate SAP BTP Consultant at Raven Infotech). 

Built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, the application showcases enterprise cloud engineering expertise, verified SAP SE professional certifications, interactive career milestones, and comprehensive technical deep-dive articles.

---

## 🚀 Key Features

### 🎨 Visual Dynamics & Interaction
- **Dual Theme Support (Light / Dark)**: Automatically detects system color preference (`prefers-color-scheme`) with persistent `localStorage` synchronization.
- **Precision Custom Magnetic Cursor**: Dual-stage dot and responsive halo with action badges and hover scaling.
- **Canvas FX & Ambient Glow**: Smooth particle starlight canvas and volumetric crimson lighting.
- **Audio Feedback**: Subtle Web Audio API sound effects (synthesized hover ticks, tactile clicks, and completion chimes) with polite mute-by-default behavior.
- **Scroll Velocity Marquees**: Framer Motion velocity-responsive ribbons adjusting speed and direction dynamically based on user scroll velocity.

### 💼 Portfolio Sections
- **Hero & Kinetic Header**: Scramble text generator, rotating typewriter, and interactive quick stats with animated ease-out counters.
- **Technical Skills Matrix**: Categorized skill taxonomy across SAP BTP, Full-Stack Web, Cloud Architecture, and Leadership.
- **Verified SAP SE Credentials**: Direct links to Credly badge verifications for:
  - *SAP Certified - SAP Fiori Application Developer (C_FIORDEV_24)*
  - *SAP Certified - Backend Developer - SAP CAP Model (C_CPE_CAP)*
  - *SAP Certified - Joule Studio Developer (C_JOULE_DEV)*
- **Career Chronology**: Interactive milestone timeline with scroll-linked progress tracking.
- **Direct Dialogue**: Clipboard email copy with success chimes, active consultant status badge, and verified professional links.

### 📚 Technical Blog Hub (`/blog`)
- In-depth, masterclass-level guides with zero external dependencies:
  - **SAP Build Process Automation**: 5-part end-to-end tutorial mission guide with screenshots and form tables.
  - **SAP Fiori Elements & CAP OData V4**: Enterprise metadata-driven design, side effects, draft persistence, and Flexible Programming Model (FPM) building blocks.
- Client-side routing with instant search, category filtering, reading time estimates, collapsible sections, and custom syntax-highlighted code viewers.

---

## 🛠️ Tech Stack & Tooling

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend Core** | React 18, TypeScript 5.6, Vite 5.4 |
| **Styling & Design** | Tailwind CSS 3.4, PostCSS, Autoprefixer, Custom Crimson Palette (`#e50914`) |
| **Animation & Motion**| Framer Motion 11.5, Lenis Smooth Scroll |
| **Icons & Visuals** | Lucide React, HTML5 Canvas, Canvas Confetti |
| **Sound Engine** | Native Web Audio API (Synthesized Oscillators) |
| **Hosting & Container**| Netlify, Vercel, Docker (Multi-stage build) with optimized Alpine Nginx |

---

## 📁 Directory Structure

```text
Portfolio/
├── public/                 # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── canvas/         # Interactive Canvas & ambient glow effects
│   │   ├── pages/          # Standalone page views (e.g., BlogPage)
│   │   ├── sections/       # Main portfolio sections (Hero, Skills, Milestones, etc.)
│   │   └── ui/             # Reusable UI primitives (Buttons, Cards, Marquee, etc.)
│   ├── context/            # Global ThemeContext (Light/Dark mode)
│   ├── data/               # Structured portfolio and blog data (portfolioData, blogData)
│   ├── hooks/              # Custom React hooks (useSoundEffects, useMousePosition)
│   ├── types/              # TypeScript definitions & data models
│   ├── App.tsx             # Root application flow & route switching
│   ├── index.css           # Tailwind base layers & global utilities
│   └── main.tsx            # React DOM client entry point
├── Dockerfile              # Multi-stage container build
├── nginx.conf              # Optimized Nginx configuration with gzip & caching
├── netlify.toml            # Netlify build configuration & SPA rewrites
├── vercel.json             # Vercel deployment & cache headers
├── tailwind.config.js      # Custom theme, colors, and keyframe animations
├── tsconfig.json           # Strict TypeScript configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shreekunal/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Run TypeScript check**:
   ```bash
   npm run typecheck
   ```

5. **Create a production build**:
   ```bash
   npm run build
   ```

6. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🐳 Docker Deployment

A multi-stage `Dockerfile` is provided for running the portfolio in a containerized environment using Alpine Nginx:

```bash
# Build Docker image
docker build -t kunal-portfolio:latest .

# Run container on port 8080
docker run -d -p 8080:80 --name portfolio kunal-portfolio:latest
```

The app will be available at [http://localhost:8080](http://localhost:8080).

---

## 🌐 Cloud Deployments

- **Netlify**: Configured via [`netlify.toml`](file:///home/shrik/Work/Portfolio/netlify.toml) with 1-year immutable caching for static chunks and SPA redirects.
- **Vercel**: Configured via [`vercel.json`](file:///home/shrik/Work/Portfolio/vercel.json) with clean URLs and custom header rules.

---

## 👤 Author & Connect

**Kunal Singh**  
Associate SAP BTP Consultant @ Raven Infotech | MCA '26 @ KIET

- **Website**: [shreekunal.github.io](https://shreekunal.github.io)
- **LinkedIn**: [linkedin.com/in/shreekunal](https://linkedin.com/in/shreekunal)
- **GitHub**: [@shreekunal](https://github.com/shreekunal)
- **LeetCode**: [@shreekunal](https://leetcode.com/u/shreekunal)
- **Email**: [shrii.kunal@gmail.com](mailto:shrii.kunal@gmail.com)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
