import { Card } from "../ui/card";

const spacingScale = [
  { name: "0", value: "0", pixels: "0px" },
  { name: "1", value: "var(--space-1)", pixels: "2px" },
  { name: "2", value: "var(--space-2)", pixels: "4px" },
  { name: "3", value: "var(--space-3)", pixels: "6px" },
  { name: "4", value: "var(--space-4)", pixels: "8px" },
  { name: "5", value: "var(--space-5)", pixels: "10px" },
  { name: "6", value: "var(--space-6)", pixels: "12px" },
  { name: "8", value: "var(--space-8)", pixels: "16px" },
  { name: "10", value: "var(--space-10)", pixels: "20px" },
  { name: "12", value: "var(--space-12)", pixels: "24px" },
  { name: "16", value: "var(--space-16)", pixels: "32px" },
  { name: "20", value: "var(--space-20)", pixels: "40px" },
  { name: "24", value: "var(--space-24)", pixels: "48px" },
  { name: "32", value: "var(--space-32)", pixels: "64px" },
  { name: "40", value: "var(--space-40)", pixels: "80px" },
  { name: "48", value: "var(--space-48)", pixels: "96px" },
  { name: "64", value: "var(--space-64)", pixels: "128px" },
  { name: "80", value: "var(--space-80)", pixels: "160px" },
  { name: "96", value: "var(--space-96)", pixels: "192px" },
];

const radiusScale = [
  { name: "xs", value: "var(--radius-xs)", pixels: "4px" },
  { name: "sm", value: "var(--radius-sm)", pixels: "6px" },
  { name: "md", value: "var(--radius-md)", pixels: "8px" },
  { name: "lg", value: "var(--radius-lg)", pixels: "12px" },
  { name: "xl", value: "var(--radius-xl)", pixels: "16px" },
  { name: "2xl", value: "var(--radius-2xl)", pixels: "24px" },
  { name: "full", value: "var(--radius-full)", pixels: "9999px" },
];

const shadowScale = [
  { name: "xs", value: "var(--shadow-xs)" },
  { name: "sm", value: "var(--shadow-sm)" },
  { name: "md", value: "var(--shadow-md)" },
  { name: "lg", value: "var(--shadow-lg)" },
  { name: "xl", value: "var(--shadow-xl)" },
  { name: "2xl", value: "var(--shadow-2xl)" },
  { name: "inner", value: "var(--shadow-inner)" },
];

export function SpacingLayout() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div>
        <h2 className="mb-4">Spacing & Layout</h2>
        <p className="text-muted-foreground max-w-3xl">
          8px-based spacing system for consistent rhythm and alignment. Includes spacing tokens,
          border radius, elevation shadows, and grid layouts for responsive design.
        </p>
      </div>

      {/* Spacing Scale */}
      <Card className="p-6">
        <h3 className="mb-4">Spacing Scale (8px-based)</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Consistent spacing tokens for margin, padding, and gap properties.
        </p>
        <div className="space-y-3">
          {spacingScale.map((space) => (
            <div
              key={space.name}
              className="flex items-center gap-4 rounded-lg border border-border p-3"
            >
              <div className="w-24 flex-shrink-0">
                <p className="text-sm font-medium">space-{space.name}</p>
                <code className="text-xs text-muted-foreground">{space.pixels}</code>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className="h-8 bg-primary"
                    style={{ width: space.value }}
                  />
                  <code className="text-xs text-muted-foreground">{space.value}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Grid System */}
      <Card className="p-6">
        <h3 className="mb-4">Grid System</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Responsive 12-column grid with consistent gutters.
        </p>
        
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-sm font-medium">12 Columns</h4>
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-16 rounded-lg bg-primary/20 border border-primary" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium">6 Columns</h4>
            <div className="grid grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-16 rounded-lg bg-accent/20 border border-accent" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium">4 Columns</h4>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-16 rounded-lg bg-secondary/20 border border-secondary" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-medium">Responsive (1-2-3 columns)</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-24 rounded-lg bg-muted border border-border flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Column {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Border Radius */}
      <Card className="p-6">
        <h3 className="mb-4">Border Radius</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Consistent corner rounding for UI elements.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {radiusScale.map((radius) => (
            <div key={radius.name} className="text-center">
              <div
                className="mx-auto mb-3 h-24 w-24 bg-primary"
                style={{ borderRadius: radius.value }}
              />
              <p className="text-sm font-medium">radius-{radius.name}</p>
              <code className="text-xs text-muted-foreground">{radius.pixels}</code>
            </div>
          ))}
        </div>
      </Card>

      {/* Elevation & Shadows */}
      <Card className="p-6">
        <h3 className="mb-4">Elevation & Shadows</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Depth and hierarchy through elevation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shadowScale.map((shadow) => (
            <div key={shadow.name} className="text-center">
              <div
                className="mx-auto mb-3 h-24 w-full rounded-lg bg-card"
                style={{ boxShadow: shadow.value }}
              />
              <p className="text-sm font-medium">shadow-{shadow.name}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Layout Examples */}
      <Card className="p-6">
        <h3 className="mb-4">Layout Examples</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Common layout patterns using the spacing system.
        </p>
        
        <div className="space-y-8">
          {/* Card Layout */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Card with Consistent Spacing</h4>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4">Card Title</h3>
              <p className="text-muted-foreground mb-6">
                Card content with consistent spacing using our 8px-based system.
              </p>
              <div className="flex gap-4">
                <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                  Action
                </button>
                <button className="rounded-lg border border-border px-4 py-2">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Stack Layout */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Vertical Stack (space-y-4)</h4>
            <div className="space-y-4 rounded-lg border border-border bg-card p-6">
              <div className="h-12 rounded bg-muted" />
              <div className="h-12 rounded bg-muted" />
              <div className="h-12 rounded bg-muted" />
              <div className="h-12 rounded bg-muted" />
            </div>
          </div>

          {/* Flex Layout */}
          <div>
            <h4 className="mb-3 text-sm font-medium">Horizontal Flex (gap-4)</h4>
            <div className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <div className="h-16 w-16 flex-shrink-0 rounded bg-muted" />
              <div className="h-16 flex-1 rounded bg-muted" />
              <div className="h-16 w-24 flex-shrink-0 rounded bg-muted" />
            </div>
          </div>
        </div>
      </Card>

      {/* Container Widths */}
      <Card className="p-6">
        <h3 className="mb-4">Container Widths</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Maximum widths for content containers.
        </p>
        <div className="space-y-4">
          <ContainerExample width="max-w-sm" pixels="384px" />
          <ContainerExample width="max-w-md" pixels="448px" />
          <ContainerExample width="max-w-lg" pixels="512px" />
          <ContainerExample width="max-w-xl" pixels="576px" />
          <ContainerExample width="max-w-2xl" pixels="672px" />
          <ContainerExample width="max-w-3xl" pixels="768px" />
          <ContainerExample width="max-w-4xl" pixels="896px" />
          <ContainerExample width="max-w-5xl" pixels="1024px" />
        </div>
      </Card>
    </div>
  );
}

function ContainerExample({ width, pixels }: { width: string; pixels: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <code className="text-xs font-medium">{width}</code>
        <span className="text-xs text-muted-foreground">({pixels})</span>
      </div>
      <div className={`h-8 rounded-lg bg-primary/20 border border-primary ${width}`} />
    </div>
  );
}
