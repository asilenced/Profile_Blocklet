module.exports = {
  root: true,
  extends: [
    '@arcblock/eslint-config',
    'plugin:prettier/recommended'
  ],
  globals: {
    logger: true
  },
  rules: {
    'prettier/prettier': 'error', 
    quotes: ['error', 'single'], 
    'no-console': 'warn' 
  
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      excludedFiles: '*.test.js',
      rules: {
        quotes: ['error', 'single']
      }
    }
  ]
};
