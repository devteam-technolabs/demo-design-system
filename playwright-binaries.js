const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const browsersPath = path.join(__dirname, 'node_modules', 'playwright', '.local-browsers');

if (!fs.existsSync(browsersPath)) {
  console.log('Playwright browser binaries not found, installing...');
  execSync('npx playwright install', { stdio: 'inherit' });
} else {
  console.log('Playwright browser binaries are already installed.');
}
