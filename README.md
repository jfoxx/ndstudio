# Your Project's Title...
Your project's description...

## NDS Design System Framework

This project includes a [National Design Studio](https://ndstudio.gov/) (NDS) design system framework: shared blocks (gov-banner, hero, cards, columns, faq, header, footer) and CSS tokens for consistent government site styling. See [DESIGN.md](DESIGN.md) for block usage, tokens, and how to add the gov banner and NDS footer credit. A demo page is in `drafts/nds-demo.plain.html`; run with `npx -y @adobe/aem-cli up --no-open --forward-browser-logs --html-folder drafts` and open `/drafts/nds-demo`.

## Environments
- Preview: https://main--{repo}--{owner}.aem.page/
- Live: https://main--{repo}--{owner}.aem.live/

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
