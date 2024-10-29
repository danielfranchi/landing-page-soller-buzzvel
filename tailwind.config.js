/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'white': '#ffffff',
        'custom-blue': '#0369A1',
        'primary': '#0F172A', 
        'secondary': '#475569',
       
        'royal-violet': '#581C87',
       
        'yellow-gold': '#FCD34D',
        'deep-orange': '#D97706',
       'slate-grey': '#475569',
       'sunset-violet': '#7E22CE',
       'brown': '#78350F',
      },
      screens: {
        'sm': '375px',   // Breakpoint para mobile (baseado no Figma)
        'md': '768px',   // Breakpoint para tablet
        'lg': '1024px',  // Desktops pequenos ou tablets em landscape
        'xl': '1280px',  // Desktops grandes
        '2xl': '1920px', // Desktop full HD (baseado no Figma)
      },
    },
  },
  plugins: [],
};
