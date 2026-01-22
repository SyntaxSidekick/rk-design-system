/**
 * Documentation Header Component
 */

export function Header({ theme, setTheme, contrast, setContrast, motion, setMotion, onMenuClick }) {
  return (
    <header className="docs-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <button 
          className="ds-btn ds-btn--ghost ds-btn--icon ds-hidden-desktop"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <h1 className="docs-header__title">Riad Kilani Design System</h1>
      </div>
      
      <div className="docs-header__controls">
        <div className="ds-cluster ds-cluster--xs">
          <span className="ds-badge ds-badge--subtle ds-hidden-mobile" style={{ marginRight: 'var(--space-2)' }}>v2</span>
          <label style={{ 
            fontSize: 'var(--font-size-sm)', 
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)'
          }}>
            <span className="ds-hidden-mobile">Theme:</span>
            <select 
              className="ds-select ds-input--sm"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              style={{ width: '100px' }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label style={{ 
            fontSize: 'var(--font-size-sm)', 
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)'
          }} className="ds-hidden-mobile">
            <span>Contrast:</span>
            <select 
              className="ds-select ds-input--sm"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
              style={{ width: '100px' }}
            >
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </label>

          <label style={{ 
            fontSize: 'var(--font-size-sm)', 
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)'
          }} className="ds-hidden-mobile">
            <span>Motion:</span>
            <select 
              className="ds-select ds-input--sm"
              value={motion}
              onChange={(e) => setMotion(e.target.value)}
              style={{ width: '100px' }}
            >
              <option value="normal">Normal</option>
              <option value="reduced">Reduced</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  );
}
