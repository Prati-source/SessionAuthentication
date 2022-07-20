/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
],
  theme: {
    extend: {
     
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin'),
  ],
}
