/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'brand-primary': '#0312FF', // Your signature blue
        'brand-primary-light': 'rgba(3, 18, 255, 0.8)', // Blue with opacity
        'brand-primary-dark': '#0208CC', // Darker blue variant
        
        // Background colors
        'bg-primary': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Main gradient
        'bg-secondary': '#1a1a1a', // Dark background for pages
        'bg-overlay': 'rgba(255, 255, 255, 0.05)', // Subtle overlay
        'bg-transparent': 'transparent',
        
        // Text colors
        'text-primary': '#0312FF', // Main text (blue)
        'text-secondary': 'white', // Secondary text
        'text-muted': 'rgba(255, 255, 255, 0.8)', // Muted text
        'text-dark': '#333', // Dark text for forms
        'text-hover': 'rgba(255, 255, 255, 0.7)', // Hover state text
        
        // Accent colors
        'accent-green': 'rgb(223, 231, 119)', // Soft green for forms
        'accent-cream': '#f8f8f0', // Cream white
        'accent-highlight': '#eaf1a1', // Highlight overlay
        
        // Border colors
        'border-primary': '#0312FF', // Main border color
        'border-secondary': 'rgba(255, 255, 255, 0.2)', // Subtle borders
        'border-muted': 'rgba(255, 255, 255, 0.3)', // Muted borders
        'border-hover': 'rgba(255, 255, 255, 0.5)', // Hover borders
        
        // Comet/particle colors
        'comet-primary': 'rgba(3, 18, 255, 0.8)', // Comet color
        'comet-trail': 'linear-gradient(180deg, rgba(3, 18, 255, 0.8) 0%, transparent 100%)', // Comet trail
        
        // Texture colors
        'texture-dot': 'rgba(255,255,255,0.3)', // Paper texture dots
      }
    },
  },
  plugins: [],
};
