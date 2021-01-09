module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ["plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off"
  },
};
