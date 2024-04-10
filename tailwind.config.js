/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berlin: ["Berlin Sans FB Bold", "sans-serif"],
      },
      keyframes: {
        scaler: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "scale-slow": "scaler 1s infinite",
      },
    },
  },
  plugins: [],
};
