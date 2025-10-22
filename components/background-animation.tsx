"use client"

import { useEffect, useRef } from "react"

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      pulsePhase: number
    }> = []

    // Create particles with multiple colors
    const colors = ["#F9C500", "#FF6B35", "#00D9FF", "#00FF88", "#FF00FF", "#FFD700"]

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    let time = 0

    const animate = () => {
      time += 0.01

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(10, 15, 35, 0.95)")
      gradient.addColorStop(0.5, "rgba(15, 25, 50, 0.95)")
      gradient.addColorStop(1, "rgba(10, 15, 35, 0.95)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulsePhase += 0.02

        // Bounce off walls with damping
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.95
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.95

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Pulsing effect
        const pulse = Math.sin(particle.pulsePhase) * 0.5 + 0.5
        const currentSize = particle.size * (0.7 + pulse * 0.3)
        const currentOpacity = particle.opacity * (0.6 + pulse * 0.4)

        // Draw glowing particle
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          currentSize * 3,
        )
        glowGradient.addColorStop(0, `${particle.color}40`)
        glowGradient.addColorStop(0.5, `${particle.color}20`)
        glowGradient.addColorStop(1, `${particle.color}00`)

        ctx.fillStyle = glowGradient
        ctx.fillRect(particle.x - currentSize * 3, particle.y - currentSize * 3, currentSize * 6, currentSize * 6)

        // Draw core particle
        ctx.fillStyle = `${particle.color}${Math.floor(currentOpacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections with gradient
        particles.forEach((other, otherIndex) => {
          if (index >= otherIndex) return

          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const lineGradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y)
            lineGradient.addColorStop(
              0,
              `${particle.color}${Math.floor(currentOpacity * 100)
                .toString(16)
                .padStart(2, "0")}`,
            )
            lineGradient.addColorStop(
              1,
              `${other.color}${Math.floor(currentOpacity * 100)
                .toString(16)
                .padStart(2, "0")}`,
            )

            ctx.strokeStyle = lineGradient
            ctx.lineWidth = 1.5 * (1 - distance / 200)
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
