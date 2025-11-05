const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDir = path.join(process.cwd(), 'posts')
const publicDir = path.join(process.cwd(), 'public')

function getPosts() {
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))
}

function generate() {
  const baseUrl = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '')
  const siteTitle = process.env.SITE_TITLE || 'Aaditya Kapruwan'
  const siteDesc = process.env.SITE_DESC || 'Blog'

  const files = getPosts()
  const items = files.map((file) => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const { data, excerpt } = matter(content, { excerpt: true, excerpt_separator: '\n\n' })
    const slug = file.replace(/\.md$/, '')
    return {
      title: data.title || slug,
      link: `${baseUrl}/posts/${slug}`,
      date: data.date || new Date().toISOString(),
      description: data.excerpt || excerpt || data.excerpt || ''
    }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>\n` +
    `<rss version="2.0">\n<channel>\n<title>${siteTitle}</title>\n<description>${siteDesc}</description>\n<link>${baseUrl}</link>\n` +
    items.map(i => `  <item>\n    <title><![CDATA[${i.title}]]></title>\n    <link>${i.link}</link>\n    <pubDate>${new Date(i.date).toUTCString()}</pubDate>\n    <description><![CDATA[${i.description}]]></description>\n  </item>`).join('\n') +
    `\n</channel>\n</rss>`

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rss)
  console.log('rss.xml generated with', items.length, 'items')
}

generate()
