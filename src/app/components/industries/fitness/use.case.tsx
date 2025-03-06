"use client"

import { motion } from 'framer-motion'

const useCases = [
  {
    title: "Personalized Fitness Plans",
    description: "We design AI-powered fitness plans tailored to individual goals, body types, and fitness levels. Our solutions adapt dynamically based on progress, ensuring users stay motivated and achieve sustainable results."
  },
  {
    title: "Real-Time Workout Tracking",
    description: "Our AI solutions monitor workout sessions in real-time, analyzing form, counting reps, and assessing intensity. With instant feedback and smart suggestions, users can optimize their training sessions for maximum effectiveness."
  },
  {
    title: "Nutrition and Diet Recommendations",
    description: "We build AI systems that generate personalized meal plans based on user preferences, dietary restrictions, and fitness goals. Our solutions continuously adjust meal recommendations to support muscle gain, weight loss, or maintenance."
  },
  {
    title: "Injury Prevention and Recovery",
    description: "Using AI, we analyze movement patterns to detect improper form or overexertion, helping users prevent injuries. Additionally, we offer tailored recovery exercises to rehabilitate muscles and enhance mobility."
  },
  {
    title: "Virtual Fitness Coaching",
    description: "Our AI-driven virtual coaches provide real-time motivation, adapt workouts according to user feedback, and track progress over time. They offer personalized advice, making fitness routines more engaging and goal-oriented."
  },
  {
    title: "Fitness Progress Analytics",
    description: "We create AI models that analyze detailed workout data, track improvements, and visualize progress through dynamic dashboards. Users receive actionable insights and performance summaries to continuously push their limits."
  },
  {
    title: "Smart Wearable Integration",
    description: "Our AI solutions seamlessly sync with smart wearables, collecting data on heart rate, steps, and calories burned. This data feeds into customized workout plans and health insights to fine-tune fitness strategies."
  },
  {
    title: "Community and Gamification",
    description: "We build AI-powered platforms that foster fitness communities by adding challenges, leaderboards, and achievement badges. The gamification element keeps users motivated by turning workouts into fun and competitive experiences."
  },
  {
    title: "Sleep Tracking and Optimization",
    description: "Our AI tools monitor sleep cycles, providing insights into sleep quality and personalized recommendations for better rest. By improving sleep, users enhance their recovery and overall athletic performance."
  },
  {
    title: "Mental Health Support",
    description: "We integrate AI systems with mindfulness exercises, stress management techniques, and mood tracking. This holistic approach ensures mental well-being, complementing physical fitness for overall health improvement."
  }
]

export function UseCases() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            AI Use Cases for Fitness
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our AI solutions revolutionize fitness by offering personalized plans, real-time tracking, insightful analytics, and holistic health support.
          </p>
        </div>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases;
