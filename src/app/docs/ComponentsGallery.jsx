/**
 * Components Gallery - Overview of all components
 */

export function ComponentsGallery({ onNavigate }) {
  const components = [
    {
      id: 'buttons',
      title: 'Buttons',
      description: 'Interactive buttons with variants, sizes, and states',
      category: 'Core UI'
    },
    {
      id: 'badges',
      title: 'Badges',
      description: 'Status indicators and labels',
      category: 'Core UI'
    },
    {
      id: 'avatars',
      title: 'Avatars',
      description: 'User profile images and initials',
      category: 'Core UI'
    },
    {
      id: 'cards',
      title: 'Cards',
      description: 'Flexible content containers',
      category: 'Layout'
    },
    {
      id: 'inputs',
      title: 'Form Inputs',
      description: 'Text fields, selects, checkboxes, and more',
      category: 'Forms'
    },
    {
      id: 'alerts',
      title: 'Alerts & Toasts',
      description: 'Notifications and feedback messages',
      category: 'Feedback'
    },
    {
      id: 'modals',
      title: 'Modals',
      description: 'Dialog windows and overlays',
      category: 'Overlays'
    },
    {
      id: 'tabs',
      title: 'Tabs',
      description: 'Tabbed content navigation',
      category: 'Navigation'
    },
    {
      id: 'accordion',
      title: 'Accordion',
      description: 'Collapsible content sections',
      category: 'Navigation'
    },
    {
      id: 'tables',
      title: 'Tables',
      description: 'Data tables with sorting and styling',
      category: 'Data Display'
    },
  ];

  const categories = [...new Set(components.map(c => c.category))];

  return (
    <div>
      <h1>Component Library</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Browse the complete collection of components. Each component is built with accessibility, 
        theming, and responsive design in mind.
      </p>

      {categories.map((category) => (
        <section key={category} className="docs-section">
          <h2 className="docs-section__title">{category}</h2>
          
          <div className="docs-grid">
            {components
              .filter(c => c.category === category)
              .map((component) => (
                <button
                  key={component.id}
                  className="docs-card"
                  onClick={() => onNavigate(component.id)}
                  style={{ textAlign: 'left' }}
                >
                  <div className="docs-card__title">{component.title}</div>
                  <p className="docs-card__description">{component.description}</p>
                  <div style={{ 
                    marginTop: 'var(--space-4)',
                    color: 'var(--text-link)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)'
                  }}>
                    View Component →
                  </div>
                </button>
              ))}
          </div>
        </section>
      ))}

      <section className="docs-section">
        <h2 className="docs-section__title">Quick Start</h2>
        
        <div className="ds-alert ds-alert--info">
          <div className="ds-alert__content">
            <div className="ds-alert__title">Using Components</div>
            Each component page includes:
            <ul style={{ marginTop: 'var(--space-3)', marginLeft: 'var(--space-6)' }}>
              <li>Live interactive examples</li>
              <li>Copy-paste ready HTML code</li>
              <li>Variant and size options</li>
              <li>Accessibility guidelines</li>
              <li>JavaScript integration (where needed)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
