/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    boxShadow: {
      "modal": "0 0 1px #424244",
      "custom": "0 0 0 1px #424244",
      "custom_hover": "0 0 0 1px #6a696a",
      "bottom_shadow": "inset 0 -2px #f5f4f3"
    },

    extend: {},
  },
  plugins: [],
}

