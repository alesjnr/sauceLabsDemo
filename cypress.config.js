const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videoCompression: false,
  chromeWebSecurity: false,
  trashAssetsBeforeRuns: true,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      const file = config.env.file ? config.env.file : 'exemple_testing.json';
      config.env = require(`./cypress/env/${file}`);
      return config;
    },
  },
});
