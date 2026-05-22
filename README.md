# Yacht Sales West

A multi-page marketing website for **Yacht Sales West** — *Inspiring Confidence in Yachting*. Built with vanilla HTML and Bootstrap. Every page shares a single stylesheet and script.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Bootstrap | 4.6.2 | Grid & utilities |
| jQuery | 3.7.1 | DOM & event handling |
| Owl Carousel | 2.3.4 | Sliders & carousels |
| Font Awesome | 6.5.0 | Icons |
| Mona Sans | — | Typeface (Google Fonts) |

All libraries are loaded from CDNs; there is no build step or package manager.

## Pages

| File | Page |
|---|---|
| `home.html` | Home / landing |
| `about.html` | About |
| `brands.html` | Brands |
| `service.html` | Service |
| `sell-trade.html` | Sell & Trade |
| `financing.html` | Financing |
| `france-pickup.html` | France pickup program |
| `events.html` | Events listing |
| `event-details.html` | Single event |
| `journal.html` | Journal listing |
| `journal-entry.html` | Single journal entry |
| `team.html` | Team |
| `testimonials.html` | Testimonials |
| `contact.html` | Contact |

## Project Structure

```
yacht-sales-west-html/
├── *.html                  # One file per page (see table above)
├── assets/
│   ├── css/style.css       # All CSS — shared across every page
│   ├── js/script.js        # All JS/jQuery — shared across every page
│   ├── fonts/              # acumin-pro, century-schoolbook, tw-cen-mt
│   └── images/             # Per-page image folders (home/, about/, …)
├── DESIGN-INSTRUCTIONS.md  # Design tokens & page-creation rules
└── README.md
```

## Design Tokens

| Name | Hex |
|---|---|
| Blue (primary) | `#042C65` |
| Blackish Blue | `#000B1B` |
| Slate | `#333333` |
| Lightest Blue | `#F5F9FF` |

Primary typeface: **Mona Sans**. See `DESIGN-INSTRUCTIONS.md` for the full design reference.

## Running Locally

No build is required — open `home.html` directly in a browser, or serve the folder so relative paths resolve cleanly:

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

Then visit `http://localhost:8000/home.html`.

## Conventions

- All CSS lives in `assets/css/style.css`; all JS in `assets/js/script.js`. Add page-specific blocks at the bottom, clearly commented.
- CSS classes and IDs are prefixed `ysw` (e.g. `.yswHeader`, `.yswNav`).
- JavaScript runs inside `$(document).ready(...)`; check an element exists before initializing a carousel.
- Images use exact filenames from `assets/images/<page>/`.
