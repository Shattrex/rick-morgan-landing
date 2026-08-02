# Bella Institute 2026 Growth Roadmap — Presentation

Interactive, full-screen presentation for Bella Institute School of Cosmetology leadership team. Built with React + Vite, Tailwind CSS, Framer Motion, Lucide icons, and Recharts.

## Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:5173/presentation**

## Production Build

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, etc.).

## Presentation Controls

| Action | Key / Control |
|--------|---------------|
| Next slide | `→` `↓` `Space` `PageDown` or **Next** button |
| Previous slide | `←` `↑` `PageUp` or **Previous** button |
| First slide | `Home` |
| Last slide | `End` |
| Slide overview | `O` or grid icon |
| Fullscreen | `F` or expand icon |
| Close overview | `Esc` |

## Editing Content

All slide text, stats, and configuration live in a single data file:

```
src/data/presentation.js
```

Edit slide titles, stats, milestones, team responsibilities, and more without touching component code. Review screenshot paths are in the `reviewImages` array at the top of the same file.

## File Structure

```
src/
├── data/
│   └── presentation.js          # All 19 slides — edit content here
├── presentation/
│   └── presentation.css         # Tailwind + presentation styles
├── components/presentation/
│   ├── PresentationShell.jsx    # Main shell: nav, keyboard, overview
│   ├── Slide.jsx                # Slide wrapper + header/content
│   ├── SlideRenderer.jsx        # Renders each slide type
│   ├── SlideNavigation.jsx      # Prev/next + overview button
│   ├── ProgressBar.jsx          # Progress indicator
│   ├── FullScreenToggle.jsx     # Fullscreen control
│   ├── AnimatedCounter.jsx      # Animated number counters
│   ├── StatCard.jsx             # Stat cards (slide 2)
│   ├── PipelineFlow.jsx         # Tour pipeline funnel (slide 5)
│   ├── GrowthFlywheel.jsx       # Compounding growth (slide 13)
│   ├── ReviewCollage.jsx        # Review screenshots + modal (slide 11)
│   ├── RoadmapTimeline.jsx      # 90-day timeline (slide 17)
│   ├── RequirementCard.jsx      # Requirement cards (slide 16)
│   ├── TrafficChart.jsx         # Traffic chart + map (slide 7)
│   ├── RatingMeter.jsx          # Google rating meter (slide 11)
│   ├── TeamResponsibilityGrid.jsx
│   └── VideoPreviewCard.jsx     # YouTube embed (slide 6)
├── pages/
│   └── PresentationPage.jsx     # Route entry point
public/
└── assets/
    ├── review-emma.png
    ├── review-jenny.png
    ├── review-nate.png
    ├── review-gmacake.png
    ├── review-sheila.png
    └── review-liv.png           # Optional extra
```

## Slides (19 total)

1. Cover — Growth Roadmap intro
2. Current Situation — 5 stat cards
3. Foundation Built — System map
4. Old Follow-Up — Friction journey
5. New Physical-Tour System — Pipeline funnel
6. Email Follow-Up — Timeline + video
7. Website Traffic — Chart + map
8. Traffic Growth Engine — 4 channels
9. Local SEO Plan — Keywords + content
10. Tour Video Opportunity — Asset split
11. Google Reviews — ReviewCollage + rating meter
12. Why Reviews Matter — Prospect comparison
13. Compounding Growth — Flywheel + phases
14. Team Responsibilities — Alanto vs Bella grid
15. Internal Problems — 4 operational cards
16. Requirements from Bella — 4 requirement cards
17. 90-Day Roadmap — Timeline
18. Success Metrics — KPI dashboard
19. Final Vision — Growth engine CTA

## Brand Colors

| Token | Hex |
|-------|-----|
| Primary purple | `#6D28D9` |
| Dark purple | `#3B0764` |
| Lavender | `#A78BFA` |
| Gold accent | `#D4AF37` |
| Black | `#111111` |
| Off-white | `#F8F7FB` |

## Notes

- Language uses "approximately", "current reported data", "early result", and "strategic target" — no guaranteed enrollment claims.
- Review screenshots have CSS blur overlays on reviewer name/profile areas and red outlines on serious complaints.
- Respects `prefers-reduced-motion` for accessibility.
- Print-friendly: navigation hides on print; use browser Print for PDF export.
