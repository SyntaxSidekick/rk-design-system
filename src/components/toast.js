// Component-driven entry: Toast
export async function showToast(options) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.showToast(options);
}

export async function dismissToast(toastElement) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.dismissToast(toastElement);
}

export default { showToast, dismissToast }
