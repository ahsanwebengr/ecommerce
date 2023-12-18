/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: 'Poppins',
        titleFont: "Nunito Sans",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7E22CE",

          "secondary": "#007500",

          "accent": "#c67d00",

          "neutral": "#1f212b",

          "base-100": "#fcfcfc",

          "info": "#0072e9",

          "success": "#00da9e",

          "warning": "#b69300",

          "error": "#cc243f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],


};