export function showToast(options: { title?: string; message?: string; duration?: number; dismissible?: boolean }): Promise<HTMLElement>
export function dismissToast(el: HTMLElement): Promise<void>
declare const _default: { showToast: typeof showToast; dismissToast: typeof dismissToast }
export default _default
