"use client"
import { CTA } from "@/src/app/components/cta"
import { motion } from "framer-motion"

export default function PrivacyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="pt-20 bg-[#FFF2D5] text-black min-h-screen">
      <div className="w-full px-6 lg:px-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center py-12 font-playfair tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Privacy Policy – <span className="text-gray-800 font-playfair">Scalixity Technologies Pvt. Ltd.</span>
        </motion.h1>
        
        <motion.div 
          className="max-w-6xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Effective Date Section */}
          <motion.div 
            className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gray-800"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-source-sans">
                <strong className="text-gray-800 font-semibold">Effective Date:</strong> 25/07/2025
              </p>
              <p className="text-sm text-gray-600 font-source-sans">
                <strong className="text-gray-800 font-semibold">Last Updated:</strong> 25/07/2025
              </p>
            </div>
          </motion.div>

          {/* Introduction Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800 font-playfair tracking-tight">Introduction</h2>
            <div className="space-y-4 text-gray-700 font-source-sans leading-relaxed">
              <p>
                <strong className="text-gray-800">Scalixity Technologies Pvt. Ltd.</strong> (&ldquo;Scalixity&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting the privacy and confidentiality of information provided to us by users of our website, software solutions, products, and services.
              </p>
              <p>
                This Privacy Policy outlines the types of data we collect, how we use it, and your rights under applicable Indian laws, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-800 font-semibold">
                <li>The Information Technology Act, 2000, and its associated rules</li>
                <li>The Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;)</li>
              </ul>
              <p>
                This policy applies to all interactions with Scalixity, including via websites, mobile applications, APIs, hardware products (such as GPS devices), and custom software platforms.
              </p>
            </div>
          </motion.section>

          {/* Definitions Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Definitions</h2>
            <div className="space-y-4 text-gray-700">
              <div className="space-y-2">
                <p><strong className="text-gray-800">• Personal Data:</strong> Any data about an individual who is identifiable through such data, either directly or indirectly.</p>
                <p><strong className="text-gray-800">• Sensitive Personal Data:</strong> Includes passwords, financial data, health information, biometric data, and any other data classified as sensitive under Indian law.</p>
                <p><strong className="text-gray-800">• Processing:</strong> Collection, storage, use, alteration, or disclosure of personal data.</p>
              </div>
            </div>
          </motion.section>

          {/* Information We Collect Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Information We Collect</h2>
            <div className="space-y-6 text-gray-700">
              <p className="font-semibold">We collect data in the following categories:</p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">a. Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name, address, contact number, email address</li>
                  <li>Company name, designation</li>
                  <li>Identity verification documents (where applicable)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">b. Sensitive Personal Data</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Payment details (only processed through secure third-party gateways)</li>
                  <li>Location information (for GPS-based solutions)</li>
                  <li>Government ID (if required for KYC, compliance, or contracts)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">c. Usage and Device Data</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address, browser type, access time, pages viewed</li>
                  <li>Device identifiers, operating system, and network information</li>
                  <li>Usage behavior on our platforms or software tools</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">d. Client and Business Data</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Information shared voluntarily for CRM, AI models, product integrations, GPS tracking, or e-commerce platforms</li>
                  <li>Project files, user logs, preferences, and system configurations</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Purpose of Data Collection Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Purpose of Data Collection</h2>
            <div className="space-y-4 text-gray-700">
              <p>We process your data for lawful and specific purposes including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Delivering and customizing our products and services</li>
                <li>Managing client relationships and technical support</li>
                <li>Contract fulfilment and billing</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Communicating updates, service changes, or promotional material (where consent is obtained)</li>
              </ul>
            </div>
          </motion.section>

          {/* Legal Basis Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Legal Basis for Processing</h2>
            <div className="space-y-4 text-gray-700">
              <p>Under the <strong className="text-gray-800">DPDP Act, 2023</strong>, personal data is processed on one or more of the following bases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Consent:</strong> Freely given, specific, informed, and unambiguous</li>
                <li><strong>Performance of a Contract:</strong> When necessary to fulfill an agreement</li>
                <li><strong>Legal Obligation:</strong> When required to comply with applicable laws</li>
                <li><strong>Legitimate Interests:</strong> Where such processing does not override your fundamental rights</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Storage Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Data Storage and Retention</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your data is stored on secure servers maintained by Scalixity or its authorized service providers.</li>
                <li>We retain personal data for as long as required to fulfill the purposes stated in this policy or as required by applicable law.</li>
                <li>Upon withdrawal of consent or account deactivation, we retain data only where necessary for audits, legal claims, or compliance.</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Sharing Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Data Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-gray-800 bg-gray-100 p-3 rounded-lg">We do not sell your personal information.</p>
              <p>However, data may be shared under the following conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With service providers, subcontractors, and partners under binding data protection obligations</li>
                <li>With government authorities or law enforcement upon lawful request or regulatory requirement</li>
                <li>With auditors, legal counsel, or financial institutions under confidentiality obligations</li>
                <li>With affiliated entities for internal business operations, if legally permitted</li>
              </ul>
            </div>
          </motion.section>

          {/* Cross-Border Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Cross-Border Data Transfers</h2>
            <div className="space-y-4 text-gray-700">
              <p>Where applicable, your data may be processed and stored on servers outside India. In such cases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We ensure adequate levels of data protection as per Indian law</li>
                <li>Cross-border transfers comply with government notifications issued under the DPDP Act, 2023</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Security Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Data Security Measures</h2>
            <div className="space-y-4 text-gray-700">
              <p>We implement robust physical, technical, and organizational safeguards to ensure your data is protected against:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unauthorized access</li>
                <li>Accidental loss or destruction</li>
                <li>Misuse or alteration</li>
              </ul>
              <p className="font-semibold">Security practices include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption (in transit and at rest)</li>
                <li>Role-based access controls</li>
                <li>Secure APIs and firewalls</li>
                <li>Employee confidentiality agreements</li>
                <li>Regular security audits and compliance checks</li>
              </ul>
              <p className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-800">
                Our practices adhere to <strong>Reasonable Security Practices</strong> as prescribed under Rule 8 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </p>
            </div>
          </motion.section>

          {/* Your Rights Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Your Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p>As a data principal under the <strong className="text-gray-800">DPDP Act, 2023</strong>, you are entitled to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request correction or erasure of inaccurate or outdated data</li>
                <li>Withdraw your consent at any time (subject to certain consequences)</li>
                <li>Nominate a representative for exercising your rights in case of incapacity</li>
                <li>File a grievance or complaint with the Data Protection Board of India</li>
              </ul>
            </div>
          </motion.section>

          {/* Cookies Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Use of Cookies and Tracking Technologies</h2>
            <div className="space-y-4 text-gray-700">
              <p>We use cookies and similar technologies for session management, analytics, and enhancing user experience. You may control cookie settings through your browser preferences. Disabling cookies may limit functionality on certain parts of our services.</p>
            </div>
          </motion.section>

          {/* Grievance Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-gray-800"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Grievance Redressal Mechanism</h2>
            <div className="space-y-4 text-gray-700">
              <p>We are committed to addressing your concerns in a timely and respectful manner.</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Grievance Officer</p>
                <p><strong>Name:</strong> ARYAN SHARMA</p>
                <p><strong>Email:</strong> <a href="mailto:Support@scalixity.com" className="text-gray-800 hover:underline">Support@scalixity.com</a></p>
                <p><strong>Response Time:</strong> Within 15 working days</p>
              </div>
            </div>
          </motion.section>

          {/* Changes Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">12. Changes to this Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>We reserve the right to modify this Privacy Policy at any time. Changes will be communicated through our website or by direct notification. Continued use of services after such changes constitutes your acceptance.</p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-gray-800"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">13. Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>For questions or concerns regarding this Privacy Policy, please contact:</p>
              <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                <p><strong>Email:</strong> <a href="mailto:Info@scalixity.com" className="text-gray-800 hover:underline">Info@scalixity.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+918269444130" className="text-gray-800 hover:underline">+91 8269444130</a></p>
                <p><strong>Website:</strong> <a href="https://www.scalixity.com" className="text-gray-800 hover:underline" target="_blank" rel="noopener noreferrer">www.scalixity.com</a></p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
      <CTA />
    </div>
  )
} 