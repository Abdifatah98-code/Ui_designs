/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        pops: ['Poppins','Montserrat'],
      },
      colors: {
        myBgColor: '#F2F7FF',
        CardColor:"#f4f4f9",
        mainColor:"#1D3557",
        mainBgColor:"#E6EBEE",
        textColor:"#303972",
        // btnColor:"#FFE6DF",
        btnColor:"#006169",
        btnTextColor:"#fb7d5b"
      
      },
    }
  },
  plugins: [require('flowbite/plugin')],
}