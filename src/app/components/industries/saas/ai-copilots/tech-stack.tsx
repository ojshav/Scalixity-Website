"use client";

import { motion } from "framer-motion";


const copilotTechStack = [
  {
    category: "AI Models & Frameworks",
    items: [
      { name: "OpenAI GPT", logo: "/images/tech/openai.svg" },
      { name: "Hugging Face Transformers", logo: "/images/tech/huggingface.svg" },
      { name: "BERT", logo: "/images/tech/bert.svg" }
    ]
  },
  {
    category: "Natural Language Processing",
    items: [
      { name: "SpaCy", logo: "/images/tech/spacy.svg" },
      { name: "NLTK", logo: "/images/tech/nltk.svg" },
      { name: "TensorFlow NLP", logo: "/images/tech/tensorflow.svg" }
    ]
  },
  {
    category: "Automation & Orchestration",
    items: [
      { name: "Zapier", logo: "/images/tech/zapier.svg" },
      { name: "Apache Airflow", logo: "/images/tech/apache-spark.svg" },
      { name: "n8n", logo: "/images/tech/n8n.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS Lambda", logo: "/images/tech/aws.svg" },
      { name: "Google Cloud AI", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure AI", logo: "/images/tech/azure.svg" }
    ]
  },
  {
    category: "APIs & Integration",
    items: [
      { name: "FastAPI", logo: "/images/tech/fastapi.svg" },
      { name: "GraphQL", logo: "/images/tech/graphql.svg" },
      { name: "RESTful APIs", logo: "/images/tech/rest-api.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI Tech Stack for SaaS Copilots
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Empower your SaaS platform with cutting-edge AI Copilot technologies, combining NLP, AI models, and cloud integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copilotTechStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border-2 border-black"
            >
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2 border-2 border-black rounded-lg" />
                    <span className="text-black text-sm text-center font-medium">{item.name}</span>
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
