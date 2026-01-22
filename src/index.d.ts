export interface DesignSystemAPI {
  init: () => void
  initTabs: (el: HTMLElement) => void
  initAccordion: (el: HTMLElement) => void
  initDropdown: (el: HTMLElement) => void
  initTooltip: (el: HTMLElement) => void
  openModal: (el: HTMLElement) => void
  closeModal: (el: HTMLElement) => void
  showToast: (options: { title?: string; message?: string; duration?: number; dismissible?: boolean }) => HTMLElement
  dismissToast: (toast: HTMLElement) => void
}

declare const DS: DesignSystemAPI
export default DS
export const init: DesignSystemAPI['init']
export const initTabs: DesignSystemAPI['initTabs']
export const initAccordion: DesignSystemAPI['initAccordion']
export const initDropdown: DesignSystemAPI['initDropdown']
export const initTooltip: DesignSystemAPI['initTooltip']
export const openModal: DesignSystemAPI['openModal']
export const closeModal: DesignSystemAPI['closeModal']
export const showToast: DesignSystemAPI['showToast']
export const dismissToast: DesignSystemAPI['dismissToast']
