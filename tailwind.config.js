/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './lib/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // ATIVA o modo escuro por classe
  theme: {
    extend: {},
  },
  plugins: [],
};
