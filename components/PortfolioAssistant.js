import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle, Send } from 'lucide-react'

const chatResponses = {
  greeting: [
    "Hello, I am a chatbot. How can I help?",
    "Hi there! How can I help you today?",
    "Welcome! How can I assist you?"
  ],
  projects: [
    "Aaditya has worked on various projects including web applications, e-commerce platforms, and mobile-first PWAs. Would you like to see a specific project?",
    "The featured projects showcase full-stack development skills with technologies like Next.js, React, and Node.js. Check out the Projects page for details!"
  ],
  skills: [
    "Aaditya specializes in TypeScript, React, Next.js, and Node.js. They also have experience with PostgreSQL, Tailwind CSS, and modern deployment practices.",
    "Key technical skills include full-stack JavaScript development, database design, API development, and UI/UX implementation."
  ],
  experience: [
    "Aaditya has experience in both frontend and backend development, with a focus on creating scalable web applications and seamless user experiences.",
    "They've worked on various projects ranging from simple websites to complex full-stack applications with real-time features."
  ],
  contact: [
    "You can reach Aaditya through the contact page, email, or book a free consultation call. They're always open to discussing new opportunities!",
    "The best way to get in touch is via email or through the contact form. Aaditya    typically responds within 24 hours."
  ],
  default: [
    "I'd be happy to help! You can ask me about Aaditya's projects, skills, experience, or how to get in touch.",
    "Feel free to ask about anything related to Aaditya's portfolio - projects, technical skills, or collaboration opportunities.",
    "I'm here to help! Try asking about specific projects, technologies Aaditya works with, or how to start a collaboration."
  ]
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello, I am a chatbot. How can I help?", 
      sender: 'bot', 
      timestamp: Date.now() 
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const getResponse = (message) => {
    const text = message.toLowerCase()
    
    if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
      return chatResponses.greeting[Math.floor(Math.random() * chatResponses.greeting.length)]
    }
    if (text.includes('project') || text.includes('work') || text.includes('portfolio')) {
      return chatResponses.projects[Math.floor(Math.random() * chatResponses.projects.length)]
    }
    if (text.includes('skill') || text.includes('technology') || text.includes('tech') || text.includes('language')) {
      return chatResponses.skills[Math.floor(Math.random() * chatResponses.skills.length)]
    }
    if (text.includes('experience') || text.includes('background') || text.includes('career')) {
      return chatResponses.experience[Math.floor(Math.random() * chatResponses.experience.length)]
    }
    if (text.includes('contact') || text.includes('reach') || text.includes('email') || text.includes('call')) {
      return chatResponses.contact[Math.floor(Math.random() * chatResponses.contact.length)]
    }
    
    return chatResponses.default[Math.floor(Math.random() * chatResponses.default.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: Date.now()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: Date.now()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center z-50"
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-96 max-w-[90vw] h-[500px] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  🤖
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Portfolio Assistant</h3>
                  <p className="text-white/80 text-xs">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-neutral-800 text-neutral-200'
                  }`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-neutral-800 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        className="w-2 h-2 bg-neutral-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                        className="w-2 h-2 bg-neutral-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                        className="w-2 h-2 bg-neutral-500 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about projects, skills, or experience..."
                  className="flex-1 bg-neutral-800 text-white placeholder-neutral-400 border border-neutral-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}