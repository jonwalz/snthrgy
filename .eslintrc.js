module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/no-triple-slash-reference": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/prefer-namespace-keyword": "off",
    indent: "off",
    "@typescript-eslint/indent": ["error", 2]
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  ecmaFeatures: {
    jsx: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};