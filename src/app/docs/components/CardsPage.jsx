/**
 * Cards Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

const cardVariants = [
  {
    className: 'ds-card--standard',
    title: 'Standard',
    description: 'Default content grouping for ordinary page sections.',
    code: `<div class="ds-card ds-card--standard">
  <div class="ds-card__header">
    <h3 class="ds-card__title">Standard Card</h3>
    <p class="ds-card__description">Default grouped content.</p>
  </div>
  <div class="ds-card__body">
    <p>Use for neutral content containers.</p>
  </div>
</div>`
  },
  {
    className: 'ds-card--feature',
    title: 'Feature',
    description: 'Higher-emphasis card for featured content or primary summaries.',
    code: `<div class="ds-card ds-card--feature">
  <div class="ds-card__header">
    <h3 class="ds-card__title">Feature Card</h3>
    <p class="ds-card__description">Highlighted system capability.</p>
  </div>
  <div class="ds-card__body">
    <p>Use sparingly for content that needs stronger hierarchy.</p>
  </div>
</div>`
  },
  {
    className: 'ds-card--project',
    title: 'Project',
    description: 'Project summary with metadata and a clear action area.',
    code: `<div class="ds-card ds-card--project">
  <div class="ds-card__body">
    <h3 class="ds-card__title">Project Card</h3>
    <p class="ds-card__description">Outcome-focused project summary.</p>
  </div>
  <div class="ds-card__footer">
    <span class="ds-badge ds-badge--brand">React</span>
    <span class="ds-badge ds-badge--default">Accessibility</span>
  </div>
</div>`
  },
  {
    className: 'ds-card--portfolio',
    title: 'Portfolio',
    description: 'Portfolio case-study preview with tags and a primary action.',
    code: `<div class="ds-card ds-card--portfolio">
  <img src="project.jpg" alt="Project preview" class="ds-card__media" />
  <div class="ds-card__body">
    <h3 class="ds-card__title">Portfolio Card</h3>
    <p class="ds-card__description">A compact case-study entry.</p>
  </div>
  <div class="ds-card__footer">
    <button class="ds-btn ds-btn--solid ds-btn--sm">View Case Study</button>
  </div>
</div>`
  },
  {
    className: 'ds-card--blog',
    title: 'Blog',
    description: 'Editorial content preview for articles and technical writing.',
    code: `<article class="ds-card ds-card--blog">
  <div class="ds-card__body">
    <p class="ds-card__meta">Engineering · 8 min read</p>
    <h3 class="ds-card__title">Blog Card</h3>
    <p class="ds-card__description">Article summary written for scanning.</p>
  </div>
</article>`
  },
  {
    className: 'ds-card--testimonial',
    title: 'Testimonial',
    description: 'Quote-forward card for recommendations or social proof.',
    code: `<figure class="ds-card ds-card--testimonial">
  <div class="ds-card__body">
    <blockquote class="ds-card__quote">Clear, practical, and deeply reliable.</blockquote>
    <figcaption class="ds-card__meta">Director of Engineering</figcaption>
  </div>
</figure>`
  },
  {
    className: 'ds-card--media',
    title: 'Media',
    description: 'Visual-first card with a stable media area and supporting text.',
    code: `<div class="ds-card ds-card--media">
  <img src="image.jpg" alt="Media description" class="ds-card__media" />
  <div class="ds-card__body">
    <h3 class="ds-card__title">Media Card</h3>
    <p class="ds-card__description">Visual content with a short caption.</p>
  </div>
</div>`
  }
];

export function CardsPage() {
  return (
    <div>
      <h1>Cards</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Flexible content containers with support for headers, body, footer, media, states, and documented variants.
      </p>

      <Section title="Basic Card">
        <ComponentPreview>
          <div className="ds-card ds-card--standard" style={{ maxWidth: '400px' }}>
            <div className="ds-card__header">
              <h3 className="ds-card__title">Card Title</h3>
              <p className="ds-card__description">Optional description text</p>
            </div>
            <div className="ds-card__body">
              <p>Card content goes here. This can include any semantic HTML elements.</p>
            </div>
            <div className="ds-card__footer">
              <button className="ds-btn ds-btn--solid ds-btn--sm">Action</button>
              <button className="ds-btn ds-btn--ghost ds-btn--sm">Cancel</button>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-card ds-card--standard">
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

      <Section title="Card Variants">
        <div className="docs-grid">
          {cardVariants.map((variant) => (
            <div key={variant.title} className={`ds-card ${variant.className}`}>
              {variant.title === 'Portfolio' || variant.title === 'Media' ? (
                <div
                  className="ds-card__media"
                  role="img"
                  aria-label={`${variant.title} preview`}
                  style={{
                    background: variant.title === 'Portfolio'
                      ? 'linear-gradient(135deg, var(--color-brand-500), var(--color-brand-300))'
                      : 'linear-gradient(135deg, var(--surface-tertiary), var(--color-info-100))'
                  }}
                />
              ) : null}
              <div className={variant.title === 'Standard' || variant.title === 'Feature' ? 'ds-card__header' : 'ds-card__body'}>
                {variant.title === 'Blog' && (
                  <p className="ds-card__meta" style={{ marginBottom: 'var(--space-3)' }}>Engineering · 8 min read</p>
                )}
                {variant.title === 'Testimonial' ? (
                  <blockquote className="ds-card__quote">Clear, practical, and built with real engineering judgment.</blockquote>
                ) : (
                  <>
                    <h3 className="ds-card__title">{variant.title} Card</h3>
                    <p className="ds-card__description">{variant.description}</p>
                  </>
                )}
                {variant.title === 'Testimonial' && (
                  <figcaption className="ds-card__meta">Staff Engineering Partner</figcaption>
                )}
              </div>
              {variant.title === 'Project' || variant.title === 'Portfolio' ? (
                <div className="ds-card__footer">
                  <span className="ds-badge ds-badge--brand">Design Systems</span>
                  <span className="ds-badge ds-badge--default">WCAG</span>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Variant Markup">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
          {cardVariants.map((variant) => (
            <CodeBlock key={variant.title} title={`${variant.title} Card`} code={variant.code} />
          ))}
        </div>
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
