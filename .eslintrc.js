module.exports = {
  root: true,
  extends: [
    "universe/native",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "@react-native-community",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },
};
