"use client"

import { useEffect, useRef } from "react"

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Floating geometric shapes
    const shapes: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      dx: number
      dy: number
      type: "cube" | "triangle" | "hexagon"
      opacity: number
    }> = []

    // Create shapes
    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 10,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        type: ["cube", "triangle", "hexagon"][Math.floor(Math.random() * 3)] as "cube" | "triangle" | "hexagon",
        opacity: Math.random() * 0.3 + 0.1,
      })
    }

    const drawCube = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity

      // Create gradient
      const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2)
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.8)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.4)")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.strokeRect(-size / 2, -size / 2, size, size)

      // Add inner lines for 3D effect
      ctx.beginPath()
      ctx.moveTo(-size / 2, -size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.moveTo(size / 2, -size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.stroke()

      ctx.restore()
    }

    const drawTriangle = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity

      const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2)
      gradient.addColorStop(0, "rgba(139, 92, 246, 0.8)")
      gradient.addColorStop(1, "rgba(168, 85, 247, 0.4)")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.closePath()
      ctx.stroke()

      ctx.restore()
    }

    const drawHexagon = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity

      const gradient = ctx.createLinearGradient(-size / 2, -size / 2, size / 2, size / 2)
      gradient.addColorStop(0, "rgba(16, 185, 129, 0.8)")
      gradient.addColorStop(1, "rgba(5, 150, 105, 0.4)")

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3
        const px = (Math.cos(angle) * size) / 2
        const py = (Math.sin(angle) * size) / 2
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        // Update position
        shape.x += shape.dx
        shape.y += shape.dy
        shape.rotation += shape.rotationSpeed

        // Wrap around screen
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size

        // Draw shape
        switch (shape.type) {
          case "cube":
            drawCube(shape.x, shape.y, shape.size, shape.rotation, shape.opacity)
            break
          case "triangle":
            drawTriangle(shape.x, shape.y, shape.size, shape.rotation, shape.opacity)
            break
          case "hexagon":
            drawHexagon(shape.x, shape.y, shape.size, shape.rotation, shape.opacity)
            break
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
