"use client"

import { useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function AgentHero() {
  const canvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (node !== null) {
      const ctx = node.getContext('2d')
      if (ctx) {
        node.width = 600
        node.height = 600

        const centerX = node.width / 2
        const centerY = node.height / 2

        function drawInfographic() {
          ctx.clearRect(0, 0, node.width, node.height)

          // Draw central circle
          ctx.beginPath()
          ctx.arc(centerX, centerY, 80, 0, Math.PI * 2)
          ctx.fillStyle = '#7C3AED'
          ctx.fill()

          // Draw "Foundation Model" text
          ctx.fillStyle = 'white'
          ctx.font = 'bold 16px Inter'
          ctx.textAlign = 'center'
          ctx.fillText('Foundation', centerX, centerY - 10)
          ctx.fillText('Model', centerX, centerY + 10)

          // Draw connecting lines and data type boxes
          const dataTypes = [
            { label: 'Text', x: centerX - 150, y: centerY - 150 },
            { label: 'Image', x: centerX + 150, y: centerY - 150 },
            { label: 'Speech', x: centerX - 150, y: centerY + 150 },
            { label: 'Structural', x: centerX + 150, y: centerY + 150 },
            { label: '3D Signal', x: centerX, y: centerY - 200 }
          ]

          dataTypes.forEach(type => {
            // Draw connection line
            ctx.beginPath()
            ctx.moveTo(centerX, centerY)
            ctx.lineTo(type.x, type.y)
            ctx.strokeStyle = '#4B5563'
            ctx.stroke()

            // Draw box
            ctx.fillStyle = '#1F2937'
            ctx.fillRect(type.x - 50, type.y - 20, 100, 40)
            ctx.strokeStyle = '#6B7280'
            ctx.strokeRect(type.x - 50, type.y - 20, 100, 40)

            // Draw text
            ctx.fillStyle = 'white'
            ctx.font = '14px Inter'
            ctx.textAlign = 'center'
            ctx.fillText(type.label, type.x, type.y + 5)
          })
        }

        drawInfographic()

        // Animation loop
        let rotation = 0
        function animate() {
          rotation += 0.005
          ctx.save()
          ctx.translate(centerX, centerY)
          ctx.rotate(rotation)
          ctx.translate(-centerX, -centerY)
          drawInfographic()
          ctx.restore()
          requestAnimationFrame(animate)
        }

        animate()
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              LLM Development Company
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We develop advanced Large Language Models (LLMs) tailored to meet specific business needs. These models improve customer interactions, automate complex tasks, and drive business innovation, enhancing decision-making and operational efficiency. Contact us to leverage LLM development services to build a powerful language model that transforms your business operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-purple-600 text-white font-medium text-lg hover:bg-purple-700 transition-colors"
            >
              Contact us
            </Link>
          </motion.div>
          <div className="relative">
            <canvas 
              ref={canvasRef}
              className="w-full max-w-[600px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

