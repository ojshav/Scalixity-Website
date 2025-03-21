

"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/src/app/components/ui/button"
import { 
  Brain, Sparkles, LinkIcon, Smartphone, Stethoscope, 
  ShoppingBag, DollarSign, BarChart, Menu, X, 
  ChevronDown, ChevronRight
} from 'lucide-react'
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

export function ContactButton() {
  return (
    <Link href="/contact">
      <Button className="bg-primary hover:bg-accent text-primary-foreground w-full sm:w-auto">
        Contact Us
      </Button>
    </Link>
  )
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>({})

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Reset open categories when closing menu
    if (isMenuOpen) {
      setOpenCategories({})
    }
  }

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

   return (
    <motion.header 
    className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
      <div className="container-fluid w-full px-0 mx-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo at the far left corner */}
          <div className="flex items-center pl-4 sm:pl-6 lg:pl-8">
            <Link href="/" className="flex items-center">
              <motion.span 
                className="text-xl sm:text-2xl font-bold text-black"
                style={{ opacity: 1, transform: 'none' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Scalixity
              </motion.span>
            </Link>
          </div>
        
        {/* Desktop Navigation - centered */}
        <nav className="hidden md:flex items-center justify-center space-x-1 lg:space-x-6">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-2 py-1 text-foreground hover:text-primary transition-colors text-base font-medium">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-[90vw] md:w-[95vw] lg:w-[800px] max-h-[80vh] overflow-y-auto bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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

          {/* Industries Dropdown */}
          <div className="relative group">
            <button className="flex items-center px-2 py-1 text-foreground hover:text-primary transition-colors text-base font-medium">
              Industries
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-[90vw] md:w-[95vw] lg:w-[600px] max-h-[80vh] overflow-y-auto bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <Link href="/work" className="px-2 py-1 text-foreground hover:text-primary transition-colors text-base font-medium">
              Our Work
            </Link>
            <Link href="/company" className="px-2 py-1 text-foreground hover:text-primary transition-colors text-base font-medium">
              Company
            </Link>
            <Link href="/blog" className="px-2 py-1 text-foreground hover:text-primary transition-colors text-base font-medium">
              Blog
            </Link>
            <Link href="/resources" className="px-2 py-1 text-foreground hover:text-primary transition-colors text-base font-medium">
              Resources
            </Link>
          </nav>

          {/* Right side - Contact Button and Mobile Menu Toggle */}
          <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="hidden md:block"
            >
              <ContactButton />
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-background border-t border-border/40 max-h-[85vh] overflow-y-auto"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-4">
            {/* Services Section */}
            <div className="space-y-3">
              <button 
                onClick={() => toggleCategory('services')}
                className="flex items-center justify-between w-full font-medium text-foreground text-base"
              >
                <span>Services</span>
                {openCategories['services'] ? 
                  <ChevronDown className="h-5 w-5" /> : 
                  <ChevronRight className="h-5 w-5" />
                }
              </button>
              
              {openCategories['services'] && (
                <div className="pl-2 space-y-3">
                  {services.map((category) => (
                    <div key={category.category} className="space-y-2">
                      <button
                        onClick={() => toggleCategory(`service-${category.category}`)}
                        className="flex items-center justify-between w-full font-medium text-base"
                      >
                        <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
                          <category.icon className="mr-2 h-4 w-4 text-primary" />
                          {category.category}
                        </div>
                        {openCategories[`service-${category.category}`] ? 
                          <ChevronDown className="h-4 w-4" /> : 
                          <ChevronRight className="h-4 w-4" />
                        }
                      </button>
                      
                      {openCategories[`service-${category.category}`] && (
                        <ul className="pl-6 space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block py-1 text-sm text-foreground hover:text-primary"
                                onClick={toggleMenu}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Section */}
            <div className="space-y-3">
              <button 
                onClick={() => toggleCategory('industries')}
                className="flex items-center justify-between w-full font-medium text-foreground text-base"
              >
                <span>Industries</span>
                {openCategories['industries'] ? 
                  <ChevronDown className="h-5 w-5" /> : 
                  <ChevronRight className="h-5 w-5" />
                }
              </button>
              
              {openCategories['industries'] && (
                <div className="pl-2 space-y-3">
                  {industries.map((industry) => (
                    <div key={industry.category} className="space-y-2">
                      <button
                        onClick={() => toggleCategory(`industry-${industry.category}`)}
                        className="flex items-center justify-between w-full font-medium text-base"
                      >
                        <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
                          <industry.icon className="mr-2 h-4 w-4 text-primary" />
                          {industry.category}
                        </div>
                        {openCategories[`industry-${industry.category}`] ? 
                          <ChevronDown className="h-4 w-4" /> : 
                          <ChevronRight className="h-4 w-4" />
                        }
                      </button>
                      
                      {openCategories[`industry-${industry.category}`] && (
                        <ul className="pl-6 space-y-2">
                          {industry.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block py-1 text-sm text-foreground hover:text-primary"
                                onClick={toggleMenu}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <div className="space-y-3">
              <Link href="/work" className="block py-1 text-foreground hover:text-primary text-base font-medium" onClick={toggleMenu}>
                Our Work
              </Link>
              <Link href="/company" className="block py-1 text-foreground hover:text-primary text-base font-medium" onClick={toggleMenu}>
                Company
              </Link>
              <Link href="/blog" className="block py-1 text-foreground hover:text-primary text-base font-medium" onClick={toggleMenu}>
                Blog
              </Link>
              <Link href="/resources" className="block py-1 text-foreground hover:text-primary text-base font-medium" onClick={toggleMenu}>
                Resources
              </Link>
            </div>

            {/* Mobile Contact Button */}
            <div className="pt-2">
              <ContactButton />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}