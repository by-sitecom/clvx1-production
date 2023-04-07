/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      s:"0.825rem",
      xs: "1rem",
      sm: "1.375rem",
      md: "2rem",
      lg: "2.75rem",
      xl: "4.25rem",
      xxl: "5.5rem",
    },
    fontFamily: {
      sans: ["var(--font-noto-sans)", "sans-serif"],
      serif: ["var(--font-montserrat)", "serif"],
    },
    screens: {
      sm: "560px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1544px",
      xxxl: "1800px",
    },
    colors: {
      gray: {
        100: "#F5F7F9",
        200: "#EAEDF1",
        300: "#DBDDE1",
        400: "#666",
        500: "#333",
      },
      black: "#000000",
      dark: "#1C1C1C",
      white: "#FFFFFF",
      red: {
        100: "#EB232C",
        200: "#CA1C24",
      },
    },
    spacing: {
      0: "0rem",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.5rem",
      6: "2rem",
      7: "2.5rem",
      8: "3rem",
      9: "3.5rem",
      10: "4rem",
      11: "4.5rem",
      12: "5rem",
      13: "5.5rem",
      14: "6rem",
      15: "6.5rem",
      16: "7rem",
      17: "7.5rem",
      18: "8rem",
      19: "8.5rem",
      20: "9rem",
    },
    aspectRatio: {
      "4/3": "4 / 3",
    },
    boxShadow: {
      border: "0 0px 0px 1px #F5F7F9",
    },
    borderWidth: {
      0: "0",
      1: "1px",
      4: "4px",
    },
    extend: {
      scale: {
        10: "1.1",
      },
      lineHeight: {
        s:"1rem",
        xs: "1.5rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        xxl: "7rem",
      },
      width: {
        "1px": "1px",
      },
      height: {
        "1px": "1px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          fontWeight: "300",
          fontSize: "16px",
          lineHeight: "2rem",
          fontFamily: "var(--font-noto-sans)",
        },
      });
    }),
  ],
};
