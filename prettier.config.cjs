module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@trivago/prettier-plugin-sort-imports')
  ],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  arrowParens: 'always',
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'ignore',
  semi: false,
  endOfLine: 'lf',
  svelteStrictMode: true,
  svelteAllowShorthand: true,
  importOrder: ['@/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
