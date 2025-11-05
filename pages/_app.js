import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ThemeProvider } from '../components/ThemeProvider'
import '../styles/globals.css'

// Route transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -50,
    scale: 1.02
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

// Loading indicator component
function LoadingIndicator({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 z-50 origin-left"
        />
      )}
    </AnimatePresence>
  )
}

// Page transition wrapper
function PageTransition({ children, router }) {
  return (
    <AnimatePresence 
      mode="wait" 
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={router.asPath}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.asPath) {
        setIsLoading(true)
      }
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <ThemeProvider>
      <LoadingIndicator isLoading={isLoading} />
      
      {/* Custom cursor styles */}
      <style jsx global>{`
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Loading animations */
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .loading-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite;
        }
        
        /* Route transition enhancements */
        .page-transition-enter {
          opacity: 0;
          transform: translateY(50px) scale(0.98);
        }
        
        .page-transition-enter-active {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: all 500ms ease-in-out;
        }
        
        .page-transition-exit {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .page-transition-exit-active {
          opacity: 0;
          transform: translateY(-50px) scale(1.02);
          transition: all 300ms ease-in-out;
        }
      `}</style>
      
      <PageTransition router={router}>
        <Component {...pageProps} />
      </PageTransition>
    </ThemeProvider>
  )
}
