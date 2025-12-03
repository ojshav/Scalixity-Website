"use client"
import { CTA } from "@/src/app/components/cta"
import { motion } from "framer-motion"

export default function TermsPage() {
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
          Terms and Conditions – <span className="text-gray-800 font-playfair">Scalixity Technologies Pvt. Ltd.</span>
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
                <strong className="text-gray-800">Scalixity Technologies Pvt. Ltd.</strong> (&ldquo;Scalixity&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) provides these Terms and Conditions (&ldquo;Terms&rdquo;) that govern your use of our website, software solutions, products, and services.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
              <p>
                These Terms apply to all interactions with Scalixity, including via websites, mobile applications, APIs, hardware products (such as GPS devices), and custom software platforms.
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
                <p><strong className="text-gray-800">• Services:</strong> All products, software, applications, and services provided by Scalixity.</p>
                <p><strong className="text-gray-800">• User/You:</strong> Any individual or entity using our services.</p>
                <p><strong className="text-gray-800">• Content:</strong> Any data, information, or materials uploaded, transmitted, or processed through our services.</p>
                <p><strong className="text-gray-800">• Intellectual Property:</strong> All patents, copyrights, trademarks, trade secrets, and other proprietary rights.</p>
              </div>
            </div>
          </motion.section>

          {/* Acceptance of Terms Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>By using our services, you acknowledge that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You have read, understood, and agree to be bound by these Terms</li>
                <li>You are at least 18 years old or have parental/guardian consent</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>Your use of services complies with all applicable laws and regulations</li>
              </ul>
            </div>
          </motion.section>

          {/* Services Description Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Services Description</h2>
            <div className="space-y-4 text-gray-700">
              <p>Scalixity provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI and Machine Learning Solutions</li>
                <li>Software Development and Custom Applications</li>
                <li>GPS Tracking and IoT Solutions</li>
                <li>E-commerce Platform Development</li>
                <li>CRM and Business Process Automation</li>
                <li>Technical Consulting and Support</li>
                <li>Cloud Infrastructure and Hosting Services</li>
              </ul>
              <p className="bg-gray-100 p-4 rounded-lg">
                <strong>Note:</strong> Service availability may vary based on your location and specific requirements. We reserve the right to modify, suspend, or discontinue any service at any time.
              </p>
            </div>
          </motion.section>

          {/* User Responsibilities Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">4. User Responsibilities</h2>
            <div className="space-y-4 text-gray-700">
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt service operations</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Not use services for any harmful or malicious activities</li>
              </ul>
            </div>
          </motion.section>

          {/* Payment Terms Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Payment Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>For paid services, the following terms apply:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All fees are payable in advance unless otherwise agreed</li>
                <li>Prices are subject to change with 30 days prior notice</li>
                <li>Payment methods accepted: Credit/Debit cards, Bank transfers, Digital wallets</li>
                <li>Late payments may result in service suspension or termination</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Taxes and additional charges may apply as per applicable laws</li>
              </ul>
            </div>
          </motion.section>

          {/* Intellectual Property Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Scalixity&rsquo;s Rights:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All services, software, and content remain our exclusive property</li>
                <li>We retain all intellectual property rights in our services</li>
                <li>You may not copy, modify, or distribute our proprietary materials</li>
              </ul>
              
              <p><strong>Your Rights:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You retain ownership of content you create or upload</li>
                <li>You grant us license to use your content for service provision</li>
                <li>You may use our services as permitted under these Terms</li>
              </ul>
            </div>
          </motion.section>

          {/* Privacy and Data Protection Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-700">
              <p>Your privacy is important to us. Our data collection and processing practices are governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
              <p>By using our services, you consent to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Collection and processing of your personal data as described in our Privacy Policy</li>
                <li>Use of cookies and tracking technologies</li>
                <li>Data transfer and storage as necessary for service provision</li>
              </ul>
            </div>
          </motion.section>

          {/* Service Availability Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Service Availability and Maintenance</h2>
            <div className="space-y-4 text-gray-700">
              <p>We strive to provide reliable services but cannot guarantee:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uninterrupted or error-free service</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Specific performance levels or response times</li>
              </ul>
              <p><strong>Maintenance:</strong> We may perform scheduled maintenance with reasonable notice. Emergency maintenance may be performed without prior notice.</p>
            </div>
          </motion.section>

          {/* Limitation of Liability Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p className="bg-gray-100 p-4 rounded-lg">
                <strong>Disclaimer:</strong> Our services are provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied.
              </p>
              <p>To the maximum extent permitted by law, Scalixity shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or data loss</li>
                <li>Third-party actions or content</li>
              </ul>
              <p>Our total liability shall not exceed the amount paid by you for the specific service in the 12 months preceding the claim.</p>
            </div>
          </motion.section>

          {/* Termination Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>You may terminate:</strong> Your account or service subscription at any time by providing written notice.</p>
              <p><strong>We may terminate:</strong> Your access to services immediately if you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate these Terms</li>
                <li>Engage in fraudulent or illegal activities</li>
                <li>Fail to pay fees when due</li>
                <li>Cause harm to our systems or other users</li>
              </ul>
              <p><strong>Upon termination:</strong> Your access to services will cease, and we may delete your data in accordance with our data retention policies.</p>
            </div>
          </motion.section>

          {/* Governing Law Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700">
              <p>These Terms are governed by the laws of India. Any disputes shall be resolved through:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Good faith negotiations between parties</li>
                <li>Mediation if negotiations fail</li>
                <li>Arbitration in accordance with Indian law</li>
                <li>Court proceedings in courts of competent jurisdiction in India</li>
              </ol>
            </div>
          </motion.section>

          {/* Changes to Terms Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">12. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>We reserve the right to modify these Terms at any time. Changes will be communicated through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email notification to registered users</li>
                <li>Website announcements</li>
                <li>In-app notifications</li>
              </ul>
              <p>Continued use of services after changes constitutes acceptance of the new Terms.</p>
            </div>
          </motion.section>

          {/* Severability Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">13. Severability</h2>
            <div className="space-y-4 text-gray-700">
              <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.</p>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-gray-800"
            variants={fadeInUp}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">14. Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <p>For questions or concerns regarding these Terms and Conditions, please contact:</p>
              <div className="bg-gray-100 p-4 rounded-lg space-y-2">
                <p><strong>Email:</strong> <a href="mailto:Info@scalixity.com" className="text-gray-800 hover:underline">Info@scalixity.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919424710030" className="text-gray-800 hover:underline">+91 9424710030</a></p>
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