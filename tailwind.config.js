/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
         test: ['"Comic Sans MS"', "cursive"],
         nexa: ['"Nexa"', "system-ui", "sans-serif"],
      },
      colors:{
         dk: {
          blue: "#0059FB",
          navy: "#000044",
          cyan: "#0AD1F0",
          white: "#FFFFFF",
          gray: "#4B5563",
          light: "#F5FAFF",
        }
      },
      keyframes: {
        "float-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(28px)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-24px)" },
        },
        "float-diag": {
          "0%, 100%": { transform: "translate(0,0) rotate(12deg)" },
          "50%": { transform: "translate(16px,-18px) rotate(22deg)" },
        },
      },
      animation: {
        "float-x-slow": "float-x 16s ease-in-out infinite",
        "float-y-slow": "float-y 18s ease-in-out infinite",
        "float-diag-slow": "float-diag 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
