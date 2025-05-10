import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        twitterBlue: "#1DA1F2",
        twitterDark: "#000000",
        twitterGray: "#16181C",
        twitterBorder: "#2f3336",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        x: {
          ...daisyUIThemes["dark"],
          primary: "#1DA1F2",         // Blue buttons
          secondary: "#16181C",       // Panel background
          accent: "#1A8CD8",          // Hover accents
          neutral: "#202327",         // Input bg
          "base-100": "#000000",      // Page background
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
