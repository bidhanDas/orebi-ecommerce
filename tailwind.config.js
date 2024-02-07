/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container": "1600px",
      },
      fontFamily:{
        'sans': ['DM Sans', 'sans-serif'],
      },
      // fontFamily: {
      //   palanquin: ['Palanquin', 'sans-serif'],
      //   montserrat: ['Montserrat', 'sans-serif'],
      // },
    },
  },
  plugins: [],
}

