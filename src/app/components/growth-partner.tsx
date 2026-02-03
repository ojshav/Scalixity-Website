'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Sparkles, BarChart2, Code2, LucideIcon } from 'lucide-react'

interface PartnerFeature {
    title: string
    description: string
    outcome: string
    icon: LucideIcon
    isHighlighted?: boolean
}

const features: PartnerFeature[] = [
    {
        title: "Growth Systems Engineering",
        description: "SaaS, custom software, API/infra, scalable architecture, automation.",
        outcome: "Faster revenue, reduced ops cost.",
        icon: TrendingUp,
    },
    {
        title: "AI Transformation Layer",
        description: "Agents, predictive systems, chatbots, dashboards, workflows.",
        outcome: "Cut manual work by 60-80%.",
        icon: Sparkles,
    },
    {
        title: "Product Acceleration Pod",
        description: "Plug-in engineering pod for fast execution.",
        outcome: "Deliver months of work in weeks.",
        icon: BarChart2,
    },
    {
        title: "Full-Stack DevOps & Infra",
        description: "CI/CD, security, cost optimisation, cloud deployment.",
        outcome: "Scale without breaking.",
        icon: Code2,
    }
]

export function GrowthPartner() {
    return (
        <section className="bg-[#FFF2D5] pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-bold text-[#1a1a1a] leading-tight">
                        What You Get As Our Growth Partner
                    </h2>
                </motion.div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-[1rem] p-5 sm:p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 bg-transparent hover:bg-[#590178] text-[#1a1a1a] hover:text-white border-[1.5px] border-[#590178]/30 shadow-sm hover:shadow-[0_20px_50px_rgba(89,1,120,0.4)]"
                        >
                            {/* Icon */}
                            <div className="mb-3 sm:mb-2">
                                <feature.icon
                                    strokeWidth={1.2}
                                    className="w-10 h-10 sm:w-12 text-[#590178] group-hover:text-white transition-colors duration-300"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg sm:text-lg lg:text-xl font-bold mb-2 font-playfair leading-tight group-hover:text-white transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-sm lg:text-sm leading-relaxed mb-4 sm:mb-3 font-manrope text-gray-700 group-hover:text-white/80 transition-colors duration-300">
                                {feature.description}
                            </p>

                            {/* Outcome */}
                            <div className="mt-auto pt-1">
                                <span className="font-bold text-sm sm:text-sm lg:text-sm text-[#590178] group-hover:text-white transition-colors duration-300">
                                    Outcome:
                                </span>
                                <span className="text-sm sm:text-sm lg:text-sm ml-1 font-manrope text-gray-800 group-hover:text-white/90 transition-colors duration-300">
                                    {feature.outcome}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
