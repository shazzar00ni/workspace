import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 origin-left z-50"
      style={{ 
        scaleX: scrollYProgress,
        transformOrigin: '0%'
      }}
      initial={{ scaleX: 0 }}
    />
  )
}