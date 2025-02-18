"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"

const clientLogos = [
  { name: "CodmanAI", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Sixfold", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Trapeze", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Synervoz", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Mavex", logo: "/placeholder.svg?height=40&width=120" },
  { name: "NVMS", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Nown", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Landmark", logo: "/placeholder.svg?height=40&width=120" },
  { name: "LegalAlly", logo: "/placeholder.svg?height=40&width=120" }
]

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: { x: number; y: number; radius: number; color: string; velocity: { x: number; y: number } }[] = []

    const createParticles = () => {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(255, 215, 0, ${Math.random() * 0.5 + 0.5})`,
          velocity: { x: (Math.random() - 0.5) * 0.5, y: (Math.random() - 0.5) * 0.5 }
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle, index) => {
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        if (particle.x < 0 || particle.x > canvas.width) particle.velocity.x *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.velocity.y *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.2 - distance / 500})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })
      requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    }))
  }, [controls])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-foreground leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={0}
          >
            Elevate Your Business with   
            <span className="gradient-text">
                 Scalixity
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={1}
          >
            We craft bespoke, cutting-edge AI solutions that empower data-driven companies to achieve unparalleled innovation and efficiency.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={2}
          >
            <Link
              href="/contact"
              className="button-primary"
            >
              Embark on Your AI Journey
            </Link>
            <Link
              href="/services"
              className="button-secondary"
            >
              Discover Our Royal Services
            </Link>
          </motion.div>

          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={3}
          >
            <p className="text-sm text-muted-foreground mb-8">Trusted by distinguished data-driven enterprises</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  className="w-[120px] h-10 relative grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  custom={index + 4}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

