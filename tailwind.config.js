/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "rgba(0, 0, 0, 0.5)",
        darkslategray: "#434343",
        darkslateblue: "rgba(74, 96, 161, 0.8)",
        darkgray: "#9c9c9c",
        slategray: "#576074",
        "gray-400": "#889099",
        "primary-800": "#1e2640",
        "gray-white": "#fff",
        whitesmoke: {
          "100": "#eaeaea",
          "200": "#e7e9eb",
        },
        gainsboro: "rgba(226, 226, 226, 0.1)",
        mediumseagreen: "#4aa15a",
        "primary-700": "#2c3a61",
        "primary-400": "#6e80b4",
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        "gray-700": "#363a3d",
        "primary-500": "#4a60a1",
        "primary-900": "#0f1320",
      },
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-large-400": "Inter",
        "components-input-text": "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-5": "1.5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      sm: "0.88rem",
      lg: "1.13rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      "xs-6": "0.73rem",
      "2xs-8": "0.68rem",
      "sm-6": "0.85rem",
      "mini-5": "0.91rem",
      "33xl": "3.25rem",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
