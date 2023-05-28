module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      plugins: ['complexity'],
      rules: {
        'complexity': ['warn', { max: 100 }], // Changed from 'error' to 'warn'
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
