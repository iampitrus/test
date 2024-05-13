/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        // landing page
        dark: "#1A1B23",
        primary: "#FAFF0AD9",
        other: "#1D2025",

        // userpage
        borderPrimary: "#3B3C4E",
        borderSecondary: "#0177FB",
        headercolor: "#8B8CA7",
        secondary: "#FAFF0A",
        textcolor: "#0D0D0D",
        boxcolor: "#2C2D3A",
      },
      fontFamily: {
        Poppins: '"Poppins", sans-serif',
        Rubik: '"Rubik", sans-serif',
      },
      keyframes: {
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
