'use client'

import { useEffect, useRef } from 'react'
import { Rocket, Puzzle, CheckCircle, Bot, Wrench } from 'lucide-react'
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
      title: "Discovery",
      description: "We understand your goals, requirements, KPIs, and success metrics to align on the problem and vision.",
      duration: "1–3 days",
      icon: Rocket,
    },
    {
      title: "Solution & Architecture",
      description: "We design the best solution and architecture for your project, considering the best practices and technologies.",
      duration: "2-5 Days",
      icon: Puzzle,
    },
    {
      title: "Design",
      description: "We create wireframes, user flows, and a clean design system to ensure a smooth and intuitive user experienc",
      duration: "3–7 days",
      icon: CheckCircle,
    },
    {
      title: "Development",
      description: "We build the product in iterative sprints with weekly demos and continuous integration for faster delivery.",
      duration: "2-8 Weeks",
      icon: Bot,
    },
    {
      title: "Testing & QA",
      description: "We run functional tests, bug fixes, load testing, and security checks to ensure the product is stable and production-ready.",
      duration: "3–7 days",
      icon: CheckCircle,
    },
    {
      title: "Launch & Handover",
      description: "We deploy the solution to production, provide documentation, and offer training for your team.",
      duration: "1–3 days",
      icon: Rocket,
    },
    {
      title: "Ongoing Support & Optimization",
      description: "We monitor performance, fix issues, and roll out improvements or new features based on your evolving needs.",
      duration: "Continuous / Monthly",
      icon: Wrench,
    }
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 flex-grow">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-24">
          {/* Left Column - Sticky Title */}
          <div className="md:w-1/3">
            <div className="sticky top-20 sm:top-24 md:top-32">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A1A1A] mb-3 sm:mb-4">
                Our Process
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-[#1A1A1A] rounded-full mb-4 sm:mb-6 hidden md:block"></div>
              <p className="text-base sm:text-lg md:text-lg text-[#590178] font-medium max-w-md">
              Our process is structured to deliver high-quality digital solutions efficiently from understanding your goals to launching and continuously improving your product.
              </p>
            </div>
          </div>

          {/* Right Column - Scrollable Steps */}
          <div className="md:w-2/3 flex flex-col gap-16 sm:gap-20 md:gap-32 pb-0 sm:pb-16 md:pb-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { stepsRef.current[index] = el }}
                className="flex items-start gap-4 sm:gap-6 md:gap-8 group"
              >
                <div className="flex-shrink-0 mt-1 sm:mt-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#1A1A1A] flex items-center justify-center bg-transparent transition-colors duration-300 group-hover:bg-[#1A1A1A] group-hover:text-[#FEFBF0]">
                    <step.icon strokeWidth={1.5} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#1A1A1A] group-hover:text-[#FEFBF0] transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex flex-col pt-2 sm:pt-4">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold text-[#4A4A4A] mb-1 sm:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#666666] font-medium">
                    {step.description}
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-[#666666] font-medium mt-1">{step.duration}</p>
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
