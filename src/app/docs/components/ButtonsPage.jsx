/**
 * Buttons Component Documentation
 */

import { useState } from 'react';
import { CodeBlock, ComponentPreview, Section, PropsTable } from '../../components/DocHelpers.jsx';

export function ButtonsPage() {
  const [variant, setVariant] = useState('solid');
  const [size, setSize] = useState('md');
  const [loading, setLoading] = useState(false);

  const getButtonClass = () => {
    let classes = ['ds-btn'];
    
    if (variant !== 'solid') {
      classes.push(`ds-btn--${variant}`);
    } else {
      classes.push('ds-btn--solid');
    }
    
    if (size !== 'md') {
      classes.push(`ds-btn--${size}`);
    }
    
    if (loading) {
      classes.push('ds-btn--loading');
    }
    
    return classes.join(' ');
  };

  return (
    <div>
      <h1>Buttons</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Buttons trigger actions and enable user interaction. They support multiple variants, sizes, and states.
      </p>

      <Section title="Interactive Demo">
        <div className="docs-controls">
          <div className="docs-controls__title">Controls</div>
          <div className="docs-controls__grid">
            <div className="docs-control">
              <label className="docs-control__label">Variant</label>
              <select 
                className="ds-select ds-input--sm" 
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              >
                <option value="solid">Solid</option>
                <option value="outline">Outline</option>
                <option value="ghost">Ghost</option>
                <option value="link">Link</option>
              </select>
            </div>
            
            <div className="docs-control">
              <label className="docs-control__label">Size</label>
              <select 
                className="ds-select ds-input--sm" 
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            <div className="docs-control">
              <label className="docs-control__label">Loading</label>
              <input 
                type="checkbox" 
                className="ds-checkbox"
                checked={loading}
                onChange={(e) => setLoading(e.target.checked)}
              />
            </div>
          </div>
        </div>

        <ComponentPreview>
          <button className={getButtonClass()}>
            Button Text
          </button>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<button class="${getButtonClass()}">
  Button Text
</button>`}
        />
      </Section>

      <Section title="Variants">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <button className="ds-btn ds-btn--solid">Solid</button>
            <button className="ds-btn ds-btn--outline">Outline</button>
            <button className="ds-btn ds-btn--ghost">Ghost</button>
            <button className="ds-btn ds-btn--link">Link</button>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<button class="ds-btn ds-btn--solid">Solid</button>
<button class="ds-btn ds-btn--outline">Outline</button>
<button class="ds-btn ds-btn--ghost">Ghost</button>
<button class="ds-btn ds-btn--link">Link</button>`}
        />
      </Section>

      <Section title="Semantic Variants">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <button className="ds-btn ds-btn--success">Success</button>
            <button className="ds-btn ds-btn--warning">Warning</button>
            <button className="ds-btn ds-btn--danger">Danger</button>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<button class="ds-btn ds-btn--success">Success</button>
<button class="ds-btn ds-btn--warning">Warning</button>
<button class="ds-btn ds-btn--danger">Danger</button>`}
        />
      </Section>

      <Section title="Sizes">
        <ComponentPreview variant="start">
          <div className="ds-cluster" style={{ alignItems: 'center' }}>
            <button className="ds-btn ds-btn--solid ds-btn--sm">Small</button>
            <button className="ds-btn ds-btn--solid">Medium</button>
            <button className="ds-btn ds-btn--solid ds-btn--lg">Large</button>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<button class="ds-btn ds-btn--solid ds-btn--sm">Small</button>
<button class="ds-btn ds-btn--solid">Medium</button>
<button class="ds-btn ds-btn--solid ds-btn--lg">Large</button>`}
        />
      </Section>

      <Section title="With Icons">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <button className="ds-btn ds-btn--solid">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Item
            </button>
            <button className="ds-btn ds-btn--outline">
              Download
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<button class="ds-btn ds-btn--solid">
  <svg width="16" height="16" fill="none" stroke="currentColor">
    <!-- icon path -->
  </svg>
  Add Item
</button>`}
        />
      </Section>

      <Section title="Icon Buttons">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <button className="ds-btn ds-btn--icon ds-btn--solid" aria-label="Settings">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="ds-btn ds-btn--icon ds-btn--outline" aria-label="Search">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="ds-btn ds-btn--icon ds-btn--ghost" aria-label="Menu">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<button class="ds-btn ds-btn--icon ds-btn--solid" aria-label="Settings">
  <svg width="20" height="20"><!-- icon --></svg>
</button>`}
        />
      </Section>

      <Section title="Button States">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <button className="ds-btn ds-btn--solid">Default</button>
            <button className="ds-btn ds-btn--solid ds-btn--loading">Loading</button>
            <button className="ds-btn ds-btn--solid" disabled>Disabled</button>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<button class="ds-btn ds-btn--solid">Default</button>
<button class="ds-btn ds-btn--solid ds-btn--loading">Loading</button>
<button class="ds-btn ds-btn--solid" disabled>Disabled</button>`}
        />
      </Section>

      <Section title="Button Group">
        <ComponentPreview variant="start">
          <div className="ds-btn-group">
            <button className="ds-btn ds-btn--outline">Left</button>
            <button className="ds-btn ds-btn--outline">Center</button>
            <button className="ds-btn ds-btn--outline">Right</button>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-btn-group">
  <button class="ds-btn ds-btn--outline">Left</button>
  <button class="ds-btn ds-btn--outline">Center</button>
  <button class="ds-btn ds-btn--outline">Right</button>
</div>`}
        />
      </Section>

      <Section title="CSS Classes">
        <PropsTable
          props={[
            { name: '.ds-btn', type: 'base', default: '—', description: 'Base button class (required)' },
            { name: '.ds-btn--solid', type: 'variant', default: '—', description: 'Solid filled button' },
            { name: '.ds-btn--outline', type: 'variant', default: '—', description: 'Outlined button' },
            { name: '.ds-btn--ghost', type: 'variant', default: '—', description: 'Ghost button with no border' },
            { name: '.ds-btn--link', type: 'variant', default: '—', description: 'Link-styled button' },
            { name: '.ds-btn--sm', type: 'size', default: '—', description: 'Small button' },
            { name: '.ds-btn--lg', type: 'size', default: '—', description: 'Large button' },
            { name: '.ds-btn--icon', type: 'modifier', default: '—', description: 'Icon-only button (square)' },
            { name: '.ds-btn--loading', type: 'state', default: '—', description: 'Loading state with spinner' },
          ]}
        />
      </Section>

      <Section title="Accessibility">
        <div className="ds-alert ds-alert--info">
          <div className="ds-alert__content">
            <div className="ds-alert__title">Best Practices</div>
            <ul style={{ marginTop: 'var(--space-3)', marginLeft: 'var(--space-6)' }}>
              <li>Always use descriptive text or <code>aria-label</code> for icon buttons</li>
              <li>Use <code>disabled</code> attribute instead of <code>aria-disabled</code> when possible</li>
              <li>Ensure sufficient color contrast (4.5:1 for normal text)</li>
              <li>Button has visible focus ring via <code>:focus-visible</code></li>
              <li>All interactive states are keyboard accessible</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}