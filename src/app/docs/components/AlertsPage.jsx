/**
 * Alerts & Toasts Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function AlertsPage() {
  const showToast = () => {
    if (window.DesignSystem) {
      window.DesignSystem.showToast({
        title: 'Success',
        message: 'Your changes have been saved.',
        duration: 3000
      });
    }
  };

  return (
    <div>
      <h1>Alerts & Toasts</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Alert messages and toast notifications for user feedback.
      </p>

      <Section title="Alert Variants">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div className="ds-alert ds-alert--info">
              <div className="ds-alert__content">
                <div className="ds-alert__title">Information</div>
                This is an informational alert message.
              </div>
            </div>

            <div className="ds-alert ds-alert--success">
              <div className="ds-alert__content">
                <div className="ds-alert__title">Success</div>
                Your action was completed successfully.
              </div>
            </div>

            <div className="ds-alert ds-alert--warning">
              <div className="ds-alert__content">
                <div className="ds-alert__title">Warning</div>
                Please review this information carefully.
              </div>
            </div>

            <div className="ds-alert ds-alert--danger">
              <div className="ds-alert__content">
                <div className="ds-alert__title">Error</div>
                An error occurred. Please try again.
              </div>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-alert ds-alert--info">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Information</div>
    This is an informational alert message.
  </div>
</div>

<div class="ds-alert ds-alert--success">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Success</div>
    Your action was completed successfully.
  </div>
</div>`}
        />
      </Section>

      <Section title="Dismissible Alert">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <div className="ds-alert ds-alert--warning">
              <div className="ds-alert__content">
                <div className="ds-alert__title">Warning</div>
                This alert can be dismissed.
              </div>
              <button className="ds-alert__close" aria-label="Close">×</button>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-alert ds-alert--warning">
  <div class="ds-alert__content">
    <div class="ds-alert__title">Warning</div>
    This alert can be dismissed.
  </div>
  <button class="ds-alert__close" aria-label="Close">×</button>
</div>`}
        />
      </Section>

      <Section title="Toast Notifications">
        <ComponentPreview>
          <button className="ds-btn ds-btn--solid" onClick={showToast}>
            Show Toast
          </button>
        </ComponentPreview>

        <CodeBlock
          title="JavaScript"
          code={`// Show a toast notification
DesignSystem.showToast({
  title: 'Success',
  message: 'Your changes have been saved.',
  duration: 3000,  // milliseconds
  dismissible: true
});`}
        />

        <CodeBlock
          title="HTML Structure"
          code={`<!-- Toasts are automatically created, but the structure is: -->
<div class="ds-toast">
  <div class="ds-toast__content">
    <div class="ds-toast__title">Success</div>
    <div class="ds-toast__message">Message text</div>
  </div>
  <button class="ds-toast__close" aria-label="Close">×</button>
</div>`}
        />
      </Section>
    </div>
  );
}
