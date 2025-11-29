"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CTA } from './cta';

const services = [
    {
        id: "01",
        title: "Custom Web Apps",
        fullDescription: "Our custom web applications are designed to streamline your business operations and enhance user experience. We leverage the latest technologies to create scalable, secure, and high-performance solutions.",
        features: [
            { title: "Responsive Design", description: "Seamless experience across all devices and screen sizes" },
            { title: "Scalable Architecture", description: "Built to grow with your business needs" },
            { title: "Modern Tech Stack", description: "React, Vue, Angular, Node.js, and more" },
            { title: "Security First", description: "Enterprise-grade security measures implemented" }
        ],
        image: "/images/web-apps-illustration.png", // Placeholder path
        link: "/services/custom-web-apps"
    },
    {
        id: "02",
        title: "Custom Dashboard",
        fullDescription: "Transform your data into actionable insights with our custom dashboard solutions. We build intuitive, interactive, and real-time dashboards tailored to your specific KPIs and metrics.",
        features: [
            { title: "Real-time Data", description: "Live updates and streaming data visualization" },
            { title: "Interactive Charts", description: "Drill-down capabilities and dynamic filtering" },
            { title: "Custom Reports", description: "Automated reporting and export functionality" },
            { title: "User Management", description: "Role-based access control and permissions" }
        ],
        image: "/images/dashboard-illustration.png",
        link: "/services/custom-dashboard"
    },
    {
        id: "03",
        title: "AI Chatbots",
        fullDescription: "Enhance customer engagement and automate support with our intelligent AI chatbots. Powered by advanced NLP, our bots provide instant, accurate, and personalized responses.",
        features: [
            { title: "Natural Language Processing", description: "Understand and respond to complex queries" },
            { title: "Multi-channel Support", description: "Deploy on website, WhatsApp, Messenger, etc." },
            { title: "Seamless Handoff", description: "Smart escalation to human agents when needed" },
            { title: "Analytics & Insights", description: "Track conversations and improve performance" }
        ],
        image: "/images/chatbot-illustration.png",
        link: "/services/AI-Chatbot"
    },
    {
        id: "04",
        title: "Mobile Application",
        fullDescription: "Reach your customers on the go with our high-performance mobile applications. We build native and cross-platform apps that deliver exceptional user experiences.",
        features: [
            { title: "Cross-platform Development", description: "Code once, deploy on iOS and Android" },
            { title: "Native Performance", description: "Smooth animations and fast load times" },
            { title: "Offline Capabilities", description: "Functional even without internet connection" },
            { title: "App Store Optimization", description: "Assistance with publishing and ranking" }
        ],
        image: "/images/mobile-app-illustration.png",
        link: "/services/Mobile-Application"
    },
    {
        id: "05",
        title: "E-commerce Solution",
        fullDescription: "Launch and grow your online business with our robust e-commerce solutions. From custom storefronts to complex backend integrations, we handle it all.",
        features: [
            { title: "Custom Storefronts", description: "Unique designs that reflect your brand" },
            { title: "Secure Payments", description: "Integration with major payment gateways" },
            { title: "Inventory Management", description: "Real-time tracking and stock alerts" },
            { title: "Conversion Optimization", description: "Designed to maximize sales" }
        ],
        image: "/images/ecommerce-illustration.png",
        link: "/services/ecommerce-solution"
    },
    {
        id: "06",
        title: "Machine Learning & NLP Solutions",
        fullDescription: "Unlock business insights and automate processes with our machine learning and NLP solutions. We build predictive models, classification systems, and NLP pipelines tailored to your specific needs.",
        features: [
            { title: "Predictive Models", description: "Build models that predict future outcomes and automate decisions" },
            { title: "Classification Systems", description: "Classify data into categories and automate processes" },
            { title: "NLP Pipelines", description: "Build NLP pipelines that understand and respond to natural language" }
        ],
        image: "/images/chatbot-illustration.png",
        link: "/services/ml-nlp-solutions"
    }
];

export function DetailedServices() {
    return (
        <section className="bg-[#FFF2D5] min-h-screen flex flex-col">
            <div className="container mx-auto px-4 md:px-8 pt-28">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold font-playfair text-black mb-8 md:mb-0"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-[#590178] text-lg md:text-xl max-w-md font-inter leading-relaxed"
                    >
                        At Scalixity, we deliver cutting-edge digital solutions tailored to your business needs. From web applications to AI-powered chatbots, we&apos;ve got you covered.
                    </motion.p>
                </div>

                {/* Main Content Area - Stacking Cards */}
                <div className="flex flex-col pb-2">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`sticky top-24 md:top-20 ${index === 5 ? 'min-h-screen' : 'min-h-[80vh]'} bg-[#FFF2D5] border-t-2 border-black/40 pt-12 mb-12 last:mb-0`}
                            style={{
                                zIndex: index + 1,
                                // Optional: subtle scale effect could be added here with scroll-driven animations if desired later
                            }}
                        >
                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
                                {/* Left Sidebar - Service Number & All Service Titles */}
                                <div className="lg:w-1/5 flex flex-col gap-6">
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="text-7xl md:text-5xl font-bold font-playfair text-[#590178] mb-4"
                                    >
                                        {service.id}
                                    </motion.div>
                                    <div className="flex flex-col gap-3">
                                        {services.map((s, sIndex) => (
                                            <motion.div
                                                key={s.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: sIndex * 0.1 }}
                                                className={`text-base md:text-lg font-semibold font-playfair transition-colors duration-300 ${sIndex === index ? 'text-[#590178]' : 'text-black'
                                                    }`}
                                            >
                                                {s.title}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="lg:w-4/5 flex flex-col">
                                    {/* Service Title */}
                                    <motion.h3 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="text-4xl md:text-5xl font-bold font-playfair text-[#590178] mb-6"
                                    >
                                        {service.title}
                                    </motion.h3>

                                    {/* Service Description */}
                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                        className="text-black/80 text-base md:text-lg leading-relaxed mb-12 font-inter"
                                    >
                                        {service.fullDescription}
                                    </motion.p>

                                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
                                        {/* Illustration - Centered */}
                                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                                            <div className={`relative w-full ${
                                                index === 0 ? 'max-w-[450px]' : 
                                                index === 4 ? 'max-w-[400px]' :
                                                index === 5 ? 'max-w-[380px]' :
                                                'max-w-[500px]'
                                            } aspect-square flex items-center justify-center`}>
                                                {/* GIF Images for all services */}
                                                <div className={`relative w-full h-full ${
                                                    index === 0 ? 'scale-150 -translate-y-12' :
                                                    index === 4 ? 'scale-150 -translate-y-6' :
                                                    index === 5 ? 'scale-100 -translate-y-8' :
                                                    'scale-150 -translate-y-20'
                                                }`}>
                                                    <Image
                                                        src={`/${index + 1}.gif`}
                                                        alt={service.title}
                                                        fill
                                                        className="object-contain"
                                                        unoptimized
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features List - Right Side */}
                                        <div className="w-full lg:w-1/2 flex flex-col gap-1">
                                            {service.features.map((feature, fIndex) => (
                                                <motion.div 
                                                    key={fIndex} 
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.3 + fIndex * 0.15 }}
                                                    whileHover={{ x: 5 }}
                                                    className="pb-1"
                                                >
                                                    <h4 className="text-[#590178] font-bold text-lg md:text-xl mb-2 font-playfair">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-black/70 text-sm md:text-base leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </motion.div>
                                            ))}

                                            <motion.div 
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.9 }}
                                                className="mt-4"
                                            >
                                                <Link href={service.link}>
                                                    <motion.button 
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="bg-[#590178] text-white px-8 py-3 rounded-lg font-bold font-playfair hover:bg-[#4a0b63] transition-colors"
                                                    >
                                                        Learn More
                                                    </motion.button>
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* CTA Section */}
            <CTA />
        </section>
    );
}
