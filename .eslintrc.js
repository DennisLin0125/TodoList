module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['.eslintrc.{js,cjs}'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        jsxPragma: 'React',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'no-var': 'error',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-unexpected-multiline': 'error',
    'no-useless-escape': 'off',
    'prettier/prettier': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
