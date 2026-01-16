import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefcf6",
          100: "#d6f7ea",
          200: "#b2efd7",
          300: "#7fe2be",
          400: "#42cfa0",
          500: "#1ab884",
          600: "#11936a",
          700: "#0f7457",
          800: "#0f5c46",
          900: "#0e4b3b"
        }
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 92, 70, 0.12)",
        glow: "0 18px 50px rgba(26, 184, 132, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
