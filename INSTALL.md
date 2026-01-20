# Installation Guide

## Quick Install

```bash
npm install @syntaxsidekick/riadkilani-design-system
```

## Setup

### 1. Import Styles

Add the design system styles to your main CSS/SCSS file or entry point:

```css
/* Import the prebuilt design system CSS */
@import '@syntaxsidekick/riadkilani-design-system/styles';
```

Or in your JavaScript/TypeScript entry file:

```typescript
import '@syntaxsidekick/riadkilani-design-system/styles';
```

### 2. Configure Tailwind CSS

If you're using Tailwind CSS, extend your `tailwind.config.js`:

```javascript
// Only needed if you also use Tailwind in your app
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include DS only if you want Tailwind to scan its JS for classnames
    "./node_modules/@syntaxsidekick/riadkilani-design-system/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. TypeScript Configuration (Optional)

If using TypeScript, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "types": ["react", "react-dom"],
    "jsx": "react-jsx"
  }
}
```

## Usage

### Import Components

```typescript
import { Button, Card, Input } from '@syntaxsidekick/riadkilani-design-system';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  );
}
```

### Import Utilities

```typescript
import { cn } from '@syntaxsidekick/riadkilani-design-system';

// Merge class names with Tailwind
const className = cn('base-class', condition && 'conditional-class');
```

### Import Hooks

```typescript
import { useIsMobile } from '@syntaxsidekick/riadkilani-design-system';

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
}
```

## Available Components

- **Layout:** Card, Separator, AspectRatio, Resizable
- **Navigation:** Tabs, Breadcrumb, NavigationMenu, Pagination
- **Forms:** Input, Textarea, Select, Checkbox, Radio, Switch, Form
- **Feedback:** Alert, Progress, Skeleton, Sonner (Toast)
- **Overlays:** Dialog, Sheet, Drawer, Popover, Tooltip
- **Data Display:** Table, Badge, Avatar, Calendar, Chart
- **Interactive:** Button, Toggle, Slider, Carousel, Accordion, Collapsible
- **Command:** Command, CommandDialog

## Theming

The design system uses CSS custom properties for theming. You can override these in your own CSS:

```css
:root {
  --primary: 217 91% 60%;
  --secondary: 210 40% 96%;
  /* Override other theme variables */
}

.dark {
  --primary: 217 91% 60%;
  /* Dark mode overrides */
}
```

## Font Setup

The design system uses three font families:

- **Trajan Pro** - Display/Headings
- **Inter** - Body/UI text
- **JetBrains Mono** - Code/Monospace

Fonts are loaded from reputable CDNs via the built-in CSS. No extra setup required.

## Dark Mode

The design system supports dark mode out of the box. Add a dark mode toggle:

```typescript
import { useState } from 'react';
import { Button } from '@riadkilani/design-system';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button onClick={toggleTheme}>
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}
```

## Peer Dependencies

Ensure you have these peer dependencies installed:

```bash
npm install react react-dom
```

## Next Steps

- Browse the [Component Documentation](#) for detailed examples
- Check out [Design Tokens](#) for customization options
- Read the [Accessibility Guide](#) for best practices

## Troubleshooting

### Styles not applying

Make sure you've imported the CSS files in your entry point.

### TypeScript errors

Ensure you have `@types/react` and `@types/react-dom` installed.

### Build errors

The design system requires Node.js 18+ and React 18+.

## Support

For issues or questions, please visit:
- [GitHub Issues](https://github.com/SyntaxSidekick/rk-design-system/issues)
- [Documentation](https://github.com/SyntaxSidekick/rk-design-system)
