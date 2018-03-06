// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    allowImportExportEverywhere: true,
    sourceType: "module"
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'standard',
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    "no-multiple-empty-lines": [0, { "max": 0, "maxEOF": 1 }],
    "no-mixed-operators": 0,
    "no-debugger": 0,
    "no-const-assign": 0,
    "no-this-before-super": 0,
    "no-undef": 0,
    "no-unreachable": "warn",
    "no-unused-vars": 0,
    "constructor-super": 0,
    "valid-typeof": 0,
    "indent": 0,
    "spaced-comment": 0,
    "no-useless-escape": 0,
    "no-new": 0
  }
}
