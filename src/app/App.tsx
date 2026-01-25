/**
 * RIAD KILANI DESIGN SYSTEM
 * Documentation Site - Main Application Component
 */

import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar.jsx';
import { Header } from './components/Header.jsx';
import { Overview } from './docs/Overview.jsx';
import { TokensPage } from './docs/TokensPage.jsx';
import { MotionPage } from './docs/MotionPage.jsx';
import { ComponentsGallery } from './docs/ComponentsGallery.jsx';
import { ButtonsPage } from './docs/components/ButtonsPage.jsx';
import { BadgesPage } from './docs/components/BadgesPage.jsx';
import { AvatarsPage } from './docs/components/AvatarsPage.jsx';
import { CardsPage } from './docs/components/CardsPage.jsx';
import { InputsPage } from './docs/components/InputsPage.jsx';
import { AlertsPage } from './docs/components/AlertsPage.jsx';
import { ModalsPage } from './docs/components/ModalsPage.jsx';
import { TabsPage } from './docs/components/TabsPage.jsx';
import { AccordionPage } from './docs/components/AccordionPage.jsx';
import { TablesPage } from './docs/components/TablesPage.jsx';

// Import design system styles
import '../app.css';

// TypeScript declaration for Design System global
declare global {
  interface Window {
    DesignSystem?: {
      init: () => void;
      initTabs: (element: HTMLElement) => void;
      initAccordion: (element: HTMLElement) => void;
      initDropdown: (element: HTMLElement) => void;
      initTooltip: (element: HTMLElement) => void;
      openModal: (element: HTMLElement) => void;
      closeModal: (element: HTMLElement) => void;
      showToast: (options: any) => void;
      dismissToast: (element: HTMLElement) => void;
    };
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [theme, setTheme] = useState('light');
  const [contrast, setContrast] = useState('normal');
  const [motion, setMotion] = useState('normal');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Design system behaviors are loaded via package import in main.tsx
  useEffect(() => {
    // Ensure DS is initialized once on mount
    if (window.DesignSystem) {
      window.DesignSystem.init();
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Apply contrast to document
  useEffect(() => {
    if (contrast === 'high') {
      document.documentElement.setAttribute('data-contrast', 'high');
    } else {
      document.documentElement.removeAttribute('data-contrast');
    }
  }, [contrast]);

  // Apply motion to document
  useEffect(() => {
    if (motion === 'reduced') {
      document.documentElement.setAttribute('data-motion', 'reduced');
    } else {
      document.documentElement.removeAttribute('data-motion');
    }
  }, [motion]);

  // Re-initialize design system after page changes
  useEffect(() => {
    if (window.DesignSystem) {
      window.DesignSystem.init();
    }
  }, [currentPage]);

  const renderPage = () => {
    switch(currentPage) {
      case 'overview':
        return <Overview />;
      case 'tokens':
        return <TokensPage />;
      case 'motion':
        return <MotionPage />;
      case 'components':
        return <ComponentsGallery onNavigate={setCurrentPage} />;
      case 'buttons':
        return <ButtonsPage />;
      case 'badges':
        return <BadgesPage />;
      case 'avatars':
        return <AvatarsPage />;
      case 'cards':
        return <CardsPage />;
      case 'inputs':
        return <InputsPage />;
      case 'alerts':
        return <AlertsPage />;
      case 'modals':
        return <ModalsPage />;
      case 'tabs':
        return <TabsPage />;
      case 'accordion':
        return <AccordionPage />;
      case 'tables':
        return <TablesPage />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="docs-layout">
      <Sidebar 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      {/* Mobile backdrop when sidebar is open */}
      {sidebarOpen && <div className="docs-backdrop" onClick={() => setSidebarOpen(false)} />}
      
      <div className="docs-main">
        <Header 
          theme={theme}
          setTheme={setTheme}
          contrast={contrast}
          setContrast={setContrast}
          motion={motion}
          setMotion={setMotion}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <div className="docs-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}