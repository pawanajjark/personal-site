---
name: Pawan’s personal site
description: A quiet, warm reading space for writing and notes.
colors:
  paper: "#faf9f6"
  ink: "#2b2d28"
  muted: "#72736a"
  accent: "#526640"
  line: "#e4e4dc"
  selection: "#dce5cc"
  link-underline: "#b2b6a8"
  code-surface: "#eeeee6"
typography:
  headline:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.03em"
  post-title:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.03em"
  section-title:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "1.1111rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-.015em"
  body:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "18px"
    lineHeight: 1.65
  prose:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "1rem"
    lineHeight: 1.8
  metadata:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "14px"
    lineHeight: 1.5
rounded:
  focus: "2px"
  inline-code: "3px"
  media: "4px"
  gallery-frame: "12px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "20px"
  space-6: "24px"
  space-8: "32px"
  space-10: "40px"
  space-12: "48px"
  space-16: "64px"
  caption-gap: "12px"
  intro-paragraph-gap: "16px"
  list-column-gap: "20px"
  shell-gutter: "24px"
  section-top: "40px"
  post-footer-top: "48px"
components:
  navigation-link:
    textColor: "{colors.muted}"
    padding: "8px 0"
  navigation-link-current:
    textColor: "{colors.ink}"
  read-link:
    textColor: "{colors.accent}"
  post-metadata:
    textColor: "{colors.muted}"
    typography: "{typography.metadata}"
  inline-code:
    backgroundColor: "{colors.code-surface}"
    rounded: "{rounded.inline-code}"
    padding: ".16em .3em"
---

# Design System: Pawan’s personal site

## Overview

**Creative North Star: "A quiet reading room"**

A simple, understated, slightly modern personal website, informed by Steph Ango’s reading-focused site. Warm paper, dark type, generous margins, and a restrained olive accent keep attention on the writing. The visual structure comes from typography, whitespace, and plain lists.

Typography, spacing, and motion refinements take inspiration from [design.how’s Lime foundations](https://design.how/systems/lime). Their application here is original CSS adapted for reading; no external components or runtime were added.

**Key Characteristics:**
- One narrow reading column.
- Warm neutrals with small olive details.
- Flat surfaces and fine horizontal rules.
- Familiar text links and restrained state changes.

## Colors

### Primary
- **Olive accent** (`accent`): link hover, reading links, the name’s dot, active navigation underline, quote rule, transcript disclosure, and keyboard focus.

### Neutral
- **Warm paper** (`paper`): the continuous page background.
- **Soft ink** (`ink`): body copy, headings, and current navigation.
- **Warm gray** (`muted`): dates, descriptions, captions, secondary navigation, and footer copy.
- **Pale rule** (`line`): section, footer, and sample-notice boundaries.
- **Light sage selection** (`selection`): selected text, paired with ink.
- **Gray olive underline** (`link-underline`): ordinary link decoration.
- **Warm code surface** (`code-surface`): inline code only.

**The Sparse Accent Rule.** Use olive for small reading and interaction cues; keep the page’s large surfaces paper-colored.

## Typography

DM Sans Variable is the sole reading and interface family, with a sans-serif fallback. Inline code uses `ui-monospace, monospace`. All sizes in rem follow an 18px root, including on mobile. Shared roles use `--text-*` variables: 13px captions, 14px dates and navigation, 15px secondary copy, 18px body text, and a 19px introductory lead. Small sample labels are 12px.

The frontmatter records the recurring roles. Page headings and the homepage greeting use 2rem at weight 600; post titles use 2.25rem. At widths up to 600px, these become 1.7778rem and 2rem respectively. Section headings are 1.1111rem at weight 600; featured titles are 1.4444rem at weight 500, reduced to 1.3333rem on mobile. Archive titles use weight 500.

Article text uses the `prose` role. Its h2 is 1.3333rem with 48px above and 16px below; its h3 uses the section size with 32px above and 12px below. Paragraphs have 24px bottom space. Dates in archive rows use tabular numerals. Headlines balance their wrapping; long post titles and article content can wrap anywhere when necessary.

## Layout

The centered shell has a maximum width of `calc(var(--measure) + 48px)`, with a 680px content measure and 24px horizontal gutters. Desktop header padding starts at 48px; the main region begins 64px below the header. A shared four-pixel scale runs from 4px through 64px. Keep content in this single column. Introductory text has a 600px maximum measure within it.

Archive rows use a 64px date column, a flexible title column, and a 20px gap. At widths up to 600px, the date column becomes 52px with a 16px gap; main top padding becomes 48px and header top padding becomes 24px. Topic and footer groups stack. At widths up to 359px, gutters become 20px and navigation moves below the name. Home sections start with 40px of space on desktop and 32px on mobile; the featured entry has 32px vertical padding on desktop and 24px on mobile.

At widths of at least 1000px, explicitly wide media extends 100px beyond each side of the reading measure. Other media stays within the column. The footer follows the content, separated by a fine rule.

## Elevation & Depth

Reading surfaces have no box shadows. Fine rules and whitespace separate regions on a continuous paper background. The image fan is a local exception: overlapping image frames use a soft downward shadow (`0 8px 24px rgb(43 45 40 / .12)`), rising to `0 16px 32px rgb(43 45 40 / .16)` on hover/focus. The image viewer uses `0 24px 80px rgb(43 45 40 / .2)` above a dimmed backdrop. Inline code has a pale tonal fill. Native media controls retain their browser behavior.

## Shapes

Text sections and archive rows have no enclosing rounded containers. Small radii are reserved for focus outlines, inline code, code blocks, and media, as recorded in the frontmatter. Borders are one-pixel rules, including the olive rule beside blockquotes.

## Components

### Text links and navigation
Ordinary links inherit text color and use a fine underline offset by .22em. Color feedback takes 80ms and underline-color feedback takes 140ms, both on `cubic-bezier(0.16, 1, 0.3, 1)`. Header links begin muted and turn ink on hover or keyboard focus. An olive underline expands over 200ms on hover/focus and remains visible for the current page. Navigation targets are at least 44px tall and remain visible on mobile. Reading and archive-link arrows move 3px on hover/focus using the same 200ms easing.

Keyboard focus on links, disclosures, and video uses a two-pixel olive outline with a five-pixel offset. The skip link becomes visible on focus. Reduced-motion preferences disable transitions, animation, and arrow movement.

### Post lists and latest entry
Archive entries are plain date-and-title rows, with optional descriptions and explicit sample labels. Titles acquire an underline on hover. The latest entry uses top and bottom rules, a compact section heading, metadata, a description, and a reading link; it has no separate surface or shadow.

### Article prose and media
Blockquotes use muted text and a left olive rule. Inline code has a warm fill; preformatted code scrolls horizontally. Images and local video scale to the available width. Video and hosted embeds use a 16:9 frame. Captions are small, muted, centered, and spaced below the media. Transcripts use native disclosure controls with olive summary text. Downloads and original-provider links remain ordinary text links.

### Image fan
The optional sample gallery sits after the writing and notes. Three image frames spread along a symmetric fan and lift on hover or keyboard focus. Frames and the native image-viewer dialog use 12px corners; image corners stay 4px. Motion is scoped to this gallery: a once-per-page 650ms unfold, 70ms stagger, and 400ms hover/focus response. Reduced motion leaves the fan static. Cards retain direct image links without JavaScript. Modal labels, Escape, backdrop dismissal, and focus return use native dialog behavior. Demo artwork is explicitly labeled.

### Topics and footer
Topics are wrapping text links, without pill backgrounds or badges. The footer uses small muted type, a top rule, and wrapping link groups.

## Do's and Don'ts

### Do:
- **Do** preserve the narrow reading measure and responsive gutters.
- **Do** distinguish reading hierarchy through type, spacing, and fine rules.
- **Do** retain visible keyboard focus and reduced-motion behavior.
- **Do** label development samples explicitly.

### Don't:
- **Don't** introduce a marketing hero or portfolio/work-history cards.
- **Don't** turn lists or topics into raised cards or filled pills.
- **Don't** add shadows to reading sections or post lists, large accent surfaces, or an unrelated display font.
