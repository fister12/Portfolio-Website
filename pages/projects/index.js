import Layout from '../../components/Layout'
import Link from 'next/link'
import { TechBadge, AnimatedTechStack } from '../../components/TechIcon'

const projects = [
  {
    id: 1,
    title: 'Image Processor',
    description: 'Advanced image processing application with various filters and transformation capabilities. Includes features for image enhancement, filtering, and batch processing operations.',
    image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=400&fit=crop',
    tags: ['CSS', 'Image Processing', 'Filters', 'Web Application', 'JavaScript'],
    github: 'https://github.com/fister12/ImageProcessor',
    demo: '#',
    status: 'Live'
  },
  {
    id: 2,
    title: 'Machine Learning using C and C++',
    description: 'High-performance machine learning implementation using C and C++ for faster calculations compared to traditional Python-based ML libraries. Demonstrates the power of low-level programming for ML algorithms.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    tags: ['C++', 'C', 'Machine Learning', 'Algorithms', 'Performance Optimization'],
    github: 'https://github.com/fister12/machine_Learning_Cpp',
    demo: '#',
    status: 'Live'
  },
  {
    id: 3,
    title: 'Notepad++ Clone',
    description: 'A feature-rich text editor clone of Notepad++ with collaborative editing capabilities. Includes syntax highlighting, file management, and real-time collaboration features for team-based text editing.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    tags: ['Java', 'GUI', 'Text Editor', 'Collaboration', 'File Management'],
    github: 'https://github.com/fister12/Notepadpp_clone',
    demo: '#',
    status: 'Live'
  },
  {
    id: 4,
    title: 'QR Code Generator',
    description: 'A simple yet effective QR code generator that converts any data into QR codes using 8-bit encoding. Uses binary representation with 0 as black squares and 1 as white squares for clean QR code generation.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',
    tags: ['Java', 'QR Code', 'Binary Encoding', 'Data Conversion', 'Image Processing'],
    github: 'https://github.com/fister12/QRcodeGenerator',
    demo: '#',
    status: 'Live'
  },
  {
    id: 5,
    title: 'Terminal Tic Tac Toe',
    description: 'Classic Tic Tac Toe game implemented in Java for terminal/console play. Features clean ASCII interface, game state management, and win condition detection for an engaging terminal gaming experience.',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&h=400&fit=crop',
    tags: ['Java', 'Console Game', 'Terminal Interface', 'Game Logic', 'ASCII Art'],
    github: 'https://github.com/fister12/TerminalTicTacToe',
    demo: '#',
    status: 'Live'
  },
  {
    id: 6,
    title: 'Calculator Application',
    description: 'Fully functional calculator application built in Java with a clean user interface. Supports basic arithmetic operations, memory functions, and advanced mathematical calculations.',
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=800&h=400&fit=crop',
    tags: ['Java', 'GUI Application', 'Mathematics', 'User Interface', 'Swing'],
    github: 'https://github.com/fister12/Calculator',
    demo: '#',
    status: 'Live'
  }
]

export default function Projects() {
  return (
    <Layout meta={{ title: 'Projects — Aaditya Kapruwan', description: 'A collection of my latest work and side projects.' }}>
      <div className="container py-16">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            A collection of my latest work, side projects, and experiments. 
            Each project showcases different technologies and approaches to solving real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`card group fade-in-delay-${index + 1}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg group-hover:scale-105 transition-transform duration-300">
                    {/* Placeholder for project image */}
                    <div className="w-full h-full flex items-center justify-center text-white font-medium">
                      {project.title} Preview
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-neutral-300 transition-colors duration-200">
                    {project.title}
                  </h2>
                  
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <TechBadge key={tag} name={tag} />
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <Link href={project.demo} className="btn-primary">
                      Live Demo →
                    </Link>
                    <Link href={project.github} className="btn-secondary">
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in-delay-3">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-neutral-400 mb-6">
              I'm always open to discussing new projects and opportunities.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
