module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:cypress/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'cypress'
  ],
  rules: {
    // General rules
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'no-trailing-spaces': 'error',
    'eol-last': 'error',
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'space-infix-ops': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'max-len': ['error', { 'code': 120 }],
    
    // Cypress specific rules
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
    'cypress/no-debug': 'error',
    'cypress/require-data-selectors': 'warn',
    
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    
    // Test specific overrides
    'no-undef': 'off' // Cypress globals are handled by the plugin
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.ts', '**/*.test.js', '**/*.test.ts'],
      rules: {
        'no-unused-expressions': 'off',
        'cypress/no-unnecessary-waiting': 'warn' // Sometimes needed in tests
      }
    },
    {
      files: ['**/page-objects/**/*.js', '**/page-objects/**/*.ts'],
      rules: {
        'class-methods-use-this': 'off'
      }
    },
    {
      files: ['cypress.config.js', '*.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    'tests/reports/',
    'tests/videos/',
    'tests/screenshots/',
    'tests/downloads/',
    '*.min.js'
  ]
} 