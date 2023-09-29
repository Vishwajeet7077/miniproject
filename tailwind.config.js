/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '19': '4rem', // Add a custom margin size with key '19'
      },
      height: {
        '2/4': '300px',
        '2/3' :'500px' // Add a custom height class for 50%
      },
      display: {
        'flex-row': '	flex-direction: row',
       
      },
    },
  },
  plugins: [],
}