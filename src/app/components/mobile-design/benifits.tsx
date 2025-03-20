"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Enhanced User Experience",
    description: "Seamless navigation and fluid interactions that captivate users from the first tap.",
  },
  {
    title: "Boost Engagement & Retention",
    description: "Eye-catching, user-friendly designs that keep users hooked and coming back for more.",
  },
  {
    title: "Brand Consistency",
    description: "We craft bold, recognizable designs that strengthen your brand’s identity and build trust.",
  },
  {
    title: "Accelerated Development",
    description: "Streamlined design systems that cut dev time and eliminate rework — speed meets precision.",
  },
  {
    title: "Skyrocket Conversions",
    description: "Optimized UI/UX elements that drive user actions — from sign-ups to checkouts.",
  },
  {
    title: "Competitive Edge",
    description: "Stand out in the crowded app market with cutting-edge visuals and innovative design.",
  },
];

export function MobileAppDesignBenefits() {
  return (
    <section className="relative bg-[#A8B2E7] py-28 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-black">
            DESIGN BENEFITS
          </span>
          <h2 className="text-5xl font-extrabold text-black mt-4 leading-snug">
            Supercharge Your App <br /> with{" "}
            <span className="text-black">Exceptional Design</span>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mt-6">
            A stunning app isn’t just about looks — it’s about{" "}
            <span className="font-medium">engagement</span>,{" "}
            <span className="font-medium">retention</span>, and{" "}
            <span className="font-medium">business growth</span>. Let’s make
            your app unstoppable.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#F3F1EB] p-8 rounded-xl border border-black transition-all cursor-pointer shadow-lg"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-black border-black group-hover:text-black transition" />
                <div>
                  <h3 className="text-2xl font-bold text-black group-hover:text-black transition mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-black group-hover:text-black transition">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MobileAppDesignBenefits;
