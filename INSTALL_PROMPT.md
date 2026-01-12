# Install Riad Kilani Design System

I need to install and set up the @riadkilani/design-system package in this project.

## Installation Steps

1. **Install the package:**
   ```bash
   npm install @syntaxsidekick/riadkilani-design-system
   ```

2. **Install peer dependencies:**
   ```bash
   npm install react react-dom
   ```

3. **Import the design system styles** in my main entry file (e.g., `src/main.tsx` or `src/index.tsx`):
   ```typescript
   import '@syntaxsidekick/riadkilani-design-system/styles';
   ```

4. **Configure Tailwind CSS** (if using Tailwind). Update `tailwind.config.js`:
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

5. **Start using components:**
   ```typescript
   import { Button, Card, CardHeader, CardTitle, CardContent } from '@syntaxsidekick/riadkilani-design-system';
   
   function App() {
     return (
       <Card>
         <CardHeader>
           <CardTitle>Welcome to Riad Kilani Portfolio</CardTitle>
         </CardHeader>
         <CardContent>
           <p className="mb-4">This site uses the Riad Kilani Design System</p>
           <Button>Get Started</Button>
         </CardContent>
       </Card>
     );
   }
   ```

## Available Components

The design system includes 40+ components:
- Layout: Card, Separator, AspectRatio, Resizable
- Navigation: Tabs, Breadcrumb, NavigationMenu, Pagination
- Forms: Input, Textarea, Select, Checkbox, Radio, Switch, Form
- Feedback: Alert, Progress, Skeleton, Toaster
- Overlays: Dialog, Sheet, Drawer, Popover, Tooltip
- Data: Table, Badge, Avatar, Calendar, Chart
- Interactive: Button, Toggle, Slider, Carousel, Accordion

## Design Tokens

The system uses:
- **Typography:** Trajan Pro (headings), Inter (body/UI), JetBrains Mono (code)
- **Spacing:** 8px base scale
- **Colors:** CSS custom properties for theming
- **Dark Mode:** Built-in support with `.dark` class

## Dark Mode Setup

```typescript
import { useState } from 'react';
import { Button } from '@syntaxsidekick/riadkilani-design-system';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
```

## Notes

- The design system is built for React 18+
- Requires Node.js 18+
- Uses Tailwind CSS for styling
- All components follow WCAG AA accessibility standards
- Includes TypeScript definitions

## Reference

- Demo: https://syntaxsidekick.github.io/rk-design-system
- Repository: https://github.com/SyntaxSidekick/rk-design-system
- Package: @syntaxsidekick/riadkilani-design-system
- npm: https://www.npmjs.com/package/@syntaxsidekick/riadkilani-design-system

Please help me complete this setup and verify everything is working correctly.
