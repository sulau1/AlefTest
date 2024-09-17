/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        GrayHeader: " rgba(17, 17, 17, 0.48)",
        FooterGray: "#FAFAFA",
        GrayBorder: "#F1F1F1",
        CyanBlue: "#01A7FD",
      },
    },
  },
  plugins: [],
};
