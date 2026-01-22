/**
 * Documentation Sidebar Component
 */

export function Sidebar({ currentPage, onNavigate, isOpen, onClose }) {
  const navigation = [
    {
      title: 'Getting Started',
      items: [
        { id: 'overview', label: 'Overview' },
      ]
    },
    {
      title: 'Foundations',
      items: [
        { id: 'tokens', label: 'Design Tokens' },
        { id: 'motion', label: 'Motion & Animation' },
      ]
    },
    {
      title: 'Components',
      items: [
        { id: 'components', label: 'All Components' },
        { id: 'buttons', label: 'Buttons' },
        { id: 'badges', label: 'Badges' },
        { id: 'avatars', label: 'Avatars' },
        { id: 'cards', label: 'Cards' },
        { id: 'inputs', label: 'Form Inputs' },
        { id: 'alerts', label: 'Alerts & Toasts' },
        { id: 'modals', label: 'Modals' },
        { id: 'tabs', label: 'Tabs' },
        { id: 'accordion', label: 'Accordion' },
        { id: 'tables', label: 'Tables' },
      ]
    }
  ];

  return (
    <div className={`docs-sidebar ds-sidebar ${isOpen ? 'docs-sidebar--open' : ''}`}>
      <div className="docs-search">
        <input 
          type="search" 
          className="docs-search__input" 
          placeholder="Search components..."
        />
      </div>
      
      <div style={{ padding: 'var(--space-5)' }}>
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'var(--font-size-lg)',
            color: 'var(--text-brand)',
            marginBottom: 'var(--space-2)'
          }}>
            Riad Kilani
          </h2>
          <p style={{ 
            fontSize: 'var(--font-size-sm)', 
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            Design System
          </p>
        </div>

        {navigation.map((section) => (
          <div key={section.title} className="ds-sidebar__section">
            <div className="ds-sidebar__title">{section.title}</div>
            <nav className="ds-sidebar__nav">
              {section.items.map((item) => (
                <button
                  key={item.id}
                  className="ds-sidebar__link"
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  onClick={() => {
                    onNavigate(item.id);
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  style={{
                    width: '100%',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}
