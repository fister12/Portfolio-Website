import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllTags, getAllPosts } from '../../lib/posts'
import { TechBadge, getTechColor } from '../../components/TechIcon'

export default function Tags({ tags, posts }) {
  return (
    <Layout meta={{ title: 'Blog — Aaditya Kapruwan', description: 'Thoughts on development, design, and technology.' }}>
      <div className="container py-16">
        {/* Header */}
        <div className="mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Thoughts on web development, design patterns, and the latest in technology. 
            Sharing insights from my journey as a full-stack developer.
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mb-12 fade-in-delay-1">
            <h2 className="text-xl font-semibold text-white mb-4">Browse by topic</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Link key={t.tag} href={`/tags/${encodeURIComponent(t.tag)}`} className="group">
                  <TechBadge 
                    name={t.tag} 
                    className="hover:scale-105 transition-transform duration-200 group-hover:shadow-lg" 
                  />
                  <span className="ml-1 text-neutral-500 text-sm">({t.count})</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="fade-in-delay-2">
          <h2 className="section-title">All Posts</h2>
          
          {posts.length > 0 ? (
            <div className="grid gap-6">
              {posts.map((post, i) => (
                <article key={post.slug} className={`card group cursor-pointer fade-in-delay-${Math.min(i + 1, 3)}`}>
                  <Link href={`/posts/${post.slug}`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-200 mb-2">
                          {post.title}
                        </h3>
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
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 3).map((tag) => (
                                <TechBadge key={tag} name={tag} size="sm" />
                              ))}
                              {post.tags.length > 3 && (
                                <span className="text-xs text-neutral-500 self-center">
                                  +{post.tags.length - 3} more
                                </span>
                              )}
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
              <div className="text-neutral-400 mb-4">No posts yet</div>
              <p className="text-sm text-neutral-500">
                Add some markdown files to the <code className="bg-neutral-800 px-2 py-1 rounded text-xs">posts/</code> directory to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const tags = getAllTags()
  const posts = getAllPosts()
  return { props: { tags, posts } }
}
