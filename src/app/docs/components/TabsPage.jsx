/**
 * Tabs Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function TabsPage() {
  return (
    <div>
      <h1>Tabs</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Organize content into separate views with tabbed navigation.
      </p>

      <Section title="Basic Tabs">
        <ComponentPreview variant="column">
          <div className="ds-tabs" data-ds="tabs" style={{ width: '100%', maxWidth: '600px' }}>
            <div role="tablist" className="ds-tabs__list">
              <button role="tab" aria-selected="true" aria-controls="panel-1" tabIndex={0} className="ds-tabs__tab">
                Tab 1
              </button>
              <button role="tab" aria-selected="false" aria-controls="panel-2" tabIndex={-1} className="ds-tabs__tab">
                Tab 2
              </button>
              <button role="tab" aria-selected="false" aria-controls="panel-3" tabIndex={-1} className="ds-tabs__tab">
                Tab 3
              </button>
            </div>
            
            <div role="tabpanel" id="panel-1" className="ds-tabs__panel">
              <p>This is the content for Tab 1. You can put any content here.</p>
            </div>
            
            <div role="tabpanel" id="panel-2" className="ds-tabs__panel" hidden>
              <p>This is the content for Tab 2. Switch between tabs to see different content.</p>
            </div>
            
            <div role="tabpanel" id="panel-3" className="ds-tabs__panel" hidden>
              <p>This is the content for Tab 3. Tabs support keyboard navigation with arrow keys.</p>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-tabs" data-ds="tabs">
  <div role="tablist" class="ds-tabs__list">
    <button role="tab" aria-selected="true" aria-controls="panel-1" tabindex="0" class="ds-tabs__tab">
      Tab 1
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-1" class="ds-tabs__tab">
      Tab 2
    </button>
  </div>
  
  <div role="tabpanel" id="panel-1" class="ds-tabs__panel">
    Content for Tab 1
  </div>
  
  <div role="tabpanel" id="panel-2" class="ds-tabs__panel" hidden>
    Content for Tab 2
  </div>
</div>`}
        />
      </Section>

      <Section title="Keyboard Navigation">
        <div className="ds-alert ds-alert--info">
          <div className="ds-alert__content">
            <div className="ds-alert__title">Accessibility</div>
            <ul style={{ marginTop: 'var(--space-3)', marginLeft: 'var(--space-6)' }}>
              <li><kbd>Tab</kbd> - Move focus into and out of tab list</li>
              <li><kbd>←</kbd> / <kbd>→</kbd> - Navigate between tabs</li>
              <li><kbd>Home</kbd> - Jump to first tab</li>
              <li><kbd>End</kbd> - Jump to last tab</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
