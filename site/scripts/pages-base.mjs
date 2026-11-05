// Post-build step for the GitHub Pages preview only.
// The real site is served from the domain root (https://www.gc-c.co.jp/), but a GitHub
// project site lives under a sub-path (https://<user>.github.io/<repo>/). This rewrites
// root-relative URLs in dist/ to include that sub-path and marks the preview noindex.
//
// Usage: node scripts/pages-base.mjs /good-create
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^\/[A-Za-z0-9._-]+$/.test(base)) {
  console.error('Usage: node scripts/pages-base.mjs /<repo-name>');
  process.exit(1);
}
const dist = fileURLToPath(new URL('../dist/', import.meta.url));

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

// root-relative = starts with a single "/" (not "//" protocol-relative)
const attr = /\b(href|src|action|poster)="\/(?!\/)/g;
const srcset = /\bsrcset="([^"]*)"/g;
const cssUrl = /url\(\s*(['"]?)\/(?!\/)/g;

let html = 0, css = 0;
for await (const file of walk(dist)) {
  const ext = extname(file);
  if (ext === '.html') {
    let s = await readFile(file, 'utf8');
    s = s.replace(attr, `$1="${base}/`);
    s = s.replace(srcset, (_, v) => `srcset="${v.replace(/(^|,\s*)\/(?!\/)/g, `$1${base}/`)}"`);
    s = s.replace(cssUrl, `url($1${base}/`);
    if (!s.includes('name="robots"')) s = s.replace('<head>', '<head><meta name="robots" content="noindex, nofollow">');
    await writeFile(file, s);
    html++;
  } else if (ext === '.css') {
    let s = await readFile(file, 'utf8');
    s = s.replace(cssUrl, `url($1${base}/`);
    await writeFile(file, s);
    css++;
  }
}
console.log(`pages-base: rewrote ${html} HTML and ${css} CSS files for base ${base}`);
