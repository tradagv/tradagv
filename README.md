# TradAGV website

Custom-built site (plain HTML, CSS and JavaScript, no template or framework).

## Files
- `index.html`: page structure and the English texts
- `styles.css`: design (colors and fonts at the top, in `:root`)
- `script.js`: Romanian/English texts (`TRANSLATIONS`), language switch, menu, animations

## Changing a text
Edit it in `script.js` under `en` and `ro`. For English, also change the same text in `index.html`
(that's what search engines read before the script runs).

## Uploading to GitHub (repo `tradagv`)
1. Open the repository on github.com.
2. **Delete the old files** that are no longer used: `i18n.js`, `scripts.js`, `bg-masthead.jpg`,
   `demo-image-01.jpg`, `demo-image-02.jpg`, `ipad.png` (and any other leftover template files/folders).
3. **Add file → Upload files**, then drag in `index.html`, `styles.css`, `script.js` and `README.md`.
   They replace the old `index.html` and `styles.css`.
4. Commit. The site updates at https://tradagv.github.io/tradagv/ within a minute or two.

## After changing styles.css or script.js
Bump the `?v=1` in `index.html` (`styles.css?v=1`, `script.js?v=1`) to `v=2`, `v=3`…
so visitors' browsers load the new version right away.
