module.exports = {
  extends: ["stylelint-prettier/recommended", "stylelint-config-recess-order"],
  plugins: ["stylelint-prettier"],
  defaultSeverity: "error",
  rules: {
    "prettier/prettier": true,
  },
};
