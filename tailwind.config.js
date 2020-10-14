// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        md: '1024px',
        lg: '1366px'
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      textColor: {
        'red': '#D8235D',
        'red-1': '#D91B5C',
        'red-2': '#900C36',
        'black': '#000000',
        'black-1': '1D1D1D',
        'grey': '#A2A2A2',
        'green': '#52774F',
      },

      backgroundColor: {
        'red': '#D8235D',
        'red-1': '#D91B5C',
        'red-2': '#900C36',
        'green': '#B8E0B7',
        'green-1': '#BADFB7',
        'yellow': '#FFCB65',
        'black': '#1D1D1D',
        'grey': '#F0F0F0',
      },
      fontFamily: {
        'primary': ['PathwayGothic'],
        'second': ['BigNoodleTitling']
      },
      borderColor: {
        'primary': '#E3CC90'
      },
      borderWidth: {
        'large': '16px'
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
