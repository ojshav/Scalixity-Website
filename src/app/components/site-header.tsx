

"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/src/app/components/ui/button"
import {
  Stethoscope,
  ShoppingBag, DollarSign, BarChart, Menu, X,
  ChevronDown, ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'

// Commented out old services structure
// const services = [
//   {
//     category: "Artificial Intelligence",
//     icon: Brain,
//     items: [
//       { name: "AI Development Services", href: "/services/ai-development" },
//       { name: "Enterprise AI Development", href: "/services/enterprise-ai" },
//       { name: "AI Consulting Services", href: "/services/ai-consulting" },
//       { name: "AI Chatbot Development", href: "/services/chatbot" },
//       { name: "AI POC Development", href: "/services/poc" },
//       { name: "Enterprise AI Chatbot Development", href: "/services/enterprise-chatbot" },
//       { name: "AI Engineers", href: "/services/engineers" },
//       { name: "AI Copilot Development", href: "/services/copilot" },
//       { name: "Computer Vision Development Services", href: "/services/computer-vision" },
//       { name: "ML Development", href: "/services/ml" },
//       { name: "MLOps Consulting Services", href: "/services/mlops" },
//       { name: "Conversational AI Development", href: "/services/conversational-ai" },
//       { name: "LLM API Pricing Calculator", href: "/services/llm-pricing" }
//     ]
//   },
//   {
//     category: "Generative AI",
//     icon: Sparkles,
//     items: [
//       { name: "Generative AI Development", href: "/services/generative-ai-development" },
//       { name: "Generative AI Consulting", href: "/services/generative-ai-consulting" },
//       { name: "Enterprise Generative AI Development", href: "/services/enterprise-gen-ai" },
//       { name: "AI Agent Development", href: "/services/ai-agent" },
//       { name: "LLM Development", href: "/services/llm" },
//       { name: "Generative AI Integration", href: "/services/gen-ai-integration" },
//       { name: "Adaptive AI Development", href: "/services/adaptive-ai" },
//       { name: "ChatGPT Developers", href: "/services/chatgpt" },
//       { name: "Hire Prompt Engineers", href: "/services/prompt-engineers" },
//       { name: "ChatGPT Integration Service", href: "/services/chatgpt-integration" },
//       { name: "Midjourney Developers", href: "/services/midjourney" },
//       { name: "Stable Diffusion Developers", href: "/services/stable-diffusion" }
//     ]
//   },
//   {
//     category: "Blockchain Development",
//     icon: LinkIcon,
//     items: [
//       { name: "Cardano App Development", href: "/services/cardano" },
//       { name: "Stellar App Development", href: "/services/stellar" },
//       { name: "Smart Contracts Development", href: "/services/smart-contracts" },
//       { name: "dApps Development", href: "/services/dapps" },
//       { name: "NFT Marketplace Development", href: "/services/nft" },
//       { name: "Hedera App Development", href: "/services/hedera" },
//       { name: "Metaverse Development", href: "/services/metaverse" }
//     ]
//   },
//   {
//     category: "Mobile Development",
//     icon: Smartphone,
//     items: [
//       { name: "Hybrid App Development", href: "/services/hybrid" },
//       { name: "Native App Development", href: "/services/native" },
//       { name: "iOS App Development", href: "/services/ios" },
//       { name: "Android App Development", href: "/services/android" },
//       { name: "Flutter App Development", href: "/services/flutter" },
//       { name: "React Native App Development", href: "/services/react-native" },
//       { name: "Ionic App Development", href: "/services/ionic" },
//       { name: "Xamarin App Development", href: "/services/xamarin" }
//     ]
//   }
// ]

// New simplified services dropdown
const services = [
  { name: "Custom Web Apps", href: "/services/custom-web-apps" },
  { name: "Custom Dashboards", href: "/services/custom-dashboard" },
  { name: "AI Chatbot", href: "/services/AI-Chatbot" },
  { name: "Mobile Application", href: "/services/Mobile-Application" },
  { name: "Ecommerce solution", href: "/services/ecommerce-solution" },
  { name: "Machine Learning & NLP Solutions", href: "/services/ml-nlp-solutions" },
  { name: "All Services", href: "/services" }
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
      <Button className="bg-[#590178] hover:bg-[#6D0489] text-white w-full sm:w-auto">
        Get Started
      </Button>
    </Link>
  )
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [openCategories, setOpenCategories] = React.useState<Record<string, boolean>>({})
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Reset open categories when closing menu
    if (isMenuOpen) {
      setOpenCategories({})
    }
  }

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen)
  }

  const toggleCategory = (category: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    // Check initial scroll position
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-[#FFF2D5] transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container-fluid w-full px-0 mx-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo at the far left corner */}
          <div className="flex items-center pl-4 sm:pl-6 lg:pl-8">
            <Link href="/" className="group flex items-center hover:no-underline">
              <motion.span
                className="text-xl sm:text-2xl font-bold text-black hover:text-[#590178] transition-colors font-playfair"
                style={{ opacity: 1, transform: 'none' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">
                  Scalixity
                </span>
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation - centered (only show when not scrolled) */}
          {!isScrolled && (
            <motion.nav
              className="hidden md:flex items-center justify-center space-x-1 lg:space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Services Dropdown */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <button className="group flex items-center px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">Services</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-[230px] rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="px-3 py-3 space-y-2">
                    <ul className="space-y-1">
                      {services.map((item) => (
                        <motion.li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm font-medium text-[#0D0C0C] transition-all duration-200 hover:text-[#590178] hover:bg-transparent"
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Industries Dropdown */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <button className="group flex items-center px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">Industries</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div data-lenis-prevent className="absolute left-0 mt-2 w-[90vw] md:w-[95vw] lg:w-[600px] max-h-[80vh] overflow-y-auto rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="px-3 py-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {industries.map((industry) => (
                      <div key={industry.category} className="space-y-2">
                        <h3 className="font-medium text-[#590178] flex items-center text-base ">
                          <industry.icon className="mr-2 h-4 w-4 text-[#590178]" />
                          {industry.category}
                        </h3>
                        <ul className="space-y-1">
                          {industry.items.map((item) => (
                            <motion.li key={item.name}>
                              <Link
                                href={item.href}
                                className="block px-3 py-2 text-sm font-medium text-[#0D0C0C] transition-all duration-200 hover:text-[#590178] hover:bg-transparent"
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Link href="/work" className="group px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">Our Work</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <Link href="/company" className="group px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">About us</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link href="/contact" className="group px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">Contact</span>
                </Link>
              </motion.div>
             <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link href="/blog" className="group px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">Blog</span>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <Link href="/resources" className="group px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">Resources</span>
                </Link>
              </motion.div>
                {/*
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Link href="/campaign" className="group px-2 py-1 text-[#0D0C0C] hover:text-[#590178] transition-colors text-base font-medium hover:no-underline">
                  <span className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#590178] after:transition-all after:duration-300 group-hover:after:w-full">Campaign</span>
                </Link>
              </motion.div> */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
              >

              </motion.div>
            </motion.nav>
          )}

          {/* Right side - Contact Button / Toggle and Mobile Menu Toggle */}
          <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
            {/* Desktop Menu Toggle (only show when scrolled) */}
            {isScrolled && (
              <motion.div
                className="hidden md:flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={toggleDesktopMenu}
                  aria-label="Toggle menu"
                  className="p-2 hover:bg-accent rounded-md transition-colors"
                >
                  {isDesktopMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </motion.div>
            )}

            {/* Contact Button (only show when not scrolled) */}
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <ContactButton />
              </motion.div>
            )}

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

      {/* Desktop Menu Dropdown (when scrolled) */}
      {isScrolled && isDesktopMenuOpen && (
        <motion.div
          className="hidden md:block fixed top-16 left-0 right-0 bg-[#FFF2D5] shadow-xl overflow-hidden z-40"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="container mx-auto px-8 py-8 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-4 gap-8">
              {/* Services */}
              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-[#8B05AE] mb-4 pb-2 border-b-2 border-[#8B05AE]/20">Services</h3>
                <div className="space-y-2">
                  {services.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 + idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="text-sm text-gray-800 rounded-xl block font-medium px-2 py-1 transition-all duration-200 hover:text-[#590178] hover:pl-3"
                        onClick={toggleDesktopMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Industries */}
              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-[#8B05AE] mb-4 pb-2 border-b-2 border-[#8B05AE]/20">Industries</h3>
                <div className="space-y-4">
                  {industries.map((industry, idx) => (
                    <motion.div
                      key={industry.category}
                      className="space-y-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.25 + idx * 0.05 }}
                    >
                      <h4 className="font-semibold text-sm text-black flex items-center">
                        <industry.icon className="mr-2 h-4 w-4 text-[#8B05AE]" />
                        {industry.category}
                      </h4>
                      <ul className="space-y-1.5 pl-6">
                        {industry.items.slice(0, 3).map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-sm  text-gray-700 hover:text-[#8B05AE] hover:pl-1 transition-all duration-200 block"
                              onClick={toggleDesktopMenu}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-[#8B05AE] mb-4 pb-2 border-b-2 border-[#8B05AE]/20">Quick Links</h3>
                <div className="space-y-3">
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                  >
                    <Link
                      href="/work"
                      className="block text-gray-700 hover:text-[#8B05AE] hover:pl-1 transition-all duration-200 font-medium"
                      onClick={toggleDesktopMenu}
                    >
                      Our Work
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Link
                      href="/company"
                      className="block text-gray-700 hover:text-[#8B05AE] hover:pl-1 transition-all duration-200 font-medium"
                      onClick={toggleDesktopMenu}
                    >
                      About us
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                  >
                    <Link
                      href="/contact"
                      className="block text-gray-700 hover:text-[#8B05AE] hover:pl-1 transition-all duration-200 font-medium"
                      onClick={toggleDesktopMenu}
                    >
                      Contact
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                  >
                    <Link
                      href="/blog"
                      className="block text-gray-700 hover:text-[#8B05AE] hover:pl-1 transition-all duration-200 font-medium"
                      onClick={toggleDesktopMenu}
                    >
                      Blog
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Link
                      href="/resources"
                      className="block text-gray-700 hover:text-[#8B05AE] hover:pl-1 transition-all duration-200 font-medium"
                      onClick={toggleDesktopMenu}
                    >
                      Resources
                    </Link>
                  </motion.div>
                  {/* 
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.55 }}
                  >
                    <Link
                      href="/campaign"
                      className="block text-gray-700 hover:text-[#8B05AE] hover:pl-1 transition-all duration-200 font-medium"
                      onClick={toggleDesktopMenu}
                    >
                      Campaign
                    </Link>
                  </motion.div> */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >

                  </motion.div>
                </div>
              </motion.div>

              {/* Contact */}
              <motion.div
                className="space-y-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-[#8B05AE] mb-4 pb-2 border-b-2 border-[#8B05AE]/20">Get in Touch</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ready to transform your business with innovative solutions? Let&apos;s talk.
                </p>
                <ContactButton />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

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
                <div className="pl-2 space-y-2">
                  {services.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-1 px-2 rounded-md text-sm text-foreground transition-colors duration-200  hover:text-[#590178]"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
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
                                className="block py-1 px-2 rounded-md text-sm text-foreground transition-colors duration-200 hover:bg-[#F4EEFF] hover:text-[#590178]"
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
              <Link href="/work" className="block py-1 px-2 rounded-md text-foreground transition-colors duration-200 hover:bg-[#F4EEFF] hover:text-[#590178] text-base font-medium" onClick={toggleMenu}>
                Our Work
              </Link>
              <Link href="/company" className="block py-1 px-2 rounded-md text-foreground transition-colors duration-200 hover:bg-[#F4EEFF] hover:text-[#590178] text-base font-medium" onClick={toggleMenu}>
                About us
              </Link>
              <Link href="/contact" className="block py-1 px-2 rounded-md text-foreground transition-colors duration-200 hover:bg-[#F4EEFF] hover:text-[#590178] text-base font-medium" onClick={toggleMenu}>
                Contact
              </Link>
              <Link href="/blog" className="block py-1 text-foreground hover:text-primary text-base font-medium" onClick={toggleMenu}>
                Blog
              </Link>
              <Link href="/resources" className="block py-1 text-foreground hover:text-primary text-base font-medium" onClick={toggleMenu}>
                Resources
              </Link>
              {/* 
              <Link href="/campaign" className="block py-1 text-foreground hover:text-primary text-base font-medium" onClick={toggleMenu}>
                UI/UX Competition
              </Link> */}


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