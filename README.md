# Build-A-Pen: Creative Technologist Journey

An interactive, educational web experience designed to explore the lifecycle and manufacturing journey of everyday objects. From raw materials to the final product, this application visualizes the supply chain through immersive storytelling, custom SVG animations, and geospatial data.

---

## Overview

**Build-A-Pen** is a React-based interactive platform that allows users to select a product (Pen, Fork, or Hard Disk) and follow its global manufacturing journey. The project combines high-fidelity UI components with data-driven storytelling to explain complex industrial processes in an engaging way.

### Key Features
* **Object Stages:** Breakdown of products into their core components and materials.
* **Interactive Journeys:** Step-by-step "chapters" detailing the origin and processing of materials.
* **Custom SVG Visuals:** Dynamically rendered SVG components for Pens, Forks, and Hard Disks that react to user interaction.
* **World Map Integration:** Visualization of the global supply chain and material origins.
* **Educational Content:** "Did You Know?" facts and trivia integrated into the learning flow.

---

## Project Structure

The project follows a modular React architecture with a clear separation between UI, logic, and data.

```text
build-a-pen/
├── .api/                 # Backend server logic and API routing
├── public/               # Static assets and analytics
└── src/
    ├── components/       # UI building blocks
    │   ├── fork-journey/    # Fork-specific data and SVG logic
    │   ├── game/            # Core game engine (Stages, Selectors, SVGs)
    │   ├── hard-disk-j.../  # Hard Disk-specific data and SVG logic
    │   ├── journey/         # Shared journey UI (Timeline, WorldMap)
    │   ├── pen-journey/     # Pen-specific data
    │   └── ui/              # Shadcn/ui reusable components
    ├── layouts/          # Page wrappers (Dashboard, Website, Root)
    ├── lib/              # Shared utilities and API clients
    ├── pages/            # Application routes (Pen, Fork, Hard Disk, Home)
    ├── server/           # Frontend-integrated API handlers
    └── styles/           # Global CSS and Tailwind configurations
```

---

## Tech Stack

* **Frontend:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS, PostCSS, Framer Motion (assumed for animations)
* **UI Components:** Shadcn/ui (Radix UI primitives)
* **Backend/API:** Node.js (integrated via `.api` and `src/server`)
* **Testing:** Vitest
* **Linting:** ESLint

---

## Getting Started

### Prerequisites
* Node.js (Latest LTS recommended)
* npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kartik-Kashyap/build-a-pen
   cd build-a-pen
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp env.example .env
   ```

### Development
Run the development server (Vite):
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

---

## Core Components

### 1. Object Stages (`src/components/game/ObjectStage.tsx`)
The primary interactive area where the selected object is displayed. It handles the rendering of different "layers" of the product.

### 2. The Journey Engine (`src/components/journey/`)
* **ChapterView:** Renders the narrative content for each step of the manufacturing process.
* **Timeline:** Provides navigation across the chronological steps of production.
* **WorldMap:** An interactive map showing where materials are sourced globally.

### 3. Custom SVGs
Each product has a dedicated SVG component (e.g., `PenSVG.tsx`, `ForkSVG.tsx`) that allows for granular control over individual parts, enabling "exploded view" or "build-up" animations.

---

## Testing
The project uses **Vitest** for unit and component testing.
```bash
npm run test
```

---

## License
[MIT License](./LICENSE).