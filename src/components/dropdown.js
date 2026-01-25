// Component-driven entry: Dropdown/Menu
export async function initDropdown(triggerElement) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.initDropdown(triggerElement);
}

export default { initDropdown }
