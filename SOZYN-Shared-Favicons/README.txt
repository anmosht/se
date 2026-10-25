SOZYN SHARED FAVICONS

1. Upload the branding folder to the root of github.com/anmosht/se.
2. Enable GitHub Pages for the repository, deploying the branch/root containing branding.
   If Pages already publishes another folder, put branding in that published folder.
3. Confirm this URL opens JavaScript before changing any portal:
   https://anmosht.github.io/se/branding/favicon.js
4. Inside <head> on EVERY page or shared header, add:
   <script defer src="https://anmosht.github.io/se/branding/favicon.js"></script>
   Remove old rel="icon", rel="shortcut icon", apple-touch-icon and mask-icon links.
   For PHP, the supplied favicon.php can be included from the site's document root:
   <?php require_once $_SERVER['DOCUMENT_ROOT'].'/favicon.php'; ?>
   Upload favicon.php to EACH portal's document root first.
5. Apply to SOZYN main site, Employer Suite, Jobseeker Board, Jobs/JobWynd,
   MoonSpy, WyND, admin/SRC/GenR/Bugner/SoFin, registration, login, ads,
   idcards, documentation and any additional portal. The script automatically
   removes competing icon declarations, including later dynamic additions.
6. website-replacements contains ONLY the two supplied pages changed to load
   the shared file. Deploy them after step 3 succeeds. No other portal source
   was present in the uploaded ZIP, so those portals require step 4.

MAINTENANCE
Replace branding/icons/favicon.svg, favicon.ico and apple-touch-icon.png
with matching artwork. Increase VERSION in branding/favicon.js and commit.
All connected pages pick up changes after GitHub Pages deploys and browser/CDN
caches refresh. Do not use github.com/blob or raw.githubusercontent.com as
script hosting. Those are not the published GitHub Pages URL.
GitHub Pages availability depends on repository settings and plan. This package
has not been pushed or published. If Pages cannot be enabled, deploy branding
on https://sozyn.co.in/branding/ and change the script URL in every portal once.
A Content-Security-Policy must permit the script and images from the chosen host.

AUDIT OF UPLOADED ZIP
- index.html declares /favicon.ico, three PNG sizes, /favicon-180x180.png
  and a root manifest.
- favicon.php and favicon-head.html point to /assets/icons/ with a different
  version, while assets/icons/favicon-head.html uses v=1.
- login/login-direct-portals.html contains an inline S favicon AND SOZYN ICO/SVG.
- Root favicon.ico and assets/icons/favicon.ico are byte-identical. Duplicate
  copies alone are not the conflict: mixed declarations and cached paths are.
- site.webmanifest references another pair of root PNGs for installed apps.

LIMITS AND FALLBACKS
Keep /favicon.ico at each portal root for browsers and crawlers that request
that conventional path. When branding changes, deploy the SAME ICO there too.
The shared script manages browser icons, not Android native launcher icons.
For installed PWAs, preserve each app's own manifest (start_url/scope/name).
Update its icons to matching 192px/512px artwork and clear service-worker icon
caches as needed. Replacing an installed home-screen icon may require reinstall.
Apple home-screen icons and browsers with JavaScript disabled may require static
icon links in <head> pointing to the same published icons. The JS approach does
not guarantee immediate favicon updates in every browser, search result or app.
