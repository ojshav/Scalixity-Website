"use client"

import { motion } from 'framer-motion';
import { MessageCircle, Users, Clock, ThumbsUp, ShieldCheck, TrendingUp } from 'lucide-react';

const chatbotBenefits = [
  {
    icon: MessageCircle,
    title: "24/7 Instant Support",
    description: "AI chatbots provide round-the-clock assistance, ensuring customers receive immediate responses."
  },
  {
    icon: Users,
    title: "Personalized Customer Interactions",
    description: "AI-driven chatbots analyze user data to deliver tailored recommendations and responses."
  },
  {
    icon: Clock,
    title: "Reduced Response Time",
    description: "Automated conversations minimize wait times and enhance user engagement."
  },
  {
    icon: ThumbsUp,
    title: "Consistent & Accurate Responses",
    description: "Eliminates human errors and provides precise, pre-validated information to customers."
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Handling",
    description: "Advanced AI ensures compliance with security standards, keeping user data safe."
  },
  {
    icon: TrendingUp,
    title: "Improved Lead Conversion",
    description: "AI chatbots qualify and nurture leads efficiently, boosting sales and business growth."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of AI Chatbots in SaaS
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Unlock AI-driven chatbots to enhance customer experience, streamline support, and drive business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatbotBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;