# Riad Kilani Design System - Integration Guide

## ✅ Successfully Separated!

Your design system is now properly separated from the demo site with clean code splitting.

## 📁 Project Structure

```
├── src/
│   ├── lib/                    # 📦 Library code (published to npm)
│   │   ├── components/         # All UI components
│   │   └── styles.css          # Source CSS (not published)
│   ├── app/                    # 🎨 Demo site (not published)
│   │   ├── components/
│   │   │   ├── ui/             # Re-exports from lib
│   │   │   ├── design-system/  # Demo-specific showcases
│   │   │   └── figma/          # Demo utilities
│   │   └── App.tsx             # Demo application
│   ├── styles/                 # Original CSS files
│   ├── index.ts                # Main library entry
│   ├── components.ts           # Component exports
│   ├── hooks.ts                # Hook exports
│   └── utils.ts                # Utility exports
├── dist/                       # 📦 Built library (published)
│   ├── index.mjs               # ES module build
│   ├── index.cjs               # CommonJS build
│   ├── index.d.ts              # TypeScript definitions
│   └── styles.css              # Bundled CSS
└── docs/                       # 🎨 Built demo site (GitHub Pages)
```

## 🚀 Build Commands

### Build Library (for npm)
```bash
npm run build:lib
```
This creates:
- `dist/index.mjs` - ES module
- `dist/index.cjs` - CommonJS module  
- `dist/index.d.ts` - TypeScript types
- `dist/styles.css` - Bundled styles

### Build Demo Site (for GitHub Pages)
```bash
npm run build:demo
```
This creates the `docs/` folder for deployment.

### Development
```bash
npm run dev
```
Runs the demo site locally.

## 📦 Publishing to npm

### 1. Update version in package.json
```bash
npm version patch  # or minor, or major
```

### 2. Build the library
```bash
npm run build:lib
```

### 3. Publish to npm
```bash
npm publish --access public
```

## 🔌 Using in Other Projects

### Installation

#### From npm
```bash
npm install @syntaxsidekick/riadkilani-design-system
```

#### From GitHub
```bash
npm install github:SyntaxSidekick/rk-design-system
```

#### Local testing
```bash
# In the design system folder
npm link

# In your project folder
npm link @syntaxsidekick/riadkilani-design-system
```

### Setup in Your Project

#### 1. Install peer dependencies
```bash
npm install react react-dom
```

#### 2. Import styles in your main entry file

**In `src/main.tsx` or `src/index.tsx`:**
```typescript
import '@syntaxsidekick/riadkilani-design-system/styles';
```

#### 3. Configure Tailwind CSS (if using Tailwind v4+)

**In `tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@syntaxsidekick/riadkilani-design-system/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### 4. Use components

```typescript
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@syntaxsidekick/riadkilani-design-system';

function App() {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Using Riad Kilani Design System</p>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## 🎨 Available Components

### Layout
- Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- Separator, AspectRatio, ResizablePanel

### Navigation
- Tabs, Breadcrumb, NavigationMenu, Pagination
- Sidebar, Sheet, Drawer

### Forms
- Input, Textarea, Select, Checkbox, Radio, Switch
- Form, Label, InputOTP, Calendar

### Feedback
- Alert, AlertDialog, Dialog, Toast (Sonner)
- Progress, Skeleton, Badge

### Data Display
- Table, Avatar, Badge, Chart, Carousel

### Interactive
- Button, Toggle, Slider, Accordion, Collapsible
- Command, ContextMenu, DropdownMenu, HoverCard
- Menubar, Popover, Tooltip

### Utilities
- `cn()` - Class name utility
- `useIsMobile()` - Mobile detection hook

## 🌗 Dark Mode

The design system includes built-in dark mode support:

```typescript
import { Button } from '@syntaxsidekick/riadkilani-design-system';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
```

## 🔍 What Gets Published

When you run `npm publish`, only these files are included:
- `dist/` - Compiled library code
- `src/assets/fonts/` - Font files (if any)
- `README.md` - Documentation
- `LICENSE` - License file
- `package.json` - Package metadata

The demo site (`src/app/`, `docs/`) is **NOT** published to npm.

## ⚙️ How It Works

### Code Splitting Strategy

1. **Library Code** (`src/lib/`)
   - Contains all UI components
   - Builds to `dist/` folder
   - Published to npm
   - Tree-shakeable (import only what you need)

2. **Demo Code** (`src/app/`)
   - Imports from `src/lib/` via re-exports
   - Builds to `docs/` folder
   - Deployed to GitHub Pages
   - NOT published to npm

3. **Separate Builds**
   - `build:lib` - Creates npm package
   - `build:demo` - Creates demo website
   - No circular dependencies
   - Clean separation of concerns

### Import Resolution

**In the demo:** `import { Button } from './components/ui/button'`
- Points to `src/app/components/ui/index.ts`
- Which re-exports from `src/lib/components/button.tsx`

**In consuming projects:** `import { Button } from '@riadkilani/design-system'`
- Points to `dist/index.mjs` (or `.cjs`)
- Which exports from compiled library code

## 🐛 Troubleshooting

### CSS not loading
Make sure you imported the styles:
```typescript
import '@syntaxsidekick/riadkilani-design-system/styles';
```

### Components not styled
Ensure your Tailwind config includes the design system in `content`:
```javascript
content: [
  "./node_modules/@syntaxsidekick/riadkilani-design-system/dist/**/*.{js,mjs}",
]
```

### TypeScript errors
The package includes TypeScript definitions. Make sure:
- You're using TypeScript 5.0+
- Your `tsconfig.json` includes `"moduleResolution": "bundler"` or `"node16"`

### Testing locally before publishing
Use `npm link` to test the package locally:
```bash
# In design system repo
npm run build:lib
npm link

# In test project
npm link @syntaxsidekick/riadkilani-design-system
```

## 📚 Next Steps

1. ✅ Build the library: `npm run build:lib`
2. ✅ Test locally with `npm link`
3. ✅ Publish to npm: `npm publish --access public`
4. 🚀 Use in your projects!

## 🔗 Resources

- Demo: https://syntaxsidekick.github.io/rk-design-system
- GitHub: https://github.com/SyntaxSidekick/rk-design-system
- Issues: https://github.com/SyntaxSidekick/rk-design-system/issues
