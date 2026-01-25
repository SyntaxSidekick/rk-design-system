/**
 * Code Block Component with Copy Functionality
 */

import { useState } from 'react';

export function CodeBlock({ title, code, language = 'html' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="docs-code-block">
      <div className="docs-code-block__header">
        <span className="docs-code-block__title">{title || language}</span>
        <button 
          className="docs-code-block__copy"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="docs-code-block__content">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
}

export function ComponentPreview({ children, variant = 'center' }) {
  const className = variant === 'start' 
    ? 'docs-component-preview docs-component-preview--start'
    : variant === 'column'
    ? 'docs-component-preview docs-component-preview--column'
    : 'docs-component-preview';

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function Section({ title, children }) {
  return (
    <section className="docs-section">
      <h2 className="docs-section__title">{title}</h2>
      {children}
    </section>
  );
}

export function PropsTable({ props }) {
  return (
    <div className="docs-props-table">
      <div className="ds-table-container">
        <table className="ds-table">
          <thead className="ds-table__header">
            <tr className="ds-table__row">
              <th className="ds-table__header-cell">Prop</th>
              <th className="ds-table__header-cell">Type</th>
              <th className="ds-table__header-cell">Default</th>
              <th className="ds-table__header-cell">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr key={index} className="ds-table__row">
                <td className="ds-table__cell">
                  <code>{prop.name}</code>
                </td>
                <td className="ds-table__cell">
                  <code>{prop.type}</code>
                </td>
                <td className="ds-table__cell">
                  {prop.default ? <code>{prop.default}</code> : '—'}
                </td>
                <td className="ds-table__cell">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
