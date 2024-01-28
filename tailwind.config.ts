import type { Config } from "tailwindcss";
import { orange, pink, slate, yellow } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        layer: slate[950],
        overlay: slate[900],
        foreground: slate[100],
        primary: orange,
        secondary: pink
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)"
      },

      padding(utils) {
        return {
          header: 'var(--header-height)'
        }
      },

      margin(utils) {
        return {
          header: 'var(--header-height)'
        }
      },

      height(utils) {
        return {
          header: 'var(--header-height)'
        }
      },
    },
  },
  plugins: [],
};
export default config;
