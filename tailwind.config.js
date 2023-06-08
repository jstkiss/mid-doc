/** @type {import('tailwindcss').Config} */

const { colors } = require("@mui/material");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      customblack: "#262830",
      customwhite: "#c7c7c7",
      customyello: "#c6a45a",
      customskyblue: "#0c4f6e",
      customblue: "#344766",
      custompurple: "#2a2e42",
      white: "#fff",
      whitee: "#f3f4f5",
      black: "#000000",
      skyblue: "#5ADAE8",
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      },
      // backgroundImage: {
      //   'booki': "url('/booki.png')"
      //   'service': "url('/service.png')",

      // },
    },
  },
  plugins: [],

  fontFamily: {
    spartan: ["aktiv-grotesk, sans-serif"],
    open: ["Open Sans", "sans-serif"],
    poppins: ["Poppins", "sans-serif"],
  },
};
