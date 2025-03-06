"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, HeartPulse, Users,  BarChart } from "lucide-react";

const applications = [
  {
    icon: Dumbbell,
    title: "Personalized Workout Plans",
    description: "AI analyzes user data to create customized fitness routines tailored to individual goals, fitness levels, and progress."
  },
  {
    icon: HeartPulse,
    title: "Health Monitoring & Insights",
    description: "Track heart rate, sleep patterns, and calorie intake with AI models, providing real-time health insights and recommendations."
  },
  {
    icon: Activity,
    title: "AI-Powered Virtual Trainers",
    description: "Offer interactive virtual coaching sessions using AI to provide feedback on form, technique, and workout efficiency."
  },
  {
    icon: Users,
    title: "Client Retention & Engagement",
    description: "Predict client churn and suggest targeted incentives to boost loyalty, ensuring consistent engagement and motivation."
  },
  
  {
    icon: BarChart,
    title: "Nutrition & Meal Planning",
    description: "AI-powered meal plans tailored to users' fitness goals, dietary preferences, and metabolic rates for optimal results."
  }
];

export function AIApplications() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Transforming Fitness with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI is revolutionizing the fitness industry — from personalized training plans and real-time health tracking to virtual coaching and smart nutrition advice. Our AI solutions empower fitness professionals and enthusiasts alike to achieve peak performance with data-driven strategies.
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
