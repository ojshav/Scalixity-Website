"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/tech/pytorch.svg" },
      { name: "Keras", logo: "/tech/keras.svg" }
    ]
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "spaCy", logo: "/tech/spacy.svg" },
      { name: "Hugging Face", logo: "/tech/huggingface.svg" },
      { name: "BERT", logo: "/tech/bert.svg" }
    ]
  },
  {
    category: "Medical Data Processing",
    items: [
      { name: "Pandas", logo: "/tech/pandas.svg" },
      { name: "NumPy", logo: "/tech/numpy.svg" },
      { name: "FHIR", logo: "/tech/fhir.svg" }
    ]
  },
  {
    category: "Healthcare APIs & Integration",
    items: [
      { name: "Google Health API", logo: "/tech/googlehealth.svg" },
      { name: "AWS HealthLake", logo: "/tech/healthlake.svg" },
      { name: "HL7", logo: "/tech/hl7.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", logo: "/tech/aws.svg" },
      { name: "Google Cloud", logo: "/tech/gcp.svg" },
      { name: "Azure", logo: "/tech/azure.svg" }
    ]
  },
  {
    category: "Security & Compliance",
    items: [
      { name: "HIPAA Compliance", logo: "/tech/hipaa.svg" },
      { name: "OAuth", logo: "/tech/oauth.svg" },
      { name: "JWT", logo: "/tech/jwt.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#5B1DAF] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Healthcare AI Solutions Tech Stack
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empowering healthcare with AI-driven insights, seamless integrations, and secure, compliant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#5B1DAF] mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-gray-600 text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
