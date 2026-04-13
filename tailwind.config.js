/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./html/**/*.html",
    "./data/**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        color1: "#1C1C1C",
        color2: "#FFFFFF",
        color3: "#808080",
        color4: "#505050",
        color5: "#414040",
        color6: "#110D0D",
        color7: "#FF0000",
        color8: "rgba(0, 0, 0, 0.2)",
        color9: "rgb(90,90,90)",
        color10: "rgba(255,255,255,0.8)",
        color11: "#F0F0F0",
      },
      fontFamily:{
        Play: ["Play", "sans-serif"]
      },
      dropShadow:{
        'xs': '1px 1px 25px var(--color2)',
        'xz': '1px 1px 10px var(--color1)',
      },
      keyframes:{
        fadeIn:{
          '0%' : { opacity: '0' , transform: 'translateY(-10px)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'},
        },
      },
      animation: {
          fadeIn: 'fadeIn 0.3s ease-out forwards',
        },
    },
  },
  plugins: [],
}