// tailwind.config.js
module.exports = {
    // content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: ["./src/**/*.{html,js}"],
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
          'volkert-darker-blue': '#06153C',
          'volkert-darkest-blue':'#040F2A',
          'test-color':'#3E599C',
          'cement-color':'#806d59',
          'render-gray':'#343435'
        }
      },
    },
    variants: {
      extend: {},
  }
    
  }