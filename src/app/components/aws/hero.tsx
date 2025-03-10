"use client"

import { useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function CloudDevHero() {
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
        ctx.strokeStyle = '#3B82F6'
        ctx.lineWidth = 2
        ctx.stroke()
  
        ctx.fillStyle = '#3B82F6'
        ctx.beginPath()
        ctx.arc(centerX, centerY, 60, 0, Math.PI * 2)
        ctx.fill()
  
        ctx.fillStyle = 'white'
        ctx.font = 'bold 16px Inter'
        ctx.textAlign = 'center'
        ctx.fillText('Cloud', centerX, centerY - 10)
        ctx.fillText('Dev', centerX, centerY + 10)
  
        const texts = [
          'AWS Lambda & Serverless',
          'Cloud Architecture',
          'DevOps & CI/CD',
          'Scalability & Security'
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AWS Cloud Development & Consulting
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              Empower your business with expert AWS cloud solutions. From serverless architectures to scalable cloud infrastructure, we optimize your cloud development with best-in-class AWS practices.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-900 transition-colors"
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
