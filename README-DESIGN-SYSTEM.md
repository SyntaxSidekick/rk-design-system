# Riad Kilani Design System

A complete, production-ready design system for personal portfolio and CMS-driven websites.

## 🎨 Overview

This design system provides a comprehensive foundation for building consistent, accessible, and beautiful web interfaces. It's built with modern web technologies and follows industry best practices.

### Key Features

- **Logo-Based Color Palette**: Colors extracted from the RK logo for brand consistency
- **WCAG AA Compliant**: All color combinations meet accessibility standards
- **Trajan Pro + Inter Typography**: Classical elegance meets modern readability
- **8px Spacing System**: Consistent rhythm and alignment throughout
- **Motion System**: Defined easing curves and durations for smooth interactions
- **Dark Mode Ready**: Complete light and dark theme support
- **Component Library**: Comprehensive set of accessible UI components
- **Reduced Motion Support**: Respects user accessibility preferences

## 📁 File Structure

```
/src/styles/
  ├── theme.css          # Design tokens & CSS variables
  ├── fonts.css          # Font imports (Trajan Pro + Inter)
  ├── tailwind.css       # Tailwind configuration
  └── index.css          # Global styles

/src/app/components/
  ├── ui/                # Base UI component library
  └── design-system/     # Design system showcase components
```

## 🎯 Design Tokens

### Colors

The color palette is extracted from the RK logo and organized into:

- **Primary**: Deep blue for main actions and brand moments
- **Secondary**: Navy for professional, sophisticated accents
- **Accent**: Light blue for highlights and emphasis
- **Neutral**: Grayscale for text, borders, and backgrounds
- **Semantic**: Success, warning, error, and info states

```css
/* Primary Colors */
var(--color-primary-600)  /* Main brand color */
var(--primary)            /* Theme-aware primary */

/* Semantic Colors */
var(--color-success)
var(--color-warning)
var(--color-error)
var(--color-info)
```

### Typography

```css
/* Font Families */
--font-heading: 'Trajan Pro', serif;
--font-body: 'Inter', sans-serif;

/* Type Scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
```

### Spacing (8px-based)

```css
--space-4: 0.5rem;       /* 8px - Base unit */
--space-8: 1rem;         /* 16px */
--space-16: 2rem;        /* 32px */
--space-24: 3rem;        /* 48px */
--space-32: 4rem;        /* 64px */
```

### Motion

```css
/* Duration */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;

/* Easing */
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

## 🚀 Usage

### Using Design Tokens

```css
.my-component {
  /* Colors */
  background-color: var(--primary);
  color: var(--primary-foreground);
  
  /* Spacing */
  padding: var(--space-8) var(--space-16);
  gap: var(--space-4);
  
  /* Typography */
  font-family: var(--font-body);
  font-size: var(--text-base);
  
  /* Border & Radius */
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  
  /* Motion */
  transition: all var(--transition-normal);
}
```

### Using Components

```tsx
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

function MyPage() {
  return (
    <Card className="p-6">
      <h2 className="mb-4">Title</h2>
      <p className="text-muted-foreground mb-6">
        Content goes here...
      </p>
      <Button>Call to Action</Button>
    </Card>
  );
}
```

## 📱 Responsive Design

The system uses a mobile-first approach with breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## ♿ Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- ✅ Keyboard navigation support
- ✅ Screen reader compatible
- ✅ Sufficient color contrast (4.5:1 minimum)
- ✅ Focus indicators
- ✅ Reduced motion support
- ✅ Semantic HTML

## 🎭 Themes

Toggle between light and dark modes:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

All design tokens automatically adapt to the current theme.

## 📝 Best Practices

### Do ✓

- Use design tokens instead of hardcoded values
- Follow the established spacing scale
- Test components in both light and dark modes
- Ensure keyboard accessibility
- Use semantic HTML elements
- Test with reduced motion enabled

### Don't ✗

- Override tokens with arbitrary values
- Create new spacing values outside the scale
- Use colors that don't meet contrast requirements
- Build inaccessible components
- Ignore motion preferences
- Use inline styles when Tailwind utilities exist

## 🛠 Technology Stack

- **React 18**: Modern UI framework
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first styling
- **Motion (Framer Motion)**: Animation library
- **Radix UI**: Accessible component primitives
- **CSS Custom Properties**: Design tokens

## 📦 Components

The system includes a comprehensive component library:

### Layout
- Card
- Container
- Separator

### Forms
- Button
- Input
- Textarea
- Select
- Checkbox
- Switch
- Label

### Feedback
- Alert
- Toast (via Sonner)
- Badge
- Tooltip

### Navigation
- Breadcrumb
- Pagination
- Tabs

### Overlay
- Dialog/Modal
- Popover
- Dropdown Menu

## 🎨 Design Principles

1. **Consistency**: Use established patterns throughout
2. **Accessibility**: Meet WCAG AA standards minimum
3. **Performance**: Optimize for speed and efficiency
4. **Scalability**: Design for growth and maintainability
5. **Developer Experience**: Clear, predictable APIs

## 📚 Pages & Templates

The system includes full-fidelity designs for:

- Home page with hero section
- About/Bio page
- Portfolio listing and single project views
- Blog listing and article pages
- Contact page
- Admin dashboard (CMS)
- Admin editor view

## 🔄 Maintenance

This design system should evolve with your needs:

- Document new patterns as they emerge
- Refactor components when identifying repetition
- Keep tokens in `theme.css` up to date
- Test new additions across all breakpoints
- Gather feedback from developers

## 📄 License

© 2026 Riad Kilani. All rights reserved.

---

Built with ❤️ using modern web standards
