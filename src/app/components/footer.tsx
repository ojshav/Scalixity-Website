import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'

const mainLinks = [
  { name: "About us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Careers", href: "/careers" },
  { name: "Contact us", href: "/contact" }
]

const services = {
  "Artificial Intelligence": [
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
  ],
  "Generative AI": [
    { name: "Generative AI Development", href: "/services/generative-ai" },
    { name: "Generative AI Consulting", href: "/services/generative-ai-consulting" },
    { name: "Enterprise Generative AI Development", href: "/services/enterprise-gen-ai" },
    { name: "AI Agent Development", href: "/services/ai-agent" },
    { name: "LLM Development", href: "/services/llm" },
    { name: "Generative AI Integration", href: "/services/gen-ai-integration" },
    { name: "Adaptive AI Development", href: "/services/adaptive-ai" },
    { name: "ChatGPT Developers", href: "/services/chatgpt" },
    { name: "Hire Prompt Engineers", href: "/services/prompt-engineers" },
    { name: "ChatGPT Integration Service", href: "/services/chatgpt-integration" },
    { name: "Midjourney Developers", href: "/services/midjourney" },
    { name: "Stable Diffusion Developers", href: "/services/stable-diffusion" }
  ],
  "Blockchain Development": [
    { name: "Cardano App Development", href: "/services/cardano" },
    { name: "Stellar App Development", href: "/services/stellar" },
    { name: "Smart Contracts Development", href: "/services/smart-contracts" },
    { name: "dApps Development", href: "/services/dapps" },
    { name: "NFT Marketplace Development", href: "/services/nft" },
    { name: "Hedera App Development", href: "/services/hedera" },
    { name: "Metaverse Development", href: "/services/metaverse" }
  ],
  "Mobile Development": [
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

const otherServices = {
  "Industries": [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Fintech", href: "/industries/fintech" },
    { name: "Retail", href: "/industries/retail" },
    { name: "SaaS", href: "/industries/saas" },
    { name: "Travel", href: "/industries/travel" },
    { name: "Fitness", href: "/industries/fitness" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Construction", href: "/industries/construction" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Food", href: "/industries/food" }
  ],
  "Web Development": [
    { name: "Web3 App Development", href: "/services/web3" },
    { name: "React.js App Development", href: "/services/reactjs" },
    { name: "Express.js App Development", href: "/services/expressjs" },
    { name: "Node.js App Development", href: "/services/nodejs" },
    { name: "PWA Development", href: "/services/pwa" }
  ],
  "Software Development": [
    { name: "Product Development", href: "/services/product" },
    { name: "Enterprise App Development", href: "/services/enterprise" },
    { name: "IoT Development", href: "/services/iot" },
    { name: "App Modernization", href: "/services/modernization" }
  ],
  "Cloud Development": [
    { name: "AWS App Development", href: "/services/aws" },
    { name: "Azure App Development", href: "/services/azure" },
    { name: "GCP App Development", href: "/services/gcp" }
  ],
  "Design": [
    { name: "Mobile App Design", href: "/services/mobile-design" },
    { name: "App Blueprint", href: "/services/blueprint" },
    { name: "Web Design", href: "/services/web-design" }
  ]
}

export function Footer() {
  return (
    <footer className="bg-[#080B16] border-t border-white/10 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Main Links Column */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <span className="text-2xl font-bold text-white">Markovate</span>
            </Link>
            <div className="space-y-4">
              {mainLinks.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </div>
              ))}
              <Link
                href="/hire-developers"
                className="inline-block px-6 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
              >
                Hire Developers
              </Link>
            </div>
          </div>

          {/* Services Columns */}
          {Object.entries(services).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {Object.entries(otherServices).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.name}>
                    <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <span>Markovate Inc. | Copyright 2024 | </span>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span> | </span>
            <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/company/Scalixityi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/markovate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

