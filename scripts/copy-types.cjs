const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '..', 'src', 'index.d.ts')
const destDir = path.resolve(__dirname, '..', 'dist')
const dest = path.join(destDir, 'index.d.ts')

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

fs.copyFileSync(src, dest)
console.log(`Copied types: ${src} -> ${dest}`)
