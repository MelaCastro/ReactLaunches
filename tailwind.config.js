module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ['Roboto'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'regal-blue': '#1f5288',
      },
    },
  },
  plugins: [],
}
