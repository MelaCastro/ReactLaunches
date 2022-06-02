module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dragon-principal': "url('src/assets/dragonPicture.jpeg')",
      }, 
      fontFamily: {
        'roboto' : ['Roboto'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'bebas': ['Bebas Neue', 'Arial', 'Verdana', 'sans-serif']
      },
      colors: {
        'regal-blue': '#1f5288',
      },
    },
  },
  plugins: [],
}
