import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#faf7ee",
          100: "#f3ebd6",
          200: "#e6d5ad",
          300: "#d7bc80",
          400: "#c8a55c",
          500: "#c5a86d", // Principal do logo
          600: "#ab9262", // Dourado mais escuro do logo
          700: "#8e754d",
          800: "#745e3e",
          900: "#604d35",
        },
        brand: {
          black: "#111113",
          dark: "#1c1c20",
          muted: "#646473",
          border: "#e7e5e0",
          light: "#faf9f6",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 25px -5px rgba(197, 168, 109, 0.25), 0 8px 10px -6px rgba(197, 168, 109, 0.2)",
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.07)",
      }
    },
  },
  plugins: [],
};

export default config;
