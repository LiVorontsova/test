module.exports = {
  customSyntax: "postcss-scss",
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  plugins: [
    "stylelint-order",
    "stylelint-scss",
    "stylelint-selector-bem-pattern",
  ],
  rules: {
    "font-family-name-quotes": "always-unless-keyword",
    "function-url-quotes": "always",
    "selector-class-pattern":
      "^[a-z]([a-z0-9]*)(?:-(?:[a-z0-9]+))*?(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--[a-z0-9-]+)?$",
    "color-function-notation": "modern",
    "alpha-value-notation": "number",
  },
};
