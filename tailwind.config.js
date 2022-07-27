/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "db":"hsl(233, 26%, 24%)",
        "lgr":"hsl(136, 65%, 51%)",
        "bc":" hsl(192, 70%, 51%)",
        "gb":"hsl(233, 8%, 62%)",
        "lgb":"hsl(220, 16%, 96%)",
        "vlg":"hsl(0, 0%, 98%)",

      }
    },
  },
  plugins: [],
}