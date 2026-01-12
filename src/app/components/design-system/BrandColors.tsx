import { Card } from "../ui/card";
import { BrandAssets } from "./BrandAssets";

const colorGroups = {
  primary: {
    name: "Primary Blue",
    description: "Extracted from logo RK monogram",
    colors: [
      { name: "50", value: "var(--color-primary-50)" },
      { name: "100", value: "var(--color-primary-100)" },
      { name: "200", value: "var(--color-primary-200)" },
      { name: "300", value: "var(--color-primary-300)" },
      { name: "400", value: "var(--color-primary-400)" },
      { name: "500", value: "var(--color-primary-500)" },
      { name: "600", value: "var(--color-primary-600)" },
      { name: "700", value: "var(--color-primary-700)" },
      { name: "800", value: "var(--color-primary-800)" },
      { name: "900", value: "var(--color-primary-900)" },
      { name: "950", value: "var(--color-primary-950)" },
    ],
    usage: "Primary CTAs, links, key interactions, brand moments",
  },
  secondary: {
    name: "Secondary Navy",
    description: "Professional, sophisticated accent from logo",
    colors: [
      { name: "50", value: "var(--color-secondary-50)" },
      { name: "100", value: "var(--color-secondary-100)" },
      { name: "200", value: "var(--color-secondary-200)" },
      { name: "300", value: "var(--color-secondary-300)" },
      { name: "400", value: "var(--color-secondary-400)" },
      { name: "500", value: "var(--color-secondary-500)" },
      { name: "600", value: "var(--color-secondary-600)" },
      { name: "700", value: "var(--color-secondary-700)" },
      { name: "800", value: "var(--color-secondary-800)" },
      { name: "900", value: "var(--color-secondary-900)" },
      { name: "950", value: "var(--color-secondary-950)" },
    ],
    usage: "Secondary buttons, subtle backgrounds, supporting elements",
  },
  accent: {
    name: "Accent Light Blue",
    description: "Highlights and emphasis",
    colors: [
      { name: "50", value: "var(--color-accent-50)" },
      { name: "100", value: "var(--color-accent-100)" },
      { name: "200", value: "var(--color-accent-200)" },
      { name: "300", value: "var(--color-accent-300)" },
      { name: "400", value: "var(--color-accent-400)" },
      { name: "500", value: "var(--color-accent-500)" },
      { name: "600", value: "var(--color-accent-600)" },
      { name: "700", value: "var(--color-accent-700)" },
      { name: "800", value: "var(--color-accent-800)" },
      { name: "900", value: "var(--color-accent-900)" },
      { name: "950", value: "var(--color-accent-950)" },
    ],
    usage: "Hover states, highlights, badges, decorative elements",
  },
  neutral: {
    name: "Neutral Grays",
    description: "Text, borders, backgrounds",
    colors: [
      { name: "0", value: "var(--color-neutral-0)" },
      { name: "50", value: "var(--color-neutral-50)" },
      { name: "100", value: "var(--color-neutral-100)" },
      { name: "200", value: "var(--color-neutral-200)" },
      { name: "300", value: "var(--color-neutral-300)" },
      { name: "400", value: "var(--color-neutral-400)" },
      { name: "500", value: "var(--color-neutral-500)" },
      { name: "600", value: "var(--color-neutral-600)" },
      { name: "700", value: "var(--color-neutral-700)" },
      { name: "800", value: "var(--color-neutral-800)" },
      { name: "900", value: "var(--color-neutral-900)" },
      { name: "950", value: "var(--color-neutral-950)" },
    ],
    usage: "Text hierarchy, dividers, backgrounds, UI structure",
  },
};

const semanticColors = [
  {
    name: "Success",
    light: "var(--color-success-light)",
    main: "var(--color-success)",
    dark: "var(--color-success-dark)",
    usage: "Success messages, positive feedback, completed states",
  },
  {
    name: "Warning",
    light: "var(--color-warning-light)",
    main: "var(--color-warning)",
    dark: "var(--color-warning-dark)",
    usage: "Warnings, caution messages, important notices",
  },
  {
    name: "Error",
    light: "var(--color-error-light)",
    main: "var(--color-error)",
    dark: "var(--color-error-dark)",
    usage: "Errors, destructive actions, validation failures",
  },
  {
    name: "Info",
    light: "var(--color-info-light)",
    main: "var(--color-info)",
    dark: "var(--color-info-dark)",
    usage: "Informational messages, tips, neutral notifications",
  },
];

export function BrandColors() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div>
        <h2 className="mb-4">Brand & Colors</h2>
        <p className="text-muted-foreground max-w-3xl">
          Color palette extracted from the RK logo, ensuring brand consistency throughout the design.
          All colors meet WCAG AA contrast standards for accessibility.
        </p>
      </div>

      {/* Brand Assets */}
      <BrandAssets />

      {/* Color Groups */}
      {Object.entries(colorGroups).map(([key, group]) => (
        <Card key={key} className="p-6">
          <div className="mb-6">
            <h3 className="mb-1">{group.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">{group.description}</p>
            <p className="text-xs text-muted-foreground italic">Usage: {group.usage}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {group.colors.map((color) => (
              <div key={color.name} className="group">
                <div
                  className="mb-2 h-20 w-full rounded-lg border border-border shadow-sm transition-transform duration-200 hover:scale-105"
                  style={{ backgroundColor: color.value }}
                />
                <p className="text-xs font-medium">{color.name}</p>
                <code className="text-[10px] text-muted-foreground">{color.value}</code>
              </div>
            ))}
          </div>
        </Card>
      ))}

      {/* Semantic Colors */}
      <div>
        <h3 className="mb-4">Semantic Colors</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Purpose-driven colors for feedback and system states.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {semanticColors.map((semantic) => (
            <Card key={semantic.name} className="p-6">
              <h4 className="mb-3">{semantic.name}</h4>
              <p className="text-xs text-muted-foreground mb-4 italic">{semantic.usage}</p>
              <div className="flex gap-3">
                <div className="flex-1">
                  <div
                    className="mb-2 h-16 w-full rounded-lg border border-border"
                    style={{ backgroundColor: semantic.light }}
                  />
                  <p className="text-xs font-medium">Light</p>
                </div>
                <div className="flex-1">
                  <div
                    className="mb-2 h-16 w-full rounded-lg border border-border"
                    style={{ backgroundColor: semantic.main }}
                  />
                  <p className="text-xs font-medium">Main</p>
                </div>
                <div className="flex-1">
                  <div
                    className="mb-2 h-16 w-full rounded-lg border border-border"
                    style={{ backgroundColor: semantic.dark }}
                  />
                  <p className="text-xs font-medium">Dark</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Component Tokens */}
      <Card className="p-6">
        <h3 className="mb-4">Component Tokens</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Semantic color tokens that adapt between light and dark themes.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ColorToken name="Background" variable="--background" />
          <ColorToken name="Foreground" variable="--foreground" />
          <ColorToken name="Primary" variable="--primary" />
          <ColorToken name="Primary Foreground" variable="--primary-foreground" />
          <ColorToken name="Secondary" variable="--secondary" />
          <ColorToken name="Secondary Foreground" variable="--secondary-foreground" />
          <ColorToken name="Muted" variable="--muted" />
          <ColorToken name="Muted Foreground" variable="--muted-foreground" />
          <ColorToken name="Accent" variable="--accent" />
          <ColorToken name="Accent Foreground" variable="--accent-foreground" />
          <ColorToken name="Border" variable="--border" />
          <ColorToken name="Ring" variable="--ring" />
        </div>
      </Card>
    </div>
  );
}

function ColorToken({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border p-3">
      <div
        className="h-12 w-12 flex-shrink-0 rounded-md border border-border"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{name}</p>
        <code className="text-xs text-muted-foreground">{variable}</code>
      </div>
    </div>
  );
}