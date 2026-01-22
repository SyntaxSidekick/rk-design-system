
# Riad Kilani Design System v2

Version 2 removes Tailwind and PostCSS. The system is now pure CSS (tokens, themes, motion, components) with optional vanilla JS behaviors.

## Install

```
npm install @syntaxsidekick/riadkilani-design-system
```

## Usage

Import the compiled CSS and optional JS API:

```js
// ESM
import '@syntaxsidekick/riadkilani-design-system/styles'
import DS, { init, showToast } from '@syntaxsidekick/riadkilani-design-system'

// Initialize behaviors after DOM is ready
init()
showToast({ title: 'Hello', message: 'Design System v2' })
```

Or include via HTML:

```html
<link rel="stylesheet" href="/node_modules/@syntaxsidekick/riadkilani-design-system/dist/riadkilani-design-system.css">
<script type="module">
  import DS from '/node_modules/@syntaxsidekick/riadkilani-design-system/dist/index.mjs'
  DS.init()
  DS.showToast({ title: 'Welcome', message: 'No Tailwind needed' })
  </script>
```

## What Changed in v2

- Tailwind and PostCSS removed; no utility classes required.
- CSS tokens: colors, spacing, radius, motion in `src/ds/*.css`.
- The JS behaviors attach to `window.DesignSystem` and are exported for ESM/CJS.

## Build & Publish

```
npm run build
npm version 2.0.0
npm publish --access public
```

## Files

Outputs are emitted to `dist/`:

- `index.mjs` and `index.cjs` (library entry)
- `style.css` (bundled CSS)
  