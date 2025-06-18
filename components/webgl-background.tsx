"use client"

import { useEffect, useRef } from "react"

export default function WebGLBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const glRef = useRef<WebGLRenderingContext | null>(null)
  const programRef = useRef<WebGLProgram | null>(null)
  const positionLocationRef = useRef<number>(0)
  const texCoordLocationRef = useRef<number>(0)
  const timeLocationRef = useRef<WebGLUniformLocation | null>(null)
  const resolutionLocationRef = useRef<WebGLUniformLocation | null>(null)
  const mouseLocationRef = useRef<WebGLUniformLocation | null>(null)
  const bufferRef = useRef<WebGLBuffer | null>(null)
  const mouseXRef = useRef<number>(0)
  const mouseYRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl")
    if (!gl) return

    glRef.current = gl

    // Vertex shader source
    const vertexShaderSource = `
      attribute vec2 a_position;
      attribute vec2 a_texCoord;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      
      void main() {
        vec2 position = a_position;
        position.x += sin(u_time * 0.001 + a_position.y * 10.0) * 0.1;
        position.y += cos(u_time * 0.0015 + a_position.x * 8.0) * 0.1;
        
        gl_Position = vec4(position, 0.0, 1.0);
        v_texCoord = a_texCoord;
      }
    `

    // Fragment shader source
    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      
      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 center = vec2(0.5, 0.5);
        
        // Create flowing gradient effect
        float time = u_time * 0.001;
        vec2 pos = uv - center;
        float dist = length(pos);
        
        // Mouse interaction
        vec2 mouse = u_mouse / u_resolution.xy;
        float mouseInfluence = 1.0 - smoothstep(0.0, 0.3, length(uv - mouse));
        
        // Animated waves
        float wave1 = sin(dist * 20.0 - time * 3.0) * 0.5 + 0.5;
        float wave2 = sin(dist * 15.0 + time * 2.0) * 0.5 + 0.5;
        float wave3 = sin(dist * 25.0 - time * 4.0) * 0.5 + 0.5;
        
        // Color mixing
        float hue = time * 0.1 + dist * 2.0 + mouseInfluence * 0.5;
        float saturation = 0.3 + wave1 * 0.2;
        float brightness = 0.1 + wave2 * 0.05 + wave3 * 0.03;
        
        vec3 color = hsv2rgb(vec3(hue, saturation, brightness));
        
        // Add some sparkle effects
        float sparkle = sin(uv.x * 100.0 + time) * sin(uv.y * 100.0 + time * 1.3);
        sparkle = smoothstep(0.98, 1.0, sparkle);
        color += sparkle * 0.1;
        
        gl_FragColor = vec4(color, 0.8);
      }
    `

    // Create shader function
    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type)
      if (!shader) return null

      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }

      return shader
    }

    // Create program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)

    if (!vertexShader || !fragmentShader) return

    const program = gl.createProgram()
    if (!program) return

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program))
      return
    }

    programRef.current = program

    // Set up geometry
    const positions = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1])

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    bufferRef.current = buffer

    // Get attribute and uniform locations
    const positionLocation = gl.getAttribLocation(program, "a_position")
    const texCoordLocation = gl.getAttribLocation(program, "a_texCoord")
    const timeLocation = gl.getUniformLocation(program, "u_time")
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution")
    const mouseLocation = gl.getUniformLocation(program, "u_mouse")

    positionLocationRef.current = positionLocation
    texCoordLocationRef.current = texCoordLocation
    timeLocationRef.current = timeLocation
    resolutionLocationRef.current = resolutionLocation // Updated line
    mouseLocationRef.current = mouseLocation

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = rect.height - (e.clientY - rect.top)
      mouseXRef.current = mouseX
      mouseYRef.current = mouseY
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Resize function
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize)

    // Animation loop
    const animate = (time: number) => {
      const gl = glRef.current
      const program = programRef.current
      const positionLocation = positionLocationRef.current
      const texCoordLocation = texCoordLocationRef.current
      const timeLocation = timeLocationRef.current
      const resolutionLocation = resolutionLocationRef.current
      const mouseLocation = mouseLocationRef.current
      const buffer = bufferRef.current
      const mouseX = mouseXRef.current
      const mouseY = mouseYRef.current

      if (!gl || !program || !timeLocation || !resolutionLocation || !mouseLocation || !buffer) return

      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)

      gl.useProgram(program)

      // Set up attributes
      gl.enableVertexAttribArray(positionLocation)
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 16, 0)

      gl.enableVertexAttribArray(texCoordLocation)
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 16, 8)

      // Set uniforms
      gl.uniform1f(timeLocation, time)
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform2f(mouseLocation, mouseX, mouseY)

      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      canvas.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ mixBlendMode: "multiply" }} />
  )
}
