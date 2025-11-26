'use client'

import { useEffect, useRef } from 'react'
import { Rocket, Puzzle, CheckCircle, Bot } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CTA } from './cta'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      title: "Execution Briefing",
      duration: "2 Hours",
      icon: Rocket,
    },
    {
      title: "Technology Assessment",
      duration: "2-3 Days",
      icon: Puzzle,
    },
    {
      title: "Proof of Concept (POC)",
      duration: "8-12 weeks",
      icon: CheckCircle,
    },
    {
      title: "AI Application Deployment in Production",
      duration: "3-4 Months",
      icon: Bot,
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step) => {
        if (!step) return

        // Entrance animation
        gsap.fromTo(
          step,
          {
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        )

        // Active state animation (Highlight when aligned with title)
        const title = step.querySelector('h3')
        const desc = step.querySelector('p')

        gsap.to(step, {
          scale: 1.05, // Increase size
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 45%", // Adjust to match the sticky title position
            end: "bottom 45%",
            toggleActions: "play reverse play reverse",
            scrub: false
          }
        })

        // Animate text colors for active state
        if (title) {
          gsap.to(title, {
            color: "#000000", // Darker black
            duration: 0.4,
            scrollTrigger: {
              trigger: step,
              start: "top 45%",
              end: "bottom 45%",
              toggleActions: "play reverse play reverse",
            }
          })
        }

        if (desc) {
          gsap.to(desc, {
            color: "#1A1A1A", // Darker grey
            duration: 0.4,
            scrollTrigger: {
              trigger: step,
              start: "top 45%",
              end: "bottom 45%",
              toggleActions: "play reverse play reverse",
            }
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-[#FFF2D5] min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-8 py-24 flex-grow">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Left Column - Sticky Title */}
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] mb-4">
                Our Process
              </h2>
              <div className="w-20 h-1 bg-[#1A1A1A] rounded-full hidden md:block mb-6"></div>
              <p className="text-lg text-[#590178] font-medium max-w-md">
                Start improving your efficiency and reducing your operational costs with Generative AI in just a few weeks, not years.
              </p>
            </div>
          </div>

          {/* Right Column - Scrollable Steps */}
          <div className="md:w-2/3 flex flex-col gap-24 md:gap-32 pb-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { stepsRef.current[index] = el }}
                className="flex items-start gap-6 md:gap-8 group"
              >
                <div className="flex-shrink-0 mt-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-[#1A1A1A] group-hover:text-[#FEFBF0]">
                    <step.icon strokeWidth={1.5} className="w-10 h-10 md:w-12 md:h-12 text-[#1A1A1A] group-hover:text-[#FEFBF0] transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex flex-col pt-4">
                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#4A4A4A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[#666666] font-medium">
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </section>
  )
}
