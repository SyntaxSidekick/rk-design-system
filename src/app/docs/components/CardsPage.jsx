/**
 * Cards Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function CardsPage() {
  return (
    <div>
      <h1>Cards</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Flexible content containers with support for headers, body, footer, and media.
      </p>

      <Section title="Basic Card">
        <ComponentPreview>
          <div className="ds-card" style={{ maxWidth: '400px' }}>
            <div className="ds-card__header">
              <h3 className="ds-card__title">Card Title</h3>
              <p className="ds-card__description">Optional description text</p>
            </div>
            <div className="ds-card__body">
              <p>Card content goes here. This can include any HTML elements.</p>
            </div>
            <div className="ds-card__footer">
              <button className="ds-btn ds-btn--solid ds-btn--sm">Action</button>
              <button className="ds-btn ds-btn--ghost ds-btn--sm">Cancel</button>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-card">
  <div class="ds-card__header">
    <h3 class="ds-card__title">Card Title</h3>
    <p class="ds-card__description">Optional description</p>
  </div>
  <div class="ds-card__body">
    <p>Card content goes here.</p>
  </div>
  <div class="ds-card__footer">
    <button class="ds-btn ds-btn--solid">Action</button>
  </div>
</div>`}
        />
      </Section>

      <Section title="Media Card">
        <ComponentPreview>
          <div className="ds-card" style={{ maxWidth: '400px' }}>
            <img 
              src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=400&fit=crop" 
              alt="Card cover"
              className="ds-card__media"
            />
            <div className="ds-card__body">
              <h3 style={{ marginBottom: 'var(--space-2)' }}>Beautiful Landscape</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                A stunning view of nature captured in high quality.
              </p>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-card">
  <img src="image.jpg" alt="Cover" class="ds-card__media" />
  <div class="ds-card__body">
    <h3>Card Title</h3>
    <p>Description text...</p>
  </div>
</div>`}
        />
      </Section>

      <Section title="Interactive Card">
        <ComponentPreview>
          <div className="ds-card ds-card--interactive" style={{ maxWidth: '300px' }} tabIndex={0}>
            <div className="ds-card__body">
              <h3 style={{ marginBottom: 'var(--space-2)' }}>Clickable Card</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                This card can be clicked or focused.
              </p>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-card ds-card--interactive" tabindex="0">
  <div class="ds-card__body">
    <h3>Clickable Card</h3>
    <p>Card content...</p>
  </div>
</div>`}
        />
      </Section>
    </div>
  );
}
