/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
        spaceGrotesk: ["SpaceGrotesk", "sans-serif"],
        banglaHeading: ["BanglaHeading", "sans-serif"],
        banglaSubHeading: ["BanglaSubHeading", "sans-serif"],
      },
      colors: {
        "light-primary-color": "#03140a",
        "dark-primary-color": "#efebeb",
        "light-secondary-color": "#575757",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
