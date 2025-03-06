"use client";

import { motion } from "framer-motion";
import { HeartPulse, Activity, Dumbbell, Apple, ChartBar, Users } from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Personalized Workout Plans",
    description: "AI-driven fitness apps design custom workout routines tailored to individual goals, fitness levels, and progress."
  },
  {
    icon: Activity,
    title: "Real-Time Health Monitoring",
    description: "Track vital metrics like heart rate, calories burned, and sleep patterns for data-backed health optimization."
  },
  {
    icon: Dumbbell,
    title: "Smart Exercise Recommendations",
    description: "AI suggests new exercises, adjusting difficulty based on performance, ensuring continuous improvement."
  },
  {
    icon: Apple,
    title: "Nutrition & Diet Insights",
    description: "Get AI-powered meal plans and nutrition tracking, helping users balance their diets for optimal fitness results."
  },
  {
    icon: ChartBar,
    title: "Progress Tracking & Analytics",
    description: "Visualize fitness journeys with AI dashboards that provide deep insights into workouts, recovery, and goal achievement."
  },
  {
    icon: Users,
    title: "Virtual Coaching & Community",
    description: "AI-powered virtual coaches guide workouts and foster community engagement, boosting motivation and accountability."
  }
];

export function Benefits() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">BENEFITS OF AI IN FITNESS</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Revolutionize Fitness with AI Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how AI transforms fitness — from personalized workout plans to real-time health tracking. Elevate your training, track progress, and unlock smarter wellness solutions.
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
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
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
