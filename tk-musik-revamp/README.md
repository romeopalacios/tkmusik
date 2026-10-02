# TK Musik Akademy — Modern Static Revamp

A clean, responsive, multi-page rebuild of the current TK Musik Akademy website.

## Included pages
- `index.html` — Home
- `about.html` — About + full photo gallery
- `classes.html` — Music lessons / private piano class
- `sales.html` — Piano sales
- `repair.html` — Stage piano repair
- `events.html` — Pianist for hire
- `contact.html` — Contact

## Shared files
- `assets/css/styles.css` — all styling / responsive layout
- `assets/js/main.js` — mobile nav, scroll reveal, static form behavior

## How to use in VS Code
1. Open the `tk-musik-revamp` folder in VS Code.
2. Open `index.html` directly or use the Live Server extension.
3. Deploy the folder as-is to GitHub Pages, Netlify, Cloudflare Pages, etc.

## Images
The rebuild preserves the current TK Musik images by referencing their existing Wix-hosted asset URLs. This avoids losing or recompressing the current site's photos while making the project immediately deployable.

If you later download the originals, put them in `assets/images/` and replace the image `src` URLs with local paths.

## Forms
Because this is a static build, the forms currently launch an email draft to `tysoulmusic@gmail.com`. For true background form submission, replace the form handler with Formspree, Netlify Forms, EmailJS, or your own API endpoint.

## Current business information used
- 4912 Van Noord Avenue, Los Angeles, CA 91423
- 619-400-9938
- tysoulmusic@gmail.com
- Tue–Fri 1:00pm–7:00pm
- Sat 11:00am–5:00pm
- Sun–Mon Office Hours All Day
