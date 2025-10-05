/* eslint-env node */
module.exports = {
  root: true,
  ignorePatterns: ["**/dist/**", "**/build/**", "**/.next/**", "**/coverage/**"],
  env: { es2022: true, node: true, browser: true },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:jsx-a11y/recommended", "plugin:import/recommended", "prettier"],
  plugins: ["react", "react-hooks", "jsx-a11y", "import"],
  settings: { react: { version: "detect" } },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier"
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
      }
    }
  ]
};

