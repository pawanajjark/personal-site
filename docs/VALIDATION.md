# Local validation — 1 November 2026

- `npm run build`: passed using Node 22.23.4; zero Astro/TypeScript errors, warnings, or hints.
- Static output: 12 HTML pages plus RSS and robots.txt. Every internal link and media path in the built HTML resolves.
- RSS: three expected entries — Starting here, What belongs here, and the labeled media sample.
- Authoring smoke check: a temporary Markdown post using the documented format built successfully; temporary draft and future-dated entries were absent from public routes and RSS. Temporary content was removed and the final site rebuilt.
- Desktop and mobile browser inspection: homepage, writing archive, notes archive, article, note, About, and media article. Responsive layouts checked at 1280px, 390px, and 320px with no horizontal overflow; final supplied-copy captures at 1280px and 390px.
- Keyboard: skip link appears on Tab and moves focus to main content; visible link/disclosure focus styles are present.
- Contrast against the paper background: body 13.22:1, muted text 4.56:1, accent 5.98:1.
- Image: responsive local asset loaded and displayed; build generated four WebP variants, with alt text and dimensions.
- Video: six-second H.264 MP4 played in the browser through `ended: true`, `currentTime: 6`, `readyState: 4`, without a media error. No autoplay; controls, poster, direct file link, and text description available.
- Independent manual finish review checked screenshots and source; the supplied-copy omission was corrected and the reviewer's verdict pass marked that fix resolved. Design documentation records implemented tokens and components.
- The Impeccable command-line detector was unavailable because its binary download did not complete; source and rendered review were performed manually.

## Deliberately unverified / pending

No personal external video ID was supplied, so YouTube/Vimeo provider playback is unverified. Test the actual video permissions and captions when adding one.

The domain is `https://example.com`; indexing is disabled until configured. Review the supplied editorial drafts and proposed dates, add actual domain/contact links as desired, and replace or hide the media demonstration before going live. The source is published to the public GitHub repository at the owner’s request. Website deployment, DNS changes, and media uploads have not been performed.
