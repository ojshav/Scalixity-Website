"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, Clock, Target, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: "Enhanced User Engagement",
    description: "Deliver hyper-personalized experiences that captivate users, boosting retention and satisfaction."
  },
  {
    icon: Star,
    title: "Increased Conversion Rates",
    description: "Tailor content and offers dynamically, driving higher conversions and revenue growth."
  },
  {
    icon: TrendingUp,
    title: "Scalable AI Solutions",
    description: "Seamlessly scale personalization efforts as your SaaS platform grows, ensuring consistent user experiences."
  },
  {
    icon: Clock,
    title: "Real-Time Decision Making",
    description: "Leverage AI insights to make instant, data-driven decisions, optimizing user journeys on the fly."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Use AI-powered segmentation to target users based on behavior, demographics, and preferences."
  },
  {
    icon: ShieldCheck,
    title: "Data Security & Privacy",
    description: "Ensure user data remains protected with AI-driven security measures and compliance protocols."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">BENEFITS OF AI PERSONALIZATION FOR SAAS</span>
          <h2 className="text-5xl font-bold text-black mt-4 mb-6">
            Unlock the Full Potential of AI-Powered SaaS Personalization
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover the transformative benefits of integrating AI into your SaaS platform — from boosting user engagement to making data-driven decisions in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black text-black"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
