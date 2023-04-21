/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,astro}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#6366f1",
        body: "#1f2022",
        bodyAccent: "#242C3A",
        nav: "#23304b",
      },
    },
  },
  plugins: [],
};
