const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "@lmiller1990/cypress-ct-solid-js",
      bundler: "vite",
    },
  },
});
