"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate"
  threshold?: number
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 }
      case "down":
        return { opacity: 0, y: -50 }
      case "left":
        return { opacity: 0, x: -50 }
      case "right":
        return { opacity: 0, x: 50 }
      case "scale":
        return { opacity: 0, scale: 0.8 }
      case "rotate":
        return { opacity: 0, rotate: -10, scale: 0.9 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getAnimateState = () => {
    switch (direction) {
      case "up":
        return { opacity: 1, y: 0 }
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
        return { opacity: 1, x: 0 }
      case "right":
        return { opacity: 1, x: 0 }
      case "scale":
        return { opacity: 1, scale: 1 }
      case "rotate":
        return { opacity: 1, rotate: 0, scale: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      whileInView={getAnimateState()}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform-gpu z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  )
}

export function FloatingElements() {
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -150])
  const y3 = useTransform(scrollY, [0, 1000], [0, -100])
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360])
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -180])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400/30 rounded-full"
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-3/4 left-1/4 w-6 h-6 bg-purple-400/20 rounded-full"
      />
      <motion.div style={{ y: y3 }} className="absolute top-1/2 right-1/3 w-3 h-3 bg-cyan-400/40 rounded-full" />
      <motion.div
        style={{ y: y1, x: useTransform(scrollY, [0, 1000], [0, 100]) }}
        className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-emerald-400/30 rounded-full"
      />
    </div>
  )
}

export function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = 100

      if (distance < maxDistance) {
        const strength = (maxDistance - distance) / maxDistance
        const moveX = (x / distance) * strength * 20
        const moveY = (y / distance) * strength * 20

        element.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`
      } else {
        element.style.transform = "translate(0px, 0px) scale(1)"
      }
    }

    const handleMouseLeave = () => {
      element.style.transform = "translate(0px, 0px) scale(1)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  )
}
