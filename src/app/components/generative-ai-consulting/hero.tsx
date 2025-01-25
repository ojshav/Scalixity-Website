"use client"

import { useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function ConsultingHero() {
  const canvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (node !== null) {
      const ctx = node.getContext('2d')
      if (ctx) {
        const centerX = node.width / 2
        const centerY = node.height / 2
        const radius = 150

        function drawCircularText(text: string[], angle: number) {
          ctx.save()
          ctx.translate(centerX, centerY)
          ctx.rotate(angle)

          text.forEach((char, i) => {
            ctx.save()
            ctx.rotate(i * (Math.PI * 2) / text.length)
            ctx.fillStyle = '#6B7280'
            ctx.font = '12px Inter'
            ctx.fillText(char, 0, -radius)
            ctx.restore()
          })

          ctx.restore()
        }

        function drawInfographic() {
          ctx.clearRect(0, 0, node.width, node.height)

          // Draw outer circle
          ctx.beginPath()
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
          ctx.strokeStyle = '#7C3AED'
          ctx.lineWidth = 2
          ctx.stroke()

          // Draw center icon and text
          ctx.fillStyle = '#7C3AED'
          ctx.beginPath()
          ctx.arc(centerX, centerY, 60, 0, Math.PI * 2)
          ctx.fill()

          ctx.fillStyle = 'white'
          ctx.font = 'bold 16px Inter'
          ctx.textAlign = 'center'
          ctx.fillText('Generative', centerX, centerY - 10)
          ctx.fillText('AI', centerX, centerY + 10)

          // Draw circular text
          const texts = [
            'Generative Adversarial Network',
            'Large Language Model',
            'Transformer Based Model',
            'Generate Content and Ideas'
          ]

          texts.forEach((text, i) => {
            drawCircularText(text.split(''), (i * Math.PI * 2) / texts.length)
          })
        }

        node.width = 600
        node.height = 600
        drawInfographic()
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
              Generative AI Consulting Company
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Venture into the AI frontier with our specialized Generative AI consulting services. Mastering GANs, VAEs, autoencoders, RLHF, and myriad model types, we enlighten businesses on strategic AI deployment. Our crafted solutions weave seamlessly into workflows, driving enhanced productivity and efficiency.
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

