"use client";

import { motion } from 'framer-motion';
import { Heart, Smile, MessageCircle, Star, Gift, Users } from 'lucide-react';

const applications = [
  {
    icon: Heart,
    title: "AI-Powered Personalized Recommendations",
    description: "Deliver customized product suggestions based on browsing history, preferences, and past purchases — creating meaningful shopping experiences."
  },
  {
    icon: Smile,
    title: "Real-Time Customer Behavior Analysis",
    description: "Monitor and analyze customer interactions instantly, allowing AI to adapt offers and content in real-time for maximum impact."
  },
  {
    icon: MessageCircle,
    title: "Dynamic Content Personalization",
    description: "Tailor website banners, emails, and app interfaces using AI insights to resonate with each customer's unique profile."
  },
  {
    icon: Star,
    title: "Sentiment-Driven Engagement",
    description: "Use AI sentiment analysis to detect customer emotions and craft personalized responses or offers that build trust and connection."
  },
  {
    icon: Gift,
    title: "Proactive Customer Support",
    description: "Implement AI chatbots that anticipate customer needs, offering proactive solutions and seamless support experiences."
  },
  {
    icon: Users,
    title: "Loyalty Enhancement Strategies",
    description: "Leverage AI to identify loyal customers and design exclusive rewards programs, boosting retention and brand affinity."
  }
];

export function AIApplications() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AI AGENT APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Retail with Personalized Engagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance customer experiences by using AI agents to deliver personalized engagements — fostering loyalty, boosting satisfaction, and driving sales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <app.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">{app.title}</h3>
              <p className="text-muted-foreground">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
