const config = {
  darkMode: "class", // class-based theming
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dark theme
        dark: {
          background: "#1A1D16",
          card: "#151914",
          accent: "#B88157",
          hover: "#5E3121",
          border: "#0E1712",
          grid: "rgba(184, 129, 87, 0.1)", // Using accent color with opacity for grid
          text: "#FFFFFF",
          textPrimary: "#FFFFFF",
          textSecondary: "#E5E5E5",
        },
        // Light theme
        light: {
          background: "#2377D7",
          accent: "#1C77DB",
          hover: "#94BFE8",
          grid: "rgba(255, 255, 255, 0.2)", // White with opacity for better visibility
          text: "#FFFFFF",
          textPrimary: "#FFFFFF",
          textSecondary: "#F0F0F0",
        },
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

module.exports = config;
