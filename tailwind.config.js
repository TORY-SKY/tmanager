/** @type {import('tailwindcss').Config} */
import type {Config} from "tailwindcss";
export default {
  darkMode: "class", // <--- enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       bodoni: ['"Bodoni Moda"', "serif"],
        noto: ['"Noto Sans"', "sans-serif"],
        notoTC: ['"Noto Sans TC"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
    },
  },
  plugins: [],
}
