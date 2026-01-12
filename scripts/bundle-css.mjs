// Build script to bundle CSS files
import fs from 'fs';
import path from 'path';

const cssFiles = [
  'src/styles/fonts.css',
  'src/styles/theme.css',
  'src/styles/tailwind.css'
];

let bundledCSS = '/* Riad Kilani Design System - Bundled Styles */\n\n';

cssFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  bundledCSS += `/* ${path.basename(file)} */\n${content}\n\n`;
});

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true });
}

fs.writeFileSync('dist/styles.css', bundledCSS);

console.log('✓ CSS bundled successfully');
