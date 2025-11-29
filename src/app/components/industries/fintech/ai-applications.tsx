"use client";

import { motion } from "framer-motion";
import { CreditCard, LineChart, Shield, TrendingUp, Banknote, DollarSign } from "lucide-react";

const applications = [
  {
    icon: CreditCard,
    title: "Fraud Detection",
    description: "Leverage AI algorithms to detect and prevent fraudulent activities by identifying patterns and anomalies in real-time transactions."
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Harness AI to forecast market trends, customer behavior, and financial risks, enabling data-driven decision-making."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Implement AI models to assess and mitigate financial risks, ensuring secure and strategic business operations."
  },
  {
    icon: TrendingUp,
    title: "Algorithmic Trading",
    description: "Utilize AI-powered trading algorithms to optimize investment strategies and execute trades at optimal times."
  },
  {
    icon: Banknote,
    title: "Loan and Credit Scoring",
    description: "AI-driven credit scoring models to evaluate loan applications and assess borrower creditworthiness more accurately."
  },
  {
    icon: DollarSign,
    title: "Personalized Financial Services",
    description: "Deliver AI-enabled financial advice and personalized banking experiences tailored to individual customer needs."
  }
];

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">AI APPLICATIONS</span>
          <h2 className="text-5xl font-bold text-white mt-4 mb-6">
            Revolutionizing Fintech with AI
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Explore how our AI-powered solutions are transforming the fintech landscape by enhancing security, optimizing investments, personalizing customer experiences, and driving operational efficiency. Our innovative AI technologies empower financial institutions to make data-backed decisions, mitigate risks proactively, and deliver tailored financial solutions that cater to the evolving needs of their clients.
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
              className="p-8 rounded-xl bg-[#F3F1EB] border border-black text-black shadow-lg hover:shadow-2xl transition-shadow"
            >
              <app.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
              <p>{app.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
