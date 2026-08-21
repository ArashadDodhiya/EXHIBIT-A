# EXHIBIT A — Design System & Build Brief

**A custom clothing gallery. Anime, cinema, and your own words — printed as limited exhibits you wear.**

> `EXHIBIT A` is a placeholder brand name chosen to fit the concept (see §2). Swap it for the real name and the whole naming system below — plate numbers, "exhibits," wing titles — still works.

---

## 0. How to use this document

This is the single source of truth for design and content decisions on this build. If you're an AI or developer implementing this site: follow the tokens in §4 exactly, use the wireframes in §6 as layout intent (not literal pixel specs), and check every screen against the anti-pattern list in §13 before calling it done. Where this doc is silent, default to the principles in §1, not to generic e-commerce conventions.

---

## 1. Concept & positioning

**The idea:** most custom-print shirt sites look like a Shopify theme — hero banner, product carousel, "Best Sellers," newsletter popup. This site should feel like walking into a small, confident gallery that happens to sell wearable prints. Every product is treated like a piece on display: it gets a spotlight, a placard, a plate number, a curator's note — not a star rating and an "Add to Cart" button.

This isn't a stylistic skin bolted onto a normal store. It changes real structure:

- Categories become **Wings** (rooms in the gallery), not a dropdown filter.
- Product descriptions become **placards** (title, medium, plate no., curator's note).
- The cart becomes **Your Collection**.
- "Out of stock" becomes **Off Display**.
- The custom-text product line becomes **Commissions** — you're commissioning a piece, not filling out a text box.

The blend of moods you asked for lives at different altitudes: the *shell* (nav, footer, grid, typography) stays disciplined and minimal so the whole site reads as one coherent gallery. The *wings* are where mood diverges — Anime can be loud and graphic, Cinema can be dark and vignetted, Commissions can feel like a letterpress studio. That's what makes it feel curated instead of chaotic: one quiet frame, three distinct exhibitions inside it.

**One-line pitch:** *Everything here is on display — including you.*

---

## 2. Brand identity

| | |
|---|---|
| **Name (placeholder)** | EXHIBIT A |
| **Tagline** | Everything Here Is On Display. |
| **Elevator pitch** | A streetwear gallery for anime, film, and your own words — printed as limited exhibits, not inventory. |
| **Voice** | Curator who's also a fan. Confident and a little reverent about craft and print quality. Plainspoken the moment logistics are involved (shipping, sizing, returns) — never cute where clarity matters. |
| **Not the voice** | Hype-beast drop culture ("🔥 LIMITED DROP 🔥"), corporate retail ("Shop the look!"), or generic AI-assistant friendliness ("We're so excited to help you find the perfect tee!"). |

---

## 3. Information architecture

```
Home                          — the entrance / rotunda
├─ Wing I — Anime              — themed graphic tees & hoodies
├─ Wing II — Cinema            — movie-inspired graphic tees & hoodies
├─ Wing III — Commissions      — custom text/quote pieces (the design studio)
├─ Permanent Collection        — plain premium blanks, no theme (the "canvas" pieces)
├─ Directory                   — full catalog / search, filter by wing, garment, size, color
├─ Exhibit [Product] page      — one product
├─ Your Collection             — cart
├─ Acquisition                 — checkout
├─ Your Archive                — account / order history
└─ About the Gallery           — brand story, print/material info, contact
```

Garment types (called **Mediums**, see §11) are shared across wings — a wing is a *theme*, a medium is a *format*. Start with: Tee, Hoodie, Crewneck, Long Sleeve. Adding a medium later (tote bag, cap) should not require new page templates.

---

## 4. Design tokens

### 4.1 Base palette (site shell — used everywhere)

| Token | Hex | Use |
|---|---|---|
| `stone` | `#EDECE6` | Primary background — gallery wall. Cool, slightly grey-green, not warm cream. |
| `paper` | `#FAFAF7` | Cards, placards, elevated surfaces. |
| `ink` | `#17140F` | Primary text, wordmark, line art. Warm near-black, not pure `#000`. |
| `vitrine` | `#211F1B` | Dark stage background used *only* behind spotlighted product photography (the "display case"). |
| `dust` | `#8B887F` | Secondary text, captions, metadata, placard labels. |
| `brass` | `#B08D57` | Sparse signature accent — foil-stamp details, dividers, the plate-number frame. Used site-wide but rarely, like a metal plaque fitting. |

### 4.2 Edition accent system (the exhibition device)

Each Wing gets exactly one accent, used for its wing header, hover states within that wing, and its placard stamp. This is the system that lets each edition have its own mood without breaking the shell's consistency — never introduce a new accent outside this table without adding a new Wing.

| Wing | Accent name | Hex | Mood it's carrying |
|---|---|---|---|
| Anime | Hanko Red | `#D62839` | Stamp/seal red — bold, graphic, print-poster energy |
| Cinema | Marquee Amber | `#E3A008` | Warm theater-light gold — cinematic, dramatic |
| Commissions | Ribbon Blue | `#2C4A6E` | Typewriter-ribbon / ink blue — considered, personal |

### 4.3 Typography

| Role | Typeface | Notes |
|---|---|---|
| Display | **Fraunces** (variable) | Big, characterful serif with irregular, almost hand-cut detailing at high weights. Reserve for hero moments, wing titles, exhibit names — never body copy. Set large (64–140px desktop hero), tight leading. |
| Body / UI | **Archivo** | Grotesk with real personality in bold weights, stays clean and legible small. Used for all UI, nav, descriptions, buttons. |
| Utility / Mono | **IBM Plex Mono** | Placard metadata: plate numbers, SKUs, prices, size labels, timestamps. Reinforces the "catalog tag / museum label" feel. All-caps, letter-spaced. |

Type scale (desktop, rem @ 16px base): `12 / 14 / 16 / 20 / 28 / 40 / 64 / 96 / 140`. Mobile hero caps at ~48px — see §12.

### 4.4 Grid & spacing

- Base unit: **8px**. All spacing in multiples of 8.
- Desktop: 12-column grid, generous outer margins (**96–120px**) — gallery rooms have walking space, don't crowd the edges.
- Mobile: single column, **24px** margins.
- Asymmetric layout is preferred over centered symmetry — real gallery floor plans aren't centered grids. Let some sections run edge-to-edge (spotlighted hero pieces) and others sit in a narrow reading column (curator's notes, about page).

### 4.5 Shape, elevation, texture

- **Corner radius: 0**, almost everywhere. Sharp edges read as frame/plaque, not app-card. Exception: form inputs and pill-shaped filter tags may take a small 2px radius for usability, nothing more.
- **No soft drop shadows.** Use a hard single-offset shadow (e.g. `4px 4px 0 rgba(23,20,15,0.9)`) like a plaque standing slightly off the wall, or a 1px `brass`/`ink` keyline border. Shadows should feel like physical objects, not CSS defaults.
- **Texture, used sparingly and only where it means something:**
  - Anime wing: faint halftone dot pattern on section backgrounds (nods to manga print).
  - Cinema wing: subtle film-grain noise overlay on hero/product stages.
  - Commissions wing: fine letterpress-impression texture behind custom text preview.
  - Shell (stone background): a barely-there paper-grain texture at ~3% opacity — enough to feel physical, never enough to be noticed consciously.

---

## 5. Signature element — the Vitrine Card

This is the one thing the whole site should be remembered for. Spend the design's "boldness budget" here; keep everything else quiet.

Every product card is a two-part object, like a display case with a wall label underneath:

```
┌───────────────────────────────┐
│                                │
│        [ vitrine: #211F1B ]   │  ← dark stage, single dramatic
│          spotlit garment      │    light source on the garment,
│             photo              │    NOT a flat product photo
│                                │
├───────────────────────────────┤
│  PLATE NO. 014        [paper] │  ← mono caps, letter-spaced
│  Cracked Moon — Hoodie         │  ← Fraunces, medium size
│  Wing I · Anime  · $68         │  ← dust grey, accent dot for wing
└───────────────────────────────┘
```

- The photo stage is always dark (`vitrine`) regardless of the surrounding page background — this contrast pocket is what makes the grid feel like a gallery instead of a page of thumbnails.
- On hover/focus: the light source drifts slightly toward the cursor position (a few degrees of rotation + spotlight shift), like viewing a garment on a slowly turning pedestal. Subtle — under 400ms, no bounce.
- The placard strip below never changes background on hover; only the accent dot and plate number brighten. Hierarchy stays calm even when the photo is doing something.

---

## 6. Page layouts (intent, not pixels)

### Home — "the rotunda"

```
┌──────────────────────────────────────────────┐
│  ☰ Directory        EXHIBIT A         Collection (2) │  ← thin, wordmark only, no logo mark needed
├──────────────────────────────────────────────┤
│   NOW SHOWING                                 │  ← mono eyebrow
│                                                │
│   Huge Fraunces headline naming the           │  ← hero = the current
│   featured exhibit/drop                        │    featured piece,
│   one-line curator intro                       │    full-bleed vitrine
│   [ Enter the Wing → ]                         │    spotlight shot
├──────────────────────────────────────────────┤
│   WING I        WING II        WING III        │  ← three large typographic
│   ANIME         CINEMA         COMMISSIONS     │    doorway tiles, not photo tiles
├──────────────────────────────────────────────┤
│   CURRENTLY ON DISPLAY                         │
│   [vitrine][vitrine][vitrine]                  │  ← asymmetric masonry,
│   [vitrine]   [vitrine]                        │    not a uniform 4-col grid
├──────────────────────────────────────────────┤
│   Footer — gallery-hours style info block       │
└──────────────────────────────────────────────┘
```

The three wing "doorways" are typographic, not photographic — big Fraunces wordmarks on flat accent-tinted panels (each in its own edition accent, at low opacity, ~8–12%). This is the moment the visitor learns the taxonomy without reading a nav dropdown.

### Wing / category page

```
[ WING I ]  ANIME                         ← wing title in Hanko Red
one-line curatorial statement for the wing
────────────────────────────────────────
[ Medium ▾ ] [ Size ▾ ] [ Color ▾ ]        ← filters as gallery "directory tabs",
                                             not checkbox sidebar
[vitrine][vitrine][vitrine][vitrine]
[vitrine][vitrine][vitrine]
```

Filters sit as a horizontal row of tab-like toggles under the wing statement — think museum floor directory, not an e-commerce sidebar with 15 checkboxes.

### Exhibit (product) page

```
┌───────────────────┬────────────────────┐
│                    │  PLATE NO. 014      │
│   large vitrine    │  Cracked Moon        │
│   photo, garment   │  Wing I · Anime       │
│   spotlit, can be  │  ─────────────────    │
│   rotated/zoomed   │  Medium: Heavyweight  │
│                    │    cotton hoodie      │
│                    │  Curator's note:      │
│                    │  [2–3 sentence story  │
│                    │   behind the design]  │
│                    │  ─────────────────    │
│                    │  Size [S M L XL]      │
│                    │  $68   [Add to        │
│                    │         Collection]   │
└───────────────────┴────────────────────┘
```

Placard content order matters: Title → Wing → Medium → Curator's note → Size/price/CTA. This is deliberately the order a museum label uses (identify the work before you get to acquiring it).

### Commissions (custom text studio)

This is the customization tool for user-supplied lines/quotes — treat it as commissioning a print, not filling a form.

```
COMMISSION A PIECE
────────────────────────────────
Your line:  [ live text input ]
            → preview updates in a letterpress-style
              impression on the garment mockup, live

Garment:    [ Tee ] [ Hoodie ] [ Crewneck ]
Placement:  [ Chest ] [ Back ] [ Sleeve ]
Type style: [ 3 curated font options, not 40 ]
────────────────────────────────
[ Add to Collection ]   $42
```

Keep font choice curated (3 options max) and place them side by side as live previews — not a dropdown of 40 fonts. A gallery doesn't offer infinite options; it offers *considered* ones.

### Your Collection (cart) & Acquisition (checkout)

Keep these two screens the most conventional on the site. Flavor the headers and empty states (§9), but line items, quantity steppers, shipping fields, and the final purchase button should behave exactly like a customer expects from any store. This is not where to spend novelty — confusion at checkout costs sales.

---

## 7. Components

- **Header**: wordmark centered or left, "Directory" (nav) as a single word that opens a full-screen index rather than a dropdown megamenu. Cart icon replaced with "Collection (n)" as text, not just an icon — consistent with the no-generic-icon-soup approach.
- **Buttons**: rectangular, 0 radius, `ink` fill with `paper` text for primary actions; `paper` fill with `ink` 1px border for secondary. No gradients, no soft shadows. Hard offset shadow only on primary CTA hover.
- **Wing accent dot**: a small filled circle in the relevant edition accent color, used next to any product's wing label anywhere in the UI (cards, cart line items, order history) — the one recurring color-coding device.
- **Size selector**: squared toggle buttons, not a dropdown — sizing should never be hidden behind a click if it doesn't have to be.
- **Footer**: styled like a small gallery's "hours & info" plaque — address-style block (even if it's just support email/hours), wing list as plain text links, one line of legal/shipping info. No giant sitemap of links, no newsletter popup.

---

## 8. Motion & interaction

Motion should feel like **lighting**, not like animation for its own sake — it's the one place "AI-generated" tells show up fastest, so use it sparingly and only where it's earned.

- **Page load (home only):** the hero vitrine's spotlight fades up from black over ~600ms, like gallery lights coming on for opening. One time, one place — not repeated on every section.
- **Scroll:** product grids reveal with a simple, fast fade + 8px rise, staggered slightly per row. No parallax, no scroll-jacking, no elements sliding in from off-screen edges.
- **Vitrine card hover:** spotlight/rotation drift described in §5. Under 400ms, linear-ish easing (no bounce/elastic).
- **Everything else** (buttons, filters, nav): instant or near-instant (100–150ms) opacity/color transitions only.
- Respect `prefers-reduced-motion` — disable the spotlight drift and load sequence, keep only functional transitions.

---

## 9. Content & copy voice

Words are wall labels, not sales copy. Say what the visitor needs to know to navigate, plainly.

| Situation | Write this way | Not this |
|---|---|---|
| Add to cart | "Add to Collection" | "Add to Bag" ✅ also fine — keep whichever, but never "Buy Now!!" |
| Out of stock | "Off Display" + "Notify me when it returns" | "Sold Out! 😢" |
| Empty cart | "Nothing in your collection yet." + "Browse the Wings" | "Your cart is empty :(" |
| 404 | "This exhibit has closed or moved." + link home | "Oops! Page not found" |
| Checkout button | "Place Order" (stay plain here — see §6) | "Confirm Acquisition ✨" |
| Order shipped | "Your piece is on its way." | "Your order has shipped!" |
| Form error | State exactly what's wrong and how to fix it, no apology | "Oops, something went wrong!" |

General rules: active voice, sentence case (not Title Case buttons), no exclamation points, no emoji. A curator is knowledgeable and warm, not performatively excited.

---

## 10. Photography & asset direction

- Every product photo lives on the `vitrine` dark stage — single directional light source, soft falloff, garment slightly angled (not flat-lay, not floating ghost mannequin on white).
- No stock lifestyle photography of models in generic poses — if using models, shoot them like gallery visitors, mid-conversation or mid-look, not staring at camera in a studio.
- Wing-specific texture (halftone / grain / letterpress from §4.5) appears behind the product on category pages, never on top of the garment photo itself.
- Icons: avoid default icon-library look (Feather/Heroicons everywhere). Where icons are unavoidable (cart, search, menu), keep them line-weight consistent with `ink` and simple enough they read as wordmarks' quiet siblings — or replace with text labels per §7.

---

## 11. Product data model

Fields every "Exhibit" (product) needs, named the way the interface will show them:

```
title            "Cracked Moon"
wing             anime | cinema | commissions | permanent
medium           tee | hoodie | crewneck | long_sleeve
plate_no         string, e.g. "014" — sequential per wing, not per SKU
curator_note     2–3 sentences, written per product, never templated
material         e.g. "100% heavyweight combed cotton, 320gsm"
sizes[]          {size, in_stock}
colorways[]       {name, hex, image_set}
price
accent           inherited from wing (§4.2), don't set per-product
is_commission     bool — true only for Commissions wing custom pieces
```

**A practical note on IP:** anime and movie "editions" using real franchise characters or stills need licensing to sell legally — original fan-art-inspired designs, silhouette/homage art, or licensed collaborations are the safe paths. Worth deciding this before content production starts, since it changes what curator's-note copy and artwork you can actually commission.

---

## 12. Accessibility & technical quality bar

- Fully responsive down to a 375px mobile viewport; hero type scales down to ~40–48px on mobile, never truncated or overlapping.
- Visible keyboard focus states on every interactive element — use a `brass` or `ink` 2px outline offset, not a default browser blue ring, not `outline: none`.
- Color contrast: `ink` on `stone`/`paper` passes AA comfortably; verify each edition accent against its own background before using it for text (some, like `Marquee Amber`, may need a darker shade for text use vs. decorative use — keep two tints per accent if needed: a decorative tint and a text-safe darker tint).
- `prefers-reduced-motion` respected everywhere per §8.
- Real alt text on every product photo (garment, color, wing — not "image1.jpg").

---

## 13. Anti-patterns — what this is NOT

**Generic e-commerce tells to avoid:**
- Hero banner + logo carousel of "as seen in" press logos
- "Best Sellers" / "Trending Now" as a section title
- Star ratings and review-count badges on every card
- Newsletter popup within the first 10 seconds
- Sidebar of 15 checkbox filters
- Rounded cards with soft drop shadows on a white background

**AI-generated design tells to avoid specifically:**
- Warm cream background (`#F4F1EA`-ish) + high-contrast serif + terracotta/clay accent
- Near-black background with a single bright acid-green or vermilion accent and nothing else
- Broadsheet layout: hairline rules everywhere, 0 border-radius applied uniformly with no other identity, dense newspaper columns
- Numbered `01 / 02 / 03` section markers used decoratively when the content isn't actually a sequence
- Generic sans (Inter/Poppins) as both display and body face with no pairing intention
- Scroll-triggered fade-up on literally every element, parallax on everything, confetti/gimmick micro-interactions
- Stock gradient buttons or glassmorphism panels

If a screen could be mistaken for a Shopify starter theme or a generic AI landing page, it hasn't followed this brief yet.

---

## 14. Build notes

- Tech stack is intentionally unspecified here — implement in whatever stack fits (Next.js/Tailwind, etc.), but define the tokens in §4 as actual design tokens (CSS variables or Tailwind theme extension) named to match this doc (`--color-stone`, `--color-vitrine`, `--accent-anime`, etc.) so future edits stay consistent instead of drifting into arbitrary hex values.
- Build the Vitrine Card (§5) as one shared component used everywhere a product appears — grid, search results, cart line items, related products — so the signature element stays consistent site-wide rather than being reinvented per page.
- Wing accents (§4.2) should be theme-able per wing at a layout level (e.g. a `data-wing="anime"` attribute driving CSS custom properties) rather than hard-coded per component, since new wings/editions will be added later.