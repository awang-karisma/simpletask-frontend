/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  safelist: [
    'bg-red-300',
    'hover:bg-red-400',
    'bg-green-300',
    'hover:bg-green-400'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
