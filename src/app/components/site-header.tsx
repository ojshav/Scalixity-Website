"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "../../../lib/utils"
import { Button } from "@/src/app/components/ui/button"
import { Brain, Sparkles, LinkIcon, Smartphone, Globe, Code, Cloud, Paintbrush, Stethoscope, ShoppingBag, DollarSign, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    category: "Artificial Intelligence",
    icon: Brain,
    items: [
      { name: "AI Development Services", href: "/services/ai-development" },
      { name: "Enterprise AI Development", href: "/services/enterprise-ai" },
      { name: "AI Consulting Services", href: "/services/ai-consulting" },
      { name: "AI Chatbot Development", href: "/services/chatbot" },
      { name: "AI POC Development", href: "/services/poc" },
      { name: "Enterprise AI Chatbot Development", href: "/services/enterprise-chatbot" },
      { name: "AI Engineers", href: "/services/engineers" },
      { name: "AI Copilot Development", href: "/services/copilot" },
      { name: "Computer Vision Development Services", href: "/services/computer-vision" },
      { name: "ML Development", href: "/services/ml" },
      { name: "MLOps Consulting Services", href: "/services/mlops" },
      { name: "Conversational AI Development", href: "/services/conversational-ai" },
      { name: "LLM API Pricing Calculator", href: "/services/llm-pricing" }
    ]
  },
  {
    category: "Generative AI",
    icon: Sparkles,
    items: [
      { name: "Generative AI Development", href: "/services/generative-ai/generative-ai-development" },
      { name: "Generative AI Consulting", href: "/services/generative-ai-consulting" },
      { name: "Enterprise Generative AI Development", href: "/services/enterprise-gen-ai" },
      { name: "AI Agent Development", href: "/services/ai-agent-development" },
      { name: "LLM Development", href: "/services/llm-development" },
      { name: "Generative AI Integration", href: "/services/gen-ai-integration" },
      { name: "Adaptive AI Development", href: "/services/adaptive-ai" },
      { name: "ChatGPT Developers", href: "/services/chatgpt" },
      { name: "Hire Prompt Engineers", href: "/services/prompt-engineers" },
      { name: "ChatGPT Integration Service", href: "/services/chatgpt-integration" },
      { name: "Midjourney Developers", href: "/services/midjourney" },
      { name: "Stable Diffusion Developers", href: "/services/stable-diffusion" }
    ]
  },
  {
    category: "Blockchain Development",
    icon: LinkIcon,
    items: [
      { name: "Cardano App Development", href: "/services/cardano" },
      { name: "Stellar App Development", href: "/services/stellar" },
      { name: "Smart Contracts Development", href: "/services/smart-contracts" },
      { name: "dApps Development", href: "/services/dapps" },
      { name: "NFT Marketplace Development", href: "/services/nft" },
      { name: "Hedera App Development", href: "/services/hedera" },
      { name: "Metaverse Development", href: "/services/metaverse" }
    ]
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "Hybrid App Development", href: "/services/hybrid" },
      { name: "Native App Development", href: "/services/native" },
      { name: "iOS App Development", href: "/services/ios" },
      { name: "Android App Development", href: "/services/android" },
      { name: "Flutter App Development", href: "/services/flutter" },
      { name: "React Native App Development", href: "/services/react-native" },
      { name: "Ionic App Development", href: "/services/ionic" },
      { name: "Xamarin App Development", href: "/services/xamarin" }
    ]
  }
]

const industries = [
  {
    category: "Healthcare",
    icon: Stethoscope,
    items: [
      { name: "Healthcare AI Solutions", href: "/industries/healthcare/ai-solutions" },
      { name: "Healthcare AI Agents", href: "/industries/healthcare/ai-agents" },
      { name: "Documentation Intelligence", href: "/industries/healthcare/documentation-intelligence" },
      { name: "Personalized Medicine Platforms", href: "/industries/healthcare/personalized-medicine" },
      { name: "Medical Imaging Intelligence", href: "/industries/healthcare/medical-imaging" },
      { name: "Patient Data Analytics", href: "/industries/healthcare/patient-data-analytics" },
      { name: "Fraud Detection & Security", href: "/industries/healthcare/fraud-detection" },
      { name: "Clinical Decision Support", href: "/industries/healthcare/clinical-decision-support" }
    ]
  },
  {
    category: "Retail",
    icon: ShoppingBag,
    items: [
      { name: "Retail AI Solutions", href: "/industries/retail/ai-solutions" },
      { name: "Voice Ordering Systems", href: "/industries/retail/voice-ordering" },
      { name: "Retail AI Agents", href: "/industries/retail/ai-agents" },
      { name: "Dynamic Pricing Solutions", href: "/industries/retail/dynamic-pricing" },
      { name: "Personalized Engagement", href: "/industries/retail/personalized-engagement" },
      { name: "Customer Segmentation", href: "/industries/retail/customer-segmentation" },
      { name: "Customer Sentiment Analysis", href: "/industries/retail/sentiment-analysis" },
      { name: "Enhanced Product Discovery", href: "/industries/retail/product-discovery" }
    ]
  },
  {
    category: "Fintech",
    icon: DollarSign,
    items: [
      { name: "Fintech AI Solutions", href: "/industries/fintech/ai-solutions" },
      { name: "Financial AI Agents", href: "/industries/fintech/ai-agents" },
      { name: "Underwriting & Pricing", href: "/industries/fintech/underwriting-pricing" },
      { name: "Financial Document Automation", href: "/industries/fintech/document-automation" },
      { name: "Personalized Financial Engines", href: "/industries/fintech/personalized-engines" },
      { name: "Risk Assessment & Management", href: "/industries/fintech/risk-management" },
      { name: "Credit Risk Management", href: "/industries/fintech/credit-risk" },
      { name: "Regulatory Code Change", href: "/industries/fintech/regulatory-compliance" }
    ]
  },
  {
    category: "SaaS",
    icon: BarChart,
    items: [
      { name: "SaaS AI Solutions", href: "/industries/saas/ai-solutions" },
      { name: "SaaS AI Agents", href: "/industries/saas/ai-agents" },
      { name: "SaaS AI Chatbots", href: "/industries/saas/ai-chatbots" },
      { name: "SaaS AI Copilots", href: "/industries/saas/ai-copilots" },
      { name: "SaaS AI Integration", href: "/industries/saas/ai-integration" },
      { name: "SaaS AI Automation", href: "/industries/saas/ai-automation" },
      { name: "SaaS AI Analytics", href: "/industries/saas/ai-analytics" },
      { name: "SaaS AI Personalization", href: "/industries/saas/ai-personalization" }
    ]
  }
]

export function SiteHeader() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <motion.span 
            className="text-2xl font-bold" style={{ color: 'hsl(var(--primary))' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Scalixity
          </motion.span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button className="text-foreground hover:text-primary transition-colors text-color-white">
              Services
            </button>
            <div className="absolute left-0 mt-2 w-[800px] bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-4 grid grid-cols-2 gap-4">
                {services.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <h3 className="font-medium text-foreground flex items-center">
                      <category.icon className="mr-2 h-4 w-4 text-primary" />
                      {category.category}
                    </h3>
                    <ul className="space-y-1">
                      {category.items.map((item) => (
                        <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-foreground hover:text-primary transition-colors">
              Industries
            </button>
            <div className="absolute left-0 mt-2 w-[600px] bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-4 grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry.category} className="space-y-2">
                    <h3 className="font-medium text-foreground flex items-center">
                      <industry.icon className="mr-2 h-4 w-4 text-primary" />
                      {industry.category}
                    </h3>
                    <ul className="space-y-1">
                      {industry.items.map((item) => (
                        <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Link
                            href={item.href}
                            className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link href="/work" className="text-foreground hover:text-primary transition-colors">
            Our Work
          </Link>
          <Link href="/company" className="text-foreground hover:text-primary transition-colors">
            Company
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
            Insights
          </Link>
          <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
            Resources
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-primary hover:bg-accent text-primary-foreground">Contact Us</Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
