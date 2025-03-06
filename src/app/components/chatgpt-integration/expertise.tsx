"use client";

import { Cloud, Database, LayoutDashboard, LineChart, MessageCircle, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Determine the Use-Case",
    description: "We start by analyzing your business needs to define the most effective use case for ChatGPT integration. This includes identifying key functionalities, user interactions, and expected outcomes."
  },
  {
    title: "Select the ChatGPT Provider",
    description: "Choosing the right ChatGPT provider is crucial for seamless integration. We help you evaluate and select the best ChatGPT model based on your requirements, ensuring optimal performance and scalability."
  },
  {
    title: "Configure APIs or SDKs",
    description: "Once the provider is selected, we configure the necessary APIs or SDKs to connect ChatGPT with your existing systems. This step involves setting up authentication, data pipelines, and response handling mechanisms."
  },
  {
    title: "Train the Model",
    description: "To enhance ChatGPT’s efficiency, we fine-tune the model using your domain-specific data. Training the model ensures improved accuracy, relevance, and contextual understanding tailored to your business needs."
  },
  {
    title: "Test and Deploy",
    description: "After training, we rigorously test the ChatGPT integration for performance, accuracy, and user experience. Once validated, we deploy it into your live environment, ensuring a smooth transition."
  },
  {
    title: "Maintenance and Optimization",
    description: "ChatGPT requires continuous monitoring and periodic updates. We provide ongoing maintenance, retraining, and performance optimization to keep your AI solution efficient and aligned with evolving business requirements."
  }
];

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

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            ChatGPT Integration Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The process of ChatGPT integration can vary depending on the specific use case and integration method, but generally involves the following steps.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Core Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our core expertise in AI-powered model-based solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default { Process, Expertise };
