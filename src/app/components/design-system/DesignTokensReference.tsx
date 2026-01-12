import { Card } from "../ui/card";

export function DesignTokensReference() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4">Design Tokens Quick Reference</h3>
        <p className="text-sm text-muted-foreground">
          Copy and paste these CSS custom properties to use the design system tokens.
        </p>
      </div>

      {/* Colors */}
      <Card className="p-6">
        <h4 className="mb-3">Color Tokens</h4>
        <div className="space-y-2 text-sm font-mono">
          <CodeLine code="var(--color-primary-600)" description="Primary brand color" />
          <CodeLine code="var(--color-secondary-700)" description="Secondary color" />
          <CodeLine code="var(--color-accent-500)" description="Accent color" />
          <CodeLine code="var(--color-neutral-900)" description="Text color" />
          <CodeLine code="var(--background)" description="Background (theme-aware)" />
          <CodeLine code="var(--foreground)" description="Foreground (theme-aware)" />
          <CodeLine code="var(--primary)" description="Primary (theme-aware)" />
          <CodeLine code="var(--border)" description="Border color" />
        </div>
      </Card>

      {/* Typography */}
      <Card className="p-6">
        <h4 className="mb-3">Typography Tokens</h4>
        <div className="space-y-2 text-sm font-mono">
          <CodeLine code="var(--font-heading)" description="Trajan Pro for headings" />
          <CodeLine code="var(--font-body)" description="Inter for body text" />
          <CodeLine code="var(--text-5xl)" description="48px - Large headings" />
          <CodeLine code="var(--text-base)" description="16px - Body text" />
          <CodeLine code="var(--font-weight-medium)" description="500 weight" />
          <CodeLine code="var(--leading-relaxed)" description="1.625 line-height" />
        </div>
      </Card>

      {/* Spacing */}
      <Card className="p-6">
        <h4 className="mb-3">Spacing Tokens</h4>
        <div className="space-y-2 text-sm font-mono">
          <CodeLine code="var(--space-4)" description="8px - Base unit" />
          <CodeLine code="var(--space-8)" description="16px - Small gaps" />
          <CodeLine code="var(--space-16)" description="32px - Medium gaps" />
          <CodeLine code="var(--space-24)" description="48px - Large gaps" />
          <CodeLine code="var(--space-48)" description="96px - Section spacing" />
        </div>
      </Card>

      {/* Motion */}
      <Card className="p-6">
        <h4 className="mb-3">Motion Tokens</h4>
        <div className="space-y-2 text-sm font-mono">
          <CodeLine code="var(--duration-fast)" description="150ms - Quick transitions" />
          <CodeLine code="var(--duration-normal)" description="250ms - Standard transitions" />
          <CodeLine code="var(--ease-out)" description="Ease-out curve" />
          <CodeLine code="var(--transition-normal)" description="Combined transition" />
        </div>
      </Card>

      {/* Radius & Shadows */}
      <Card className="p-6">
        <h4 className="mb-3">Radius & Shadow Tokens</h4>
        <div className="space-y-2 text-sm font-mono">
          <CodeLine code="var(--radius-md)" description="8px - Default radius" />
          <CodeLine code="var(--radius-lg)" description="12px - Cards" />
          <CodeLine code="var(--shadow-sm)" description="Small elevation" />
          <CodeLine code="var(--shadow-lg)" description="Large elevation" />
        </div>
      </Card>
    </div>
  );
}

function CodeLine({ code, description }: { code: string; description: string }) {
  return (
    <div className="flex items-center justify-between rounded border border-border bg-muted/30 p-2">
      <code className="text-xs">{code}</code>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  );
}
