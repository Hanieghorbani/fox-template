/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'primary':'#00cdcd',
        'secondary' : '#F2CE5F',
        'minorTX':'#303952'
      },
      boxShadow:{
        'border-b-secondary' : '0 3px 0px 0px #F2CE5F',
        'border-b-white' : '0 2px 0px 0px white'
      },
      backgroundImage: {
        'img-primary': "url('../public/imgs/gray-bg.jpg')",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
