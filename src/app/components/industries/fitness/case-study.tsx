"use client";

import Image from "next/image";

const caseStudies = [
  {
    title: "AI-Driven Personalized Workout Platform",
    description: "We collaborated with a fitness startup to build an AI-powered workout recommendation system. This platform uses user data—like fitness goals, workout history, and biometric stats—to generate adaptive training plans in real-time.",
    image: "/images/fitness-workout-platform.jpg",
    highlights: [
      "Dynamic workout plans tailored to user goals",
      "Increased user retention by 50% with AI personalization",
      "Real-time progress tracking and goal adjustments",
      "Seamless app integration with wearable devices",
      "Boosted engagement with AI-driven fitness challenges"
    ]
  },
  {
    title: "AI-Enhanced Nutrition and Meal Planning App",
    description: "We partnered with a health and wellness brand to create an AI-based nutrition planner. The solution recommends personalized meal plans by analyzing dietary preferences, fitness goals, and metabolic data, ensuring optimal health outcomes.",
    image: "/images/fitness-nutrition-app.jpg",
    highlights: [
      "AI-curated meal plans based on health metrics",
      "Improved diet adherence by 40% through personalization",
      "Real-time calorie tracking and macro analysis",
      "Integrated with fitness apps for holistic health insights",
      "Enhanced user satisfaction with adaptive nutrition guidance"
    ]
  }
];

export function CaseStudy() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          AI-Powered Fitness Solutions
        </h2>
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-[#0F1629] rounded-lg overflow-hidden border border-black mb-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-400 mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span className="text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[300px] border-2 border-black"> 
                <Image
                  src={study.image}
                  alt={study.title}
                  layout="intrinsic" 
                  width={600}  
                  height={400} 
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudy;
