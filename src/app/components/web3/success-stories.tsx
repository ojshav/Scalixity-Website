"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const successStories = [
  {
    company: "Meta Platforms Inc.",
    title: "Advanced AI-Powered Content Personalization",
    description: "Developed a state-of-the-art AI content personalization engine that dynamically adjusts user feeds, increasing engagement and ad revenue.",
    image: "/meta_ai_content.svg",
    results: [
      "65% increase in user engagement",
      "40% boost in ad click-through rates",
      "Enhanced content relevance based on real-time user behavior"
    ]
  },
  {
    company: "Meta Reality Labs",
    title: "AI-Powered Virtual Reality Experience",
    description: "Integrated AI-driven environment generation into Meta's VR platforms, enabling seamless world-building and enhanced immersive experiences.",
    image: "/meta_vr_ai.svg",
    results: [
      "Real-time adaptive VR content generation",
      "50% improvement in user immersion and satisfaction",
      "Scalable AI-driven VR content creation pipeline"
    ]
  },
  {
    company: "Meta AI Research",
    title: "Generative AI for Real-Time Translation",
    description: "Developed an AI-powered real-time translation system, improving accessibility and global connectivity across Meta's platforms.",
    image: "/meta_translation_ai.svg",
    results: [
      "98% translation accuracy across multiple languages",
      "30% faster conversation processing",
      "Seamless cross-language communication in chat and video calls"
    ]
  }
];

export function SuccessStories() {
  return (
    <section className="bg-[#6C4AB6] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how Meta leverages Generative AI to revolutionize user experiences and business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-[240px]">
                <img
                  src={story.image}
                  alt={story.company}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="text-purple-700 font-medium mb-2">{story.company}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-6">{story.description}</p>
                <div className="space-y-3">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-gray-800">
                      <span className="w-2 h-2 bg-purple-700 rounded-full mr-3"></span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;

