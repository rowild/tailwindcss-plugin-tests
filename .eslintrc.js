module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'no-multiple-empty-lines': [
      'error', {
        'max': 2
      }
    ],
    'no-multi-spaces': 'off',
    'unknown-at-rules': 0,
    'at-rule-no-unknown': 0,
    'camelcase': 'off',
    'brace-style': [
      'warn', 'stroustrup', {
        'allowSingleLine': true
      }
    ]
  }
}
