---
name: Botanical Minimal
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#41474f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#717880'
  outline-variant: '#c1c7d1'
  surface-tint: '#136299'
  primary: '#136299'
  on-primary: '#ffffff'
  primary-container: '#5b9bd5'
  on-primary-container: '#003151'
  inverse-primary: '#98cbff'
  secondary: '#4b635a'
  on-secondary: '#ffffff'
  secondary-container: '#cde9dc'
  on-secondary-container: '#516a60'
  tertiary: '#00668a'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a1d9'
  on-tertiary-container: '#003347'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#98cbff'
  on-primary-fixed: '#001d33'
  on-primary-fixed-variant: '#004a77'
  secondary-fixed: '#cde9dc'
  secondary-fixed-dim: '#b2ccc1'
  on-secondary-fixed: '#072018'
  on-secondary-fixed-variant: '#344c43'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '300'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '300'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1.25rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies pure Scandinavian herbal-clinical minimalism, drawing inspiration from clinical cleanroom clarity, apothecaries, and Scandinavian industrial restraint. The brand personality is serene, hyper-refined, pristine, and restorative. It bridges modern wellness with meticulous scientific rigor.

The visual language leans on extensive breathing room, razor-sharp typographic discipline, gossamer-thin structural dividers, and pale, luminous atmosphere. Avoid saturated noise, heavy drop shadows, or aggressive ornamentation. Every element must feel sterile yet deeply comforting, evoking morning mist, distilled herbal essences, and premium medical-grade botanical craftsmanship.

## Colors

The palette is rooted in soft atmospheric sky tones balanced with desiccated sage botanical greens and pale airy porcelain whites. 

- **Primary (`#5B9BD5`)**: A serene, calibrated sky blue evoking air, water, and scientific purity. Used for active interactive states, primary action anchors, and refined brand moments.
- **Secondary (`#8EA89D`)**: A muted botanical sage accent representing dried herbs, botanical tinctures, and organic grounding. Used for micro-badges, subtle botanical indicators, and secondary supportive highlights.
- **Tertiary (`#38BDF8`)**: A bright crystalline sky accent deployed with strict restraint for focal alerts, status rings, and live indicators.
- **Neutral (`#64748B`)**: Slate balanced for technical legibility without harsh high-contrast black.
- **Surfaces**: Canvas begins at `#FFFFFF` and transitions to `#F8FAFC` (pale off-white) with low-tier containers resting at `#F0F4F8`.
- **Borders & Dividers**: Structured using `#E2E8F0` at 1px hairline scale to maintain cleanroom precision.
- **Text**: Main hierarchy utilizes `#1E293B` for authoritative headers and deep charcoal legibility, tapering to `#475569` for body copy.

## Typography

The typographical pairing reinforces clinical precision alongside human warmth:

- **Headlines (Plus Jakarta Sans)**: Used in light (`300`) to medium (`500`) weights with tight negative tracking to deliver an understated, Scandinavian aesthetic. Headlines never shout; they guide calmly.
- **Body (Manrope)**: Delivers geometric clarity and openness, ensuring prolonged readability for ingredient dossiers, dosage instructions, and clinical studies.
- **Technical & Labels (JetBrains Mono)**: Infuses apothecary and clinical documentation flavor into category indices, batch numbers, botanical extractions, and metadata metrics. Always rendered in uppercase with subtle letter-spacing.

## Layout & Spacing

The layout model utilizes a fluid 12-column grid on desktop, 8 columns on tablet, and 4 columns on mobile, backed by an intentional 8pt grid baseline. 

Air and breathing room are the primary design elements. Layouts must prioritize expansive vertical negative space (`space-xl` and above) around key content modules to mimic high-end editorial and cleanroom architecture.

- **Breakpoints**:
  - `mobile`: < 640px (Margins: `1.25rem`, single-column cards, full-width touch surfaces).
  - `tablet`: 641px - 1024px (Margins: `2rem`, 2-column distribution).
  - `desktop`: 1025px+ (Margins: `4rem`, max container width constrained to `1280px` for optimal typographic cadence).
- Structural content avoids crowded side-by-side modules; dense data must be spaced into modular panels with `space-md` inner padding and clear demarcations.

## Elevation & Depth

Visual hierarchy rejects dark drop shadows and heavy multi-layered z-index patterns. Instead, depth is achieved through:

1. **Surface Tinting & Tonal Stratification**:
   - Level 0 (Base Canvas): Pure `#FFFFFF` or pale `#F8FAFC`.
   - Level 1 (Card/Container Surfaces): `#FFFFFF` over `#F8FAFC` base, bounded by a 1px `#E2E8F0` hairline border.
   - Level 2 (Floating Modals / Flyouts): `#FFFFFF` elevated solely with an ambient, hyper-diffused blue glow: `0px 12px 32px -4px rgba(91, 155, 213, 0.08), 0px 4px 12px -2px rgba(142, 168, 157, 0.04)`.

2. **Subtle Gradient Whispers**:
   - Modals and focal highlight cards employ a gradient mesh fill of `linear-gradient(180deg, rgba(240, 244, 248, 0.5) 0%, rgba(255, 255, 255, 1) 100%)`.

3. **Frosted Clarity**:
   - Navigation bars and modal underlays use frosted glass: `backdrop-filter: blur(12px)` over `rgba(255, 255, 255, 0.85)` with a hairline baseline border (`#E2E8F0`).

## Shapes

The design system adopts a soft, architectural corner treatment (`roundedness: 1` — base radius of `4px` / `0.25rem`, scaling to `8px` / `0.5rem` for cards, and `12px` / `0.75rem` for primary overlays). 

Pill forms and overly playful bubbles are avoided to maintain pharmaceutical precision. The only exception is the botanical badge chip, which uses a 9999px full-capsule radius to reference medicinal tablets and clinical ampoules.

## Components

### Buttons
- **Primary**: Background `#5B9BD5`, text `#FFFFFF`, font `Manrope` 600 (`label-lg`). Border: none. Radius: `0.25rem` (`4px`). Hover state: smooth shift to `#4A88C7` with a subtle elevation of `0 4px 12px rgba(91, 155, 213, 0.2)`. Active: `#3F76AF`.
- **Secondary / Botanical Outline**: Background transparent, text `#1E293B`, 1px border `#E2E8F0`. Hover: background `#F0F4F8`, border-color `#8EA89D`.
- **Tertiary / Ghost**: Text `#5B9BD5`, background transparent. Padding: inline-only. Underlined strictly on hover.

### Badges & Botanical Chips
- Capsule-shaped (`9999px` radius).
- Background `#F0F4F8`, 1px border `#E2E8F0`, typography `label-sm` (`JetBrains Mono`).
- Category variants:
  - Clinical: Text `#5B9BD5`, border `rgba(91, 155, 213, 0.3)`.
  - Botanical: Text `#5A7A6D`, background `rgba(142, 168, 157, 0.12)`, border `rgba(142, 168, 157, 0.25)`.

### Cards & Panels
- Background `#FFFFFF` surrounded by a continuous 1px `#E2E8F0` border.
- Inner padding: `space-lg` (`1.5rem`).
- Header elements feature an optional botanical watermark or monospaced formula indexing token (e.g., `REF. HB-04`) aligned flush right.

### Input Fields
- Flat cleanroom aesthetic: Background `#FFFFFF`, 1px solid border `#E2E8F0`, border-radius `0.25rem`.
- Padding: `0.75rem 1rem`. Typography: `body-md` (`Manrope`).
- Focus state: Border shifts to `#5B9BD5` with an outer ring `0 0 0 3px rgba(91, 155, 213, 0.15)`. No dark rings.

### Checkboxes & Radio Controls
- Custom controls with an unselected state of `#FFFFFF` fill and 1.5px `#CBD5E1` border.
- Selected state: `#5B9BD5` solid fill with a clean white tick or dot.
- Radii: Checkbox `3px`, Radio `50%`.

### Lists & Tables
- Minimalist hairline dividers (`1px solid #F1F5F9`). Row hover effect uses an airy tint: `#F8FAFC`.
- Metric numbers and batch entries strictly set in `JetBrains Mono` for tabular vertical alignment.