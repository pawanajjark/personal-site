# Blog session handoff — 21 November 2026

## Resume here

Work in `/Users/pawan/repo/personal/personal-site` on branch `codex/personal-blog-camera-hotwheels`. The current work is complete and committed locally on that branch. The user requested keeping this work off `main`, which was restored to its previous commit (`9967980`). The user explicitly requested **no push**. Publishing or deployment was not requested. Read this handoff before continuing the blog; the older `PERSONAL_SITE_AGENT_HANDOFF.md` describes the original site setup, not the latest blog decisions.

Preview: `http://localhost:4321/writing/i-have-the-money-now/`.

The default shell Node version is too old for this Astro project. A working local command is:

```sh
export PATH=/Users/pawan/.nvm/versions/node/v24.17.0/bin:$PATH
npm run dev
```

Use `npm run build` with the same PATH for type checking and the production build. The dev server may still be running; check port 4321 before starting another instance.

## User preferences and final behaviour

- This is Pawan's personal site. Writing should sound simple, personal, and like him. Keep the concrete experiences; avoid turning every paragraph into a lesson or borrowing another blogger's voice.
- The post, **I Have the Money Now**, connects having few childhood toys, playing with other children's toys, becoming social and a people pleaser, being told to study and enjoy life later, earning well as an SDE, collecting Hot Wheels, and enjoying photography with a black Sony Cybershot DSC-T20.
- The Hot Wheels popup is a compact **grid of 14 cars**, with less white space around the images. The user explicitly reverted the experiment that showed one car at a time. Preserve the grid.
- On each browser page load, six unique cars are randomly selected from those 14 for floating stickers. Their images, captions, and accessible labels update together. Desktop stickers drift along both article margins. Below 1280px, the existing compact layout shows three overlapping stickers above the text.
- Both collection and camera use Caveat handwriting and curved SVG arrows. Their buttons say “Click to explore my collection” and “Click to explore my clicks.”
- The camera is a larger, straight-on reconstruction made with HTML/CSS, centred inside the reading column. The user disliked the angled product photograph and side placement. Drag the front cover down or click it to open the albums. Cover animation: 300ms; additional lens reveal pause: 250ms. Preserve the shorter pause.
- The user's 42 photographs are accessible through the camera, not displayed directly in the article. Four albums: “People I captured,” “Everyday things,” “Out and about,” and “Lights and little things.” Every photo has a descriptive title and alt text, rather than a DSC filename.
- Album thumbnails are slightly tilted Polaroid cards. Six people thumbnails have face-focused crops; the viewer opens the full photos. The photo viewer has previous/next buttons, left/right keyboard navigation, horizontal swipes/dragging, a counter, wraparound, and directional sliding transitions. Reduced-motion preferences are respected. These photo features remain even though the equivalent Hot Wheels viewer was reverted.

## Files to inspect for the next change

- `src/content/posts/i-have-the-money-now.mdx`: article and camera placement.
- `src/components/HotWheelsCollection.astro`: all 14 car records, browser-side random selection, stickers, handwritten callout, compact grid popup.
- `src/components/CameraExplorer.astro`: camera reconstruction, cover gesture, timing, album dialog, handwritten callout.
- `src/components/CameraPhotos.astro`: album selection and Polaroid styling.
- `src/data/camera-photos.ts`: photo categories, titles, alt text, original/thumbnail mapping.
- `src/components/ImageFan.astro` and `src/lib/image-viewer.ts`: reusable photo gallery/viewer, transitions and input controls. These also affect the site's pre-existing photo galleries.
- `src/layouts/Post.astro`: inserts Hot Wheels only for this post.
- `src/styles/global.css`: shared Caveat font face; the main site typography remains DM Sans.

## Assets and provenance

- `src/assets/cybershot/`: 42 resized WebP photos plus six face crops. Originals remain in `/Users/pawan/Downloads/Drive Download Nov 21 2026/`. Photos were resized/oriented without colour filters; embedded source metadata was stripped during conversion.
- `public/images/hot-wheels/`: 14 matching catalogue images. `sources.json` records source pages and original image URLs from HW Collectors Garage. Grid captions link to each release.
- `public/fonts/caveat-medium.ttf` and `public/licenses/Caveat-OFL.txt`: locally hosted handwriting font and license.
- `public/images/camera/`: the earlier Sony reference photograph and provenance remain in the repository, but the displayed camera is now reconstructed in code.
- Original collection recording: `/Users/pawan/Downloads/WhatsApp Video 2026-11-21 at 8.00.12 PM.mp4`. It showed 53 collection entries. No video is embedded in the post.

## Validation

Production build/type check passes. Browser checks covered desktop/mobile layouts, gallery opening/closing, camera drag and keyboard activation, album selection, photo arrows and swipes, direction changes, wraparound, and random sticker selection across three reloads (six unique cars each time; popup still contains 14).

The current implementation has no known blocking issue. Continue with the user's next requested change; preserve their accepted choices above.
