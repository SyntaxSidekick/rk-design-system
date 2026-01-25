/**
 * Accordion Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function AccordionPage() {
  return (
    <div>
      <h1>Accordion</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Vertically stacked list of expandable/collapsible content sections.
      </p>

      <Section title="Basic Accordion">
        <ComponentPreview variant="column">
          <div className="ds-accordion" data-ds="accordion" style={{ width: '100%', maxWidth: '600px' }}>
            <div className="ds-accordion__item">
              <button 
                className="ds-accordion__trigger" 
                aria-expanded="true" 
                aria-controls="content-1"
              >
                Section 1
                <span className="ds-accordion__icon">▼</span>
              </button>
              <div id="content-1" className="ds-accordion__content">
                <p>This is the content for section 1. Click the header to collapse this section.</p>
              </div>
            </div>
            
            <div className="ds-accordion__item">
              <button 
                className="ds-accordion__trigger" 
                aria-expanded="false" 
                aria-controls="content-2"
              >
                Section 2
                <span className="ds-accordion__icon">▼</span>
              </button>
              <div id="content-2" className="ds-accordion__content" hidden>
                <p>This is the content for section 2. Each section can be expanded independently.</p>
              </div>
            </div>
            
            <div className="ds-accordion__item">
              <button 
                className="ds-accordion__trigger" 
                aria-expanded="false" 
                aria-controls="content-3"
              >
                Section 3
                <span className="ds-accordion__icon">▼</span>
              </button>
              <div id="content-3" className="ds-accordion__content" hidden>
                <p>This is the content for section 3. Use arrow keys to navigate between sections.</p>
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-accordion" data-ds="accordion">
  <div class="ds-accordion__item">
    <button class="ds-accordion__trigger" aria-expanded="true" aria-controls="content-1">
      Section 1
      <span class="ds-accordion__icon">▼</span>
    </button>
    <div id="content-1" class="ds-accordion__content">
      <p>Content for section 1</p>
    </div>
  </div>
  
  <div class="ds-accordion__item">
    <button class="ds-accordion__trigger" aria-expanded="false" aria-controls="content-2">
      Section 2
      <span class="ds-accordion__icon">▼</span>
    </button>
    <div id="content-2" class="ds-accordion__content" hidden>
      <p>Content for section 2</p>
    </div>
  </div>
</div>`}
        />
      </Section>

      <Section title="Keyboard Navigation">
        <div className="ds-alert ds-alert--info">
          <div className="ds-alert__content">
            <div className="ds-alert__title">Accessibility</div>
            <ul style={{ marginTop: 'var(--space-3)', marginLeft: 'var(--space-6)' }}>
              <li><kbd>Enter</kbd> / <kbd>Space</kbd> - Toggle section</li>
              <li><kbd>↑</kbd> / <kbd>↓</kbd> - Navigate between section headers</li>
              <li><kbd>Home</kbd> - Focus first section</li>
              <li><kbd>End</kbd> - Focus last section</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
