import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// 1. Copy to 404.html for GitHub Pages SPA fallback
fs.writeFileSync(path.join(distDir, '404.html'), indexHtml, 'utf8');
console.log('✓ Generated dist/404.html for SPA fallback');

// 2. Generate dist/blog/index.html so /blog never returns 404
const blogDir = path.join(distDir, 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}
fs.writeFileSync(path.join(blogDir, 'index.html'), indexHtml, 'utf8');
console.log('✓ Generated dist/blog/index.html');

// 3. Generate static index.html for known blog slugs
const slugs = [
  'getting-started-with-sap-build-process-automation',
  'sap-build-work-zone-standard-edition',
  'sap-fiori-elements-flexible-programming-model'
];

slugs.forEach((slug) => {
  const slugDir = path.join(blogDir, slug);
  if (!fs.existsSync(slugDir)) {
    fs.mkdirSync(slugDir, { recursive: true });
  }
  fs.writeFileSync(path.join(slugDir, 'index.html'), indexHtml, 'utf8');
  console.log(`✓ Generated dist/blog/${slug}/index.html`);
});

console.log('Postbuild static route generation complete.');
