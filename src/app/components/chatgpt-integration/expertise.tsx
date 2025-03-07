"use client";

import { Cloud, LayoutDashboard, LineChart, MessageCircle } from 'lucide-react';

const expertiseAreas = [
  {
    icon: LayoutDashboard,
    title: "Machine Learning",
    description: "Our AI developers possess extensive knowledge and experience in various AI development services. They can proficiently implement machine learning concepts such as predictive modeling, NLP, and deep learning to create robust diffusion model-driven solutions that transform textual data into visual data."
  },
  {
    icon: MessageCircle,
    title: "Fine Tuning",
    description: "Fine-tuning AI models on a smaller dataset can tailor them to a specific task, which is commonly referred to as transfer learning. By doing so, computation and data requirements for training a top-notch model for a particular use case can be reduced."
  },
  {
    icon: LineChart,
    title: "Deep Learning (DL) Development",
    description: "Our comprehensive knowledge of deep learning models enables us to leverage multi-layered artificial neural networks to model intricate patterns in data. Moreover, we adeptly utilize the deep learning architecture specifically designed for NLP tasks to engineer high-performing solutions."
  },
  {
    icon: Cloud,
    title: "Transfer Learning",
    description: "Our area of expertise lies in transfer learning, an AI technology that enables the utilization of pre-trained models on comparable tasks, which enhances performance and reduces training time. We possess a profound understanding of how to leverage pre-trained models to address specific issues, resulting in efficient and effective solutions."
  }
];

export function Expertise() {
  return (
    <section className="bg-[#F3F1EB] py-24"> {/* Soft warm beige background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Core Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our core expertise in AI-powered model-based solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-[#A8B2E7] p-8 rounded-xl border border-black shadow-lg transition-transform hover:scale-105"
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;

