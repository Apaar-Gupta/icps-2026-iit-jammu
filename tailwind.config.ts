import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // IIT Jammu inspired palette: deep navy + saffron accent
        navy: {
          950: "#050B1F",
          900: "#0A1330",
          800: "#101B45",
          700: "#172759",
          600: "#22346F",
        },
        saffron: {
          600: "#C9631A",
          500: "#E17A2D",
          400: "#F0954C",
          300: "#F7B579",
        },
        cream: "#FBF7F0",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
