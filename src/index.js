// Design System v2 library entry
// Import CSS layers to emit a single style.css in dist
import './ds/base.css'
import './ds/tokens.css'
import './ds/themes.css'
import './ds/motion.css'
import './ds/components.css'

// Load component behaviors (side effects attach to window.DesignSystem)
import './ds/components.js'

// Provide ESM/CJS exports from the global for bundlers
const DS = typeof window !== 'undefined' && window.DesignSystem ? window.DesignSystem : {}

export default DS
export const {
  init,
  initTabs,
  initAccordion,
  initDropdown,
  initTooltip,
  openModal,
  closeModal,
  showToast,
  dismissToast,
} = DS
