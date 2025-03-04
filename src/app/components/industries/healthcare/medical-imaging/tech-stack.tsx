"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/tech/pytorch.svg" },
      { name: "Scikit-Learn", logo: "/tech/scikit-learn.svg" }
    ]
  },
  {
    category: "Medical Imaging Models",
    items: [
      { name: "UNet", logo: "/tech/unet.svg" },
      { name: "ResNet", logo: "/tech/resnet.svg" },
      { name: "VGGNet", logo: "/tech/vggnet.svg" }
    ]
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "DICOM", logo: "/tech/dicom.svg" },
      { name: "Apache Kafka", logo: "/tech/kafka.svg" },
      { name: "MongoDB", logo: "/tech/mongodb.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS SageMaker", logo: "/tech/sagemaker.svg" },
      { name: "Google Cloud AI", logo: "/tech/gcp-ai.svg" },
      { name: "Azure AI", logo: "/tech/azure-ai.svg" }
    ]
  },
  {
    category: "Visualization & Analysis",
    items: [
      { name: "Matplotlib", logo: "/tech/matplotlib.svg" },
      { name: "Seaborn", logo: "/tech/seaborn.svg" },
      { name: "Plotly", logo: "/tech/plotly.svg" }
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
            Medical Imaging Intelligence Tech Stack
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empowering AI-driven medical imaging solutions using cutting-edge technology and robust frameworks for seamless diagnostics.
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
