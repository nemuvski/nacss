module.exports = {
  extends: ["stylelint-prettier/recommended", "stylelint-config-recess-order"],
  plugins: ["stylelint-prettier"],
  defaultSeverity: "warning",
  rules: {
    "prettier/prettier": true,
  },
};
