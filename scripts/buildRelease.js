const { execSync } = require('child_process');

// Clean the build
execSync('npm run clean', { stdio: 'inherit' });
console.log('Clean complete');

// Build components
execSync('npm run build:components', { stdio: 'inherit' });
console.log('Build components complete');

// Build CSS
execSync('npm run build:scss', { stdio: 'inherit' });
execSync('node ./scripts/changeToCss.js', { stdio: 'inherit' });
console.log('SCSS to CSS Replacement complete');

console.log('Release build ready');