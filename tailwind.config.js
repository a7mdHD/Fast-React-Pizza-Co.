
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      height: {
        screen: '100dvh', // 100% of the viewport height, accounting for mobile address bar
      }
    },
  },
  plugins: [
    //eslint-disable-next-line
     require('tailwind-scrollbar-hide')
  ],
}

