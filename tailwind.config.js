/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        other: { min: "20px", max: "1262px" },
        semi: { min: "1263px", max: "1440px" },
      },
    },
  },
  plugins: [],
}
