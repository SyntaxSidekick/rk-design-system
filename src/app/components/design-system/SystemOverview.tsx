import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle2 } from "lucide-react";

export function SystemOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Design System Overview</h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          A complete, production-ready design system for a personal portfolio and CMS-driven website,
          built with modern web standards and developer experience in mind.
        </p>
      </div>

      {/* Key Features */}
      <Card className="p-6">
        <h3 className="mb-6">Key Features</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Feature
            title="Logo-Based Palette"
            description="Colors extracted from the RK logo ensuring brand consistency"
          />
          <Feature
            title="WCAG AA Compliant"
            description="All color combinations meet accessibility standards"
          />
          <Feature
            title="Trajan Pro + Inter"
            description="Classical elegance meets modern readability"
          />
          <Feature
            title="8px Spacing System"
            description="Consistent rhythm and alignment throughout"
          />
          <Feature
            title="Motion System"
            description="Defined easing curves and durations for smooth interactions"
          />
          <Feature
            title="Dark Mode Ready"
            description="Complete light and dark theme support"
          />
          <Feature
            title="Component Library"
            description="Comprehensive set of accessible UI components"
          />
          <Feature
            title="Reduced Motion"
            description="Respects user accessibility preferences"
          />
        </div>
      </Card>

      {/* Technology Stack */}
      <Card className="p-6">
        <h3 className="mb-6">Technology Stack</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TechStack
            name="React 18"
            description="Modern UI framework with hooks and concurrent features"
            badge="Framework"
          />
          <TechStack
            name="TypeScript"
            description="Type-safe development for better code quality"
            badge="Language"
          />
          <TechStack
            name="Tailwind CSS v4"
            description="Utility-first styling with design tokens"
            badge="Styling"
          />
          <TechStack
            name="Motion (Framer Motion)"
            description="Production-ready animation library"
            badge="Animation"
          />
          <TechStack
            name="Radix UI"
            description="Unstyled, accessible component primitives"
            badge="Components"
          />
          <TechStack
            name="CSS Custom Properties"
            description="Design tokens for consistent theming"
            badge="Tokens"
          />
        </div>
      </Card>

      {/* Design Principles */}
      <Card className="p-6">
        <h3 className="mb-4">Design Principles</h3>
        <div className="space-y-6">
          <Principle
            number="1"
            title="Consistency"
            description="Use established patterns and tokens throughout. Every component follows the same spacing, color, and interaction patterns."
          />
          <Principle
            number="2"
            title="Accessibility First"
            description="Meet WCAG AA standards minimum. Support keyboard navigation, screen readers, and reduced motion preferences."
          />
          <Principle
            number="3"
            title="Performance"
            description="Optimize for speed and efficiency. Use semantic HTML, efficient CSS, and minimal JavaScript where possible."
          />
          <Principle
            number="4"
            title="Scalability"
            description="Design for growth. The system scales from simple portfolios to complex CMS interfaces."
          />
          <Principle
            number="5"
            title="Developer Experience"
            description="Make it easy to use and extend. Clear documentation, predictable APIs, and helpful examples."
          />
        </div>
      </Card>

      {/* File Structure */}
      <Card className="p-6">
        <h3 className="mb-4">File Structure</h3>
        <div className="space-y-2 font-mono text-sm">
          <FileStructure path="/src/styles/theme.css" description="Design tokens & CSS variables" />
          <FileStructure path="/src/styles/fonts.css" description="Font imports (Trajan Pro + Inter)" />
          <FileStructure path="/src/app/components/ui/" description="Base UI component library" />
          <FileStructure path="/src/app/components/design-system/" description="Design system showcase" />
        </div>
      </Card>

      {/* Usage Example */}
      <Card className="p-6">
        <h3 className="mb-4">Quick Start</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-sm font-medium">Using Design Tokens</h4>
            <div className="rounded-lg bg-muted p-4 font-mono text-sm">
              <pre className="overflow-x-auto">
{`.my-component {
  /* Colors */
  background-color: var(--primary);
  color: var(--primary-foreground);
  
  /* Spacing */
  padding: var(--space-8) var(--space-16);
  gap: var(--space-4);
  
  /* Typography */
  font-family: var(--font-body);
  font-size: var(--text-base);
  
  /* Border & Radius */
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  
  /* Shadows */
  box-shadow: var(--shadow-sm);
  
  /* Motion */
  transition: all var(--transition-normal);
}`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium">Using Components</h4>
            <div className="rounded-lg bg-muted p-4 font-mono text-sm">
              <pre className="overflow-x-auto">
{`import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

function MyPage() {
  return (
    <Card className="p-6">
      <h2 className="mb-4">Title</h2>
      <p className="text-muted-foreground mb-6">
        Content goes here...
      </p>
      <Button>Call to Action</Button>
    </Card>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </Card>

      {/* Best Practices */}
      <Card className="p-6">
        <h3 className="mb-4">Best Practices</h3>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">✓ Do</h4>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Use design tokens instead of hardcoded values</li>
              <li>• Follow the established spacing scale (8px-based)</li>
              <li>• Test components in both light and dark modes</li>
              <li>• Ensure keyboard accessibility for all interactions</li>
              <li>• Use semantic HTML elements</li>
              <li>• Test with reduced motion enabled</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">✗ Don't</h4>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Override tokens with arbitrary values without reason</li>
              <li>• Create new spacing values outside the scale</li>
              <li>• Use colors that don't meet contrast requirements</li>
              <li>• Build inaccessible components</li>
              <li>• Ignore motion preferences</li>
              <li>• Use inline styles when Tailwind utilities exist</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Maintenance */}
      <Card className="p-6 border-primary/20 bg-primary/5">
        <h3 className="mb-4">Maintaining the System</h3>
        <p className="text-sm text-muted-foreground mb-4">
          This design system is a living document that should evolve with your needs:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Document new patterns as they emerge</li>
          <li>• Refactor components when you identify repetition</li>
          <li>• Keep tokens in <code className="text-xs">theme.css</code> up to date</li>
          <li>• Test new additions across all breakpoints and themes</li>
          <li>• Gather feedback from developers using the system</li>
        </ul>
      </Card>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-medium mb-1">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function TechStack({
  name,
  description,
  badge,
}: {
  name: string;
  description: string;
  badge: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <h4 className="font-medium">{name}</h4>
        <Badge variant="secondary" className="text-xs">{badge}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function Principle({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
        {number}
      </div>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function FileStructure({ path, description }: { path: string; description: string }) {
  return (
    <div className="flex items-center justify-between rounded border border-border bg-muted/30 p-2">
      <code className="text-xs text-primary">{path}</code>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  );
}
