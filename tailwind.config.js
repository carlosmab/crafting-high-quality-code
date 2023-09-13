/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "blue": {
        darkest: "#1E293B",
        dark: "#293548",
        medium: "#47738F",
        DEFAULT: "#38BDF8",
        light: "#D9F0FF",
      },
      "white": {
        DEFAULT: "#ffffff",
        dark: "#eef7fc" ,
      },
      "red": {
        DEFAULT: "#FC5FA3",
        dark: "#963D5A"
      },
      "orange": {
        DEFAULT: "#FFA630",
        light: "#F3DFC1",
        dark: "#C57B57",
      },
      "green": {
        DEFAULT: "#45ED75",
        light: "#91F9E5",
        dark: "#79B473",

      },
      "gray": {
        DEFAULT: "#CCD2C6"
      },
      "yellow": {
        DEFAULT: "#E2E462"
      }
    }
  },
  plugins: [],
}


// mine
// 0B2447
// 19376D
// 576CBC
// A5D7E8
// FBF5F3

// tailwindcss
// 4F46E5
// 38bdf8
// 47738F
// 293548
// 1E293B


