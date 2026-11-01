# Pawan’s personal site

Live at [pawanajjark.vercel.app](https://pawanajjark.vercel.app). Writing, short notes, and a few photos, built with [Astro](https://astro.build/) as a fully static site.

## Run locally

Node 22.23.4+ (see `.nvmrc`):

```sh
npm ci
npm run dev      # http://127.0.0.1:4321
npm run build    # type-check + build to dist/
```

## Write a post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL.

```md
---
title: "A small discovery"
description: "One sentence for listings and RSS."
date: 2026-11-01
kind: note          # note → /notes/…, writing → /writing/…
tags: [learning]    # optional, lowercase-hyphenated; each tag gets a page
draft: false        # optional
---

The post body.
```

Drafts and future-dated posts are left out of every page and the feed. For images or video, use `.mdx` with the components in `src/components/` (`MediaFigure`, `Video`, `VideoEmbed`).

## Where things live

- `src/site.config.ts`: name, intro, and social links
- `src/content/posts/`: posts
- `src/data/photos.ts`: gallery photos and the three on the homepage
- `src/styles/global.css` and `DESIGN.md`: the visual system

Hosted on Vercel. GitHub Actions runs the build on every push. Set `SITE_URL` in Vercel when a custom domain is added.
