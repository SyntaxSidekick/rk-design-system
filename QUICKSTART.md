# Quick Start Example

This is a minimal example of how to use the Riad Kilani Design System in a new React project.

## Create New Project

```bash
# Create a new Vite + React project
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install

# Install the design system
npm install @syntaxsidekick/riadkilani-design-system

# Install peer dependencies (if not already installed)
npm install react react-dom lucide-react
```

## Setup Files

### 1. `src/main.tsx`
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Import design system styles
import '@syntaxsidekick/riadkilani-design-system/styles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### 2. `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include design system components
    "./node_modules/@syntaxsidekick/riadkilani-design-system/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. `src/App.tsx`
```typescript
import { useState } from 'react'
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent,
  CardFooter,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Badge,
  Separator
} from '@riadkilani/design-system'
import { Moon, Sun, Github, Linkedin, Mail } from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">Welcome to My Portfolio</CardTitle>
                  <CardDescription className="text-lg">
                    Full Stack Developer | UI/UX Enthusiast
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge>React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Building beautiful, accessible web experiences with modern technologies.
                This portfolio uses the Riad Kilani Design System for consistent,
                professional UI components.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="ghost">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </CardFooter>
          </Card>

          <Separator />

          {/* Projects Section */}
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>An awesome web application</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Description of your amazing project goes here.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">View Project →</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>Another great project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>More details about this project.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link">View Project →</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Git</Badge>
                  <Badge>Vite</Badge>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your bio and background information here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Built with Riad Kilani Design System</p>
        </div>
      </footer>
    </div>
  )
}

export default App
```

### 4. `src/index.css`
```css
@import "tailwindcss";
```

## Run the Project

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## Customize

### Add More Components

The design system includes 40+ components. Explore them:

```typescript
import {
  // Layout
  Card, Separator, AspectRatio, ScrollArea,
  
  // Forms
  Input, Textarea, Select, Checkbox, Switch, Slider,
  Label, Form,
  
  // Navigation
  Breadcrumb, NavigationMenu, Pagination,
  
  // Feedback
  Alert, AlertDialog, Dialog, Progress, Skeleton,
  Toast, Toaster,
  
  // Data
  Table, Avatar, Calendar, Chart,
  
  // And many more...
} from '@riadkilani/design-system'
```

### Theming

The design system uses CSS variables for theming. You can customize colors in your `index.css`:

```css
@import "tailwindcss";

:root {
  /* Override design system variables */
  --primary: 220 90% 56%;
  --primary-foreground: 0 0% 100%;
  /* Add more customizations */
}
```

## Deploy

### Build for production
```bash
npm run build
```

### Deploy to various platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages:**
Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

Then deploy the `dist` folder.

## Need Help?

- [Design System Demo](https://syntaxsidekick.github.io/rk-design-system)
- [Component Documentation](https://syntaxsidekick.github.io/rk-design-system)
- [GitHub Issues](https://github.com/SyntaxSidekick/rk-design-system/issues)
