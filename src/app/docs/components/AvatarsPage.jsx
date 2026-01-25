/**
 * Avatars Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function AvatarsPage() {
  return (
    <div>
      <h1>Avatars</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Display user profile images or initials in a circular or rounded container.
      </p>

      <Section title="Sizes">
        <ComponentPreview variant="start">
          <div className="ds-cluster" style={{ alignItems: 'center' }}>
            <div className="ds-avatar ds-avatar--sm">JD</div>
            <div className="ds-avatar">JD</div>
            <div className="ds-avatar ds-avatar--lg">JD</div>
            <div className="ds-avatar ds-avatar--xl">JD</div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-avatar ds-avatar--sm">JD</div>
<div class="ds-avatar">JD</div>
<div class="ds-avatar ds-avatar--lg">JD</div>
<div class="ds-avatar ds-avatar--xl">JD</div>`}
        />
      </Section>

      <Section title="With Images">
        <ComponentPreview variant="start">
          <div className="ds-cluster">
            <div className="ds-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" />
            </div>
            <div className="ds-avatar ds-avatar--lg">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" alt="User" />
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-avatar">
  <img src="path/to/image.jpg" alt="User name" />
</div>`}
        />
      </Section>

      <Section title="Avatar Group">
        <ComponentPreview variant="start">
          <div className="ds-avatar-group">
            <div className="ds-avatar">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User 1" />
            </div>
            <div className="ds-avatar">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User 2" />
            </div>
            <div className="ds-avatar">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User 3" />
            </div>
            <div className="ds-avatar">+5</div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-avatar-group">
  <div class="ds-avatar">
    <img src="user1.jpg" alt="User 1" />
  </div>
  <div class="ds-avatar">
    <img src="user2.jpg" alt="User 2" />
  </div>
  <div class="ds-avatar">+5</div>
</div>`}
        />
      </Section>
    </div>
  );
}
