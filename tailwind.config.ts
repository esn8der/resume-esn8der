import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "text-primary": "#fff",
        "text-secondary": "#C4C4FF",
        "verde": "#7EB942",
        "lines": "#F0F0F6",
        // ---------------------------------------
        "background":"#1b1b38",
        "primaryBG": "#323259",
        "accentBG": "#a16eff",
        "gradientBT1": "#b18aff",
        "gradientBT2": "#a16eff",
      },
    },
  },
  plugins: [],
};
export default config;
