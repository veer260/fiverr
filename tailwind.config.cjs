/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // 'sans': ['Proxima Nova', ],
      // display: ['Moon Dance'],
      formal: ["Montserrat"],
    },
    extend: {
      fontFamily: {
        bergato: ["Bergato", "san-serif"],
      },
    },
  },
  plugins: [],
};
