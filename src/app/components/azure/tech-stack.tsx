"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'



const scalixityTechCategories = {
  "Data Processing & Analytics": [
    { name: "Pandas", logo: "/images/tech/pandas.svg" },
    { name: "NumPy", logo: "/images/tech/numpy.svg" },
    { name: "Dask", logo: "/images/tech/d3.svg" }
  ],
  "Visualization & Dashboards": [
    { name: "Matplotlib", logo: "/images/tech/matplotlib.svg" },
    { name: "Seaborn", logo: "/images/tech/seaborn.svg" },
    { name: "Plotly", logo: "/images/tech/predictive-analytics.svg" }
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Scikit-learn", logo: "/images/tech/scikit-learn.svg" }
  ],
  "Databases & Storage": [
    { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
    { name: "Redis", logo: "/images/tech/redis.svg" }
  ],

  "Cloud & DevOps": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Docker", logo: "/images/tech/docker.svg" },
    { name: "Kubernetes", logo: "/images/tech/kubernetes.svg" }

  ]
}

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">OUR TECHNOLOGY STACK</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Scalixity&apos;s  Cutting-Edge Tech Tools
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Leveraging advanced technologies to deliver data-driven solutions for your business.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(scalixityTechCategories).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F5F5DC] rounded-xl border border-black p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-black text-center">{item.name}</span>
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
