/**
 * Overview Page
 */

export function Overview() {
  return (
    <div>
      <h1>Riad Kilani Design System</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        A comprehensive, production-grade design system built with pure HTML, CSS, and vanilla JavaScript. 
        Components are accessible, themeable, and ready for integration into any project.
      </p>

      <section className="docs-section">
        <h2 className="docs-section__title">Features</h2>
        
        <div className="docs-grid">
          <div className="ds-card docs-card">
            <svg className="docs-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <h3 className="docs-card__title">Pure CSS Components</h3>
            <p className="docs-card__description">
              All components built with vanilla CSS. No preprocessors, no frameworks, no dependencies.
            </p>
          </div>

          <div className="ds-card docs-card">
            <svg className="docs-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="docs-card__title">Accessibility First</h3>
            <p className="docs-card__description">
              WCAG compliant with keyboard navigation, focus management, and ARIA attributes.
            </p>
          </div>

          <div className="ds-card docs-card">
            <svg className="docs-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <h3 className="docs-card__title">Themeable</h3>
            <p className="docs-card__description">
              Light, dark, and high contrast themes. Full color customization via CSS variables.
            </p>
          </div>

          <div className="ds-card docs-card">
            <svg className="docs-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="docs-card__title">Motion System</h3>
            <p className="docs-card__description">
              Rich animation library with reduced motion support for accessibility.
            </p>
          </div>

          <div className="ds-card docs-card">
            <svg className="docs-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <h3 className="docs-card__title">Responsive</h3>
            <p className="docs-card__description">
              Mobile-first design with responsive components that adapt to any screen size.
            </p>
          </div>

          <div className="ds-card docs-card">
            <svg className="docs-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <h3 className="docs-card__title">Developer Friendly</h3>
            <p className="docs-card__description">
              Simple class-based API. Copy-paste ready code. No build tools required.
            </p>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Getting Started</h2>
        
        <h3 style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>Installation</h3>
        <p>Include the design system CSS and JavaScript files in your project:</p>
        
        <div className="docs-code-block">
          <div className="docs-code-block__header">
            <span className="docs-code-block__title">HTML</span>
          </div>
          <div className="docs-code-block__content">
            <pre><code>{`<!-- CSS Files -->
<link rel="stylesheet" href="path/to/ds/tokens.css">
<link rel="stylesheet" href="path/to/ds/themes.css">
<link rel="stylesheet" href="path/to/ds/base.css">
<link rel="stylesheet" href="path/to/ds/motion.css">
<link rel="stylesheet" href="path/to/ds/components.css">

<!-- JavaScript for interactive components -->
<script src="path/to/ds/components.js"></script>`}</code></pre>
          </div>
        </div>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>Basic Usage</h3>
        <p>Use design system classes on your HTML elements:</p>
        
        <div className="docs-code-block">
          <div className="docs-code-block__header">
            <span className="docs-code-block__title">HTML</span>
          </div>
          <div className="docs-code-block__content">
            <pre><code>{`<button class="ds-btn ds-btn--solid">
  Click Me
</button>

<div class="ds-card">
  <div class="ds-card__header">
    <h3 class="ds-card__title">Card Title</h3>
  </div>
  <div class="ds-card__body">
    Card content goes here.
  </div>
</div>`}</code></pre>
          </div>
        </div>

        <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>Interactive Components</h3>
        <p>Add <code>data-ds</code> attributes to enable JavaScript behaviors:</p>
        
        <div className="docs-code-block">
          <div className="docs-code-block__header">
            <span className="docs-code-block__title">HTML</span>
          </div>
          <div className="docs-code-block__content">
            <pre><code>{`<div class="ds-tabs" data-ds="tabs">
  <div role="tablist" class="ds-tabs__list">
    <button role="tab" aria-selected="true" aria-controls="panel-1">
      Tab 1
    </button>
  </div>
  <div role="tabpanel" id="panel-1" class="ds-tabs__panel">
    Panel content
  </div>
</div>`}</code></pre>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Customization</h2>
        
        <p style={{ marginBottom: 'var(--space-6)' }}>
          The design system uses CSS custom properties (variables) for easy customization. 
          Override tokens in your own CSS:
        </p>
        
        <div className="docs-code-block">
          <div className="docs-code-block__header">
            <span className="docs-code-block__title">CSS</span>
          </div>
          <div className="docs-code-block__content">
            <pre><code>{`:root {
  /* Override brand colors */
  --color-brand-500: #your-color;
  --color-brand-600: #your-darker-color;
  
  /* Override spacing */
  --space-5: 1.5rem;
  
  /* Override typography */
  --font-body: "Your Font", sans-serif;
}`}</code></pre>
          </div>
        </div>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Browser Support</h2>
        
        <ul style={{ marginLeft: 'var(--space-6)', color: 'var(--text-secondary)' }}>
          <li>Chrome/Edge (latest 2 versions)</li>
          <li>Firefox (latest 2 versions)</li>
          <li>Safari (latest 2 versions)</li>
          <li>iOS Safari (latest 2 versions)</li>
          <li>Android Chrome (latest 2 versions)</li>
        </ul>
      </section>
    </div>
  );
}
