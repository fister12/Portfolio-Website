import { useState } from 'react'
import Layout from '../components/Layout'
import { TechIcon, TechBadge } from '../components/TechIcon'
import { motion } from 'framer-motion'

export default function Work() {
  const [selectedJob, setSelectedJob] = useState(0)

  const workExperience = [
    {
      id: 1,
      company: "AmberFlux Edge AI pvt Ltd",
      position: "Backend Software Development Intern",
      duration: "June 2025 - August 2025",
      location: "India",
      type: "Internship",
      description: [
        "Developed web applications using FastAPI frameworks",
        "Collaborated with senior developers on mobile app development projects",
        "Implemented responsive UI components and optimized application performance",
        "Gained hands-on experience with version control systems and agile development methodologies"
      ],
      technologies: ["FastAPI", "Python", "HTML", "CSS", "Git", "React Native", "Node.js"],
      achievements: [
        " Successfully made 13 APIs",
        " Contributed to mobile application development",
        " Improved code quality through peer reviews and testing"
      ]
    },
    {
      id: 2,
      company: "Eklavya.me",
      position: "Games Developer Intern",
      duration: "November 2025 - February 2026",
      location: "Remote",
      type: "Internship",
      description: [
        "Developed engaging games using phaser and react on the web",
        "Collaborated with a team of developers to design and implement game features",
        "Optimized game performance and user experience through testing and feedback",
        "Learned about game development best practices and industry standards"
      ],
      technologies: ["JavaScript", "Phaser", "React", "HTML5", "CSS3", "Git"],
      achievements: [
        " Successfully developed and launched 6 web-based games",]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <Layout meta={{ title: 'Work Experience — Aaditya Kapruwan', description: 'Professional work experience and career journey.' }}>
      <motion.div 
        className="container py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Work Experience
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            My journey as a motivated programmer, building innovative web and mobile solutions across various platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Job List */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:space-y-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              {workExperience.map((job, index) => (
                <button
                  key={job.id}
                  onClick={() => setSelectedJob(index)}
                  className={`flex-shrink-0 lg:w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-200 min-w-[200px] lg:min-w-0 ${
                    selectedJob === index
                      ? 'bg-neutral-800 border-l-4 border-blue-400'
                      : 'bg-neutral-900/50 hover:bg-neutral-800/70'
                  }`}
                >
                  <div className="font-semibold text-white text-sm">
                    {job.position}
                  </div>
                  <div className="text-neutral-400 text-sm">
                    {job.company}
                  </div>
                  <div className="text-neutral-500 text-xs mt-1">
                    {job.duration}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Job Details */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div
              key={selectedJob}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="card"
            >
              {workExperience[selectedJob] && (
                <div>
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start justify-between gap-2 mb-2">
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {workExperience[selectedJob].position}
                      </h2>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          {workExperience[selectedJob].type}
                        </span>
                      </div>
                    </div>
                    <div className="text-base sm:text-lg text-neutral-300 mb-2">
                      <TechIcon name="building" className="inline mr-2" />
                      {workExperience[selectedJob].company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                      <span>
                        <TechIcon name="calendar" className="inline mr-1" />
                        {workExperience[selectedJob].duration}
                      </span>
                      <span>
                        <TechIcon name="location" className="inline mr-1" />
                        {workExperience[selectedJob].location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Responsibilities</h3>
                    <ul className="space-y-2">
                      {workExperience[selectedJob].description.map((item, i) => (
                        <li key={i} className="text-sm sm:text-base text-neutral-300 flex items-start">
                          <span className="text-blue-400 mr-2 mt-1.5 text-xs">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {workExperience[selectedJob].technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">Key Achievements</h3>
                    <div className="space-y-2">
                      {workExperience[selectedJob].achievements.map((achievement, i) => (
                        <div key={i} className="text-neutral-300 flex items-center">
                          <span className="mr-2">{achievement.split(' ')[0]}</span>
                          <span>{achievement.substring(achievement.indexOf(' ') + 1)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Career Timeline */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h2 className="section-title">Career Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-700"></div>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute left-2 w-4 h-4 bg-blue-400 rounded-full border-4 border-neutral-900 z-10"></div>
                  <div className="ml-12 card">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {job.position}
                      </h3>
                      <span className="text-sm text-neutral-400">{job.duration}</span>
                    </div>
                    <div className="text-neutral-300 mb-3">{job.company} • {job.location}</div>
                    <div className="flex flex-wrap gap-1">
                      {job.technologies.slice(0, 4).map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                      {job.technologies.length > 4 && (
                        <span className="text-xs text-neutral-500 px-2 py-1">
                          +{job.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  )
}