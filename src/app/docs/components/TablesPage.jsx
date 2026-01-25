/**
 * Tables Component Documentation
 */

import { CodeBlock, ComponentPreview, Section } from '../../components/DocHelpers';

export function TablesPage() {
  return (
    <div>
      <h1>Tables</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
        Display tabular data with support for sorting, styling, and responsive layouts.
      </p>

      <Section title="Basic Table">
        <ComponentPreview variant="column">
          <div className="ds-table-container" style={{ width: '100%' }}>
            <table className="ds-table">
              <thead className="ds-table__header">
                <tr className="ds-table__row">
                  <th className="ds-table__header-cell">Name</th>
                  <th className="ds-table__header-cell">Email</th>
                  <th className="ds-table__header-cell">Role</th>
                  <th className="ds-table__header-cell">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">John Doe</td>
                  <td className="ds-table__cell">john@example.com</td>
                  <td className="ds-table__cell">Admin</td>
                  <td className="ds-table__cell">
                    <span className="ds-badge ds-badge--success ds-badge--sm">Active</span>
                  </td>
                </tr>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">Jane Smith</td>
                  <td className="ds-table__cell">jane@example.com</td>
                  <td className="ds-table__cell">Editor</td>
                  <td className="ds-table__cell">
                    <span className="ds-badge ds-badge--success ds-badge--sm">Active</span>
                  </td>
                </tr>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">Bob Johnson</td>
                  <td className="ds-table__cell">bob@example.com</td>
                  <td className="ds-table__cell">Viewer</td>
                  <td className="ds-table__cell">
                    <span className="ds-badge ds-badge--default ds-badge--sm">Inactive</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<div class="ds-table-container">
  <table class="ds-table">
    <thead class="ds-table__header">
      <tr class="ds-table__row">
        <th class="ds-table__header-cell">Name</th>
        <th class="ds-table__header-cell">Email</th>
        <th class="ds-table__header-cell">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr class="ds-table__row">
        <td class="ds-table__cell">John Doe</td>
        <td class="ds-table__cell">john@example.com</td>
        <td class="ds-table__cell">Admin</td>
      </tr>
    </tbody>
  </table>
</div>`}
        />
      </Section>

      <Section title="Dense Table">
        <ComponentPreview variant="column">
          <div className="ds-table-container" style={{ width: '100%' }}>
            <table className="ds-table ds-table--dense">
              <thead className="ds-table__header">
                <tr className="ds-table__row">
                  <th className="ds-table__header-cell">Product</th>
                  <th className="ds-table__header-cell">Price</th>
                  <th className="ds-table__header-cell">Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">Product A</td>
                  <td className="ds-table__cell">$29.99</td>
                  <td className="ds-table__cell">45</td>
                </tr>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">Product B</td>
                  <td className="ds-table__cell">$49.99</td>
                  <td className="ds-table__cell">12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<table class="ds-table ds-table--dense">
  <!-- table content -->
</table>`}
        />
      </Section>

      <Section title="Zebra Striping">
        <ComponentPreview variant="column">
          <div className="ds-table-container" style={{ width: '100%' }}>
            <table className="ds-table ds-table--zebra">
              <thead className="ds-table__header">
                <tr className="ds-table__row">
                  <th className="ds-table__header-cell">ID</th>
                  <th className="ds-table__header-cell">Name</th>
                  <th className="ds-table__header-cell">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">001</td>
                  <td className="ds-table__cell">Item 1</td>
                  <td className="ds-table__cell">$100</td>
                </tr>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">002</td>
                  <td className="ds-table__cell">Item 2</td>
                  <td className="ds-table__cell">$200</td>
                </tr>
                <tr className="ds-table__row">
                  <td className="ds-table__cell">003</td>
                  <td className="ds-table__cell">Item 3</td>
                  <td className="ds-table__cell">$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentPreview>

        <CodeBlock
          title="HTML"
          code={`<table class="ds-table ds-table--zebra">
  <!-- table content -->
</table>`}
        />
      </Section>
    </div>
  );
}
