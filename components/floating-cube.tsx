"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface FloatingCubeProps {
  size?: number
  color?: string
  className?: string
}

export default function FloatingCube({ size = 100, color = "cyan", className = "" }: FloatingCubeProps) {
  const cubeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cube.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / 50
      const deltaY = (e.clientY - centerY) / 50

      cube.style.transform = `rotateX(${deltaY}deg) rotateY(${deltaX}deg) rotateZ(45deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const colorClasses = {
    cyan: "border-cyan-400/30 shadow-cyan-400/20",
    blue: "border-blue-400/30 shadow-blue-400/20",
    violet: "border-violet-400/30 shadow-violet-400/20",
    emerald: "border-emerald-400/30 shadow-emerald-400/20",
  }

  return (
    <motion.div
      ref={cubeRef}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div
        className={`relative border-2 ${colorClasses[color as keyof typeof colorClasses]} bg-gradient-to-br from-slate-800/20 to-slate-900/40 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:shadow-xl`}
        style={{
          width: size,
          height: size,
          transform: "rotateX(15deg) rotateY(15deg) rotateZ(45deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing edges */}
        <div className="absolute inset-0 border border-cyan-400/50 animate-pulse"></div>

        {/* Inner glow */}
        <div className="absolute inset-2 border border-cyan-300/30"></div>

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
    </motion.div>
  )
}
