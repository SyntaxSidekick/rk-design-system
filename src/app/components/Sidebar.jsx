/**
 * Documentation Sidebar Component
 */

export function Sidebar({ currentPage, onNavigate, isOpen, onClose }) {
  const Icon = ({ id }) => {
    switch (id) {
      case 'overview':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
          </svg>
        )
      case 'tokens':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.6a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 16 4.6c.48 0 .94-.19 1.28-.52l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.33.33-.52.8-.52 1.28 0 .48.19.94.52 1.28l.06.06A2 2 0 1 1 19.4 15Z"/>
          </svg>
        )
      case 'motion':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        )
      case 'components':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        )
      case 'buttons':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="8" width="18" height="8" rx="4"/>
          </svg>
        )
      case 'badges':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 21l5-5 5 5V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z"/>
          </svg>
        )
      case 'avatars':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
          </svg>
        )
      case 'cards':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>
          </svg>
        )
      case 'inputs':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="10" width="12" height="4" rx="1"/><path d="M21 12h-3"/>
          </svg>
        )
      case 'alerts':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        )
      case 'modals':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 6v12"/>
          </svg>
        )
      case 'tabs':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="7" width="18" height="4" rx="1"/><path d="M7 7v10"/>
          </svg>
        )
      case 'accordion':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )
      case 'tables':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
        )
      default:
        return null
    }
  }
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
                  <span className="ds-sidebar__icon"><Icon id={item.id} /></span>
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
