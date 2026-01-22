# Riad Kilani Design System (Reset)

This repository has been reset to install the new design system that does not use Tailwind or PostCSS.

## Next Steps
- Add the new design system source under `src/` or your preferred structure.
- Update `package.json` build scripts to produce `dist/` outputs (`index.mjs`, `index.cjs`, `index.d.ts`).
- Ensure `README.md`, `LICENSE`, and `files` field in `package.json` match your publish intent.

## NPM Publishing
- Scoped package is set to publish as public via `publishConfig.access`.
- Run `npm login` once locally, then `npm publish --access public` when `dist/` is ready.
