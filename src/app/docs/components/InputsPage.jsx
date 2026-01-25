/**
 * Form Inputs Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function InputsPage() {
  return (
    <div>
      <h1>Form Inputs</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Input fields, selects, checkboxes, switches, and other form controls.
      </p>

      <Section title="Text Input">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <label className="ds-label">Label</label>
            <input type="text" className="ds-input" placeholder="Enter text..." />
            <span className="ds-help-text">Helper text goes here</span>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<label class="ds-label">Label</label>
<input type="text" class="ds-input" placeholder="Enter text..." />
<span class="ds-help-text">Helper text</span>`}
        />
      </Section>

      <Section title="Input Sizes">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <input type="text" className="ds-input ds-input--sm" placeholder="Small input" />
            <input type="text" className="ds-input" placeholder="Default input" />
            <input type="text" className="ds-input ds-input--lg" placeholder="Large input" />
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<input type="text" class="ds-input ds-input--sm" placeholder="Small" />
<input type="text" class="ds-input" placeholder="Default" />
<input type="text" class="ds-input ds-input--lg" placeholder="Large" />`}
        />
      </Section>

      <Section title="Input States">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div>
              <input type="text" className="ds-input" placeholder="Default state" />
            </div>
            <div>
              <input type="text" className="ds-input ds-input--error" placeholder="Error state" />
              <span className="ds-error-text">This field is required</span>
            </div>
            <div>
              <input type="text" className="ds-input ds-input--success" placeholder="Success state" />
              <span className="ds-success-text">Looks good!</span>
            </div>
            <div>
              <input type="text" className="ds-input" placeholder="Disabled" disabled />
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<!-- Error state -->
<input type="text" class="ds-input ds-input--error" />
<span class="ds-error-text">Error message</span>

<!-- Success state -->
<input type="text" class="ds-input ds-input--success" />
<span class="ds-success-text">Success message</span>

<!-- Disabled -->
<input type="text" class="ds-input" disabled />`}
        />
      </Section>

      <Section title="Textarea">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <label className="ds-label">Description</label>
            <textarea className="ds-input ds-textarea" placeholder="Enter description..." rows={4} />
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<label class="ds-label">Description</label>
<textarea class="ds-input ds-textarea" rows="4"></textarea>`}
        />
      </Section>

      <Section title="Select">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <label className="ds-label">Choose an option</label>
            <select className="ds-select ds-input">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<select class="ds-select ds-input">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`}
        />
      </Section>

      <Section title="Checkbox">
        <ComponentPreview variant="start">
          <div className="ds-field">
            <input type="checkbox" className="ds-checkbox" id="check1" />
            <label htmlFor="check1">Checkbox label</label>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-field">
  <input type="checkbox" class="ds-checkbox" id="check1" />
  <label for="check1">Checkbox label</label>
</div>`}
        />
      </Section>

      <Section title="Radio">
        <ComponentPreview variant="start">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div className="ds-field">
              <input type="radio" className="ds-radio" name="radio" id="radio1" defaultChecked />
              <label htmlFor="radio1">Option 1</label>
            </div>
            <div className="ds-field">
              <input type="radio" className="ds-radio" name="radio" id="radio2" />
              <label htmlFor="radio2">Option 2</label>
            </div>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-field">
  <input type="radio" class="ds-radio" name="radio" id="radio1" checked />
  <label for="radio1">Option 1</label>
</div>`}
        />
      </Section>

      <Section title="Switch">
        <ComponentPreview variant="start">
          <div className="ds-field">
            <input type="checkbox" className="ds-switch" id="switch1" />
            <label htmlFor="switch1">Enable notifications</label>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-field">
  <input type="checkbox" class="ds-switch" id="switch1" />
  <label for="switch1">Enable notifications</label>
</div>`}
        />
      </Section>

      <Section title="Range Slider">
        <ComponentPreview variant="column">
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <label className="ds-label">Volume</label>
            <input type="range" className="ds-range" min="0" max="100" defaultValue="50" />
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<input type="range" class="ds-range" min="0" max="100" value="50" />`}
        />
      </Section>
    </div>
  );
}
