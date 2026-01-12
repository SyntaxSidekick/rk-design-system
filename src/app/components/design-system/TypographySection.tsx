import { Card } from "../ui/card";

export function TypographySection() {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <div>
        <h2 className="mb-4">Typography System</h2>
        <p className="text-muted-foreground max-w-3xl">
          Trajan Pro for elegant, classical headings paired with Inter for clean, modern body text.
          Comprehensive type scale with defined weights, line heights, and letter spacing.
        </p>
      </div>

      {/* Font Families */}
      <Card className="p-6">
        <h3 className="mb-6">Font Families</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-heading">Trajan Pro</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Headings (H1-H6) • Classical • Elegant • Professional
            </p>
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <p className="text-heading text-4xl font-bold tracking-wide">ABCDEFG</p>
              <p className="text-heading text-2xl mt-2">The quick brown fox</p>
            </div>
          </div>
          <div>
            <h4 className="mb-2">Inter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Body & UI • Modern • Readable • Versatile
            </p>
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <p className="text-4xl font-bold">ABCDEFG</p>
              <p className="text-2xl mt-2">The quick brown fox</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Type Scale */}
      <Card className="p-6">
        <h3 className="mb-6">Type Scale</h3>
        <div className="space-y-6">
          <TypeExample size="7xl" pixels="72px" sample="Display XL" />
          <TypeExample size="6xl" pixels="60px" sample="Display Large" />
          <TypeExample size="5xl" pixels="48px" sample="Display Medium" />
          <TypeExample size="4xl" pixels="36px" sample="Heading 1" />
          <TypeExample size="3xl" pixels="30px" sample="Heading 2" />
          <TypeExample size="2xl" pixels="24px" sample="Heading 3" />
          <TypeExample size="xl" pixels="20px" sample="Heading 4" />
          <TypeExample size="lg" pixels="18px" sample="Large Text" />
          <TypeExample size="base" pixels="16px" sample="Body Text" />
          <TypeExample size="sm" pixels="14px" sample="Small Text" />
          <TypeExample size="xs" pixels="12px" sample="Caption" />
        </div>
      </Card>

      {/* Heading Hierarchy */}
      <Card className="p-6">
        <h3 className="mb-6">Heading Hierarchy</h3>
        <div className="space-y-6">
          <div>
            <h1>Heading 1</h1>
            <code className="text-xs text-muted-foreground">
              48px / Bold / Trajan Pro / 1.25 line-height
            </code>
          </div>
          <div>
            <h2>Heading 2</h2>
            <code className="text-xs text-muted-foreground">
              36px / Bold / Trajan Pro / 1.25 line-height
            </code>
          </div>
          <div>
            <h3>Heading 3</h3>
            <code className="text-xs text-muted-foreground">
              30px / Semibold / Trajan Pro / 1.375 line-height
            </code>
          </div>
          <div>
            <h4>Heading 4</h4>
            <code className="text-xs text-muted-foreground">
              24px / Semibold / Trajan Pro / 1.375 line-height
            </code>
          </div>
          <div>
            <h5>Heading 5</h5>
            <code className="text-xs text-muted-foreground">
              20px / Medium / Trajan Pro / 1.5 line-height
            </code>
          </div>
          <div>
            <h6>Heading 6</h6>
            <code className="text-xs text-muted-foreground">
              18px / Medium / Trajan Pro / 1.5 line-height
            </code>
          </div>
        </div>
      </Card>

      {/* Font Weights */}
      <Card className="p-6">
        <h3 className="mb-6">Font Weights</h3>
        <div className="space-y-4">
          <WeightExample weight="300" name="Light" />
          <WeightExample weight="400" name="Normal" />
          <WeightExample weight="500" name="Medium" />
          <WeightExample weight="600" name="Semibold" />
          <WeightExample weight="700" name="Bold" />
          <WeightExample weight="800" name="Extrabold" />
        </div>
      </Card>

      {/* Line Heights */}
      <Card className="p-6">
        <h3 className="mb-6">Line Heights</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <LineHeightExample
            name="Tight (1.25)"
            value="1.25"
            description="Headings, dense content"
          />
          <LineHeightExample
            name="Snug (1.375)"
            value="1.375"
            description="Subheadings, cards"
          />
          <LineHeightExample
            name="Normal (1.5)"
            value="1.5"
            description="UI elements, labels"
          />
          <LineHeightExample
            name="Relaxed (1.625)"
            value="1.625"
            description="Body text, paragraphs"
          />
        </div>
      </Card>

      {/* Letter Spacing */}
      <Card className="p-6">
        <h3 className="mb-6">Letter Spacing</h3>
        <div className="space-y-4">
          <LetterSpacingExample tracking="tighter" value="-0.05em" />
          <LetterSpacingExample tracking="tight" value="-0.025em" />
          <LetterSpacingExample tracking="normal" value="0" />
          <LetterSpacingExample tracking="wide" value="0.025em" />
          <LetterSpacingExample tracking="wider" value="0.05em" />
          <LetterSpacingExample tracking="widest" value="0.1em" />
        </div>
      </Card>

      {/* Usage Examples */}
      <Card className="p-6">
        <h3 className="mb-6">Usage Examples</h3>
        <div className="space-y-8">
          <div>
            <h2 className="mb-4">Article Title Example</h2>
            <p className="text-muted-foreground">
              The quick brown fox jumps over the lazy dog. This is an example of body text
              using Inter font family with a relaxed line-height for optimal readability.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Section Heading</h3>
            <p className="text-sm text-muted-foreground">
              Smaller body text works well for captions, metadata, or supporting information.
              The Inter font family maintains excellent readability even at smaller sizes.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function TypeExample({
  size,
  pixels,
  sample,
}: {
  size: string;
  pixels: string;
  sample: string;
}) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border pb-4">
      <div className="w-20 flex-shrink-0">
        <p className="text-xs font-medium">{size}</p>
        <p className="text-xs text-muted-foreground">{pixels}</p>
      </div>
      <p className={`text-${size} flex-1`}>{sample}</p>
    </div>
  );
}

function WeightExample({ weight, name }: { weight: string; name: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border p-4">
      <div className="w-32 flex-shrink-0">
        <p className="text-sm font-medium">{name}</p>
        <code className="text-xs text-muted-foreground">{weight}</code>
      </div>
      <p className="text-2xl flex-1" style={{ fontWeight: weight }}>
        The quick brown fox jumps over the lazy dog
      </p>
    </div>
  );
}

function LineHeightExample({
  name,
  value,
  description,
}: {
  name: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="mb-2">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div
        className="mt-3 rounded bg-muted/30 p-3 text-sm"
        style={{ lineHeight: value }}
      >
        The quick brown fox jumps over the lazy dog. This text demonstrates the line height
        value and how it affects readability and vertical rhythm.
      </div>
    </div>
  );
}

function LetterSpacingExample({ tracking, value }: { tracking: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border p-4">
      <div className="w-32 flex-shrink-0">
        <p className="text-sm font-medium capitalize">{tracking}</p>
        <code className="text-xs text-muted-foreground">{value}</code>
      </div>
      <p className={`tracking-${tracking} text-xl flex-1 uppercase`}>
        Letter Spacing Example
      </p>
    </div>
  );
}
