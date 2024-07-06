const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  
  theme: {
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", ...fontFamily.sans],
        },
        colors: {
          blue: {
            50: "#F5FAFE",
            100: "#EAF6FE",
            200: "#B3DAFA",
            300: "#8DC2F6",
            400: "#6CA9F1",
            500: "#1176EB",
            600: "#4074E0",
            700: "#375DB7",
            800: "#304B8F",
            900: "#28396A",
            950: "#1F2746",
          },
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
        },
      },
    },
  }
}