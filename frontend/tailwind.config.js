/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        /*'xxs':"360px",
        'xs':'480px',
        'sm': '640px',
        'md': '768px', 
        'lg': '1024px',  
        'xl': '1280px',
        '2xl': '1536px',**/

        '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      },

      boxShadow: {
        custom: '2px 2px 15px rgba(0, 0, 0, 0.1), -2px -2px 15px rgba(0, 0, 0, 0.05)',
        
      },
    },
  },
  plugins: [],
}