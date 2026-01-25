// Component-driven entry: Modal/Dialog
export async function openModal(modalElement) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.openModal(modalElement);
}

export async function closeModal(modalElement) {
  if (!window.DesignSystem) {
    await import('../ds/components.js');
  }
  return window.DesignSystem.closeModal(modalElement);
}

export default { openModal, closeModal }
