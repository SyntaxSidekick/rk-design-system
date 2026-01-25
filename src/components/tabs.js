// Component-driven entry: Tabs
export async function initTabs(tabsElement) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.initTabs(tabsElement);
}

export default { initTabs }
