import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

// Import sections
import { SystemOverview } from "./components/design-system/SystemOverview";
import { BrandColors } from "./components/design-system/BrandColors";
import { TypographySection } from "./components/design-system/TypographySection";
import { SpacingLayout } from "./components/design-system/SpacingLayout";
import { ComponentsShowcase } from "./components/design-system/ComponentsShowcase";
import { MotionSystem } from "./components/design-system/MotionSystem";
import { PagesShowcase } from "./components/design-system/PagesShowcase";
import { ExamplesShowcase } from "./components/design-system/ExamplesShowcase";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Get initial tab from URL hash or default to 'overview'
  const getInitialTab = () => {
    const hash = window.location.hash.slice(1);
    const validTabs = ['overview', 'brand', 'typography', 'spacing', 'components', 'examples', 'motion', 'pages'];
    return validTabs.includes(hash) ? hash : 'overview';
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Update URL hash when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    window.location.hash = value;
  };

  // Listen for hash changes (back/forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validTabs = ['overview', 'brand', 'typography', 'spacing', 'components', 'examples', 'motion', 'pages'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen bg-background text-foreground`}>
      <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20 ring-2 ring-primary/10">
                  <span className="text-heading text-xl font-bold tracking-wider">RK</span>
                </div>
                <div>
                  <h1 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">Riad Kilani</h1>
                  <p className="text-xs text-muted-foreground">Design System</p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:flex flex-1 justify-center">
                <TabsList className="flex gap-2 bg-transparent p-0">
                  <TabsTrigger value="overview" className="cursor-pointer">Overview</TabsTrigger>
                  <TabsTrigger value="brand" className="cursor-pointer">Brand & Colors</TabsTrigger>
                  <TabsTrigger value="typography" className="cursor-pointer">Typography</TabsTrigger>
                  <TabsTrigger value="spacing" className="cursor-pointer">Spacing & Layout</TabsTrigger>
                  <TabsTrigger value="components" className="cursor-pointer">Components</TabsTrigger>
                  <TabsTrigger value="examples" className="cursor-pointer">Examples</TabsTrigger>
                  <TabsTrigger value="motion" className="cursor-pointer">Motion</TabsTrigger>
                  <TabsTrigger value="pages" className="cursor-pointer">Pages</TabsTrigger>
                </TabsList>
              </nav>

              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="lg:hidden border-t border-border py-4">
                <TabsList className="flex flex-col w-full gap-2 bg-transparent p-0 h-auto">
                  <TabsTrigger value="overview" onClick={() => setMobileMenuOpen(false)}>Overview</TabsTrigger>
                  <TabsTrigger value="brand" onClick={() => setMobileMenuOpen(false)}>Brand & Colors</TabsTrigger>
                  <TabsTrigger value="typography" onClick={() => setMobileMenuOpen(false)}>Typography</TabsTrigger>
                  <TabsTrigger value="spacing" onClick={() => setMobileMenuOpen(false)}>Spacing & Layout</TabsTrigger>
                  <TabsTrigger value="components" onClick={() => setMobileMenuOpen(false)}>Components</TabsTrigger>
                  <TabsTrigger value="examples" onClick={() => setMobileMenuOpen(false)}>Examples</TabsTrigger>
                  <TabsTrigger value="motion" onClick={() => setMobileMenuOpen(false)}>Motion</TabsTrigger>
                  <TabsTrigger value="pages" onClick={() => setMobileMenuOpen(false)}>Pages</TabsTrigger>
                </TabsList>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <TabsContent value="overview">
            <div className="mb-12 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-accent/5 to-background p-8 md:p-12 shadow-xl shadow-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <h1 className="mb-4 text-4xl md:text-5xl bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent font-bold">Design System</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Complete, production-ready design system for portfolio and CMS-driven website.
                Featuring logo-based color palette, Trajan Pro + Inter typography, 8px spacing scale,
                and comprehensive component library with full accessibility support.
              </p>
            </div>
            <SystemOverview />
          </TabsContent>

          <TabsContent value="brand">
            <BrandColors />
          </TabsContent>

          <TabsContent value="typography">
            <TypographySection />
          </TabsContent>

          <TabsContent value="spacing">
            <SpacingLayout />
          </TabsContent>

          <TabsContent value="components">
            <ComponentsShowcase />
          </TabsContent>

          <TabsContent value="examples">
            <ExamplesShowcase />
          </TabsContent>

          <TabsContent value="motion">
            <MotionSystem />
          </TabsContent>

          <TabsContent value="pages">
            <PagesShowcase />
          </TabsContent>
        </main>

        {/* Footer */}
        <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10"></div>
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 font-semibold">Design System</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built with React, Tailwind CSS v4, and modern web standards.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Foundations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary"></span>
                    WCAG AA Compliant
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary"></span>
                    8px Spacing System
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary"></span>
                    Reduced Motion Support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary"></span>
                    Dark Mode Ready
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-semibold">Typography</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent"></span>
                    Headings: Trajan Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent"></span>
                    Body/UI: Inter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent"></span>
                    Mono: JetBrains Mono
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Riad Kilani. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </Tabs>
    </div>
  );
}