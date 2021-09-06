module.exports = {
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}', 
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/
    ]// Escreva desta maneira para que você possa usar a interpolação nas classNames. Um exemplo disso foi o components/Botao.tsx
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
