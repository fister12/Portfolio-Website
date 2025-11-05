const fs = require('fs')
const path = require('path')

const postsDir = path.join(process.cwd(), 'posts')
const publicDir = path.join(process.cwd(), 'public')

function getPosts() {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
}

function generate() {
  const baseUrl = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '')
  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/tags/`,
  ]

  const posts = getPosts()
  posts.forEach((p) => urls.push(`${baseUrl}/posts/${p}`))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>`

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
  console.log('sitemap.xml generated with', urls.length, 'entries')
}

generate()
