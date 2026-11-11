---
name: "Colony 2 Site Plans"
description: "Architectural exhibition shell for inspecting the 52.00 Bigha outer boundary, 2D plot layouts, and 3D colony models."
colors:
  vermilion-survey: "#b83721"
  vermilion-ink: "#8f2514"
  vermilion-soft: "#fcf1ee"
  verified-green: "#146c34"
  verified-forest: "#185c37"
  verified-border: "#2d7a4f"
  verified-mint-ink: "#ecfdf5"
  focus-amber: "#f2b463"
  forest-slate: "#13221d"
  control-slate: "#1c312a"
  control-active: "#213a31"
  control-hover: "#243e35"
  header-border: "#355348"
  pine-secondary: "#384a42"
  control-border-hover: "#547b6c"
  road-sage: "#7f9187"
  scrollbar-sage: "#96a69d"
  mist-header-muted: "#b6c8bf"
  hairline-sage: "#c7d1cb"
  mineral-rag: "#dfe6e1"
  ledger-hover: "#e7ede9"
  chalk-header-ink: "#f2f5f3"
  mineral-ledger: "#f3f6f4"
  exhibition-white: "#ffffff"
typography:
  headline:
    fontFamily: "'Archivo', system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
  title:
    fontFamily: "'Archivo', system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.02em"
  body:
    fontFamily: "'Archivo', system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.05em"
rounded:
  xs: "1px"
  sharp: "2px"
  full: "50%"
spacing:
  2xs: "2px"
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
components:
  selector-trigger:
    backgroundColor: "{colors.control-slate}"
    textColor: "{colors.chalk-header-ink}"
    rounded: "{rounded.sharp}"
    padding: "8px 12px"
    height: "44px"
  selector-trigger-hover:
    backgroundColor: "{colors.control-hover}"
  dropdown-option:
    textColor: "{colors.forest-slate}"
    rounded: "{rounded.sharp}"
    padding: "11px 12px"
  dropdown-option-active:
    backgroundColor: "{colors.mineral-ledger}"
  header-btn:
    backgroundColor: "{colors.control-slate}"
    textColor: "{colors.chalk-header-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 12px"
    height: "40px"
  header-btn-hover:
    backgroundColor: "{colors.control-hover}"
  header-btn-active:
    backgroundColor: "{colors.control-active}"
  header-btn-copied:
    backgroundColor: "{colors.verified-forest}"
    textColor: "{colors.verified-mint-ink}"
  stage-action-btn:
    backgroundColor: "{colors.forest-slate}"
    textColor: "{colors.exhibition-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "0 16px"
    height: "44px"
  stage-action-btn-hover:
    backgroundColor: "{colors.control-active}"
  status-tag-locked:
    backgroundColor: "{colors.verified-forest}"
    textColor: "{colors.verified-mint-ink}"
    rounded: "{rounded.sharp}"
    padding: "3px 8px"
  site-header:
    backgroundColor: "{colors.forest-slate}"
    textColor: "{colors.chalk-header-ink}"
    padding: "10px 20px"
  stage-frame:
    backgroundColor: "{colors.exhibition-white}"
    textColor: "{colors.forest-slate}"
    rounded: "{rounded.sharp}"
    padding: "10px"
  boundary-ledger:
    backgroundColor: "{colors.mineral-ledger}"
    textColor: "{colors.forest-slate}"
    rounded: "{rounded.sharp}"
    width: "328px"
  wall-notice:
    backgroundColor: "{colors.vermilion-soft}"
    textColor: "{colors.vermilion-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sharp}"
    padding: "12px"
---

# Design System: Colony 2 Site Plans

## Overview

**Creative North Star: "The Museum Rag Jury Board"**

Colony 2 Site Plans is an Operate-mode architectural exhibition shell built to hold a single permanent web link while letting viewers inspect the locked 52.00 Bigha survey perimeter alongside upcoming 2D plot layouts and 3D colony models. The entire viewport behaves like a mounted jury presentation board: a dark forest-slate control bar anchors the top edge, while a crisp white exhibition mat and a mineral-chalk specification ledger rest over a subtly textured sage-stone rag ground.

Because the architectural plan inside the stage carries all visual drama, the chrome stays disciplined, low-gloss, and instrument-grade. Every edge is ruled with 1px hairlines, every survey measurement is set in tabular monospace figures, and chromatic accents are rationed strictly for physical site constraints—vermilion for the closed Chakroad wall and emerald green for the Karodi Road main entrance and verified boundary lock.

**Key Characteristics:**
- Mineral sage-stone rag ground (`#dfe6e1`) overlaid with a 3.5% SVG fractal-noise paper grain, framing an exhibition-white drawing mat (`#ffffff`).
- Deep architectural forest-slate top control bar (`#13221d`) housing the brand monogram, sheet selector dropdown, ledger toggle, standalone link, and permanent-URL copy button.
- Sharp `2px` architectural corners (`--radius-sharp`) and `1px` structural hairlines rather than soft rounded cards or decorative gradients.
- Dual-voice typography pairing `Archivo` structural titles with tabular `JetBrains Mono` survey measurements and control labels.
- Signal-only color coding linking the interactive perimeter key, edge table, proportional `63.37% / 21.63% / 15.00%` allocation bar, and access-rule notice.

## Colors

All neutrals are tinted along a green-slate axis (`155deg–171deg` hue) so dark chrome, chalk ledgers, and mineral paper grounds belong to the same drafting material rather than raw black or neutral gray.

### Primary
- **Survey Vermilion** (`#b83721`): Reserved for the closed Chakroad eastern wall (`220.00 m` no-entrance boundary), the `C2` monogram border, the pending sheet status dot, and light-surface keyboard focus rings.
- **Deep Vermilion Ink** (`#8f2514`): High-contrast text color inside the permanent access-rule notice box (`--accent-vermilion-ink`).
- **Warm Vermilion Wash** (`#fcf1ee`): Soft tinted background behind the closed-wall access notice (`--accent-vermilion-soft`).

### Secondary
- **Verified Boundary Green** (`#146c34`): Marks the active Karodi Road main entrance edge (`196.00 m`), the active lock indicator dot, the green allocation meter segment, and locked badge text on light surfaces.
- **Verified Canopy Forest** (`#185c37`): Background fill for the `Immutable` header status tag and the copied confirmation state on the Share Link button.
- **Verified Emerald Border** (`#2d7a4f`): Crisp 1px border framing dark-surface verified status tags and copied action buttons.
- **Verified Mint Ink** (`#ecfdf5`): High-contrast foreground ink paired with Verified Canopy Forest fills (`--accent-verified-ink`).

### Tertiary
- **Focus Survey Amber** (`#f2b463`): Dedicated exclusively to `2px` `:focus-visible` keyboard outlines against dark forest-slate header controls (`--focus-dark`); never used as decorative fill or body ink.

### Neutral
- **Deep Forest-Slate** (`#13221d`): Top bar ground (`--bg-header`), primary body ink (`--ink-primary`), outer frame borders (`--border-ink`), plotted meter segment, default perimeter strokes, and text selection fill.
- **Control Slate** (`#1c312a`): Resting background for dark header controls (`--bg-header-control`), dropdown trigger, and monogram tile.
- **Active Control Slate** (`#213a31`): Pressed/active ledger toggle background and hover fill for the primary dark stage button.
- **Hover Control Slate** (`#243e35`): Hover background across dark header controls (`--bg-header-hover`).
- **Header Rule Slate** (`#355348`): 1px bottom border of the header and resting border of header controls (`--border-header`).
- **Muted Pine Ink** (`#384a42`): Secondary labels, ledger section headings, pending descriptions, stage subbar copy, and scrollbar hover thumb (`--ink-secondary`).
- **Control Hover Border** (`#547b6c`): Subtle border lift when hovering dark header triggers and buttons.
- **Road Sage** (`#7f9187`): Neutral mid-sage marker for the `21.63%` road deduction swatch and allocation segment (`--accent-road`).
- **Scrollbar Sage** (`#96a69d`): Custom thin scrollbar thumb on the document root and webkit scrollbars.
- **Mist Header Muted** (`#b6c8bf`): Header site dimensions, `SELECT PLAN` prefix, and dropdown chevron ink (`--ink-header-muted`).
- **Hairline Sage** (`#c7d1cb`): Internal 1px dividers, viewport frame, key-map box, and list row rules (`--border-hairline`).
- **Mineral Sage-Stone Rag** (`#dfe6e1`): Full-viewport canvas ground (`--bg-rag`), dropdown option hover wash, key-map polygon fill, and pending badge fill.
- **Ledger Hover Tint** (`#e7ede9`): Highlight background on hovered or pinned boundary edge rows (`--bg-ledger-hover`).
- **Chalk-Sage Header Ink** (`#f2f5f3`): Primary text and icons on dark forest-slate surfaces and the share-link toast (`--ink-header`).
- **Mineral Chalk Ledger** (`#f3f6f4`): Collapsible Boundary Ledger panel ground, stage subbar ground, active dropdown option wash, and scrollbar track (`--bg-ledger`).
- **Exhibition Rag White** (`#ffffff`): Stage exhibition mat (`--bg-sheet`), iframe viewport background, open dropdown panel, key-map card ground, and primary CTA text.

### Named Rules
**The Signal-Only Accent Rule.** Survey Vermilion (`#b83721`) and Verified Boundary Green (`#146c34`) carry strict cartographic meaning—closed wall versus verified open entrance—and must never be applied as generic brand decoration.

**The Polarity-Matched Focus Rule.** Keyboard `:focus-visible` rings switch polarity by surface: `2px` Focus Survey Amber (`#f2b463`) with `2px` offset on dark `#13221d`/`#1c312a` header controls, and `2px` Survey Vermilion (`#b83721`) on light `#f3f6f4`/`#ffffff` stage and ledger controls.

## Typography

**Display Font:** None (architectural viewport leads; no display tier is used)
**Body Font:** `Archivo` (`system-ui, -apple-system, sans-serif`)
**Label/Mono Font:** `JetBrains Mono` (`ui-monospace, monospace`)

**Character:** Compact, square-shouldered `Archivo` handles titles and calm prose without ornament, while `JetBrains Mono` with `font-variant-numeric: tabular-nums` locks dimensions, Bigha/Gaj/Sq.m conversions, and action labels onto crisp vertical columns.

### Hierarchy
- **Headline** (`Archivo`, weight `700`, `18px` desktop / `16px` mobile, line-height `1.2`, tracking `0.01em`): Main top-bar title. Inside the reserved drafting sheet footer, the sheet heading steps up to `20px` (weight `700`, tracking `-0.01em`) to anchor the empty-slot explanation.
- **Title** (`Archivo`, weight `700`, `15px`, uppercase, tracking `0.02em`): Boundary Ledger header, stepped down to `14px` bold (`700`) for dropdown sheet titles and `13px` semibold (`600`) for the active selector trigger title.
- **Body** (`Archivo`, weight `400`, `14px`, line-height `1.5`): Base document scale and pending-slot guidance copy (`max-width: 66ch`), with compact `13px` rows inside the Boundary Ledger and `12px` (`line-height: 1.4`) dropdown option descriptions.
- **Label** (`JetBrains Mono`, weight `600`–`700`, `12px`, line-height `1.35`, tracking `0.02em`–`0.05em`): Header utility buttons, stage subbar, site metadata, edge dimensions (`-0.02em`), uppercase ledger section headers (`0.05em`), and access-rule notice (`line-height: 1.45`). Micro status tags step down to `11px` bold uppercase (`0.04em`).

### Named Rules
**The Tabular Survey Figures Rule.** Every spatial measurement, percentage, and coordinate string uses `JetBrains Mono` with `font-variant-numeric: tabular-nums` so multi-unit comparisons align cleanly across rows.

## Layout

The application runs inside a full-height (`100dvh`) flex column shell with zero page-level scroll on desktop, reserving scroll strictly for internal drafting sheets and the sidebar ledger. Spacing follows a `4px` base unit (`8px`, `12px`, `16px`, `20px`) paired with `2px` optical intermediate steps (`6px`, `10px`, `14px`, `18px`, `22px`) for tight framing around `1px` borders.

- **Desktop Workspace (`> 960px`):** The auto-height top header (`padding: 10px 20px`, `gap: 16px`) places the brand block, `340px–500px` plan selector (`min-width: 240px`), and three utility actions on one horizontal band. Below it, the split workspace (`padding: 14px 18px`, `gap: 16px`) pairs the flexible exhibition stage (`flex: 1`) with the `328px` collapsible Boundary Ledger sidebar.
- **Mobile Adaptation (`<= 960px`):** The top header (`padding: 10px 12px`, `gap: 10px`) wraps into three stacked `100%`-width rows (brand unit, selector trigger with its `SELECT PLAN` prefix hidden, and equal-width header actions at `44px` minimum touch height). Workspace padding tightens to `8px`, stage frame padding shrinks to `6px`, the secondary subbar summary hides, and the Boundary Ledger converts into a right-docked `min(350px, 92vw)` overlay drawer behind a `rgba(19, 34, 29, 0.44)` backdrop.

### Named Rules
**The Exhibition-First Viewport Rule.** The active plan stage always claims `flex: 1` of the remaining `100dvh` height and collapses the `328px` ledger out of flow (`display: none`) on toggle rather than compressing the plan viewport with multi-column chrome.

## Elevation & Depth

Surfaces are flat by default and establish hierarchy through tonal paper stepping (`#dfe6e1` rag ground -> `#f3f6f4` ledger -> `#ffffff` exhibition mat) and crisp `1px` forest-ink (`#13221d`) or sage (`#c7d1cb`) borders. Ambient drop shadows appear only when an element breaks out of the workspace plane as a floating menu, toast, or mobile overlay drawer.

### Shadow Vocabulary
- **Dropdown Elevation** (`box-shadow: 0 14px 32px -8px rgba(19, 34, 29, 0.28)`): Applied solely to the open sheet selector menu over the stage (`z-index: 60`).
- **Toast Elevation** (`box-shadow: 0 10px 24px rgba(19, 34, 29, 0.28)`): Applied to the fixed bottom-right share-link confirmation notice (`z-index: 90`).
- **Mobile Drawer Elevation** (`box-shadow: -12px 0 32px rgba(19, 34, 29, 0.25)`): Applied to the Boundary Ledger when presented as a fixed right-edge modal sheet at `<= 960px` (`z-index: 80`).

### Named Rules
**The Flat-By-Default Rule.** Docked containers—the stage mat, ledger panel, perimeter key box, and drafting sheet—carry zero box-shadow at rest; forest-tinted shadows belong exclusively to floating overlays.

## Shapes

Form language is strictly architectural and rectilinear. Almost every structural container, control, badge, and divider uses sharp `2px` corners (`--radius-sharp: 2px`) with `1px solid` strokes so frames read like precision drafting mounts.

- **Corner Radii:** `2px` across header controls, buttons, badges, dropdown panel/options, stage mat, subbar, viewport, ledger, and notice boxes; `1px` on `9px × 9px` edge legend swatches; `50%` reserved solely for the `8px × 8px` status lock dot.
- **Iconography:** All UI icons are authored inline SVGs on a `24×24` viewBox using `stroke="currentColor"`, `stroke-width="1.75"` (utility buttons) or `"2"` (dropdown chevron and close icon), and `stroke-linecap="square"` to match the `2px` architectural corner language.

### Named Rules
**The Razor Corner Rule.** Structural containers and interactive buttons never exceed `2px` corner radius (`--radius-sharp: 2px`); pill shapes and rounded cards are excluded outside the `8px` status dot.

## Components

### Buttons
Compact, rectilinear tactile triggers tuned to match dark header slate or light exhibition rag.
- **Shape:** Sharp architectural corners (`2px` radius) with `1px solid` border strokes.
- **Header Utility Buttons & Full-Sheet Link:** Control Slate (`#1c312a`) fill, Chalk-Sage Ink (`#f2f5f3`), `1px solid #355348` border, `40px` min-height (`44px` on mobile), `0 12px` padding (`0 10px` mobile), `7px` icon-to-label gap, `12px` `JetBrains Mono` weight `600`.
- **Hover / Active / Copied:** Hover shifts to `#243e35` with `#547b6c` border (`150ms ease`); active ledger toggle shifts to `#213a31` with `#719989` border; copied link confirmation shifts to `#185c37` with `#2d7a4f` border and `#ecfdf5` ink.
- **Primary Stage Action Button:** Solid Deep Forest-Slate (`#13221d`) fill, white ink (`#ffffff`), `44px` min-height, `0 16px` padding, hovering to `#213a31`.
- **Drawer Close & Edge Row Buttons:** Mobile close button is `40px × 40px` white with `1px solid #c7d1cb` border; boundary edge row buttons are full-width transparent triggers with `40px` min-height, `8px 6px` padding, bottom hairline `#c7d1cb`, and `#e7ede9` hover/pinned highlight.

### Plan Selector Dropdown
Prominent header switcher enabling single-URL navigation across Sheet 01, Sheet 02, and Sheet 03 without modifying `plans/outer-boundary.html`.
- **Dropdown Trigger:** `flex: 1 1 340px` (`max-width: 500px`, `min-width: 240px`; `100%` width on mobile), `44px` min-height, `8px 12px` padding, `#1c312a` fill, `1px solid #355348` border (`2px` radius), `160ms cubic-bezier(0.16, 1, 0.3, 1)` hover transition; chevron rotates `180deg` (`180ms`) when expanded.
- **Menu Panel & Sheet Options:** White (`#ffffff`) floating menu `6px` below trigger with `1px solid #13221d` border, `6px` outer padding, `11px 12px` option padding, `#dfe6e1` hover background, and `#f3f6f4` fill + `#13221d` border on the active sheet.
- **Status Badges:** `11px` bold uppercase `JetBrains Mono`, `3px 8px` padding (`3px 7px` mobile), `2px` radius. Locked variants use `#185c37`/`#2d7a4f`/`#ecfdf5` on dark triggers and `#e6f4ec`/`#96cca9`/`#146c34` inside the white dropdown; pending variants use `#2b4238`/`#4c695d`/`#e4ede8` on dark triggers and `#dfe6e1`/`#c7d1cb`/`#384a42` on light surfaces.

### Exhibition Stage & Reserved Drafting Sheet
Framed presentation viewport that houses either the unmodified `plans/outer-boundary.html` iframe or the CAD-grid pending blueprint slot.
- **Stage Mat & Viewport:** White (`#ffffff`) outer mat with `1px solid #13221d` border, `10px` padding (`6px` mobile), `8px` gap (`6px` mobile), wrapping a `1px solid #c7d1cb` viewport container.
- **Stage Provenance Subbar:** `#f3f6f4` strip (`8px 12px` padding, `1px solid #c7d1cb` border, `12px` mono `#384a42`) pairing an `8px` circular status dot (`#146c34` locked, `#b83721` pending) with sheet provenance and access summary.
- **Pending Blueprint Sheet:** Full-height bordered drafting sheet (`1px solid #13221d`, `18px 22px` padding, `rgba(255, 255, 255, 0.92)` surface) centering the verified 52.00 Bigha SVG wireframe over a `50px` CAD grid (`max-width: 560px`, `max-height: 430px`) above a top-ruled sheet footer.

### Navigation
Single fixed top control bar establishing project identity and switching sheet context without secondary sidebars or marketing links.
- **Brand Unit & Monogram:** `36px × 36px` (`34px` mobile) `#1c312a` square tile framed in `1px solid #b83721` displaying `C2` (`13px` bold mono), paired with the `18px` `Archivo` title and `12px` mono area summary (`#b6c8bf`).
- **Responsive Wrapping:** Converts cleanly from a single horizontal bar above `960px` to three full-width bands (brand, selector, actions) on mobile.

### Boundary & Area Ledger (Signature Component)
Collapsible `328px` right-hand technical ledger connecting geometric survey edges to exact multi-unit calculations and access constraints.
- **Ledger Panel & Header:** `#f3f6f4` body (`14px 15px 16px` padding, `16px` vertical gap) under an `#e6ece8` header (`14px 16px` padding, `1px solid #13221d` bottom border). Collapses out of flow on desktop; renders as a `min(350px, 92vw)` fixed modal drawer at `<= 960px`.
- **Interactive Perimeter Key:** White `12px`-padded inset holding a `124px`-tall SVG polygon (`#dfe6e1` fill) whose four clickable/focusable boundary strokes (`stroke-width: 12–14`, highlighted to `22` while dimming non-selected edges to `opacity: 0.32`) stay synchronized with the four edge measurement rows and live readout.
- **Proportional Land Meter:** `11px`-tall `1px solid #13221d` bar divided strictly to site ratios (`63.37%` `#13221d` plotted, `21.63%` `#7f9187` road, `15.00%` `#146c34` green) above a 3-column mono legend.
- **Access Rule Notice & Share Toast:** The access notice pins to the ledger bottom (`margin-top: auto`) with `1px solid #b83721`, `#fcf1ee` wash, and `#8f2514` `12px` mono text; the share feedback toast anchors `18px` from bottom-right in `#13221d`/`#355348`/`#f2f5f3` with `10px 14px` padding.

## Do's and Don'ts

### Do:
- **Do** preserve `1px solid` architectural hairlines (`#13221d` outer frames, `#c7d1cb` inner rules) and `2px` sharp corners (`--radius-sharp: 2px`) across new sheets and controls.
- **Do** keep `JetBrains Mono` with `tabular-nums` on every measurement, Bigha/Gaj/Sq.m figure, coordinate, percentage, and action button label.
- **Do** apply `#b83721` (Survey Vermilion) strictly to closed-wall warnings, pending dots, light focus rings, and the `C2` monogram border, and `#146c34` / `#185c37` strictly to verified Karodi Road entrance and locked states.
- **Do** maintain polarity-aware `:focus-visible` outlines (`#f2b463` on dark forest-slate controls, `#b83721` on light rag/white surfaces) and `44px` minimum mobile touch targets.
- **Do** respect `@media (prefers-reduced-motion: reduce)` (`0.01ms` duration collapse) and leave `plans/outer-boundary.html` completely unmodified inside its stage iframe.

### Don't:
- **Don't** introduce raw un-tinted black (`#000000`), neutral gray (`#888888`), or decorative gradients that break the green-tinted forest-slate and mineral-rag palette.
- **Don't** replace crisp `2px` architectural mats and ruled ledgers with pill buttons, multi-pixel left/right accent stripes, floating card grids, or decorative glassmorphism.
- **Don't** add eyebrow/kicker labels above headings, Unicode emojis/glyphs in place of square-cap SVG icons, or unverified marketing copy, pricing, or fabricated plot claims.
- **Don't** apply box-shadows to docked panels (the stage mat, desktop ledger, perimeter key box, and drafting sheet); shadows belong strictly to floating overlays (the dropdown menu, share toast, and mobile drawer).
