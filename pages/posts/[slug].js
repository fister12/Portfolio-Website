import Layout from '../../components/Layout'
import Link from 'next/link'
import { getPostSlugs, getPostBySlug, markdownToHtml } from '../../lib/posts'
import { TechBadge } from '../../components/TechIcon'

export default function Post({ post }) {
  return (
    <Layout meta={{ title: post.frontmatter.title, description: post.frontmatter.excerpt }}>
      <div className="container py-16">
        {/* Back navigation */}
        <div className="mb-8 fade-in">
          <Link href="/" className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors duration-200">
            ← Back to home
          </Link>
        </div>

        <article className="max-w-3xl mx-auto">
          {/* Article header */}
          <header className="mb-12 fade-in-delay-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.frontmatter.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
              {post.frontmatter.date && (
                <time className="flex items-center">
                  <span>Published on {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                </time>
              )}
              
              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <Link key={tag} href={`/tags/${tag}`} className="group">
                      <TechBadge 
                        name={tag} 
                        className="cursor-pointer hover:scale-105 transition-transform duration-200 group-hover:shadow-lg"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {post.frontmatter.excerpt && (
              <p className="text-lg text-neutral-300 mt-6 leading-relaxed">
                {post.frontmatter.excerpt}
              </p>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg prose-invert max-w-none fade-in-delay-2">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Article footer */}
          <footer className="mt-16 pt-8 border-t border-neutral-800 fade-in-delay-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="btn-secondary">
                ← More posts
              </Link>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-neutral-500">Share:</span>
                <Link href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.frontmatter.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      className="inline-flex items-center space-x-1 text-neutral-400 hover:text-blue-400 transition-colors duration-200">
                  <span>🐦</span>
                  <span>Twitter</span>
                </Link>
                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      className="inline-flex items-center space-x-1 text-neutral-400 hover:text-blue-500 transition-colors duration-200">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </Link>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const slugs = getPostSlugs()
  return {
    paths: slugs.map((s) => ({ params: { slug: s.replace(/\.md$/, '') } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostBySlug(params.slug)
  const content = await markdownToHtml(postData.content || '')
  return { props: { post: { ...postData, content } } }
}
