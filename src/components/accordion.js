// Component-driven entry: Accordion
export async function initAccordion(accordionElement) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.initAccordion(accordionElement);
}

export default { initAccordion }
