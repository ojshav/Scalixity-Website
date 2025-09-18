"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Data Processing & Analysis",
    items: [
      { name: "Pandas", logo: "/images/tech/pandas.svg" },
      { name: "NumPy", logo: "/images/tech/numpy.svg" }
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "Scikit-learn", logo: "/images/tech/scikit-learn.svg" },
      { name: "XGBoost", logo: "/images/tech/xgboost.svg" }
    ]
  },
  {
    category: "Data Visualization",
    items: [
      { name: "Matplotlib", logo: "/images/tech/matplotlib.svg" },
      { name: "Seaborn", logo: "/images/tech/seaborn.svg" },
      { name: "Plotly", logo: "/images/tech/vggnet.webp" },
    ]
  },
  {
    category: "Data Storage & Databases",
    items: [
      { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
      { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
      { name: "BigQuery", logo: "/images/tech/bigquery.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS", logo: "/images/tech/aws.svg" },
      { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure", logo: "/images/tech/azure.svg" }
    ]
  },
  {
    category: "Monitoring & Security",
    items: [
      { name: "Prometheus", logo: "/images/tech/unet.webp" },
      { name: "Grafana", logo: "/images/tech/resnet.webp" },
      { name: "ELK Stack", logo: "/images/tech/vggnet.webp" }
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
            Patient Data Analytics Tech Stack
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Discover the robust AI and data technologies we harness to deliver real-time insights, predictive models, and secure data processing for patient care.
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
              className="bg-white p-8 rounded-xl border border-black shadow-lg"
            >
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
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
