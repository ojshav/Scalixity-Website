import Link from 'next/link'
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { name: "Custom Web Apps", href: "/services/custom-web-apps" },
  { name: "Custom Dashboards", href: "/services/custom-dashboard" },
  { name: "AI Chatbot", href: "/services/AI-Chatbot" },
  { name: "Mobile Application", href: "/services/Mobile-Application" },
  { name: "Ecommerce solution", href: "/services/ecommerce-solution" },
  { name: "Machine Learning & NLP Solutions", href: "/services/ml-nlp-solutions" },
  { name: "All Services", href: "/services" }
]

const company = [
  { name: "About Us", href: "/company" },
  { name: "Our Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" }
]

export function Footer() {
  return (
    <footer className="bg-[#590178] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl text-white font-serif font-bold">Scalixity</h2>
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
              Transforming ideas into digital reality with innovative solutions and cutting-edge technology.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <a href="https://twitter.com/scalixity" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/scalixity?igsh=MTZjYTh4eWE1YTlyZA==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/scalixity" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <span className="sr-only">Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/Scalixity" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-200 hover:text-white transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-200 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Contact</h3>
            <ul className="space-y-6">
              <li>
                <a href="mailto:contact@scalixity.com" className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors group">
                  <Mail className="h-5 w-5 flex-shrink-0 group-hover:text-white" />
                  <span className="text-sm">scalixity@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-center space-x-3 text-gray-200 hover:text-white transition-colors group">
                  <Phone className="h-5 w-5 flex-shrink-0 group-hover:text-white" />
                  <span className="text-sm">+91 9424710030</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-200">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                  Comfort Medows,78,Vijay Nagar<br />
                  Indore,MP, India 452010
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="mb-4 md:mb-0">
            © 2025 Scalixity. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
