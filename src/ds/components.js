/**
 * RIAD KILANI DESIGN SYSTEM
 * Component Behaviors - Vanilla JavaScript
 * 
 * Interactive behaviors for components
 * Usage: Add data-ds="component-name" to elements
 */

(function() {
  'use strict';

  /* ========================================
     TABS
     ======================================== */
  
  function initTabs(tabsElement) {
    const tabList = tabsElement.querySelector('[role="tablist"]');
    const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
    const panels = Array.from(tabsElement.querySelectorAll('[role="tabpanel"]'));

    function activateTab(tab) {
      // Deactivate all tabs
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });

      // Hide all panels
      panels.forEach(p => {
        p.setAttribute('hidden', 'true');
      });

      // Activate selected tab
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
      tab.focus();

      // Show associated panel
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.removeAttribute('hidden');
      }
    }

    // Click handler
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        activateTab(tab);
      });

      // Keyboard navigation
      tab.addEventListener('keydown', (e) => {
        const currentIndex = tabs.indexOf(tab);
        let nextTab;

        switch(e.key) {
          case 'ArrowRight':
          case 'ArrowDown':
            e.preventDefault();
            nextTab = tabs[currentIndex + 1] || tabs[0];
            activateTab(nextTab);
            break;
          case 'ArrowLeft':
          case 'ArrowUp':
            e.preventDefault();
            nextTab = tabs[currentIndex - 1] || tabs[tabs.length - 1];
            activateTab(nextTab);
            break;
          case 'Home':
            e.preventDefault();
            activateTab(tabs[0]);
            break;
          case 'End':
            e.preventDefault();
            activateTab(tabs[tabs.length - 1]);
            break;
        }
      });
    });
  }

  /* ========================================
     ACCORDION
     ======================================== */
  
  function initAccordion(accordionElement) {
    const triggers = Array.from(accordionElement.querySelectorAll('.ds-accordion__trigger'));

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        const contentId = trigger.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (expanded) {
          trigger.setAttribute('aria-expanded', 'false');
          content.setAttribute('hidden', 'true');
        } else {
          trigger.setAttribute('aria-expanded', 'true');
          content.removeAttribute('hidden');
        }
      });

      // Keyboard support
      trigger.addEventListener('keydown', (e) => {
        const currentIndex = triggers.indexOf(trigger);
        let nextTrigger;

        switch(e.key) {
          case 'ArrowDown':
            e.preventDefault();
            nextTrigger = triggers[currentIndex + 1] || triggers[0];
            nextTrigger.focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            nextTrigger = triggers[currentIndex - 1] || triggers[triggers.length - 1];
            nextTrigger.focus();
            break;
          case 'Home':
            e.preventDefault();
            triggers[0].focus();
            break;
          case 'End':
            e.preventDefault();
            triggers[triggers.length - 1].focus();
            break;
        }
      });
    });
  }

  /* ========================================
     MODAL / DIALOG
     ======================================== */
  
  const activeModals = [];

  function openModal(modalElement) {
    const backdrop = modalElement.querySelector('.ds-modal-backdrop');
    const content = modalElement.querySelector('.ds-modal__content');
    const closeButtons = Array.from(modalElement.querySelectorAll('[data-ds-modal-close]'));
    
    // Store previously focused element
    modalElement._previousFocus = document.activeElement;
    
    // Show modal
    modalElement.style.display = 'block';
    if (backdrop) backdrop.style.display = 'block';
    
    // Focus trap
    const focusableElements = content.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    if (firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 50);
    }

    // Close handlers
    const closeModal = () => {
      modalElement.style.display = 'none';
      if (backdrop) backdrop.style.display = 'none';
      
      // Restore focus
      if (modalElement._previousFocus) {
        modalElement._previousFocus.focus();
      }
      
      // Remove from active modals
      const index = activeModals.indexOf(modalElement);
      if (index > -1) {
        activeModals.splice(index, 1);
      }
      
      // Re-enable body scroll
      if (activeModals.length === 0) {
        document.body.style.overflow = '';
      }
    };

    closeButtons.forEach(btn => {
      btn.addEventListener('click', closeModal, { once: true });
    });

    if (backdrop) {
      backdrop.addEventListener('click', closeModal, { once: true });
    }

    // Escape key
    const escapeHandler = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);

    // Focus trap
    const trapHandler = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    };
    content.addEventListener('keydown', trapHandler);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    activeModals.push(modalElement);

    // Store cleanup
    modalElement._cleanup = () => {
      content.removeEventListener('keydown', trapHandler);
      document.removeEventListener('keydown', escapeHandler);
    };
  }

  function closeModal(modalElement) {
    if (modalElement._cleanup) {
      modalElement._cleanup();
    }
    modalElement.style.display = 'none';
    const backdrop = modalElement.querySelector('.ds-modal-backdrop');
    if (backdrop) backdrop.style.display = 'none';
    
    if (modalElement._previousFocus) {
      modalElement._previousFocus.focus();
    }
    
    const index = activeModals.indexOf(modalElement);
    if (index > -1) {
      activeModals.splice(index, 1);
    }
    
    if (activeModals.length === 0) {
      document.body.style.overflow = '';
    }
  }

  /* ========================================
     DROPDOWN / MENU
     ======================================== */
  
  function initDropdown(triggerElement) {
    const menuId = triggerElement.getAttribute('aria-controls');
    const menu = document.getElementById(menuId);
    
    if (!menu) return;

    const items = Array.from(menu.querySelectorAll('.ds-menu__item:not([aria-disabled="true"])'));
    let isOpen = false;

    function openMenu() {
      menu.style.display = 'block';
      triggerElement.setAttribute('aria-expanded', 'true');
      isOpen = true;
      
      // Position menu
      const rect = triggerElement.getBoundingClientRect();
      menu.style.position = 'absolute';
      menu.style.top = `${rect.bottom + 4}px`;
      menu.style.left = `${rect.left}px`;
      
      // Focus first item
      if (items[0]) {
        setTimeout(() => items[0].focus(), 50);
      }
    }

    function closeMenu() {
      menu.style.display = 'none';
      triggerElement.setAttribute('aria-expanded', 'false');
      isOpen = false;
      triggerElement.focus();
    }

    // Toggle on click
    triggerElement.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (isOpen && !menu.contains(e.target) && e.target !== triggerElement) {
        closeMenu();
      }
    });

    // Close on Escape
    menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    // Keyboard navigation
    items.forEach((item, index) => {
      item.addEventListener('keydown', (e) => {
        switch(e.key) {
          case 'ArrowDown':
            e.preventDefault();
            const next = items[index + 1] || items[0];
            next.focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            const prev = items[index - 1] || items[items.length - 1];
            prev.focus();
            break;
          case 'Home':
            e.preventDefault();
            items[0].focus();
            break;
          case 'End':
            e.preventDefault();
            items[items.length - 1].focus();
            break;
        }
      });

      item.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  /* ========================================
     TOOLTIP
     ======================================== */
  
  function initTooltip(triggerElement) {
    const tooltipText = triggerElement.getAttribute('data-tooltip');
    const position = triggerElement.getAttribute('data-tooltip-position') || 'top';
    
    if (!tooltipText) return;

    let tooltip;
    let showTimeout;
    let hideTimeout;

    function showTooltip() {
      clearTimeout(hideTimeout);
      showTimeout = setTimeout(() => {
        tooltip = document.createElement('div');
        tooltip.className = `ds-tooltip ds-tooltip--${position}`;
        tooltip.textContent = tooltipText;
        tooltip.setAttribute('role', 'tooltip');
        
        triggerElement.style.position = 'relative';
        triggerElement.appendChild(tooltip);
      }, 300);
    }

    function hideTooltip() {
      clearTimeout(showTimeout);
      hideTimeout = setTimeout(() => {
        if (tooltip && tooltip.parentNode) {
          tooltip.parentNode.removeChild(tooltip);
          tooltip = null;
        }
      }, 100);
    }

    triggerElement.addEventListener('mouseenter', showTooltip);
    triggerElement.addEventListener('mouseleave', hideTooltip);
    triggerElement.addEventListener('focus', showTooltip);
    triggerElement.addEventListener('blur', hideTooltip);
  }

  /* ========================================
     TOAST
     ======================================== */
  
  const toastQueue = [];
  let toastContainer;

  function createToastContainer() {
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'ds-toast-container ds-toast-container--top-right';
      toastContainer.setAttribute('aria-live', 'polite');
      toastContainer.setAttribute('aria-atomic', 'false');
      document.body.appendChild(toastContainer);
    }
    return toastContainer;
  }

  function showToast(options) {
    const {
      title = '',
      message = '',
      duration = 5000,
      dismissible = true
    } = options;

    const container = createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = 'ds-toast';
    toast.setAttribute('role', 'status');
    
    const content = document.createElement('div');
    content.className = 'ds-toast__content';
    
    if (title) {
      const titleEl = document.createElement('div');
      titleEl.className = 'ds-toast__title';
      titleEl.textContent = title;
      content.appendChild(titleEl);
    }
    
    if (message) {
      const messageEl = document.createElement('div');
      messageEl.className = 'ds-toast__message';
      messageEl.textContent = message;
      content.appendChild(messageEl);
    }
    
    toast.appendChild(content);
    
    if (dismissible) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'ds-toast__close';
      closeBtn.innerHTML = '×';
      closeBtn.setAttribute('aria-label', 'Close');
      closeBtn.addEventListener('click', () => dismissToast(toast));
      toast.appendChild(closeBtn);
    }
    
    container.appendChild(toast);
    toastQueue.push(toast);
    
    if (duration > 0) {
      setTimeout(() => dismissToast(toast), duration);
    }
    
    return toast;
  }

  function dismissToast(toast) {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
      const index = toastQueue.indexOf(toast);
      if (index > -1) {
        toastQueue.splice(index, 1);
      }
    }, 300);
  }

  /* ========================================
     INITIALIZATION
     ======================================== */
  
  function init() {
    // Initialize tabs
    document.querySelectorAll('[data-ds="tabs"]').forEach(initTabs);
    
    // Initialize accordions
    document.querySelectorAll('[data-ds="accordion"]').forEach(initAccordion);
    
    // Initialize dropdowns
    document.querySelectorAll('[data-ds="dropdown"]').forEach(initDropdown);
    
    // Initialize tooltips
    document.querySelectorAll('[data-tooltip]').forEach(initTooltip);
    
    // Modal triggers
    document.querySelectorAll('[data-ds-modal-trigger]').forEach(trigger => {
      const modalId = trigger.getAttribute('data-ds-modal-trigger');
      const modal = document.getElementById(modalId);
      if (modal) {
        trigger.addEventListener('click', () => openModal(modal));
      }
    });
  }

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose public API
  window.DesignSystem = {
    init,
    initTabs,
    initAccordion,
    initDropdown,
    initTooltip,
    openModal,
    closeModal,
    showToast,
    dismissToast
  };

})();
