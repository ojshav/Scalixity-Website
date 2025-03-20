"use client"
import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Chatbot Development",
    description:
      "Our ChatGPT developers can create a tailored chatbot for websites, applications, or messaging platforms using the ChatGPT model. They can help with integration of the ChatGPT API into the chatbot backend and training the model to comprehend the particular domain or use case.",
  },
  {
    title: "Voice Assistant Integration",
    description:
      "Our developers can help with integration of ChatGPT model with a voice assistant application and teach the model to detect, distinguish and react to different voice commands.",
  },
  {
    title: "ChatGPT API Integration",
    description:
      "To faster development time, increase scalability and reduce infrastructure cost, our AI engineers can help you setup an API that connects the ChatGPT model with your new or existing software system or application. Once the connection is established our developers can train the model on a specific dataset or fine-tune it to get the intended outcomes.",
  },
  {
    title: "ChatGPT SDK Integration",
    description:
      "Our developers can use the ChatGPT SDKs to integrate ChatGPT with other tools like natural language processing engines, speech-to-text engines, and machine learning frameworks, enabling them to build more complex conversational interfaces. ChatGPT SDK integration also offers better performance and scalability than API integration, as the model is integrated directly into the application code.",
  },
  {
    title: "Hybrid Integration",
    description:
      "We can help you to build a seamless conversational experience by using a combination of on-premises and cloud-based ChatGPT models. A hybrid integration can offer you a flexible and cost-effective way to leverage the power of ChatGPT.",
  },
];

export function WhatWeOffer() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-gray-400 uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Our ChatGPT Integration Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Integrating ChatGPT into your software can largely enhance your product’s capabilities. As you can improve the ability of your product to interact with your users using natural and intuitive methods, it can help you improve your product engagement rate by at least 60%.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-8 rounded-xl border border-black hover:border-purple-500 transition-colors" // Black border added here
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
