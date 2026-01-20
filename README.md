# Riad Kilani Design System

A complete, production-ready design system for portfolio and CMS-driven websites. Built with modern web technologies and a focus on accessibility, consistency, and developer experience.

[![npm version](https://img.shields.io/npm/v/@syntaxsidekick/riadkilani-design-system.svg)](https://www.npmjs.com/package/@syntaxsidekick/riadkilani-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🌐 Live Demo

**[View Interactive Demo →](https://syntaxsidekick.github.io/rk-design-system)**

Explore all components, design tokens, and usage examples in the interactive documentation.

## ✨ Features

- **🎨 Logo-Based Color Palette** - Sophisticated color system derived from brand identity
- **📐 Typography System** - Trajan Pro for headings, Inter for body/UI, JetBrains Mono for code
- **📏 8px Spacing Scale** - Consistent, mathematical spacing system
- **🧩 Component Library** - 40+ production-ready React components
- **♿ Accessibility First** - WCAG AA compliant with full keyboard navigation
- **🌓 Dark Mode** - Built-in theme switching with system preference support
- **🎭 Motion System** - Purposeful animations with reduced-motion support
- **📱 Responsive** - Mobile-first design with fluid layouts
- **⚡ Performance** - Optimized with Vite and modern React patterns

## � Installation

```bash
npm install @syntaxsidekick/riadkilani-design-system
```

### Quick Start (Using in Your Project)

```typescript
// Import styles
import '@syntaxsidekick/riadkilani-design-system/styles';

// Import components
import { Button, Card, Input } from '@syntaxsidekick/riadkilani-design-system';

function App() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

See [INSTALL.md](./INSTALL.md) for complete installation and setup instructions.

## 🚀 Development (This Repo)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Build library for npm publishing
npm run build:lib
```

## 🏗️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn UI + Custom Components
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Icons:** Lucide React

## 📂 Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main application component
│   └── components/
│       ├── design-system/         # Design system showcase components
│       │   ├── SystemOverview.tsx
│       │   ├── BrandColors.tsx
│       │   ├── TypographySection.tsx
│       │   ├── SpacingLayout.tsx
│       │   ├── ComponentsShowcase.tsx
│       │   ├── MotionSystem.tsx
│       │   └── PagesShowcase.tsx
│       └── ui/                    # Reusable UI components
│           ├── button.tsx
│           ├── card.tsx
│           ├── input.tsx
│           └── ... (40+ components)
├── assets/                        # Static assets
├── styles/
│   ├── index.css                  # Global styles
│   ├── theme.css                  # Theme variables
│   ├── fonts.css                  # Font definitions
│   └── tailwind.css               # Tailwind configuration
└── main.tsx                       # Application entry point
```

## 🎨 Design Tokens

### Colors
- **Primary:** Brand blue derived from logo
- **Secondary:** Complementary accent colors
- **Neutral:** Comprehensive grayscale palette
- **Semantic:** Success, warning, error, info states

### Typography
- **Display/Headings:** Trajan Pro (elegant, professional)
- **Body/UI:** Inter (highly readable, modern)
- **Monospace:** JetBrains Mono (code blocks)

### Spacing Scale
```
4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
```

### Motion
- **Durations:** 0ms, 150ms, 250ms, 350ms, 500ms
- **Easing:** Linear, ease-in, ease-out, ease-in-out, bounce

## 🧩 Component Library

40+ production-ready components including:

- **Layout:** Card, Separator, Aspect Ratio, Resizable
- **Navigation:** Tabs, Breadcrumb, Navigation Menu, Pagination
- **Forms:** Input, Textarea, Select, Checkbox, Radio, Switch
- **Feedback:** Alert, Toast, Progress, Skeleton
- **Overlays:** Dialog, Sheet, Drawer, Popover, Tooltip
- **Data Display:** Table, Badge, Avatar, Calendar
- **Interactive:** Button, Toggle, Slider, Carousel, Accordion

## ♿ Accessibility

- WCAG AA compliant color contrast
- Full keyboard navigation support
- Screen reader optimized
- Focus indicators on all interactive elements
- Reduced motion support for animations
- Semantic HTML throughout

## 🎭 Motion Philosophy

Subtle, purposeful animations that:
- Guide user attention
- Provide interaction feedback
- Create spatial relationships
- Respect user preferences (reduced-motion)

### Animation Types
- **Entrance Patterns:** Fade, slide, scale
- **Directional Motion:** Slide from all directions
- **Hover States:** Scale, lift, glow, color transitions
- **Stagger Effects:** Sequential child animations

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 Usage

The design system is showcased in an interactive documentation site with live examples:

- **Overview:** System introduction and principles
- **Brand & Colors:** Color palette and usage guidelines
- **Typography:** Font pairings and hierarchy
- **Spacing & Layout:** Grid system and spacing scale
- **Components:** Interactive component examples
- **Motion:** Animation patterns and timing
- **Pages:** Full page templates

Navigate between sections using the header navigation. Sections persist across page refreshes via URL hash.

## 🔧 Development

### Adding New Components

1. Create component in `src/app/components/ui/`
2. Follow existing patterns and prop conventions
3. Include all interaction states (hover, focus, active, disabled)
4. Add ARIA labels and keyboard support
5. Document in ComponentsShowcase

### Extending the Theme

1. Add tokens to `src/styles/theme.css`
# Riad Kilani Design System

A production-ready React design system for portfolio and CMS-driven sites. Accessible, consistent, and easy to integrate into any React app.

[![npm version](https://img.shields.io/npm/v/@syntaxsidekick/riadkilani-design-system.svg)](https://www.npmjs.com/package/@syntaxsidekick/riadkilani-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Live Demo

https://syntaxsidekick.github.io/rk-design-system

## Features

- Accessible, Radix-powered components (40+), fully typed
- Prebuilt CSS bundle (no Tailwind required to consume)
- Dark mode tokens and motion system
- Tree-shakeable ESM + CJS with TypeScript types
- Works with Vite, Next.js (App/Pages), CRA

## Install

```bash
npm install @syntaxsidekick/riadkilani-design-system
```

Peer deps:

```bash
npm install react react-dom
```

## Quick Start

1) Import styles once at your app entry

```ts
// Vite/CRA: src/main.tsx or src/index.tsx
import '@syntaxsidekick/riadkilani-design-system/styles';
```

```ts
// Next.js (App Router): app/layout.tsx
import '@syntaxsidekick/riadkilani-design-system/styles';
```

2) Use components

```tsx
import { Button, Card, Input } from '@syntaxsidekick/riadkilani-design-system';

export default function Example() {
  return (
    <Card className="max-w-sm p-6 space-y-4">
      <Input placeholder="Email" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Next.js App Router Guide

Example layout and page using the design system:

```tsx
// app/layout.tsx
import '@syntaxsidekick/riadkilani-design-system/styles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Powered by Riad Kilani Design System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx
import { Card, CardHeader, CardTitle, CardContent, Button, Input } from '@syntaxsidekick/riadkilani-design-system';

export default function Page() {
  return (
    <main className="container mx-auto p-8">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Email" />
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </main>
  );
}
```

Tailwind optional: If your app also uses Tailwind, keep your own config. Optionally include the DS dist path so Tailwind scans DS files for classnames (not required to use the DS):

```js
// tailwind.config.js (optional)
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@syntaxsidekick/riadkilani-design-system/dist/**/*.{js,mjs}',
  ],
  theme: { extend: {} },
  plugins: [],
}
```

## Theming & Dark Mode

Design tokens are provided via CSS custom properties and shipped in the CSS bundle. Override in your app as needed:

```css
:root {
  /* example overrides */
  --primary: 217 91% 60%;
}
.dark {
  --primary: 217 91% 60%;
}
```

Quick toggle example:

```tsx
import { useState } from 'react';
import { Button } from '@syntaxsidekick/riadkilani-design-system';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        setIsDark((v) => !v);
        document.documentElement.classList.toggle('dark');
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </Button>
  );
}
```

## API Surface

- Components: buttons, inputs, dialogs, sheets, dropdowns, tabs, tables, cards, alerts, tooltips, accordions, carousels, calendars, charts, and more.
- Utilities: `cn()`.
- Hooks: `useIsMobile()`.

See full exports in [src/components.ts](src/components.ts), [src/utils.ts](src/utils.ts), and [src/hooks.ts](src/hooks.ts). For more examples, see [EXAMPLES.md](EXAMPLES.md).

## Troubleshooting

- Styles not applying: Ensure you imported `@syntaxsidekick/riadkilani-design-system/styles` once at the root.
- Peer dependency warnings: The DS supports React >=18 <20. Install matching `react` and `react-dom` versions in your app.
- Using Tailwind: Not required. If you use it, the DS CSS is already compiled. The optional `content` include above helps for advanced class scanning.

## Development (this repo)

```bash
npm install
npm run dev        # demo site
npm run build      # demo build → docs/
npm run build:lib  # library build → dist/
npm run preview
```

Docs: [INSTALL.md](INSTALL.md), [INTEGRATION.md](INTEGRATION.md)

## Build & Publish

```bash
npm run build:lib
npm publish --access public
```

For local testing in another project:

```bash
# in this repo
npm run build:lib && npm link

# in your other project
npm link @syntaxsidekick/riadkilani-design-system
```

## Tech Stack

- React + TypeScript, Vite
- Radix UI underpinnings + shadcn-inspired patterns
- Tailwind v4 for authoring (precompiled for consumers)
- Motion (Framer-like API) and Lucide icons

## License

MIT © 2026 Riad Kilani