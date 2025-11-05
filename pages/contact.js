import Layout from '../components/Layout'
import Link from 'next/link'
import { TechIcon } from '../components/TechIcon'

export default function Contact() {
  return (
    <Layout meta={{ title: 'Contact — Aaditya Kapruwan', description: 'Get in touch for collaborations and opportunities.' }}>
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's work together
            </h1>
            <p className="text-lg text-neutral-400 mb-12 leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to say hello, I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card fade-in-delay-1">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  📧
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <Link href="mailto:kapruwanaaditya@gmail.com" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  kapruwanaaditya@gmail.com
                </Link>
              </div>
            </div>

            <div className="card fade-in-delay-2">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  💬
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Schedule a Call</h3>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Book a meeting
                </Link>
              </div>
            </div>
          </div>

          <div className="fade-in-delay-3">
            <div className="flex justify-center space-x-6 mb-8">
              <Link href="https://github.com/fister12" className="social-link group">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                  <TechIcon name="github" size="text-2xl" />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com/aadityakapruwan" className="social-link group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                  <span className="text-white text-xl">🐦</span>
                </div>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com/in/aaditya-kapruwan" className="social-link group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                  <span className="text-white text-xl">💼</span>
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:kapruwanaaditya@gmail.com" className="social-link group">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-lg">
                  <span className="text-white text-xl">📧</span>
                </div>
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:kapruwanaaditya@gmail.com" className="btn-primary">
                Send an Email
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}