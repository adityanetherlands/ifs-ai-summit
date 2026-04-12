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
- Do NOT create git tags or push tags -- the GitHub Actions workflow handles versioning automatically after merge
- Do NOT include version numbers (e.g., "v1.X:") in commit messages
- Commit with a short descriptive message only (e.g., "Add countdown timer to hero section")

## Key Files
- `index.html` – password-gated splash page
- `summit.html` – main single-page site (linked from index.html)
- `Per Function pre-brief/future-of-function-*.html` – 11 pre-brief subpages
- All share the same design system and feature flag CSS/JS

## Bot Behavior Rules (CRITICAL for automated workflows)
- ALWAYS make code changes and commit them – never skip implementation
- Do NOT assume a feature "already exists" based on git history or old branches
- Check the CURRENT state of files on the current branch to determine what exists
- If similar content exists, still implement the requested change behind the feature flag
- You MUST produce at least one commit for every feature-request issue
- Do NOT run `git push` – the GitHub Actions workflow handles pushing automatically

## Testing
After making changes, verify:
- No syntax errors in HTML
- Feature flag content is properly wrapped
- Existing visible content is unchanged
