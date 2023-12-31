/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00cdcd",
        secondary: "#F2CE5F",
        minorTX: "#303952",
      },
      boxShadow: {
        "border-b-secondary": "0 3px 0px 0px #F2CE5F",
        "border-b-white": "0 2px 0px 0px white",
      },
      backgroundImage: {
        "img-primary": "url('../public/imgs/gray-bg.jpg')",
        "img-people": "url('../public/imgs/people.jpg')",
        "img-dark": "url('../public/imgs/footer-bg.jpg')",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "ping-slow": "ping 2s linear infinite",
        shadow: "shadow 2s linear infinite",
      },
    },
    screens: {
      sm: "350px",
      smMd:'500px',
      md: "768px",
      mdLg:'850px',
      lg: "976px",
      xl: "1200px",
    },
  },
  plugins: [require("flowbite/plugin")],
}
