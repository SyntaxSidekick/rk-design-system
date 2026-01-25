// Component-driven entry: Tooltip
export async function initTooltip(triggerElement) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.initTooltip(triggerElement);
}

export default { initTooltip }
