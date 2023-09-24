/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151546",
        secondary: "#F7F7F7",
        tertiary: "#161616",
        dark: "#333333",
        accent: "#3D31B9",
        "accent-2": "#008EBB",
      },
    },
  },
  plugins: [],
};
