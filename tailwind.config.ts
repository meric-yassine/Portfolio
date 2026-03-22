import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["ui-monospace", "monospace"],
      },
      fontSize: {
        /** Body ~17px, comfortable line height */
        body: ["1.0625rem", { lineHeight: "1.65" }],
        /** Intro / lead paragraphs */
        lead: ["1.125rem", { lineHeight: "1.65" }],
        small: ["0.9375rem", { lineHeight: "1.6" }],
      },
      colors: {
        /** Warm off-white page background */
        cream: "#faf8f4",
        /** Light beige section bands */
        sand: "#f1ece4",
        /** Subtle pastel pink section tint */
        blush: "#fcf5f7",
        /** Warm white for cards */
        card: "#fffefb",
        rose: {
          mist: "#f5e8ec",
          soft: "#e8d0d8",
          DEFAULT: "#c9a3b0",
          deep: "#8f6b78",
        },
        /** Warm taupe — not harsh black */
        ink: {
          DEFAULT: "#3d3835",
          muted: "#6e6660",
        },
        line: "#e0d8d0",
      },
      boxShadow: {
        card: "0 1px 2px rgba(61, 56, 53, 0.05), 0 6px 20px rgba(61, 56, 53, 0.06)",
        "card-soft":
          "0 1px 3px rgba(61, 56, 53, 0.04), 0 8px 24px rgba(143, 107, 120, 0.07)",
      },
      maxWidth: {
        /** Short lines / lists — keep comfortably narrow */
        content: "42rem",
        /** Long-form intro & body copy — ~max-w-4xl, proportional to layout column */
        contentWide: "56rem",
        /** Main page column — ~1152px for better balance on large screens */
        layout: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
