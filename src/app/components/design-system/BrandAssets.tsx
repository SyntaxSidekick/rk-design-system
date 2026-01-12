import { Card } from "../ui/card";
import logoImage from "../../../assets/fe609b2c793b00eaff38826d1e893b42fb2e37c4.png";

export function BrandAssets() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4">Brand Assets</h3>
        <p className="text-sm text-muted-foreground">
          Logo and brand identity elements.
        </p>
      </div>

      {/* Logo */}
      <Card className="p-8">
        <h4 className="mb-6">Primary Logo</h4>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Light Background */}
          <div>
            <p className="text-sm font-medium mb-3 text-muted-foreground">On Light Background</p>
            <div className="rounded-lg border border-border bg-white p-8 flex items-center justify-center">
              <img src={logoImage} alt="Riad Kilani Logo" className="h-16" />
            </div>
          </div>

          {/* Dark Background */}
          <div>
            <p className="text-sm font-medium mb-3 text-muted-foreground">On Dark Background</p>
            <div className="rounded-lg border border-border bg-neutral-900 p-8 flex items-center justify-center">
              <img src={logoImage} alt="Riad Kilani Logo" className="h-16" />
            </div>
          </div>
        </div>
      </Card>

      {/* Logo Monogram */}
      <Card className="p-8">
        <h4 className="mb-6">Logo Monogram (RK)</h4>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <span className="text-heading text-3xl font-bold tracking-wider">RK</span>
            </div>
            <p className="text-sm text-muted-foreground">Primary</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-xl border-2 border-primary text-primary">
              <span className="text-heading text-3xl font-bold tracking-wider">RK</span>
            </div>
            <p className="text-sm text-muted-foreground">Outline</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white">
              <span className="text-heading text-3xl font-bold tracking-wider">RK</span>
            </div>
            <p className="text-sm text-muted-foreground">Gradient</p>
          </div>
        </div>
      </Card>

      {/* Logo Usage Guidelines */}
      <Card className="p-6">
        <h4 className="mb-4">Usage Guidelines</h4>
        <div className="space-y-4 text-sm">
          <div>
            <h5 className="font-medium mb-2">✓ Do</h5>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Maintain minimum clear space around the logo</li>
              <li>• Use approved color variations only</li>
              <li>• Scale proportionally</li>
              <li>• Ensure adequate contrast with background</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">✗ Don't</h5>
            <ul className="space-y-1 text-muted-foreground ml-4">
              <li>• Stretch or distort the logo</li>
              <li>• Change the logo colors arbitrarily</li>
              <li>• Add effects (shadows, gradients) to the main logo</li>
              <li>• Place on low-contrast backgrounds</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Color Variations */}
      <Card className="p-8">
        <h4 className="mb-6">Approved Color Variations</h4>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-white p-6 text-center">
            <div className="mb-2 flex h-16 items-center justify-center">
              <span className="text-heading text-2xl font-bold tracking-wider" style={{ color: 'var(--color-primary-600)' }}>
                RK
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Primary Blue</p>
          </div>
          <div className="rounded-lg border border-border bg-neutral-900 p-6 text-center">
            <div className="mb-2 flex h-16 items-center justify-center">
              <span className="text-heading text-2xl font-bold tracking-wider text-white">
                RK
              </span>
            </div>
            <p className="text-xs text-muted-foreground">White</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-6 text-center">
            <div className="mb-2 flex h-16 items-center justify-center">
              <span className="text-heading text-2xl font-bold tracking-wider" style={{ color: 'var(--color-neutral-900)' }}>
                RK
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Black</p>
          </div>
          <div className="rounded-lg border border-border bg-white p-6 text-center">
            <div className="mb-2 flex h-16 items-center justify-center">
              <span className="text-heading text-2xl font-bold tracking-wider" style={{ color: 'var(--color-secondary-700)' }}>
                RK
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Navy</p>
          </div>
        </div>
      </Card>

      {/* Minimum Sizes */}
      <Card className="p-6">
        <h4 className="mb-4">Minimum Sizes</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-muted-foreground">Digital (Web)</div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 items-center rounded bg-primary px-3 text-primary-foreground">
                <span className="text-heading text-sm font-bold tracking-wider">RK</span>
              </div>
              <code className="text-xs text-muted-foreground">32px height minimum</code>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-sm text-muted-foreground">Print</div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 items-center rounded bg-primary px-2 text-primary-foreground">
                <span className="text-heading text-xs font-bold tracking-wider">RK</span>
              </div>
              <code className="text-xs text-muted-foreground">0.5 inch minimum</code>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
