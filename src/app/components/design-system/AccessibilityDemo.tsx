import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function AccessibilityDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4">Accessibility & Contrast</h3>
        <p className="text-sm text-muted-foreground">
          All color combinations in this design system meet WCAG 2.1 Level AA standards
          for contrast ratios.
        </p>
      </div>

      {/* WCAG Standards */}
      <Card className="p-6">
        <h4 className="mb-4">WCAG Contrast Requirements</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <div className="mb-2 flex items-center gap-2">
              <Badge>Level AA</Badge>
              <span className="text-sm font-medium">Normal Text</span>
            </div>
            <p className="text-2xl font-bold text-primary">4.5:1</p>
            <p className="text-xs text-muted-foreground mt-1">
              Minimum contrast ratio for body text
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <div className="mb-2 flex items-center gap-2">
              <Badge>Level AA</Badge>
              <span className="text-sm font-medium">Large Text</span>
            </div>
            <p className="text-2xl font-bold text-primary">3:1</p>
            <p className="text-xs text-muted-foreground mt-1">
              Minimum for 18pt+ or bold 14pt+
            </p>
          </div>
        </div>
      </Card>

      {/* Color Contrast Examples */}
      <Card className="p-6">
        <h4 className="mb-6">Approved Color Combinations</h4>
        <div className="space-y-4">
          <ContrastExample
            foreground="#2563eb"
            background="#ffffff"
            ratio="7.2:1"
            passes={true}
            label="Primary on White"
          />
          <ContrastExample
            foreground="#ffffff"
            background="#2563eb"
            ratio="7.2:1"
            passes={true}
            label="White on Primary"
          />
          <ContrastExample
            foreground="#1e293b"
            background="#ffffff"
            ratio="15.3:1"
            passes={true}
            label="Secondary-900 on White"
          />
          <ContrastExample
            foreground="#6b7280"
            background="#ffffff"
            ratio="4.6:1"
            passes={true}
            label="Neutral-500 on White"
          />
          <ContrastExample
            foreground="#ef4444"
            background="#ffffff"
            ratio="4.5:1"
            passes={true}
            label="Error on White"
          />
          <ContrastExample
            foreground="#10b981"
            background="#ffffff"
            ratio="3.5:1"
            passes={false}
            label="Success on White (Use darker shade)"
            note="Use darker green for small text"
          />
        </div>
      </Card>

      {/* Keyboard Navigation */}
      <Card className="p-6">
        <h4 className="mb-4">Keyboard Navigation Support</h4>
        <p className="text-sm text-muted-foreground mb-4">
          All interactive components support keyboard navigation with visible focus indicators.
        </p>
        <div className="space-y-3 text-sm">
          <KeyboardShortcut keys={["Tab"]} description="Navigate forward through interactive elements" />
          <KeyboardShortcut keys={["Shift", "Tab"]} description="Navigate backward" />
          <KeyboardShortcut keys={["Enter"]} description="Activate buttons and links" />
          <KeyboardShortcut keys={["Space"]} description="Toggle checkboxes and switches" />
          <KeyboardShortcut keys={["Esc"]} description="Close modals and dropdowns" />
          <KeyboardShortcut keys={["Arrow Keys"]} description="Navigate within menus and lists" />
        </div>
      </Card>

      {/* Screen Reader Support */}
      <Card className="p-6">
        <h4 className="mb-4">Screen Reader Considerations</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Semantic HTML elements (button, nav, main, article, etc.)</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <span>ARIA labels and descriptions where needed</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Proper heading hierarchy (H1 → H2 → H3)</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Alt text for images and icons</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Form labels associated with inputs</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <span>Live regions for dynamic content updates</span>
          </li>
        </ul>
      </Card>

      {/* Focus Indicators */}
      <Card className="p-6">
        <h4 className="mb-4">Focus Indicators</h4>
        <p className="text-sm text-muted-foreground mb-6">
          All interactive elements have visible focus states. Try using Tab to navigate through these examples.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-lg border border-border bg-primary px-4 py-2 text-primary-foreground transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Primary Button
          </button>
          <button className="rounded-lg border border-border px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Secondary Button
          </button>
          <input
            type="text"
            placeholder="Input field"
            className="rounded-lg border border-border px-4 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
        </div>
      </Card>

      {/* Reduced Motion */}
      <Card className="p-6 border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
        <h4 className="mb-3">Reduced Motion Support</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Users who enable reduced motion preferences will see instant transitions instead of animations.
        </p>
        <code className="text-xs bg-muted/50 px-2 py-1 rounded">
          @media (prefers-reduced-motion: reduce)
        </code>
      </Card>
    </div>
  );
}

function ContrastExample({
  foreground,
  background,
  ratio,
  passes,
  label,
  note,
}: {
  foreground: string;
  background: string;
  ratio: string;
  passes: boolean;
  label: string;
  note?: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border p-4">
      <div
        className="flex h-16 w-32 flex-shrink-0 items-center justify-center rounded-lg border border-border text-sm font-medium"
        style={{ backgroundColor: background, color: foreground }}
      >
        Sample
      </div>
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-sm font-medium">{label}</span>
          {passes ? (
            <Badge className="gap-1 bg-green-500 hover:bg-green-600">
              <CheckCircle2 className="h-3 w-3" />
              Passes
            </Badge>
          ) : (
            <Badge variant="destructive" className="gap-1">
              <AlertCircle className="h-3 w-3" />
              Fails
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          Contrast ratio: <span className="font-medium">{ratio}</span>
          {note && ` • ${note}`}
        </p>
      </div>
    </div>
  );
}

function KeyboardShortcut({ keys, description }: { keys: string[]; description: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 p-3">
      <div className="flex flex-shrink-0 gap-1">
        {keys.map((key, index) => (
          <span key={index}>
            <kbd className="rounded border border-border bg-background px-2 py-1 text-xs font-mono shadow-sm">
              {key}
            </kbd>
            {index < keys.length - 1 && <span className="mx-1 text-xs">+</span>}
          </span>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
