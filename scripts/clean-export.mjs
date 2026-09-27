// Next's static export writes an RSC payload (.txt) beside every route so the
// client router can prefetch segments. Every <Link> here sets prefetch={false},
// so nothing ever requests them — and they cause two real problems:
//
//   1. ~3.4 MB of dead files to upload to Hostinger on every deploy.
//   2. Each route gets a directory (out/about-us/) next to its page
//      (out/about-us.html). Apache's DirectoryIndex then matches the directory
//      for /about-us and the clean-URL rewrite in .htaccess never fires.
//
// This runs after `next build` and removes them, along with any directory left
// empty afterwards. robots.txt is kept.
import fs from 'fs'
import path from 'path'

const OUT = path.join(process.cwd(), 'out')
const KEEP = new Set(['robots.txt'])

let removedFiles = 0
let removedBytes = 0
let removedDirs = 0

function clean(dir) {
  if (!fs.existsSync(dir)) return true

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      clean(full)
      if (fs.readdirSync(full).length === 0) {
        fs.rmdirSync(full)
        removedDirs++
      }
      continue
    }

    if (entry.name.endsWith('.txt') && !KEEP.has(entry.name)) {
      removedBytes += fs.statSync(full).size
      fs.unlinkSync(full)
      removedFiles++
    }
  }
}

if (!fs.existsSync(OUT)) {
  console.error('clean-export: out/ not found — run next build first.')
  process.exit(1)
}

clean(OUT)

console.log(
  `clean-export: removed ${removedFiles} RSC payloads (${Math.round(removedBytes / 1024)} KB) and ${removedDirs} empty directories.`
)
