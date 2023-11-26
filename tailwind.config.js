module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#6767b5",
        paper: "#F6F6F6"
      },
    },
  },

  plugins: [require("tailwind-children")],
};
