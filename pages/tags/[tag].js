import Layout from '../../components/Layout'
import { getAllTags, getPostsByTag } from '../../lib/posts'
import Link from 'next/link'

export default function TagPage({ tag, posts }) {
  return (
    <Layout meta={{ title: `${tag} — Blog`, description: `Posts tagged with ${tag}` }}>
      <div className="container py-16">
        {/* Back navigation */}
        <div className="mb-8 fade-in">
          <Link href="/tags" className="inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors duration-200">
            ← Back to all posts
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 fade-in-delay-1">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-4xl font-bold text-white">
              Posts tagged with
            </h1>
            <span className="tag text-lg px-4 py-2">
              {tag}
            </span>
          </div>
          <p className="text-neutral-400">
            {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
          </p>
        </div>

        {/* Posts */}
        <div className="fade-in-delay-2">
          {posts.length > 0 ? (
            <div className="grid gap-6">
              {posts.map((post, i) => (
                <article key={post.slug} className={`card group cursor-pointer fade-in-delay-${Math.min(i + 1, 3)}`}>
                  <Link href={`/posts/${post.slug}`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-200 mb-2">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-neutral-400 text-sm mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        
                        <div className="flex items-center space-x-4">
                          {post.date && (
                            <time className="text-xs text-neutral-500">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </time>
                          )}
                          {post.tags && post.tags.length > 1 && (
                            <div className="flex flex-wrap gap-1">
                              {post.tags.filter(t => t !== tag).slice(0, 2).map((otherTag) => (
                                <span key={otherTag} className="tag">
                                  {otherTag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <div className="w-6 h-6 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                          →
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="card text-center py-12">
              <div className="text-neutral-400 mb-4">No posts found with this tag</div>
              <Link href="/tags" className="btn-secondary">
                Browse all posts
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const tags = getAllTags()
  return {
    paths: tags.map((t) => ({ params: { tag: t.tag } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = getPostsByTag(params.tag)
  return { props: { tag: params.tag, posts } }
}
