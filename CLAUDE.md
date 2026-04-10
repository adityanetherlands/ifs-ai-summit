# IFS AI Summit – Claude Code Instructions

## Project Overview
Single-page event website for IFS AI Leadership Summit (Silicon Valley, May 2026).
Deployed on Vercel from `main` branch.

## Design System (MUST follow)
- Theme: Dark premium (#090b10 bg, #6366f1 indigo accent)
- Typography: Lexend (headings, 700/800) + Inter (body, 400-700) via Google Fonts CDN
- Icons: Lucide via CDN (https://unpkg.com/lucide@latest) – no emojis as icons
- Single-file architecture: all CSS + JS embedded in each HTML file, no build tools
- Responsive: mobile-first, breakpoints at 768px and 1024px
- No em dashes – use en dashes (&ndash;) instead

## Feature Flag Rules (CRITICAL)
All changes from GitHub Issues labeled `feature-request` MUST be wrapped in the feature flag:
- Use `<div class="ff-ext-edit">...</div>` or `<span class="ff-ext-edit">` for inline
- Content with this class is hidden by default (display: none)
- Visible only when `?ext_edit=true` is appended to the URL
- NEVER remove existing content – only ADD new content behind the flag
- If modifying existing content, keep the original and add the replacement behind the flag

## Versioning Rules
After each feature-request implementation:
1. Determine the next version tag by running: git tag -l 'v1.*' | sort -V | tail -1
2. Increment the minor version (e.g., v1.1 -> v1.2)
3. Commit with message: "v1.X: <short description of change>"
4. Tag: git tag -a v1.X -m "v1.X: <description>"
5. Push both: git push origin main && git push origin v1.X

## Key Files
- `index.html` – main single-page site
- `Per Function pre-brief/future-of-function-*.html` – 11 pre-brief subpages
- All share the same design system and feature flag CSS/JS

## Testing
After making changes, verify:
- No syntax errors in HTML
- Feature flag content is properly wrapped
- Existing visible content is unchanged
