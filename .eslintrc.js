module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  settings: {
    react: {
      'version': '18.2.0',
    },
  },
  rules: {
    'react/no-unknown-property': [2, { ignore: ['jsx'] }],
    "import/no-unresolved": ["error", { "ignore": ["^@/"] }],
    "react/react-in-jsx-scope": "off",
    // Disallow semicolons
    "semi": ["error", "never"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "quotes": ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"],
    "@typescript-eslint/no-explicit-any": "off"
  },
};
