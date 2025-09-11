# Earthling.mei Color Palette

## Overview
This document outlines the consistent color palette for the earthling.mei website. The palette is designed to maintain visual consistency across all pages while preserving the distinctive blue branding and natural aesthetic.

## Color System

### Primary Brand Colors
- **`--color-brand-primary`** (`#0312FF`) - Your signature blue, used for main text and borders
- **`--color-brand-primary-light`** (`rgba(3, 18, 255, 0.8)`) - Blue with opacity for hover states and particles
- **`--color-brand-primary-dark`** (`#0208CC`) - Darker blue variant for emphasis

### Background Colors
- **`--color-bg-primary`** - Main homepage gradient (`linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`)
- **`--color-bg-secondary`** (`#1a1a1a`) - Dark background for other pages
- **`--color-bg-overlay`** (`rgba(255, 255, 255, 0.05)`) - Subtle overlay backgrounds
- **`--color-bg-transparent`** (`transparent`) - Transparent backgrounds

### Text Colors
- **`--color-text-primary`** (`#0312FF`) - Main text color (blue)
- **`--color-text-secondary`** (`white`) - Secondary text on dark backgrounds
- **`--color-text-muted`** (`rgba(255, 255, 255, 0.8)`) - Muted text for less important content
- **`--color-text-dark`** (`#333`) - Dark text for forms and light backgrounds
- **`--color-text-hover`** (`rgba(255, 255, 255, 0.7)`) - Text color for hover states

### Accent Colors
- **`--color-accent-green`** (`rgb(223, 231, 119)`) - Soft green for form elements
- **`--color-accent-cream`** (`#f8f8f0`) - Cream white for alternating form fields
- **`--color-accent-highlight`** (`#eaf1a1`) - Highlight overlay color

### Border Colors
- **`--color-border-primary`** (`#0312FF`) - Main border color (blue)
- **`--color-border-secondary`** (`rgba(255, 255, 255, 0.2)`) - Subtle borders
- **`--color-border-muted`** (`rgba(255, 255, 255, 0.3)`) - Muted borders
- **`--color-border-hover`** (`rgba(255, 255, 255, 0.5)`) - Hover state borders

### Special Effects
- **`--color-comet-primary`** (`rgba(3, 18, 255, 0.8)`) - Falling comet particles
- **`--color-comet-trail`** - Comet trail gradient
- **`--color-texture-dot`** (`rgba(255,255,255,0.3)`) - Paper texture dots

## Usage

### CSS Variables
Use CSS custom properties in your stylesheets:
```css
.my-element {
  color: var(--color-text-primary);
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border-primary);
}
```

### Tailwind Classes
Use Tailwind utility classes (available after config update):
```html
<div class="text-brand-primary bg-bg-primary border-border-primary">
  Content here
</div>
```

## Implementation Status
✅ CSS custom properties added to `:root`  
✅ Tailwind config updated with color palette  
✅ Homepage colors converted to use variables  
✅ Key components updated (title, text, borders, comets)  

## Next Steps
- Update remaining pages to use the color system
- Test color consistency across all components
- Consider adding dark/light mode variants if needed

## Benefits
- **Consistency**: All colors reference the same palette
- **Maintainability**: Change colors in one place, update everywhere
- **Scalability**: Easy to add new colors or modify existing ones
- **Flexibility**: Works with both CSS variables and Tailwind classes
