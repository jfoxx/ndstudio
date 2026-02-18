# NDS (National Design Studio) Design System Framework

This project includes a design system framework aligned with sites built by the [National Design Studio](https://ndstudio.gov/) (e.g. safedc.gov, americabydesign.gov, techforce.gov, realfood.gov). The framework adds shared blocks and tokens so new government sites can be spun up with consistent structure and styling.

## NDS blocks

| Block | Purpose |
|-------|--------|
| **gov-banner** | Government/initiative strip auto-added at the top of every page (no authoring required). |
| **hero** | Large headline with optional full-bleed image; use variant `nds-overlay` for a dark gradient over the image. |
| **cards** | Grid of cards; use variant `steps` for numbered step cards. |
| **columns** | Multi-column layout for benefits or paths. |
| **faq** | Accordion of question/answer pairs. |
| **header** | Site navigation (fragment-based). |
| **footer** | Site footer (fragment-based); include the NDS credit line and link. |

## Gov banner (auto-created)

The gov banner is **automatically created and prepended** as the first section of every page. Authors do not need to add it.

**Default text:**
- Line 1: "AN OFFICIAL WEBSITE OF THE UNITED STATES GOVERNMENT"
- Line 2: "A National Design Studio Initiative"

**Optional overrides** (page or template metadata): set `gov-banner-line1` and/or `gov-banner-line2` to customize the text. If an authored gov-banner block already exists on the page, the auto-block is skipped (no duplicate).

## NDS footer credit

In your footer fragment, add the credit line and link, for example:

- "Designed in D.C. by [National Design Studio](https://ndstudio.gov/)"

Links to ndstudio.gov are automatically styled with NDS footer credit tokens. You can also wrap the line in an element with class `footer-credit` for consistent styling.

## Design tokens

NDS-specific CSS variables are defined in `styles/styles.css` under `:root`. Override them in `styles.css` or `lazy-styles.css` to theme per site (e.g. accent color, banner colors).

| Token | Purpose |
|-------|--------|
| `--nds-banner-bg` | Gov banner background (default: #1b1b1b). |
| `--nds-banner-text` | Gov banner text color (default: #ffffff). |
| `--nds-banner-font-size` | Gov banner font size (default: 12px). |
| `--nds-banner-padding-y`, `--nds-banner-padding-x` | Gov banner padding. |
| `--nds-hero-overlay` | Hero overlay color (e.g. rgba). |
| `--nds-hero-overlay-gradient` | Hero overlay gradient (used by `.hero.nds-overlay`). |
| `--nds-step-label-color`, `--nds-step-label-font-size` | Step card label (cards.steps variant). |
| `--nds-step-number-bg`, `--nds-step-number-color` | Step number badge (if used). |
| `--nds-faq-border` | FAQ item border. |
| `--nds-faq-focus-ring` | FAQ button focus ring. |
| `--nds-footer-credit-color`, `--nds-footer-credit-font-size` | Footer credit line. |

## Demo and testing

A draft page that showcases all NDS blocks is in `drafts/nds-demo.plain.html`. Run the dev server with:

```sh
npx -y @adobe/aem-cli up --no-open --forward-browser-logs --html-folder drafts
```

Then open the NDS demo path (e.g. `/nds-demo` or the path that corresponds to the draft file).

## References

- [AEM Edge Delivery documentation](https://www.aem.live/docs/)
- [Markup, sections, and blocks](https://www.aem.live/developer/markup-sections-blocks)
- Project [AGENTS.md](AGENTS.md) for code style and setup.
