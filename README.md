# BIOTHON 2026

An immersive event website for **BIOTHON 2026**, a national-level bioinformatics hackathon presented by the Department of Bioinformatics, Marwadi University, and managed by Xinity Hackathon Community.

The site highlights the event story, challenge domains, problem statements, partners, organizing team, registration flow, and community updates in a fast, responsive single-page experience.

## Live Experience

BIOTHON 2026 is designed as a polished landing experience for participants discovering the hackathon on desktop and mobile.

Key sections include:

- Hero section with venue and management partner branding
- About and challenge overview
- Domain-wise problem statements
- Rules, prize pool, and participation details
- Host, collaborative, and knowledge partners
- Organizing team carousel
- LinkedIn community update card

## Tech Stack

- **Vite** for local development and production builds
- **Vanilla HTML, CSS, and JavaScript**
- **Lucide icons** for lightweight interface icons
- **Cloudflare Workers / Pages-ready config** via Wrangler

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:3000
```

To test on a phone connected to the same Wi-Fi:

```bash
npm run dev -- --host 0.0.0.0
```

Then open your computer's local network IP on your phone:

```text
http://YOUR_LOCAL_IP:3000
```

## Build

Create a production build:

```bash
npm run build
```

Preview the Cloudflare build locally:

```bash
npm run preview
```

Deploy with Wrangler:

```bash
npm run deploy
```

## Project Structure

```text
.
├── assets/          # Event logos, partner logos, photos, and visual assets
├── public/          # Favicons, Open Graph images, and downloadable files
├── index.html       # Main page markup
├── main.js          # UI interactions and carousel helpers
├── style.css        # Full responsive visual system
├── vite.config.js   # Vite + Cloudflare config
└── wrangler.jsonc   # Cloudflare deployment config
```

## Event Domains

BIOTHON 2026 focuses on practical innovation across:

- Health Care
- Agriculture
- Biodiversity and Environment

Participants work on real-world problem statements involving AI, bioinformatics, IoT, public health, sustainability, and data-driven decision systems.

## Partners

The website showcases partner organizations including:

- Marwadi University
- Xinity Hackathon Community
- IEEE EMBS
- Genomics Club
- Royal Society of Biology
- Unstop
- Kaggle

## Notes

This project is optimized for a modern responsive web experience. The design uses event-specific branding, biological visual motifs, partner cards, and mobile-friendly layouts tailored for participant discovery and registration.
