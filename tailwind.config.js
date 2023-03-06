/** @type {import('tailwindcss').Config} */
const { blue, black } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    borderRadius: {
      DEFAULT: '25px',
      },
    borderWidth:{
      DEFAULT:'1px',
      '0.8':'0.8',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },

      colors: {
        Mypurple:"#973e95",
        verybeautiful:'#98D98E',
        Redforfire:"#FE4500",
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}