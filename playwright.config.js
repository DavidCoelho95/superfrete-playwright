// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: 'tests',
    timeout: 30000,
    use: {
        headless: false, // Defina como true para rodar sem interface gráfica
        viewport: { width: 1366, height: 768 },
        actionTimeout: 0,
    },
});
