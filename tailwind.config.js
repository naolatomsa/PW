module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkBlue: "#03045E",
        lightYellow: "#FBF8CC",
        cardColor: "#effbcc",
        cardBack: "#f9fbcc",
      },
      fontFamily: {
        new: ["Poppins", "sans-serif"], // Set Poppins as the default sans font
      },
    },
  },
  plugins: [],
};
