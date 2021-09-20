module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      pink: "#d79c98;",
      sun: "#fabc2a;",
      shade: "#3c3744;",
      pool: "#14bdeb;",
      cloud: "#dff3e4;",
      leaf: "#43aa8b;",
      wave: "#48e5c2;",
      verde: "#20bf55;",
      storm: "#1e91d6;",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      serif: ["Halant", "serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
