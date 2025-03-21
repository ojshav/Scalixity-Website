"use client"

import { useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  const canvasRef = useCallback((node: HTMLCanvasElement | null) => {
    if (node !== null) {
      const ctx = node.getContext('2d')
      if (!ctx) return
  
      const centerX = node.width / 2
      const centerY = node.height / 2
      const radius = 150
  
      function drawCircularText(text: string[], angle: number) {
        if (!ctx) return
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
        if (!ctx) return
        if (node) {
          ctx.clearRect(0, 0, node.width, node.height)
        }
  
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = '#7C3AED'
        ctx.lineWidth = 2
        ctx.stroke()
  
        ctx.fillStyle = '#7C3AED'
        ctx.beginPath()
        ctx.arc(centerX, centerY, 60, 0, Math.PI * 2)
        ctx.fill()
  
        ctx.fillStyle = 'white'
        ctx.font = 'bold 16px Inter'
        ctx.textAlign = 'center'
        ctx.fillText('Hedra', centerX, centerY - 10)
        ctx.fillText('Technology', centerX, centerY + 10)
  
        const texts = [
          'Decentralized Ledger',
          'Enhanced Security',
          'Scalable Solutions',
          'Transparent and Fair Consensus'
        ]
  
        texts.forEach((text, i) => {
          drawCircularText(text.split(''), (i * Math.PI * 2) / texts.length)
        })
      }
  
      node.width = 600
      node.height = 600
      drawInfographic()
    }
  }, [])
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Innovate with Hedra Technology
            </h1>
            <p className="text-xl text-gray-900 mb-8">
              Unlock the full potential of Hedra&apos;s cutting-edge decentralized ledger technology. Our solutions empower businesses by providing secure, transparent, and highly scalable digital ecosystems. We streamline your digital transformation journey by fostering trust-driven networks, enhancing operational efficiency, and delivering next-generation technology integration. From robust security protocols to seamless consensus mechanisms, Hedra ensures that your business stays at the forefront of innovation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-800 transition-colors w-full sm:w-auto"
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

export default Hero;
