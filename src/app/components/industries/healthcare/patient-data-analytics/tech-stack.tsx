"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Data Processing & Analysis",
    items: [
      { name: "Pandas", logo: "/tech/pandas.svg" },
      { name: "NumPy", logo: "/tech/numpy.svg" },
      { name: "Dask", logo: "/tech/dask.svg" }
    ]
  },
  {
    category: "Machine Learning & AI",
    items: [
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
      { name: "Scikit-learn", logo: "/tech/scikit-learn.svg" },
      { name: "XGBoost", logo: "/tech/xgboost.svg" }
    ]
  },
  {
    category: "Data Visualization",
    items: [
      { name: "Matplotlib", logo: "/tech/matplotlib.svg" },
      { name: "Seaborn", logo: "/tech/seaborn.svg" },
      { name: "Plotly", logo: "/tech/plotly.svg" }
    ]
  },
  {
    category: "Data Storage & Databases",
    items: [
      { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
      { name: "MongoDB", logo: "/tech/mongodb.svg" },
      { name: "BigQuery", logo: "/tech/bigquery.svg" }
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
    category: "Monitoring & Security",
    items: [
      { name: "Prometheus", logo: "/tech/prometheus.svg" },
      { name: "Grafana", logo: "/tech/grafana.svg" },
      { name: "ELK Stack", logo: "/tech/elk.svg" }
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
            Patient Data Analytics Tech Stack
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
