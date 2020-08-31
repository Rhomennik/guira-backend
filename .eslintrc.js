module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "plugin:@typescript-eslint/recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_",
      },
    ],
  },
};
