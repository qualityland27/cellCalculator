// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'volkert-blue':'#0E3083',
          'volkert-dark-blue':'#091F57',
          'test-color':'#3E599C',
          'cement-color':'#806d59'
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }