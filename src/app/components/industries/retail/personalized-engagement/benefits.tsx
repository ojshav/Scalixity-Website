"use client";

import { motion } from 'framer-motion';
import { Heart, Smile, MessageCircle, Star, Gift, Users } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Deeper Customer Connections",
    description: "Forge meaningful relationships by delivering hyper-personalized experiences tailored to individual preferences."
  },
  {
    icon: Smile,
    title: "Enhanced Customer Loyalty",
    description: "Boost retention rates by offering AI-driven loyalty programs and exclusive rewards for your most engaged customers."
  },
  {
    icon: MessageCircle,
    title: "Real-Time Engagement",
    description: "Respond instantly to customer behaviors and sentiments with dynamic content and personalized offers."
  },
  {
    icon: Star,
    title: "Higher Conversion Rates",
    description: "Drive more sales by presenting targeted product recommendations and time-sensitive deals tailored to user behavior."
  },
  {
    icon: Gift,
    title: "Proactive Support",
    description: "Anticipate customer needs with AI chatbots, resolving issues and offering solutions before they arise."
  },
  {
    icon: Users,
    title: "Improved Customer Satisfaction",
    description: "Personalized engagement fosters trust and satisfaction, keeping customers coming back for more."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Benefits of AI-Powered Personalized Engagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the full potential of personalized engagement by leveraging AI to build stronger customer relationships and drive business growth.
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
