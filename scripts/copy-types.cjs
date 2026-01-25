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

// Copy component d.ts files
const compSrcDir = path.resolve(__dirname, '..', 'src', 'components')
const compDestDir = path.resolve(__dirname, '..', 'dist', 'components')
if (!fs.existsSync(compDestDir)) {
  fs.mkdirSync(compDestDir, { recursive: true })
}

for (const file of fs.readdirSync(compSrcDir)) {
  if (file.endsWith('.d.ts')) {
    const from = path.join(compSrcDir, file)
    const to = path.join(compDestDir, file)
    fs.copyFileSync(from, to)
    console.log(`Copied types: ${from} -> ${to}`)
  }
}
