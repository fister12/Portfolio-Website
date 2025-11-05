import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/posts'
import { FadeInUp, FadeInLeft, StaggerContainer, ScaleIn } from '../components/AnimatedComponents'
import { TechIcon, TechBadge, AnimatedTechStack } from '../components/TechIcon'
import { Code, Palette, Zap, Globe, Database, Smartphone, ArrowRight, ExternalLink, Github } from 'lucide-react'

export default function Home({ posts }) {
  const skills = [
    { name: 'Frontend', icon: Code, level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', icon: Database, level: 90, color: 'from-green-500 to-emerald-500' },
    { name: 'UI/UX', icon: Palette, level: 85, color: 'from-purple-500 to-pink-500' },
    { name: 'Mobile', icon: Smartphone, level: 80, color: 'from-orange-500 to-red-500' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
  return (
    <Layout meta={{ title: 'Aaditya Kapruwan — Full Stack & Mobile Developer', description: 'Motivated programmer passionate about React, React Native, machine learning, and building innovative cross-platform solutions.' }}>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/910025e4-00f2-4de6-aa19-125451250da8.png"
                alt="Aaditya Kapruwan"
                width={300}
                height={300}
                className="rounded-full"
              />
              <h1 className="hero-title">
                Hi, I'm Aaditya Kapruwan — backend and full stack developer
              </h1>
            </div>
          </div>
          
          <div className="fade-in-delay-1">
            <p className="hero-subtitle mb-6">
              Motivated programmer passionate about machine learning, data science, mobile development, 
              and web development. I love solving problems through code and building innovative cross-platform solutions.
            </p>
            
            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-3 mb-8">
              <TechIcon name="React" showName={true} className="w-5 h-5" />
              <TechIcon name="React Native" showName={true} className="w-5 h-5" />
              <TechIcon name="JavaScript" showName={true} className="w-5 h-5" />
              <TechIcon name="Python" showName={true} className="w-5 h-5" />
              <TechIcon name="Java" showName={true} className="w-5 h-5" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-2">
            <Link href="#projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 fade-in-delay-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-neutral-400">Open to opportunities</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-neutral-400">Full Stack & Mobile Developer</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm text-neutral-400">India 🇮🇳</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Technologies & Skills</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Passionate about machine learning, data science, and building efficient solutions with modern technologies.
            </p>
          </div>

          {/* Main Tech Stack */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'React', level: '92%', color: 'from-cyan-400 to-blue-500' },
              { name: 'JavaScript', level: '90%', color: 'from-yellow-400 to-yellow-600' },
              { name: 'React Native', level: '85%', color: 'from-blue-400 to-purple-500' },
              { name: 'Python', level: '88%', color: 'from-green-400 to-green-600' }
            ].map((skill, i) => (
              <div key={skill.name} className={`card fade-in-delay-${i + 1}`}>
                <div className="flex items-center gap-2 mb-3">
                  <TechIcon name={skill.name} className="w-6 h-6" />
                  <div className="text-sm font-medium text-white">{skill.name}</div>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-1.5">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="grid md:grid-cols-3 gap-8 fade-in-delay-2">
            <div className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Mobile Development
              </h3>
              <AnimatedTechStack 
                technologies={['React Native', 'iOS', 'Android', 'Expo', 'Mobile UI', 'Cross-Platform']} 
              />
            </div>
            
            <div className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Web Development
              </h3>
              <AnimatedTechStack 
                technologies={['React', 'Next.js', 'JavaScript', 'Node.js', 'MERN Stack', 'TypeScript']} 
              />
            </div>
            
            <div className="card">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Database className="w-5 h-5" />
                Backend & Data Science
              </h3>
              <AnimatedTechStack 
                technologies={['Python', 'Java', 'NumPy', 'Pandas', 'Machine Learning', 'APIs']} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="posts" className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Latest Posts</h2>
            <Link href="/tags" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
              View All →
            </Link>
          </div>

          <div className="grid gap-6">
            {posts.slice(0, 3).map((post, i) => (
              <article key={post.slug} className={`card group cursor-pointer fade-in-delay-${i + 1}`}>
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
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="tag">
                                {tag}
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

          {posts.length === 0 && (
            <div className="card text-center py-12">
              <div className="text-neutral-400 mb-4">No posts yet</div>
              <p className="text-sm text-neutral-500">
                Add some markdown files to the <code className="bg-neutral-800 px-2 py-1 rounded text-xs">posts/</code> directory to get started.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title">Featured Projects</h2>
            <Link href="/projects" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
              View All →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Machine Learning in C++ */}
            <Link href="https://github.com/fister12/machine_Learning_Cpp" className="card group cursor-pointer fade-in-delay-1">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🧠</div>
                    <div className="text-white font-semibold">ML in C++</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-200 mb-2">
                  Machine Learning using C++
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  High-performance machine learning algorithms implemented in C++ for faster calculations than Python.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="C++" />
                  <TechBadge name="C" />
                  <TechBadge name="Machine Learning" />
                </div>
              </div>
            </Link>

            {/* Notepad++ Clone */}
            <Link href="https://github.com/fister12/Notepadpp_clone" className="card group cursor-pointer fade-in-delay-2">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <div className="text-white font-semibold">Text Editor</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-200 mb-2">
                  Notepad++ Clone
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Feature-rich text editor with collaboration capabilities and advanced editing features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="Java" />
                  <TechBadge name="GUI" />
                  <TechBadge name="Collaboration" />
                </div>
              </div>
            </Link>

            {/* QR Code Generator */}
            <Link href="https://github.com/fister12/QRcodeGenerator" className="card group cursor-pointer fade-in-delay-3">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="text-white font-semibold">QR Generator</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-200 mb-2">
                  QR Code Generator
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Convert any data into QR codes using 8-bit binary encoding with clean visual output.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="Java" />
                  <TechBadge name="QR Code" />
                  <TechBadge name="Binary Encoding" />
                </div>
              </div>
            </Link>

            {/* Mobile App Showcase */}
            <div className="card group cursor-pointer fade-in-delay-4">
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">�</div>
                    <div className="text-white font-semibold">Mobile Apps</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-200 mb-2">
                  Mobile Applications
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Cross-platform mobile applications built with React Native for iOS and Android.
                </p>
                <div className="flex flex-wrap gap-2">
                  <TechBadge name="React Native" />
                  <TechBadge name="JavaScript" />
                  <TechBadge name="Mobile UI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
  return { props: { posts } }
}
