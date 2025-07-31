Here’s a design-first task breakdown that an LLM (or any teammate) could follow to implement the new Works page while preserving the blueprint theme used on the home page.

---

1. UX / Information Architecture

---

1.1 Route planning  
 • Add /works and /about to the existing Next 13 app router (both share the global layout so they inherit the navbar automatically).

1.2 Content model  
 • Define a `Project` type:  
  {id, title, screenshotSrc, demoUrl, repoUrl, tags?: string[]}  
 • Create a small JSON/TS array in `src/utils/projects.ts` for now (can move to CMS later).

---

2. Global Look & Feel

---

2.1 Blueprint backdrop  
 • Reuse the `BackgroundGrid` component already used on the home page.  
 • Keep the grid lines very subtle; ensure contrast passes AA on the new #2863AA cards.

2.2 Color & typography  
 • Blueprint patch color: **#2863AA** (slightly lighter than home-page grid, so the card still pops).  
 • Keep existing mono display font for headings; body stays the same.  
 • Text on the cards: white or a 90 % white for good legibility.

2.3 Light/Dark parity  
 • Cards always #2863AA, but adjust grid and body background:  
  – Light mode → white page bg, faint grid.  
  – Dark mode → very dark navy page bg, slightly brighter grid lines.  
 • Tailwind dark: variant handles this.

---

3. Project Card Visual Design

---

3.1 Base shape  
 • Rectangular “patch of blueprint paper” with slight \(2 px\) inner shadow for depth.  
 • Rounded \(4 px\) corners so edges don’t look too sterile.  
 • Size:  
  – Desktop ≥ 1024 px: card width ≈ 47 % (two-column with 6 % gap).  
  – Below 1024 px: full-width single column.

3.2 Corner tape pieces  
 • Create two SVG assets: left-top tape & right-bottom tape. Each:  
  – Muted beige color (#F7ECD0) with ~80 % opacity.  
  – Irregular torn edges on the shorter sides.  
 • Place via CSS absolutely on the card; slight rotation (-2° and 3°) to feel hand-placed.  
 • `pointer-events: none` so tape never blocks clicks.

3.3 Hover / focus interactions  
 • Card lifts \(translateY(-4px) & drop-shadow\).  
 • Tape pieces rotate an extra 1° on hover for subtle realism.  
 • Respect “prefers-reduced-motion”.

3.4 Card contents  
 • Screenshot: 100 % width, 56 % height, `object-cover`, clipped top corners with same radius.  
 • Title (h3): large mono font, margin-top 8 px.  
 • Action chips (tags): inline-flex pill buttons (demo, GitHub).  
  – Color: transparent bg, white thin border, 0.75 rem padding-X.  
  – On hover: fill white bg, blueprint-blue text.

---

4. Layout Implementation Tasks

---

4.1 ProjectCard component (`src/components/ProjectCard.tsx`)  
 • Props: `project: Project`.  
 • Return JSX for blueprint patch + tape overlay.

4.2 Responsive grid wrapper (`WorksGrid` or directly in page)  
 • Tailwind classes: `grid gap-8 grid-cols-1 md:grid-cols-2`.

4.3 Works page (`src/app/works/page.tsx`)  
 • Import projects array.  
 • Map into `ProjectCard`.  
 • Ensure `<TitleSection>` at top (“Works”) consistent with home page typography.

4.4 Shared layout tweaks  
 • Make sure `/works` and `/about` pages wrap in existing `BackgroundGrid` and `Navbar` via the root `layout.tsx`.  
 • No additional per-page layout necessary unless a distinct hero header is planned later.

---

5. Assets & Styles

---

5.1 SVG tape graphics → `public/assets/tape-*.svg`.  
5.2 Add Tailwind config extension:  
 `boxShadow: { blueprintCard: '0 4px 12px rgba(0,0,0,0.25)' }`.  
5.3 CSS module or Tailwind utility for card shadows & hover transforms; create a `.project-card` layer in global CSS if easier.

---

6. Accessibility & QA

---

6.1 Alt text for screenshots.  
6.2 Keyboard: tags are <a> elements with visible focus ring.  
6.3 Contrast test of white text on #2863AA.

---

7. Stretch Enhancements (optional)

---

7.1 Lazy-load screenshots with `next/image`.  
7.2 Framer-motion stagger reveal on scroll.  
7.3 Filter chips (Frontend / Full-stack) to toggle project groups.

---

## Deliverables

• `Project` data file  
• `ProjectCard` component  
• Updated Tailwind config + global styles  
• `/works` page rendering grid  
• Tape SVG assets in `public/assets`  
• Optional: animations & filtering

---

8. Responsive Behaviour

---

8.1 Breakpoint Strategy  
 • Follow Tailwind’s default breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`).  
 • Primary layout switches:  
  – `md` (≥768 px): switch from single-column to two-column grid.  
  – `lg` (≥1024 px): increase max-width of grid container and card height.  
  – `sm` (<768 px): clamp font sizes and padding for comfortable reading.

8.2 Fluid Spacing & Typography  
 • Use `clamp()` utility classes (e.g. `text-[clamp(1rem,2vw+1rem,1.5rem)]`) for headings.  
 • Horizontal padding: `px-4 sm:px-6 lg:px-8` on the page container.  
 • Grid gap: `gap-6 md:gap-8`.

8.3 Card Scaling  
 • Card width 100 % on `sm`, 47 % on `md+`.  
 • Maintain a fixed 16:9 (or 5:3) aspect ratio for screenshots with `aspect-video` utility to avoid CLS.  
 • Tape SVGs scale with card using `w-10 sm:w-12 lg:w-14` (top-left) etc.

8.4 Background Grid  
 • The `BackgroundGrid` component stretches full-viewport and uses `background-size` percentages, so grid lines scale naturally.  
 • Confirm grid contrast at each breakpoint and colour mode.

8.5 Motion Preferences  
 • All translate / rotate hovers wrapped in `motion-safe:` Tailwind variant.  
 • For `prefers-reduced-motion` disable lift and tape rotations.

With this breakdown the design language remains consistent, and each task is discrete enough for an LLM-assisted coder (or you) to implement step-by-step.
