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
            <span className="ds-hidden-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
              Dark
            </span>
            <input
              type="checkbox"
              role="switch"
              aria-label="Toggle dark mode"
              className="ds-switch"
              checked={theme === 'dark'}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </label>

          <label className="ds-hidden-mobile" style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 3v18M21 12H3"/>
              </svg>
              High Contrast
            </span>
            <input
              type="checkbox"
              role="switch"
              aria-label="Toggle high contrast"
              className="ds-switch"
              checked={contrast === 'high'}
              onChange={(e) => setContrast(e.target.checked ? 'high' : 'normal')}
            />
          </label>

          <label className="ds-hidden-mobile" style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 12h7l-3 3M22 12h-7l3-3"/>
              </svg>
              Reduced Motion
            </span>
            <input
              type="checkbox"
              role="switch"
              aria-label="Toggle reduced motion"
              className="ds-switch"
              checked={motion === 'reduced'}
              onChange={(e) => setMotion(e.target.checked ? 'reduced' : 'normal')}
            />
          </label>
        </div>
      </div>
    </header>
  );
}
