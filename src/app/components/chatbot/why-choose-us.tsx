"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "AI-Driven Customer Engagement",
    description:
      "Our AI chatbots provide personalized, instant responses, enhancing customer experience while reducing operational costs. Scalixity ensures seamless chatbot interactions tailored to your business needs.",
  },
  {
    title: "Custom-Built AI Chatbots",
    description:
      "We design and develop AI chatbots that align with your specific industry requirements, ensuring smooth integration and high user satisfaction across various platforms.",
  },
  {
    title: "Seamless Integrations",
    description:
      "Our AI chatbots easily integrate with your CRM, helpdesk, e-commerce platforms, and messaging apps like WhatsApp, Slack, and Facebook Messenger to streamline workflows.",
  },
  {
    title: "Scalable & Secure Solutions",
    description:
      "Scalixity builds chatbots that scale with your business while prioritizing data privacy and security, ensuring compliance with industry standards and regulations.",
  },
];

export function WhyChooseUsAIChatbot() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            WHY US
          </span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Why Choose Scalixity for AI Chatbot Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalixity specializes in developing intelligent AI chatbots that enhance customer
            interactions, streamline operations, and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsAIChatbot;
