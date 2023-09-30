/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '19': '4rem',
         // Add a custom margin size with key '19'
      },
      height: {
        '2/4': '300px',
        '2/3' :'500px', // Add a custom height class for 50%
      },
      width:{
        'w-full':'100vw'
      },
      display: {
        'flex-row': '	flex-direction: row',
       
      },
      colors: {
        customBackground: {
          100: '#f5f5f5',
        },
      }
    },
  },
  plugins: [],
}