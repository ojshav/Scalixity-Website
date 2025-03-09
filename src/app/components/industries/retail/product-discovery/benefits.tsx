"use client";

import { motion } from 'framer-motion';
import { Search, Eye, Sparkles, Users, TrendingUp, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Search,
    title: "Seamless Product Discovery",
    description: "AI-powered search helps customers find exactly what they're looking for with speed and precision."
  },
  {
    icon: Eye,
    title: "Visual Search Capabilities",
    description: "Enable image-based product searches, letting users discover items through photos and visual cues."
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "Boost engagement with AI-curated product suggestions tailored to individual preferences."
  },
  {
    icon: Users,
    title: "Enhanced Customer Experiences",
    description: "Deliver intuitive, effortless shopping journeys by matching products to user intent in real-time."
  },
  {
    icon: TrendingUp,
    title: "Increased Sales Conversions",
    description: "Help customers find relevant products faster — reducing bounce rates and driving more sales."
  },
  {
    icon: Globe,
    title: "Omnichannel Integration",
    description: "Unify product discovery across web, app, and in-store platforms for a consistent shopping experience."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Benefits of AI-Powered Product Discovery in Retail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionize shopping experiences with AI — delivering personalized, seamless product discovery that drives sales and customer satisfaction.
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

