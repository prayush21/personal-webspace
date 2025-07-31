/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-drafting-mono)", "monospace"],
        architects: ["var(--font-architects-daughter)", "cursive"],
      },
      colors: {
        // Dark theme
        dark: {
          background: "#1A1D16",
          card: "#151914",
          surface: "#1F221B",
          accent: "#B88157",
          hover: "#5E3121",
          border: "#2A2E26",
          grid: "rgba(184, 129, 87, 0.1)",
          text: "#FFFFFF",
          textPrimary: "#FFFFFF",
          textSecondary: "#E5E5E5",
        },
        // Light theme
        light: {
          background: "#2377D7",
          surface: "rgba(255, 255, 255, 0.1)",
          accent: "#1C77DB",
          hover: "#94BFE8",
          border: "rgba(255, 255, 255, 0.2)",
          grid: "rgba(255, 255, 255, 0.2)",
          text: "#FFFFFF",
          textPrimary: "#FFFFFF",
          textSecondary: "#F0F0F0",
        },
      },
      boxShadow: {
        blueprintCard: "0 4px 12px rgba(0,0,0,0.25)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
