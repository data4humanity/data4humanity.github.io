const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      screen: "100vh",
    },
    colors: theme => ({
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      ...defaultTheme.colors,
    }),
  },
  variants: {},
  plugins: [],
}
