/**
 * Badges Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function BadgesPage() {
  return (
    <div>
      <h1>Badges</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Small status indicators and labels for displaying metadata, counts, or categories.
      </p>

      <Section title="Variants">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <span className="ds-badge ds-badge--default">Default</span>
            <span className="ds-badge ds-badge--brand">Brand</span>
            <span className="ds-badge ds-badge--success">Success</span>
            <span className="ds-badge ds-badge--warning">Warning</span>
            <span className="ds-badge ds-badge--danger">Danger</span>
            <span className="ds-badge ds-badge--info">Info</span>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<span class="ds-badge ds-badge--default">Default</span>
<span class="ds-badge ds-badge--brand">Brand</span>
<span class="ds-badge ds-badge--success">Success</span>
<span class="ds-badge ds-badge--warning">Warning</span>
<span class="ds-badge ds-badge--danger">Danger</span>
<span class="ds-badge ds-badge--info">Info</span>`}
        />
      </Section>

      <Section title="Sizes">
        <ComponentPreview variant="start">
          <div className="ds-cluster" style={{ alignItems: 'center' }}>
            <span className="ds-badge ds-badge--brand ds-badge--sm">Small</span>
            <span className="ds-badge ds-badge--brand">Default</span>
            <span className="ds-badge ds-badge--brand ds-badge--lg">Large</span>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<span class="ds-badge ds-badge--brand ds-badge--sm">Small</span>
<span class="ds-badge ds-badge--brand">Default</span>
<span class="ds-badge ds-badge--brand ds-badge--lg">Large</span>`}
        />
      </Section>

      <Section title="With Icons">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <span className="ds-badge ds-badge--success">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </span>
            <span className="ds-badge ds-badge--warning">
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Alert
            </span>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<span class="ds-badge ds-badge--success">
  <svg width="12" height="12" fill="currentColor">
    <!-- icon path -->
  </svg>
  Verified
</span>`}
        />
      </Section>

      <Section title="Dismissible">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <span className="ds-badge ds-badge--brand">
              Tag Name
              <button className="ds-badge__close" aria-label="Remove">×</button>
            </span>
            <span className="ds-badge ds-badge--info">
              Another Tag
              <button className="ds-badge__close" aria-label="Remove">×</button>
            </span>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<span class="ds-badge ds-badge--brand">
  Tag Name
  <button class="ds-badge__close" aria-label="Remove">×</button>
</span>`}
        />
      </Section>
    </div>
  );
}
