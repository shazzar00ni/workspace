import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    setIsMounted(true)
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const setupInteractiveElements = () => {
      try {
        const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select')
        
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', handleMouseEnter)
          el.addEventListener('mouseleave', handleMouseLeave)
        })

        return interactiveElements
      } catch (error) {
        console.warn('Error setting up interactive elements:', error)
        return []
      }
    }

    // Setup with a delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const elements = setupInteractiveElements()
      
      window.addEventListener('mousemove', updateMousePosition)

      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', updateMousePosition)
        elements.forEach(el => {
          try {
            el.removeEventListener('mouseenter', handleMouseEnter)
            el.removeEventListener('mouseleave', handleMouseLeave)
          } catch (error) {
            // Ignore cleanup errors
          }
        })
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  // Don't render on server side or before mounting
  if (typeof window === 'undefined' || !isMounted) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-pink-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-pink-500/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  )
}