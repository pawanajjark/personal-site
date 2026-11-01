# Pawan’s personal site

Hosted on Vercel: [personal-site-three-steel.vercel.app](https://personal-site-three-steel.vercel.app).

A small Astro site for articles, short notes, images, and video. Content lives in Markdown/MDX; there is no database or browser CMS. Publishing means editing files, committing them to Git, and rebuilding the site.

## Run locally

Use Node **22.23.4 or newer** (the required version is in `.nvmrc`). With nvm:

```sh
nvm install
nvm use
npm ci
npm run dev
```

Open the local URL printed in the terminal, normally http://127.0.0.1:4321.

```sh
npm run check   # Astro and TypeScript diagnostics
npm run build   # diagnostics + production build in dist/
npm run preview # serve the production build
```

For this initial workspace only, a private Node runtime may be present in `.tools/node/` to avoid changing system Node. On this machine you can use `PATH="$PWD/.tools/node/bin:$PATH" npm run dev`. It is ignored by Git and is not needed after installing the Node version above.

## Personalize first

Edit `src/site.config.ts`: name, page title, description, introduction, actual public URL, optional social/contact links. Review the draft biography in `src/pages/about.astro`. The homepage, About page, archive introductions, and two starter posts use supplied editorial first-person draft copy, not a verified résumé or verbatim statement. The original planning documents and agent-only source notes are kept locally and excluded from this public repository. The dates are proposed draft dates; review all copy and dates before external publication. No employer, title, achievements, or contact details are assumed.

“Starting here” and “What belongs here” are the supplied starter drafts, rendered locally for review. The separate “Images and moving pictures” post is marked **Sample** and uses original development media, not Pawan’s experiences. Replace, hide, or delete that demonstration before going live. Setting `showSamples: false` removes them from pages and RSS, including direct post routes. Sample pages carry `noindex`; local builds use `https://example.com` until a public URL is configured. Set the `SITE_URL` build environment variable for your custom domain; otherwise Vercel builds automatically use the deployment URL (or the production domain for production builds). Preview deployments carry `noindex` and disallow indexing. RSS and canonical metadata use the resolved URL.

## Add an article

Create `src/content/posts/my-first-article.md`. The file name becomes the URL, `/writing/my-first-article/`.

```md
---
title: "My first article"
description: "A one-sentence description for listings and RSS."
date: 2026-11-01
kind: writing
tags: [life, learning]
draft: false
---

Your opening paragraph.

## A section

The rest of your article. **Bold**, *italic*, lists, and [links](https://example.com) work here.
```

Use a unique descriptive file name. Nested folders are supported and become part of the URL. Dates use `YYYY-MM-DD` (UTC). Drafts and future-dated entries are excluded from every public route, listing, topic page, and feed. Future posts appear on the next build after their date, not automatically while a static site sits on a server. Tags use lowercase words separated by hyphens. A tag creates its own page automatically. `description`, `date`, `title`, and `kind` are required; `tags`, `draft`, and `sample` are optional.

## Add a note

Create `src/content/posts/a-small-discovery.md`:

```md
---
title: "A small discovery"
description: "One sentence of context."
date: 2026-11-01
kind: note
tags: [learning]
---

A note can be just a few sentences. Give it as much room as it needs.
```

It appears at `/notes/a-small-discovery/`, in Notes, and on Home. Changing `kind` changes the URL; add a host-level redirect if you change it after publication.

## Add a local image with a caption

For component-based media, use `.mdx` instead of `.md`. Put the image in `src/assets/` (subfolders are fine), then import it. Astro generates responsive files during the build. The `alt` prop is required; describe the information the image contributes. Captions are optional. `wide` lets media extend beyond the text on large screens.

```mdx
---
title: "An illustrated post"
description: "A post with a local image."
date: 2026-11-01
kind: writing
---

import MediaFigure from '../../components/MediaFigure.astro';
import photo from '../../assets/my-photo.jpg';

Text before the image.

<MediaFigure
  src={photo}
  alt="Describe the image here."
  caption="Optional context or credit."
  wide
/>
```

Paths above assume a file directly in `src/content/posts/`; adjust the relative imports if you use a deeper folder. Plain Markdown images work too: `![Useful description](../../assets/my-photo.jpg)`.

## Add a local clip

Use `.mdx`, place a **small** clip and optional poster in `public/media/`, and reference them by root-relative URL. MP4 encoded with H.264 is a practical default; WebM can be an alternate. The player has native controls, no autoplay, inline mobile playback, and `preload="none"`.

```mdx
import Video from '../../components/Video.astro';

<Video
  src="/media/my-clip.mp4"
  webm="/media/my-clip.webm"
  poster="/media/my-poster.jpg"
  title="A descriptive video title"
  caption="Optional caption."
  captions="/media/my-captions.vtt"
  transcript="A text transcript or useful description."
/>
```

Remove `webm`, `poster`, `captions`, or `transcript` if unavailable. Supply WebVTT captions and/or a transcript for speech-led recordings. The included silent demo has a visual description. You can reproduce the original geometric demo assets using `sh scripts/create-demo-media.sh` if FFmpeg is installed; normal site builds do not need FFmpeg. Asset sources are recorded in `public/media/SOURCES.md`.

A WebVTT file starts with:

```vtt
WEBVTT

00:00.000 --> 00:03.000
The words spoken in the first three seconds.
```

## Use hosted video

Keep large video files outside Git. Upload them to your chosen object storage or video service separately, then use a direct media URL with the same `Video` component:

```mdx
<Video src="https://media.your-domain.com/clip.mp4" title="Your video title" />
```

For YouTube or Vimeo, import the reusable embed component and supply the provider’s video **ID**, not the full URL:

```mdx
import VideoEmbed from '../../components/VideoEmbed.astro';

<VideoEmbed provider="youtube" id="YOUR_VIDEO_ID" title="Your video title" caption="Optional context." />
<VideoEmbed provider="vimeo" id="123456789" title="Your video title" />
```

Embeds load lazily, preserve their aspect ratio, and include a direct watch link. YouTube uses its privacy-enhanced embed domain; provider requests still go to that third party. No external video is included or playback-verified because no personal video/ID has been supplied. Test the actual provider, video permissions, captions, and mobile playback when you add one.

## Publish with GitHub

1. Replace samples, complete About and `site.config.ts`, and set your real public URL.
2. Run `npm run build` and inspect with `npm run preview`.
3. Review the files, commit changes, and push to [pawanajjark/personal-site](https://github.com/pawanajjark/personal-site).
4. Connect that repository to a static host such as Cloudflare Pages, Netlify, or Vercel. Build command: `npm run build`. Output directory: `dist`. Node: `22.23.4` or newer. No server adapter or runtime secrets are needed.
5. Confirm the domain, feed URLs, and media in the deployed build. Later commits trigger rebuilds when the host’s Git integration is configured.

`.github/workflows/check.yml` checks builds on pushes and pull requests; it does **not** deploy. The source repository is public on GitHub. Vercel assigned this project’s first deployment to production automatically. Subsequent `vercel deploy` commands create previews; `vercel deploy --prod` updates production when requested. Domain configuration and media uploads are separate setup steps. Deployment preparation assumes a root domain/subdomain; hosting under a subpath such as `username.github.io/repository/` needs Astro `base` configuration and base-aware internal URLs first.

## Project map

- `src/site.config.ts`: editable site identity and links
- `src/content/posts/`: Markdown and MDX content
- `src/content.config.ts`: validated post metadata
- `src/assets/`: images optimized by Astro
- `public/media/`: small clips, posters, and caption files
- `src/components/`: post lists and reusable media
- `src/layouts/`: shared page and article structure
- `src/styles/global.css`: typography, color, spacing, and responsive styles
- `DESIGN.md`: recorded visual system

The handoff, research, and supplied content source documents are preserved locally and excluded from Git. This is an original implementation inspired by Steph Ango’s restrained reading experience, not a copy of his private template. Astro Nano code was not reused.
