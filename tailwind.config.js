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
    transform: {
      modal_hover: "rotate(90deg) translateY(-2px)"
    },
    boxShadow: {
      "modal": "0 0 1px #424244",
      "custom": "0 0 0 1px #424244",
      "custom_hover": "0 0 0 1px #6a696a",
      "bottom_shadow": "inset 0 -2px #f5f4f3",
      "inbox": "inset 0 -2px #a2a0a2",
      "defolt_widget": "0 0 0 1px #424244",
      "hover_widget": "0 0 0 1px #6a696a"
    },
    animation: {
      home__settings__open: "home__settings__open 0.2s 1 linear",
      home__settings__close: "home__settings__close 0.2s 1 linear"
    },
    keyframes: {
      home__settings__open: {
        "0%": {
          "transform": "translateX(100%)"
        },
        "100%": {
          "transform": "translateX(0)"
        }
      },
      home__settings__close: {
        "0%": {
          "transform": "translateX(0)"
        },
        "100%": {
          "transform": "translateX(100%)"
        }
      }
    },
    extend: {},
  },
  plugins: [],
}

