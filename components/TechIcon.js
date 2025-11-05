// Technology symbols and icons mapping
import React from 'react'

export const TechIcon = ({ name, className = "w-5 h-5", showName = false }) => {
  const techIcons = {
    // Frontend Frameworks
    'Next.js': { symbol: '▲', emoji: '⚡', color: 'text-white' },
    'React': { symbol: '⚛', emoji: '⚛️', color: 'text-cyan-400' },
    'React Native': { symbol: '📱', emoji: '📱', color: 'text-blue-500' },
    'Vue.js': { symbol: 'V', emoji: '💚', color: 'text-green-400' },
    'Angular': { symbol: 'A', emoji: '🅰️', color: 'text-red-500' },
    'Svelte': { symbol: 'S', emoji: '🔥', color: 'text-orange-500' },
    
    // Languages
    'TypeScript': { symbol: 'TS', emoji: '📘', color: 'text-blue-400' },
    'JavaScript': { symbol: 'JS', emoji: '📒', color: 'text-yellow-400' },
    'Python': { symbol: '🐍', emoji: '🐍', color: 'text-green-500' },
    'Go': { symbol: 'Go', emoji: '🐹', color: 'text-blue-300' },
    'Rust': { symbol: '🦀', emoji: '🦀', color: 'text-orange-600' },
    'Java': { symbol: '☕', emoji: '☕', color: 'text-red-600' },
    'C#': { symbol: 'C#', emoji: '💜', color: 'text-purple-500' },
    'PHP': { symbol: '🐘', emoji: '🐘', color: 'text-indigo-500' },
    
    // Backend & Runtime
    'Node.js': { symbol: '⬢', emoji: '💚', color: 'text-green-500' },
    'Express': { symbol: 'E', emoji: '🚀', color: 'text-gray-400' },
    'NestJS': { symbol: '🐈', emoji: '🐈', color: 'text-red-500' },
    'Deno': { symbol: '🦕', emoji: '🦕', color: 'text-black' },
    'Bun': { symbol: '🥟', emoji: '🥟', color: 'text-yellow-300' },
    
    // Databases
    'PostgreSQL': { symbol: '🐘', emoji: '🐘', color: 'text-blue-600' },
    'MongoDB': { symbol: '🍃', emoji: '🍃', color: 'text-green-600' },
    'Redis': { symbol: '◆', emoji: '🔴', color: 'text-red-500' },
    'MySQL': { symbol: '🐬', emoji: '🐬', color: 'text-blue-500' },
    'SQLite': { symbol: '📦', emoji: '📦', color: 'text-blue-300' },
    'Prisma': { symbol: '▲', emoji: '💎', color: 'text-indigo-400' },
    'Supabase': { symbol: 'S', emoji: '⚡', color: 'text-green-400' },
    'Firebase': { symbol: '🔥', emoji: '🔥', color: 'text-orange-500' },
    
    // Styling & UI
    'Tailwind CSS': { symbol: '🎨', emoji: '🎨', color: 'text-cyan-400' },
    'Tailwind': { symbol: '🎨', emoji: '🎨', color: 'text-cyan-400' },
    'CSS': { symbol: '#', emoji: '🎨', color: 'text-blue-400' },
    'Sass': { symbol: 'S', emoji: '💅', color: 'text-pink-400' },
    'Styled Components': { symbol: '💅', emoji: '💅', color: 'text-yellow-400' },
    'Emotion': { symbol: '😊', emoji: '😊', color: 'text-purple-400' },
    
    // Animation & Graphics
    'Framer Motion': { symbol: '🎬', emoji: '🎬', color: 'text-purple-500' },
    'GSAP': { symbol: '⚡', emoji: '⚡', color: 'text-green-400' },
    
    // Additional icons for work page
    'building': { symbol: '🏢', emoji: '🏢', color: 'text-gray-400' },
    'calendar': { symbol: '📅', emoji: '📅', color: 'text-blue-400' },
    'location': { symbol: '📍', emoji: '📍', color: 'text-red-400' },
    'Figma': { symbol: '🎨', emoji: '🎨', color: 'text-purple-400' },
    'WordPress': { symbol: 'W', emoji: '📝', color: 'text-blue-600' },
    'Photoshop': { symbol: 'Ps', emoji: '🖼️', color: 'text-blue-500' },
    
    // Data Science & ML Libraries
    'NumPy': { symbol: 'Np', emoji: '🔢', color: 'text-blue-500' },
    'Pandas': { symbol: 'Pd', emoji: '🐼', color: 'text-green-500' },
    'Matplotlib': { symbol: 'Mp', emoji: '📊', color: 'text-blue-400' },
    'Scikit-Learn': { symbol: 'Sk', emoji: '🤖', color: 'text-orange-500' },
    'Jupyter': { symbol: 'Jp', emoji: '📔', color: 'text-orange-400' },
    'Machine Learning': { symbol: 'ML', emoji: '🧠', color: 'text-purple-500' },
    
    // Additional Technologies
    'C': { symbol: 'C', emoji: '⚙️', color: 'text-blue-600' },
    'HTML': { symbol: '🌐', emoji: '🌐', color: 'text-orange-500' },
    'Bootstrap': { symbol: 'B', emoji: '🎨', color: 'text-purple-500' },
    'MERN Stack': { symbol: 'MERN', emoji: '📚', color: 'text-green-400' },
    'GUI': { symbol: 'GUI', emoji: '🖥️', color: 'text-blue-400' },
    'QR Code': { symbol: 'QR', emoji: '📱', color: 'text-gray-400' },
    'Binary Encoding': { symbol: '01', emoji: '💻', color: 'text-green-400' },
    'Image Processing': { symbol: 'IP', emoji: '🖼️', color: 'text-purple-400' },
    'Algorithms': { symbol: 'Alg', emoji: '🧮', color: 'text-blue-500' },
    'Performance Optimization': { symbol: 'Perf', emoji: '⚡', color: 'text-yellow-400' },
    'Collaboration': { symbol: 'Collab', emoji: '👥', color: 'text-green-400' },
    'File Management': { symbol: 'File', emoji: '📁', color: 'text-blue-400' },
    'Data Conversion': { symbol: 'Data', emoji: '🔄', color: 'text-purple-400' },
    
    // Mobile Development
    'iOS': { symbol: '🍎', emoji: '🍎', color: 'text-gray-300' },
    'Android': { symbol: '🤖', emoji: '🤖', color: 'text-green-500' },
    'Expo': { symbol: 'E', emoji: '⚡', color: 'text-purple-500' },
    'Mobile UI': { symbol: 'MUI', emoji: '📱', color: 'text-blue-400' },
    'Cross-Platform': { symbol: 'CP', emoji: '🔄', color: 'text-purple-400' },
    'APIs': { symbol: 'API', emoji: '🔌', color: 'text-yellow-400' },
    'Three.js': { symbol: '🎲', emoji: '🎲', color: 'text-white' },
    'Lottie': { symbol: '🎭', emoji: '🎭', color: 'text-blue-400' },
    
    // Cloud & DevOps
    'Vercel': { symbol: '▲', emoji: '▲', color: 'text-white' },
    'Netlify': { symbol: '◉', emoji: '🌐', color: 'text-teal-400' },
    'AWS': { symbol: '☁️', emoji: '☁️', color: 'text-orange-400' },
    'Google Cloud': { symbol: '☁️', emoji: '☁️', color: 'text-blue-500' },
    'Azure': { symbol: '☁️', emoji: '☁️', color: 'text-blue-600' },
    'Docker': { symbol: '🐳', emoji: '🐳', color: 'text-blue-500' },
    'Kubernetes': { symbol: '⚙️', emoji: '⚙️', color: 'text-blue-600' },
    
    // Tools & Services
    'Git': { symbol: '🔱', emoji: '🔱', color: 'text-orange-500' },
    'GitHub': { symbol: '🐱', emoji: '🐱', color: 'text-white' },
    'GitLab': { symbol: '🦊', emoji: '🦊', color: 'text-orange-600' },
    'Figma': { symbol: '🎨', emoji: '🎨', color: 'text-purple-500' },
    'VS Code': { symbol: '💙', emoji: '💙', color: 'text-blue-500' },
    'Postman': { symbol: '📮', emoji: '📮', color: 'text-orange-500' },
    'Stripe': { symbol: '💳', emoji: '💳', color: 'text-indigo-500' },
    
    // Mobile & PWA
    'PWA': { symbol: '📱', emoji: '📱', color: 'text-green-500' },
    'React Native': { symbol: '📱', emoji: '📱', color: 'text-cyan-400' },
    'Flutter': { symbol: '🦋', emoji: '🦋', color: 'text-blue-400' },
    'Expo': { symbol: '⚡', emoji: '⚡', color: 'text-black' },
    'Service Workers': { symbol: '⚙️', emoji: '⚙️', color: 'text-blue-500' },
    
    // Testing
    'Jest': { symbol: '🃏', emoji: '🃏', color: 'text-red-600' },
    'Cypress': { symbol: '🌲', emoji: '🌲', color: 'text-green-600' },
    'Playwright': { symbol: '🎭', emoji: '🎭', color: 'text-green-500' },
    
    // CMS & Content
    'Strapi': { symbol: '🚀', emoji: '🚀', color: 'text-indigo-500' },
    'Sanity': { symbol: '✨', emoji: '✨', color: 'text-red-500' },
    'Contentful': { symbol: '📄', emoji: '📄', color: 'text-blue-500' },
    
    // Default fallback
    'default': { symbol: '⚡', emoji: '⚡', color: 'text-gray-400' }
  }

  const tech = techIcons[name] || techIcons['default']
  
  if (showName) {
    return (
      <span className={`inline-flex items-center gap-2 ${tech.color}`}>
        <span className={className}>{tech.emoji}</span>
        <span className="text-sm font-medium">{name}</span>
      </span>
    )
  }
  
  return (
    <span 
      className={`${className} ${tech.color} inline-flex items-center justify-center`}
      title={name}
    >
      {tech.emoji}
    </span>
  )
}

export const TechBadge = ({ name, className = "" }) => {
  const tech = name in {
    'Next.js': 1, 'React': 1, 'Vue.js': 1, 'TypeScript': 1, 'JavaScript': 1,
    'Node.js': 1, 'Express': 1, 'PostgreSQL': 1, 'MongoDB': 1, 'Tailwind CSS': 1,
    'Tailwind': 1, 'Framer Motion': 1, 'GSAP': 1, 'Three.js': 1, 'Firebase': 1,
    'Vercel': 1, 'AWS': 1, 'Docker': 1, 'Stripe': 1, 'Prisma': 1, 'PWA': 1
  }

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-neutral-800/50 text-neutral-300 rounded-full border border-neutral-700 hover:bg-neutral-700/50 hover:text-white transition-all duration-200 ${className}`}>
      <TechIcon name={name} className="w-4 h-4" />
      {name}
    </span>
  )
}

// Animated tech stack component
export const AnimatedTechStack = ({ technologies, className = "" }) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => (
        <div
          key={tech}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <TechBadge name={tech} />
        </div>
      ))}
    </div>
  )
}

export default TechIcon