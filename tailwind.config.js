/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      colors:{
        primary:'#2196F3',
        secondary:'#64748b',
        dark:'#383B53'
      },
      screens: {
        '2xl':'1320px',
      }
    },
  },
  plugins: [],
}
