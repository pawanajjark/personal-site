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

Local builds fall back to `https://example.com` with indexing disabled. Vercel builds resolve their hosted URL automatically; previews stay excluded from indexing. Review the supplied editorial drafts and proposed dates, add actual domain/contact links as desired, and replace or hide the media demonstration before going live. The source is published to the public GitHub repository at the owner’s request. Vercel reported the initial deployment READY at https://personal-site-three-steel.vercel.app and automatically assigned it to production. The hosted page was not fetched as part of this deployment check. Custom DNS changes and personal media uploads have not been performed.


## Lime-inspired refinement preview

Branch: `design/lime-refinements`. Scoped to CSS and design-system documentation.

- Kept the existing DM Sans font, palette, reading measure, content, and routes.
- Added shared typography roles, a four-pixel spacing scale, and consistent 80/140/200ms interaction timings inspired by design.how’s Lime foundations.
- Increased mobile body text to 18px and navigation targets to at least 44px tall. Navigation uses an expanding underline on hover/focus and for the current page.
- `npm run build` passed with zero diagnostics after the style changes.
- Local rendered checks: 1280px desktop, 390px mobile, 320px narrow mobile, and 768px tablet. No horizontal overflow in the inspected layouts. Tablet Home, Writing, Notes, and About each retained one H1.
- Keyboard focus retained the two-pixel olive outline, and the focused navigation link’s underline expanded correctly. Reduced-motion CSS disables all transitions/animations and suppresses arrow movement; the operating-system preference was not toggled during this check.
- Desktop, mobile, article, media, and tablet screenshots were inspected. Palette values and contrast are unchanged. No React runtime, new JavaScript, external component code, or photo gallery was added.
- Deployment is a separate Vercel preview; the production address is not promoted by this branch’s deployment.


## Image fan preview

- Added an original Astro image fan inspired by ReactDrops Fan Gallery, with three labeled geometric demo artworks after the writing and notes. No ReactDrops code or demo media were copied.
- Production build passes with zero diagnostics. Native image links provide a no-JavaScript fallback.
- Browser checks covered click and Enter to open, accurate image/caption updates, Close and Escape, and focus returning to the selected card. Dialogs fit 390px and 320px mobile viewports. All three demo images loaded.
- Scoped reduced-motion styles suppress unfold and lift effects; the system preference was not toggled in this check.
- Local illustrations and the sample gallery are controlled by `showSamples`. README explains how to replace them with personal photos.

## Personal photo gallery

- Replaced the homepage demo fan with three selected personal photos, added an About portrait, and linked both pages to `/photos/`, containing all 16 approved individual photos.
- Excluded the three collages and identity document. The separate passport-style headshot contains only a photograph.
- All 16 optimized JPEG source files have no EXIF, IPTC, or XMP metadata. The built gallery contains 16 photo links, and its local asset references resolve.
- `npm run build` passed with zero errors, warnings, or hints. Desktop and mobile checks found no horizontal overflow at 1440px, 390px, and 320px; all 16 images loaded after lazy loading.
- Verified the standalone headshot in the native viewer, along with Close/Escape dismissal. Earlier checks verified keyboard opening and focus return for the shared viewer.
- Independent visual review accepted the desktop/mobile gallery and portrait-viewer captures with no required fixes. Full-page captures showed a fixed skip-link artifact; this capture limitation was recorded. The command-line design detector remained unavailable.
- Vercel reported the 16-photo preview READY. The deployed page was not fetched as part of verification.
