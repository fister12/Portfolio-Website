import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from './SEO'
import ThemeToggle from './ThemeToggle'
import PortfolioAssistant from './PortfolioAssistant'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Layout({ children, meta }) {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [children])

  if (!mounted) return null

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-slate-900 dark:text-white transition-colors duration-300">
      <SEO {...meta} />

      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b border-slate-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="container flex items-center justify-between py-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="/" className="text-2xl font-bold tracking-tight hover:text-slate-600 dark:hover:text-neutral-300 transition-colors duration-200">
              Aaditya Kapruwan
            </Link>
            <div className="text-sm text-slate-500 dark:text-neutral-500">Full Stack & Mobile Developer</div>
          </motion.div>

          <nav className="flex items-center space-x-4 md:space-x-8">
            <motion.div 
              className="hidden md:flex items-center space-x-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/" className="nav-link text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/work" className="nav-link text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                Work
              </Link>
              <Link href="/projects" className="nav-link text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                Projects
              </Link>
              <Link href="/tags" className="nav-link text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                Blog
              </Link>
              <Link href="/contact" className="nav-link text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-slate-200 dark:border-neutral-800 md:hidden overflow-hidden"
              >
                <div className="container py-4 flex flex-col space-y-4">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2">
                    Home
                  </Link>
                  <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2">
                    Work
                  </Link>
                  <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2">
                    Projects
                  </Link>
                  <Link href="/tags" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2">
                    Blog
                  </Link>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2">
                    Contact
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main className="flex-1 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
        
        <div className="relative">
          {children}
        </div>
      </main>

      <motion.footer 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="border-t border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50"
      >
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-slate-500 dark:text-neutral-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Aaditya Kapruwan. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <motion.a 
                href="https://github.com" 
                whileHover={{ scale: 1.05 }}
                className="text-slate-500 dark:text-neutral-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                GitHub
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                whileHover={{ scale: 1.05 }}
                className="text-slate-500 dark:text-neutral-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                Twitter
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                whileHover={{ scale: 1.05 }}
                className="text-slate-500 dark:text-neutral-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Portfolio Assistant Chatbot */}
      <PortfolioAssistant />
    </div>
  )
}
