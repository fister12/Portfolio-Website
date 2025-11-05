import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const StatusIndicator = ({ status, label, icon }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'online': return 'bg-green-400'
      case 'offline': return 'bg-red-400'
      case 'away': return 'bg-yellow-400'
      case 'busy': return 'bg-orange-400'
      default: return 'bg-gray-400'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center space-x-2 text-sm text-neutral-400"
    >
      <motion.div
        className={`w-2 h-2 rounded-full ${getStatusColor()}`}
        animate={status === 'online' ? { scale: [1, 1.2, 1] } : {}}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <span className="flex items-center space-x-1">
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </span>
    </motion.div>
  )
}

export const GitHubStatus = () => {
  const [commits, setCommits] = useState(0)
  
  useEffect(() => {
    // Simulate GitHub activity
    setCommits(Math.floor(Math.random() * 10) + 5)
  }, [])

  return (
    <StatusIndicator 
      status="online" 
      label={`${commits} commits this week`}
      icon="💻"
    />
  )
}

export const SpotifyStatus = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState('Not currently listening')

  useEffect(() => {
    // Simulate Spotify status
    const playing = Math.random() > 0.7
    setIsPlaying(playing)
    if (playing) {
      setCurrentTrack('Listening to coding playlist')
    }
  }, [])

  return (
    <StatusIndicator 
      status={isPlaying ? 'online' : 'offline'}
      label={currentTrack}
      icon="🎵"
    />
  )
}

export const CursorStatus = () => {
  return (
    <StatusIndicator 
      status="offline" 
      label="Offline in Cursor"
      icon="✏️"
    />
  )
}

export const AvailabilityStatus = () => {
  const [isAvailable, setIsAvailable] = useState(true)

  useEffect(() => {
    // Check availability based on time/schedule
    const hour = new Date().getHours()
    setIsAvailable(hour >= 9 && hour <= 17) // Available 9 AM - 5 PM
  }, [])

  return (
    <StatusIndicator 
      status={isAvailable ? 'online' : 'away'}
      label={isAvailable ? 'Available for projects' : 'Currently unavailable'}
      icon="📅"
    />
  )
}