/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {height: theme => ({
      "screen-75": "75vh",
      "screen/3": "calc(100vh / 3)",
      "screen/4": "calc(100vh / 4)",
      "screen/5": "calc(100vh / 5)",
    }),},
  },
  plugins: [],
}

