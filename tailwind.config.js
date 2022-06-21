// tailwind.config.js
module.exports = {
    // content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    // purge: [
    //   './views/**/*.{html,js}',
    //   './components/**/*.{html,js}',
    // ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'volkert-blue':'#0E3083',
          'volkert-dark-blue':'#091F57',
          'test-color':'#3E599C',
          'cement-color':'#806d59',
          'render-gray':'#343435'
        }
      },
    },
    variants: {
      extend: {},
    },
  }