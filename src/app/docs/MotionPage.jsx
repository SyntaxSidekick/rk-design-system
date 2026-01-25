/**
 * Motion & Animation Documentation Page
 */

import { Section, CodeBlock } from '../components/DocHelpers';
import { useState } from 'react';

export function MotionPage() {
  const [activeAnimation, setActiveAnimation] = useState(null);

  const animations = [
    { name: 'Fade In', class: 'ds-animate-fade-in' },
    { name: 'Slide Up', class: 'ds-animate-slide-up' },
    { name: 'Slide Down', class: 'ds-animate-slide-down' },
    { name: 'Scale In', class: 'ds-animate-scale-in' },
    { name: 'Pop', class: 'ds-animate-pop' },
    { name: 'Wiggle', class: 'ds-animate-wiggle' },
    { name: 'Shake', class: 'ds-animate-shake' },
    { name: 'Pulse', class: 'ds-animate-pulse' },
    { name: 'Bounce', class: 'ds-animate-bounce' },
  ];

  const triggerAnimation = (animationClass) => {
    setActiveAnimation(animationClass);
    setTimeout(() => setActiveAnimation(null), 1000);
  };

  return (
    <div>
      <h1>Motion & Animation</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        A comprehensive motion system with keyframe animations, transitions, and micro-interactions. 
        All animations respect reduced motion preferences.
      </p>

      <Section title="Animation Utilities">
        <p style={{ marginBottom: 'var(--space-5)', color: 'var(--text-secondary)' }}>
          Click any animation to see it in action. Simply add the class to any element.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-5)' }}>
          {animations.map((animation) => (
            <div key={animation.name}>
              <div className="docs-motion-demo">
                <div 
                  className={`docs-motion-demo__box ${activeAnimation === animation.class ? animation.class : ''}`}
                  key={activeAnimation}
                />
              </div>
              <button 
                className="ds-btn ds-btn--outline" 
                style={{ width: '100%', marginTop: 'var(--space-3)' }}
                onClick={() => triggerAnimation(animation.class)}
              >
                {animation.name}
              </button>
              <code style={{ 
                display: 'block', 
                marginTop: 'var(--space-2)', 
                fontSize: 'var(--font-size-xs)',
                textAlign: 'center',
                color: 'var(--text-tertiary)'
              }}>
                {animation.class}
              </code>
            </div>
          ))}
        </div>

        <CodeBlock
          title="Usage Example"
          code={`<div class="ds-animate-fade-in">
  This element will fade in
</div>

<button class="ds-animate-pop">
  This button will pop on load
</button>`}
        />
      </Section>

      <Section title="Spinners & Loaders">
        <div style={{ display: 'flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 'var(--space-3)', minHeight: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ds-spinner" />
            </div>
            <code style={{ fontSize: 'var(--font-size-sm)' }}>ds-spinner</code>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 'var(--space-3)', minHeight: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ds-spinner ds-spinner--sm" />
            </div>
            <code style={{ fontSize: 'var(--font-size-sm)' }}>ds-spinner--sm</code>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 'var(--space-3)', minHeight: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ds-spinner ds-spinner--lg" />
            </div>
            <code style={{ fontSize: 'var(--font-size-sm)' }}>ds-spinner--lg</code>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 'var(--space-3)', minHeight: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ds-spinner-dots">
                <div className="ds-spinner-dots__dot" />
                <div className="ds-spinner-dots__dot" />
                <div className="ds-spinner-dots__dot" />
              </div>
            </div>
            <code style={{ fontSize: 'var(--font-size-sm)' }}>ds-spinner-dots</code>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 'var(--space-3)', minHeight: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="ds-spinner-dual" />
            </div>
            <code style={{ fontSize: 'var(--font-size-sm)' }}>ds-spinner-dual</code>
          </div>
        </div>

        <CodeBlock
          title="Spinner HTML"
          code={`<!-- Border Spinner -->
<div class="ds-spinner"></div>

<!-- Dots Spinner -->
<div class="ds-spinner-dots">
  <div class="ds-spinner-dots__dot"></div>
  <div class="ds-spinner-dots__dot"></div>
  <div class="ds-spinner-dots__dot"></div>
</div>

<!-- Dual Ring Spinner -->
<div class="ds-spinner-dual"></div>`}
        />
      </Section>

      <Section title="Skeleton Loading">
        <div className="ds-card">
          <div className="ds-card__body">
            <div className="ds-skeleton ds-skeleton--heading" />
            <div className="ds-skeleton ds-skeleton--text" />
            <div className="ds-skeleton ds-skeleton--text" style={{ width: '80%' }} />
            <div className="ds-skeleton ds-skeleton--text" style={{ width: '60%' }} />
            
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
              <div className="ds-skeleton ds-skeleton--avatar" />
              <div style={{ flex: 1 }}>
                <div className="ds-skeleton ds-skeleton--text" style={{ width: '40%', marginBottom: 'var(--space-2)' }} />
                <div className="ds-skeleton ds-skeleton--text" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          title="Skeleton HTML"
          code={`<div class="ds-skeleton ds-skeleton--heading"></div>
<div class="ds-skeleton ds-skeleton--text"></div>
<div class="ds-skeleton ds-skeleton--avatar"></div>
<div class="ds-skeleton ds-skeleton--button"></div>`}
        />
      </Section>

      <Section title="Progress Indicators">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div>
            <div style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              Linear Progress
            </div>
            <div className="ds-progress">
              <div className="ds-progress__bar" style={{ width: '60%' }} />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              Indeterminate Progress
            </div>
            <div className="ds-progress ds-progress--indeterminate">
              <div className="ds-progress__bar" />
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
              Success State
            </div>
            <div className="ds-progress ds-progress--success">
              <div className="ds-progress__bar" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        <CodeBlock
          title="Progress HTML"
          code={`<!-- Linear Progress -->
<div class="ds-progress">
  <div class="ds-progress__bar" style="width: 60%"></div>
</div>

<!-- Indeterminate -->
<div class="ds-progress ds-progress--indeterminate">
  <div class="ds-progress__bar"></div>
</div>

<!-- Semantic Colors -->
<div class="ds-progress ds-progress--success">
  <div class="ds-progress__bar" style="width: 100%"></div>
</div>`}
        />
      </Section>

      <Section title="Motion Tokens">
        <p style={{ marginBottom: 'var(--space-5)', color: 'var(--text-secondary)' }}>
          Predefined duration and easing values for consistent motion.
        </p>

        <div className="ds-table-container">
          <table className="ds-table">
            <thead className="ds-table__header">
              <tr className="ds-table__row">
                <th className="ds-table__header-cell">Token</th>
                <th className="ds-table__header-cell">Value</th>
                <th className="ds-table__header-cell">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="ds-table__row">
                <td className="ds-table__cell"><code>--duration-fast</code></td>
                <td className="ds-table__cell">150ms</td>
                <td className="ds-table__cell">Micro-interactions, hover states</td>
              </tr>
              <tr className="ds-table__row">
                <td className="ds-table__cell"><code>--duration-medium</code></td>
                <td className="ds-table__cell">250ms</td>
                <td className="ds-table__cell">Standard transitions</td>
              </tr>
              <tr className="ds-table__row">
                <td className="ds-table__cell"><code>--duration-slow</code></td>
                <td className="ds-table__cell">350ms</td>
                <td className="ds-table__cell">Complex animations</td>
              </tr>
              <tr className="ds-table__row">
                <td className="ds-table__cell"><code>--ease-out</code></td>
                <td className="ds-table__cell">cubic-bezier(0, 0, 0.2, 1)</td>
                <td className="ds-table__cell">Enter animations</td>
              </tr>
              <tr className="ds-table__row">
                <td className="ds-table__cell"><code>--ease-in</code></td>
                <td className="ds-table__cell">cubic-bezier(0.4, 0, 1, 1)</td>
                <td className="ds-table__cell">Exit animations</td>
              </tr>
              <tr className="ds-table__row">
                <td className="ds-table__cell"><code>--ease-in-out</code></td>
                <td className="ds-table__cell">cubic-bezier(0.4, 0, 0.2, 1)</td>
                <td className="ds-table__cell">Bi-directional animations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Reduced Motion">
        <div className="ds-alert ds-alert--info">
          <div className="ds-alert__content">
            <div className="ds-alert__title">Accessibility</div>
            All animations automatically respect the <code>prefers-reduced-motion</code> media query. 
            Users who have enabled reduced motion in their operating system will see minimal or no animations.
          </div>
        </div>

        <CodeBlock
          title="Reduced Motion Support"
          code={`/* Automatic reduced motion support */
@media (prefers-reduced-motion: reduce) {
  :root:not([data-motion]) *,
  :root:not([data-motion]) *::before,
  :root:not([data-motion]) *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Manual control via data attribute */
[data-motion="reduced"] * {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}`}
        />
      </Section>
    </div>
  );
}
