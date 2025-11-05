import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { slug: realSlug, frontmatter: data, content }
}

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => {
    const { frontmatter } = getPostBySlug(slug)
    return {
      slug: slug.replace(/\.md$/, ''),
      ...frontmatter,
    }
  })
  // sort by date descending if date present
  return posts.sort((a, b) => (a.date && b.date ? new Date(b.date) - new Date(a.date) : 0))
}

export function getAllTags() {
  const posts = getAllPosts()
  const tagMap = {}
  posts.forEach((p) => {
    const tags = p.tags || []
    tags.forEach((t) => {
      const key = String(t).toLowerCase()
      tagMap[key] = tagMap[key] || { tag: t, count: 0 }
      tagMap[key].count += 1
    })
  })
  return Object.values(tagMap).sort((a, b) => b.count - a.count)
}

export function getPostsByTag(tag) {
  const posts = getAllPosts()
  const key = String(tag).toLowerCase()
  return posts.filter((p) => (p.tags || []).map((t) => String(t).toLowerCase()).includes(key))
}
