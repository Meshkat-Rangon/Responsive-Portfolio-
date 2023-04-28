/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   maxWidth:{
    container:'1440px',
    contentContainer:'1140px',
    containerSmall:'1024px',
    containerxs:'768px',

   },

    extend: {},
  },
  plugins: [],
}