---
name: CROPUS Design System
description: Traditional, rustic, organic, and humble agronomy journal visual system.
colors:
  primary: "#C6A15B"
  charcoal: "#111111"
  deep-forest: "#0F1F16"
  neutral-bg: "#F7F3EA"
  soft-cream: "#EFE8DC"
  stone-grey: "#D9D6D0"
  taupe-grey: "#B8AAA3"
  muted-text: "#6F6A63"
  earth-brown: "#7A5F45"
  olive-green: "#4F6F52"
typography:
  display:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.15em"
rounded:
  sm: "2px"
  md: "6px"
  lg: "8px"
components:
  button-primary:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.charcoal}"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-secondary-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.primary}"
  card:
    backgroundColor: "{colors.soft-cream}"
    rounded: "{rounded.md}"
    padding: "24px"
---

# Design System: CROPUS Design System

## 1. Overview

**Creative North Star: "The Agronomy Journal"**

The CROPUS visual system is built on the metaphor of a premium, traditional agricultural field-notebook. It rejects the hyper-clean, sterile SaaS layout language, opting instead for a tactile, editorial layout that feels grounded, authentic, and scientifically authoritative. The design relies on high-contrast serif headlines, monospaced metadata kickers, and generous whitespace, evoking a traditional, rustic, organic, and humble brand personality.

**Key Characteristics:**
- Warm parchment-like backgrounds and earthy forest tints.
- Strong typographic contrast using editorial serif and technical monospace fonts.
- Restrained, flat containers utilizing thin dividers and background tone shifts instead of ambient shadows.
- Generous editorial spacing to allow content to breathe.

**The Editorial Restraint Rule.** Layouts should rely on typography and whitespace to create hierarchy. Visual decoration and container shapes should be kept to a bare minimum.

## 2. Colors

The CROPUS color palette is drawn from raw agricultural inputs, organic matter, and traditional printing paper.

### Primary
- **Muted Gold** (#C6A15B): Used for primary accent highlights, active states, and small structural dividers.

### Neutral
- **Off-Black** (#111111): The primary ink color for high-contrast typography, dark-themed containers, and main actions.
- **Deep Forest** (#0F1F16): Secondary ink color for dark backgrounds and dense textual sections.
- **Warm Ivory** (#F7F3EA): The main canvas background color, providing a soft, warm paper texture.
- **Soft Cream** (#EFE8DC): Secondary background color for cards, panels, and distinct page sections.
- **Stone Grey** (#D9D6D0): Used for light borders, subtle dividers, and inactive states.
- **Muted Text Grey** (#6F6A63): Used for body text and descriptive paragraphs to reduce contrast harshness.
- **Earth Brown** (#7A5F45): Used for secondary labels and soil-related metadata.
- **Olive Green** (#4F6F52): Used for biological highlights and eco-friendly indicators.

**The Golden Ratio Rule.** The primary Muted Gold accent color must never occupy more than 10% of any screen surface. It serves as a rare, high-value highlight.

## 3. Typography

**Display Font:** Fraunces (with serif fallback)
**Body Font:** Inter (with sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with monospace fallback)

**Character:** The pairing of the highly expressive, editorial serif Fraunces with the technical, clean monospaced IBM Plex Mono mimics a scientist's handwritten notes in a field log.

### Hierarchy
- **Display** (Bold 700, clamp(2.5rem, 6vw, 4.5rem), 1.1): Used for main page titles and hero headers.
- **Headline** (Bold 700, clamp(1.75rem, 4vw, 2.5rem), 1.2): Used for section headers.
- **Title** (Semi-Bold 600, 1.25rem, 1.3): Used for card titles and sub-headings.
- **Body** (Regular 400, 1rem, 1.6): Used for prose and descriptive paragraphs. Maximum line length should be kept between 65–75ch.
- **Label** (Semi-Bold 600, 0.75rem, 0.15em tracking, uppercase): Used for eyebrows, metadata, and button text.

**The Typographic Balance Rule.** Every major section heading must be preceded by an uppercase monospaced label kicker to anchor the hierarchy.

## 4. Elevation

The CROPUS visual system is flat and layered. It rejects the use of heavy shadows, drop shadows, or fuzzy blurs. Depth is conveyed exclusively through background color shifts (e.g., nesting a Soft Cream card on a Warm Ivory page) and thin solid borders.

**The Flat-By-Default Rule.** All surfaces and containers are flat at rest. Ambient shadows are prohibited; subtle solid borders are the only allowed boundary indicators.

## 5. Components

### Buttons
- **Shape:** Sharp corners with very small radii (2px / rounded-sm).
- **Primary:** Off-Black (#111111) background with Warm Ivory (#F7F3EA) text. Padding is 14px 32px.
- **Hover / Focus:** Transitions to Muted Gold (#C6A15B) background with Off-Black (#111111) text.
- **Secondary:** Muted Gold (#C6A15B) background with Off-Black (#111111) text. Hover transitions to Off-Black (#111111) background with Muted Gold (#C6A15B) text.

### Cards / Containers
- **Corner Style:** Small corner radius (6px / rounded-md).
- **Background:** Soft Cream (#EFE8DC) or Warm Ivory (#F7F3EA).
- **Shadow Strategy:** No shadows.
- **Border:** Thin border (1px solid #D9D6D0).
- **Internal Padding:** Generous padding (24px).

### Inputs / Fields
- **Style:** Thin border (1px solid #D9D6D0), Warm Ivory background, 6px border radius.
- **Focus:** Highlighted with a 1px border shift to Muted Gold (#C6A15B) or Off-Black (#111111).

### Navigation
- **Style:** Flat navbar floating above the page, utilizing a dark background (#111111) with a thin border (#c3c8c2/15) and text in Warm Ivory (#F7F3EA). Uses monospaced typography for navigation links.

## 6. Do's and Don'ts

### Do:
- **Do** use `text-wrap: balance` on all h1–h3 headings to prevent awkward line wraps.
- **Do** maintain a body text line length of 65–75ch for optimal readability.
- **Do** use Warm Ivory (#F7F3EA) and Soft Cream (#EFE8DC) for page layouts to maintain the warm paper feel.
- **Do** use thin, subtle dividers (1px solid #D9D6D0 or #c3c8c2/30) to separate sections.

### Don't:
- **Don't** use drop shadows, box shadows, or glassmorphism effects.
- **Don't** use neon or vibrant digital colors (pure reds, blues, greens, or purples).
- **Don't** use side-stripe borders (e.g. `border-left-4` as a decorative accent).
- **Don't** use gradient text or background-clip text.
- **Don't** use identical, repeating card grids without visual variation or editorial asymmetry.
