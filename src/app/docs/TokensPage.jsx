/**
 * Design Tokens Documentation Page
 */

import { Section } from '../components/DocHelpers';

export function TokensPage() {
  const brandColors = [
    { name: 'brand-50', value: '#EBF2FA' },
    { name: 'brand-100', value: '#D7E5F5' },
    { name: 'brand-200', value: '#AFCBEB' },
    { name: 'brand-300', value: '#7AC4F2' },
    { name: 'brand-400', value: '#5497D6' },
    { name: 'brand-500', value: '#2D6ABB' },
    { name: 'brand-600', value: '#24559A' },
    { name: 'brand-700', value: '#1C4179' },
    { name: 'brand-800', value: '#142D58' },
    { name: 'brand-900', value: '#0C1937' },
    { name: 'brand-950', value: '#060D1E' },
  ];

  const neutralColors = [
    { name: 'neutral-50', value: '#F7F9FA' },
    { name: 'neutral-100', value: '#E0EAEF' },
    { name: 'neutral-200', value: '#C1D5DF' },
    { name: 'neutral-300', value: '#A2C0CF' },
    { name: 'neutral-400', value: '#83ABBF' },
    { name: 'neutral-500', value: '#979898' },
    { name: 'neutral-600', value: '#787878' },
    { name: 'neutral-700', value: '#606060' },
    { name: 'neutral-800', value: '#404040' },
    { name: 'neutral-900', value: '#202020' },
    { name: 'neutral-950', value: '#000000' },
  ];

  const semanticColors = [
    { name: 'Success', colors: ['#ECFDF5', '#10B981', '#047857', '#022C22'] },
    { name: 'Warning', colors: ['#FFFBEB', '#F59E0B', '#B45309', '#451A03'] },
    { name: 'Danger', colors: ['#FEF2F2', '#EF4444', '#B91C1C', '#450A0A'] },
    { name: 'Info', colors: ['#ECFEFF', '#06B6D4', '#0E7490', '#083344'] },
  ];

  const fontSizes = [
    { name: 'xs', value: '0.75rem', px: '12px' },
    { name: 'sm', value: '0.875rem', px: '14px' },
    { name: 'base', value: '1rem', px: '16px' },
    { name: 'lg', value: '1.125rem', px: '18px' },
    { name: 'xl', value: '1.25rem', px: '20px' },
    { name: '2xl', value: '1.5rem', px: '24px' },
    { name: '3xl', value: '1.875rem', px: '30px' },
    { name: '4xl', value: '2.25rem', px: '36px' },
    { name: '5xl', value: '3rem', px: '48px' },
    { name: '6xl', value: '3.75rem', px: '60px' },
  ];

  const spacing = [
    { name: 'space-1', value: '0.125rem', px: '2px' },
    { name: 'space-2', value: '0.25rem', px: '4px' },
    { name: 'space-3', value: '0.5rem', px: '8px' },
    { name: 'space-4', value: '0.75rem', px: '12px' },
    { name: 'space-5', value: '1rem', px: '16px' },
    { name: 'space-6', value: '1.25rem', px: '20px' },
    { name: 'space-7', value: '1.5rem', px: '24px' },
    { name: 'space-8', value: '2rem', px: '32px' },
    { name: 'space-9', value: '2.5rem', px: '40px' },
    { name: 'space-10', value: '3rem', px: '48px' },
  ];

  const radii = [
    { name: 'none', value: '0' },
    { name: 'sm', value: '0.125rem' },
    { name: 'md', value: '0.25rem' },
    { name: 'lg', value: '0.5rem' },
    { name: 'xl', value: '0.75rem' },
    { name: '2xl', value: '1rem' },
    { name: '3xl', value: '1.5rem' },
    { name: 'pill', value: '9999px' },
    { name: 'full', value: '50%' },
  ];

  return (
    <div>
      <h1>Design Tokens</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Design tokens are the visual design atoms of the design system. They are named entities that store visual design attributes.
      </p>

      <Section title="Color Palette">
        <h3 style={{ marginBottom: 'var(--space-4)' }}>Brand Colors</h3>
        <p style={{ marginBottom: 'var(--space-5)', color: 'var(--text-secondary)' }}>
          Primary brand colors derived from the Riad Kilani identity.
        </p>
        <div className="docs-color-grid">
          {brandColors.map((color) => (
            <div key={color.name} className="docs-color-swatch">
              <div 
                className="docs-color-swatch__color" 
                style={{ backgroundColor: color.value }}
              />
              <div className="docs-color-swatch__info">
                <div className="docs-color-swatch__name">--color-{color.name}</div>
                <div className="docs-color-swatch__value">{color.value}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)' }}>Neutral Colors</h3>
        <p style={{ marginBottom: 'var(--space-5)', color: 'var(--text-secondary)' }}>
          Grayscale palette for text, borders, and backgrounds.
        </p>
        <div className="docs-color-grid">
          {neutralColors.map((color) => (
            <div key={color.name} className="docs-color-swatch">
              <div 
                className="docs-color-swatch__color" 
                style={{ backgroundColor: color.value }}
              />
              <div className="docs-color-swatch__info">
                <div className="docs-color-swatch__name">--color-{color.name}</div>
                <div className="docs-color-swatch__value">{color.value}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)' }}>Semantic Colors</h3>
        <p style={{ marginBottom: 'var(--space-5)', color: 'var(--text-secondary)' }}>
          Contextual colors for success, warning, danger, and info states.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
          {semanticColors.map((group) => (
            <div key={group.name}>
              <h4 style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--font-size-base)' }}>{group.name}</h4>
              <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                {group.colors.map((color, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: color,
                      borderRadius: 'var(--radius-md)',
                      border: 'var(--border-width-1) solid var(--border-subtle)'
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <h3 style={{ marginBottom: 'var(--space-4)' }}>Font Families</h3>
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <div className="ds-card" style={{ marginBottom: 'var(--space-4)' }}>
            <div className="ds-card__body">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-2)' }}>
                Trajan Pro / Cinzel
              </div>
              <code style={{ fontSize: 'var(--font-size-sm)' }}>--font-heading</code>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                Used for headings and display text
              </p>
            </div>
          </div>

          <div className="ds-card">
            <div className="ds-card__body">
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-2)' }}>
                DM Sans
              </div>
              <code style={{ fontSize: 'var(--font-size-sm)' }}>--font-body</code>
              <p style={{ marginTop: 'var(--space-3)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                Used for body text and UI elements
              </p>
            </div>
          </div>
        </div>

        <h3 style={{ marginBottom: 'var(--space-4)' }}>Font Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {fontSizes.map((size) => (
            <div key={size.name} style={{ 
              display: 'flex', 
              alignItems: 'baseline', 
              gap: 'var(--space-5)',
              padding: 'var(--space-3)',
              backgroundColor: 'var(--surface-secondary)',
              borderRadius: 'var(--radius-md)'
            }}>
              <code style={{ 
                minWidth: '8rem', 
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                --font-size-{size.name}
              </code>
              <span style={{ 
                fontSize: `var(--font-size-${size.name})`,
                flex: 1
              }}>
                The quick brown fox jumps
              </span>
              <span style={{ 
                fontSize: 'var(--font-size-xs)', 
                color: 'var(--text-tertiary)',
                fontFamily: 'var(--font-mono)'
              }}>
                {size.value} ({size.px})
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing">
        <p style={{ marginBottom: 'var(--space-5)', color: 'var(--text-secondary)' }}>
          Consistent spacing scale based on 4px/8px baseline.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {spacing.map((space) => (
            <div key={space.name} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-5)',
              padding: 'var(--space-3)',
              backgroundColor: 'var(--surface-secondary)',
              borderRadius: 'var(--radius-md)'
            }}>
              <code style={{ 
                minWidth: '8rem', 
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)'
              }}>
                --{space.name}
              </code>
              <div 
                style={{ 
                  height: 'var(--space-5)',
                  width: space.value,
                  backgroundColor: 'var(--color-brand-500)',
                  borderRadius: 'var(--radius-sm)'
                }}
              />
              <span style={{ 
                fontSize: 'var(--font-size-xs)', 
                color: 'var(--text-tertiary)',
                fontFamily: 'var(--font-mono)'
              }}>
                {space.value} ({space.px})
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 'var(--space-5)' }}>
          {radii.map((radius) => (
            <div key={radius.name} style={{ textAlign: 'center' }}>
              <div 
                style={{ 
                  width: '5rem',
                  height: '5rem',
                  backgroundColor: 'var(--color-brand-500)',
                  borderRadius: `var(--radius-${radius.name})`,
                  margin: '0 auto var(--space-3)'
                }}
              />
              <code style={{ fontSize: 'var(--font-size-sm)' }}>--radius-{radius.name}</code>
              <div style={{ 
                fontSize: 'var(--font-size-xs)', 
                color: 'var(--text-tertiary)',
                marginTop: 'var(--space-1)'
              }}>
                {radius.value}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)' }}>
          {['e1', 'e2', 'e3', 'e4', 'e5', 'e6'].map((elevation) => (
            <div key={elevation}>
              <div 
                style={{ 
                  backgroundColor: 'var(--surface-primary)',
                  padding: 'var(--space-6)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: `var(--shadow-${elevation})`,
                  marginBottom: 'var(--space-3)',
                  textAlign: 'center',
                  height: '8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)' }}>
                  {elevation.toUpperCase()}
                </span>
              </div>
              <code style={{ fontSize: 'var(--font-size-sm)' }}>--shadow-{elevation}</code>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
