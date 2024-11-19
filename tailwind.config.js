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
        primary: "#ffc107",
        body: "#1f2022",
        bodyAccent: "#242C3A",
        nav: "#23304b",
        success: "#10B981",
        warning: "#F59E0B",
        info: "#3B82F6",
        error: "#EF4444",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
