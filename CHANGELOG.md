# Changelog

All notable changes to this project will be documented in this file.

## 1.0.1 - 2026-01-20

- Build: Precompile design system CSS via Tailwind CLI into `dist/styles.css`.
- Packaging: Add `style` entry and `sideEffects: ["*.css"]` to prevent CSS tree-shaking.
- Peers: Relax `react`/`react-dom` peer ranges to `>=18 <20`.
- Exports: Remove invalid `./fonts` subpath; export `./styles` only.
- Scripts: Use `npx tailwindcss` and add `@tailwindcss/cli` dev dependency.
- Docs: Rewrite README and update install/integration examples and paths.
- Repo: Expand `.gitignore` and normalize `repository.url`.

## 1.0.0 - 2026-01-20

- Initial release.
