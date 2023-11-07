/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        'space': {'min': '350px', 'max': '1023px'},
        'pixel-fold': {'min': '250px', 'max': '280px'},
        'big-screen': {'min': '1200px'},

      },
    }
  },

  plugins: []
};

module.exports = config;
