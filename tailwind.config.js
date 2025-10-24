/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ef4444", // rouge btn
        },
      },
      container: { center: true },
    },
  },
  plugins: [],
};
