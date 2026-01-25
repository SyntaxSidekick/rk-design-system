/**
 * Modals Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function ModalsPage() {
  return (
    <div>
      <h1>Modals</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Dialog overlays for important actions and information that require user attention.
      </p>

      <Section title="Basic Modal">
        <ComponentPreview>
          <button 
            className="ds-btn ds-btn--solid"
            data-ds-modal-trigger="demo-modal"
          >
            Open Modal
          </button>
        </ComponentPreview>

        <div id="demo-modal" className="ds-modal" style={{ display: 'none' }}>
          <div className="ds-modal-backdrop" />
          <div style={{ position: 'fixed', inset: 0, zIndex: 'var(--z-modal)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-5)' }}>
            <div className="ds-modal__content">
              <div className="ds-modal__header">
                <h2 className="ds-modal__title">Modal Title</h2>
                <button className="ds-modal__close" data-ds-modal-close aria-label="Close">×</button>
              </div>
              <div className="ds-modal__body">
                <p>This is the modal content. You can put any content here.</p>
              </div>
              <div className="ds-modal__footer">
                <button className="ds-btn ds-btn--solid">Confirm</button>
                <button className="ds-btn ds-btn--ghost" data-ds-modal-close>Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          title="HTML"
          code={`<!-- Trigger Button -->
<button data-ds-modal-trigger="my-modal">Open Modal</button>

<!-- Modal Structure -->
<div id="my-modal" class="ds-modal" style="display: none;">
  <div class="ds-modal-backdrop"></div>
  <div style="position: fixed; inset: 0; z-index: var(--z-modal); display: flex; align-items: center; justify-content: center; padding: var(--space-5);">
    <div class="ds-modal__content">
      <div class="ds-modal__header">
        <h2 class="ds-modal__title">Modal Title</h2>
        <button class="ds-modal__close" data-ds-modal-close>×</button>
      </div>
      <div class="ds-modal__body">
        <p>Modal content goes here.</p>
      </div>
      <div class="ds-modal__footer">
        <button class="ds-btn ds-btn--solid">Confirm</button>
        <button class="ds-btn ds-btn--ghost" data-ds-modal-close>Cancel</button>
      </div>
    </div>
  </div>
</div>`}
        />

        <CodeBlock
          title="JavaScript"
          code={`// Open modal programmatically
const modal = document.getElementById('my-modal');
DesignSystem.openModal(modal);

// Close modal programmatically
DesignSystem.closeModal(modal);`}
        />
      </Section>

      <Section title="Modal Features">
        <div className="ds-alert ds-alert--info">
          <div className="ds-alert__content">
            <div className="ds-alert__title">Accessibility Features</div>
            <ul style={{ marginTop: 'var(--space-3)', marginLeft: 'var(--space-6)' }}>
              <li>Focus trap - Tab key cycles through modal elements only</li>
              <li>Escape key closes the modal</li>
              <li>Click outside (backdrop) closes the modal</li>
              <li>Focus returns to trigger element on close</li>
              <li>Body scroll is disabled when modal is open</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
