import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mustard: {
          50: "#fdf8ec",
          100: "#faedc9",
          300: "#f0ce6f",
          500: "#e0ab2e", // jaune moutarde clair — couleur principale
          600: "#c68f1c",
          700: "#9c6f16",
        },
        olive: {
          50: "#f2f4ea",
          100: "#dfe5c8",
          400: "#7c8f4a",
          600: "#556b2f", // vert olive élégant — couleur secondaire
          700: "#41521f",
          900: "#232b12",
          950: "#161c0b",
        },
        gilt: {
          400: "#d9b969",
          500: "#c9a227", // doré discret — accentuation
          600: "#a8841c",
        },
        ivory: "#faf8f2",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px -12px rgba(35, 43, 18, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
