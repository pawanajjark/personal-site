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
    fontSize: "1.9rem"
    fontWeight: 550
    lineHeight: 1.25
    letterSpacing: "-.035em"
  post-title:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "2.1rem"
    fontWeight: 550
    lineHeight: 1.25
    letterSpacing: "-.035em"
  section-title:
    fontFamily: "'DM Sans Variable', sans-serif"
    fontSize: "1.1rem"
    fontWeight: 550
    lineHeight: 1.35
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
    fontSize: ".77rem"
    lineHeight: 1.65
rounded:
  focus: "2px"
  inline-code: "3px"
  media: "4px"
spacing:
  caption-gap: "10px"
  intro-paragraph-gap: "16px"
  list-column-gap: "20px"
  shell-gutter: "24px"
  section-top: "35px"
  post-footer-top: "48px"
components:
  navigation-link:
    textColor: "{colors.muted}"
    padding: "5px 0"
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

DM Sans Variable is the sole reading and interface family, with a sans-serif fallback. Inline code uses `ui-monospace, monospace`. All sizes in rem follow an 18px root, reduced to 17px at the mobile breakpoint.

The frontmatter records the recurring roles. Page headings are modest; post titles are larger. The homepage greeting uses 1.8rem, reduced to 1.7rem on mobile. Post titles reduce to 1.85rem on mobile. Section headings and post titles retain their distinct roles rather than forming a marketing display scale.

Article text uses the `prose` role. Its h2 is 1.3rem with margins of 2.4rem above and .8rem below; its h3 is 1.1rem with 1.8rem above and .6rem below. Paragraphs have 1.35rem bottom space. Dates in archive rows use tabular numerals. Headlines balance their wrapping; long post titles and article content can wrap anywhere when necessary.

## Layout

The centered shell has a maximum width of `calc(var(--measure) + 48px)`, with a 680px content measure and 24px horizontal gutters. Desktop header padding starts at 49px; the main region begins 74px below the header. Keep content in this single column.

Archive rows use a 64px date column, a flexible title column, and a 20px gap. At widths up to 600px, the date column becomes 51px with a 14px gap; main top padding becomes 56px and header top padding becomes 27px. Topic and footer groups stack. At widths up to 359px, gutters become 18px and navigation moves below the name.

At widths of at least 1000px, explicitly wide media extends 100px beyond each side of the reading measure. Other media stays within the column. The footer follows the content, separated by a fine rule.

## Elevation & Depth

There are no box shadows. Fine rules and whitespace separate regions on a continuous paper background. Inline code has a pale tonal fill. Native media controls retain their browser behavior.

## Shapes

Text sections and archive rows have no enclosing rounded containers. Small radii are reserved for focus outlines, inline code, code blocks, and media, as recorded in the frontmatter. Borders are one-pixel rules, including the olive rule beside blockquotes.

## Components

### Text links and navigation
Ordinary links inherit text color and use a fine underline offset by .2em. Hover changes both text and underline to olive over 140ms with `ease`. Header links begin muted; hover makes them ink. The current page is ink with an olive underline offset by .5em. Navigation remains visible on mobile.

Keyboard focus on links, disclosures, and video uses a two-pixel olive outline with a five-pixel offset. The skip link becomes visible on focus. Reduced-motion preferences disable transitions.

### Post lists and latest entry
Archive entries are plain date-and-title rows, with optional descriptions and explicit sample labels. Titles acquire an underline on hover. The latest entry uses top and bottom rules, a compact section heading, metadata, a description, and a reading link; it has no separate surface or shadow.

### Article prose and media
Blockquotes use muted text and a left olive rule. Inline code has a warm fill; preformatted code scrolls horizontally. Images and local video scale to the available width. Video and hosted embeds use a 16:9 frame. Captions are small, muted, centered, and spaced below the media. Transcripts use native disclosure controls with olive summary text. Downloads and original-provider links remain ordinary text links.

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
- **Don't** add decorative shadows, large accent surfaces, or an unrelated display font.
