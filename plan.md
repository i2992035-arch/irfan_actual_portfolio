# Implementation plan — Irfan Portfolio Website

## Product and architecture

Keep the existing React + Vite portfolio and its five routes: `/`, `/about`, `/skills`, `/certificates`, and `/projects`. Preserve the full-screen home hero and extend its visual identity to every interior route: use the existing Water Wave footage as a quiet, full-viewport ambient background, with a stronger dark veil and translucent content surfaces so headlines and body copy remain legible. The project has no backend and adds no runtime dependency.

Render the same shared `Navbar` in `App` for every route. On the home page it stays over the hero as before; on interior pages it becomes sticky, gains a restrained frosted-glass surface, highlights the active route, and links to Projects, Skills, About, Certificates, Contact, and the Irfan home wordmark. Keep the expandable mobile menu, link all destinations, and maintain legible email/time information.

The Projects page retains its two switchable categories: **Client / Coded Projects** and **UI/UX Designs**. Continue to avoid invented tools, client work, credentials, links, dates, or ratings. Use clear, designed empty states until Irfan supplies real entries.

## Project structure

- `src/App.tsx` resolves the browser pathname, sets its page title, renders the shared background on interior routes, composes the navigation, and selects Home, About, Skills, Certificates, Projects, or not-found content.
- `src/components/Navbar.tsx` owns the home wordmark, active route navigation, contact email, CUP clock, sticky interior-bar treatment, and expandable mobile navigation.
- `src/components/PageHeading.tsx` supplies consistent numbered headings and titles for interior pages.
- `src/components/PortfolioBackdrop.tsx` renders the existing Water Wave video as a decorative, full-viewport backdrop behind interior routes.
- `src/data/portfolioVideos.ts` is the single source of truth for the three videos used by both the hero selector and interior backdrop.
- `src/components/Hero.tsx` retains the three-video preload/crossfade, active selector, availability indicator and animated wordmark/copy.
- `src/pages/AboutPage.tsx`, `SkillsPage.tsx`, `CertificatesPage.tsx`, and `ProjectsPage.tsx` retain their factual content and category interaction.
- `src/index.css` styles the dark video veil, sticky glass navigation, legible translucent content panels, pink active/focus states and responsive layouts while preserving the home hero's design.
- `public/manus-routes.json` declares the five real pages. Vite builds to `dist`; published routing uses explicit static asset rules and an SPA fallback for page paths.

## Design decisions

- **Design movement:** cinematic editorial minimalism, carried across the site through the hero's moving imagery and disciplined type.
- **Core principles:** one coherent design system on every route; clear text contrast over media; oversized editorial titles paired with compact numbered labels; truthful content with no fabricated credentials or projects.
- **Color philosophy:** near-black and a restrained veil protect readability over video; white carries the message; `#F598F2` is reserved for key dots, numbers, active states and focus.
- **Layout paradigm:** full-bleed motion remains the canvas; content is left aligned in asymmetric editorial columns and restrained glass panels rather than centered generic card grids.
- **Signature elements:** the crossfading hero video; a single shared, sticky navigation bar with the “Irfan.” wordmark; oversized headings and pink numbered markers.
- **Interaction philosophy:** navigation is always reachable and consistent, active routes are visibly marked, the mobile menu works on every route, and the project-type controls clearly show their selection.
- **Animation:** retain the hero's 1200ms crossfade, 420ms spring menu and 1.6s availability pulse. Keep interior transitions subtle, preserve keyboard focus, and honor `prefers-reduced-motion`.
- **Typography system:** Figtree 400/500/600. Large, tightly tracked titles; compact uppercase indices; readable 16px/24px content copy.
- **Brand essence:** Irfan's creative portfolio for people exploring code-built client work and UI/UX design, distinct for its cinematic presentation. Personality: **bold, precise, modern**.
- **Brand voice:** concise and confident; example lines: “Irfan.” and “Client work, built with code.” Microcopy stays honest about sections awaiting supplied details.
- **Wordmark & logo:** “Irfan.” as the tracked portfolio wordmark, with punctuation and pink dot as the distinctive motif.
- **Signature brand color:** `#F598F2` electric pink, reserved for active, focused and numbered accents.

## Responsive behavior

Preserve the 810px and 1200px breakpoints. Desktop and tablet show the same shared navigation with clear active state; mobile keeps the wordmark, contact details and Menu/Close control, whose panel links to every page. Interior titles and category controls reflow without horizontal overflow; translucent surfaces remain readable over the fixed background video.

## Route and serving

Keep `public/manus-routes.json` synchronized with all five routes and titles. Retain the static build (`pnpm install --frozen-lockfile && pnpm build`, output `dist`) and static SPA fallback for direct page visits. Cache the versioned `/assets/*` files separately from the route manifest and retain direct static handling for portfolio public assets. Do not publish without a request.
