"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
      { name: "Scikit-Learn", logo: "/images/tech/scikit-learn.svg" }
    ]
  },
  {
    category: "Medical Imaging Models",
    items: [
      { name: "UNet", logo: "/images/tech/unet.webp" },
      { name: "ResNet", logo: "/images/tech/resnet.webp" },
      { name: "VGGNet", logo: "/images/tech/vggnet.webp" }
    ]
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "DICOM", logo: "/images/tech/d3.svg" },
      { name: "Apache Kafka", logo: "/images/tech/kafka.svg" },
      { name: "MongoDB", logo: "/images/tech/mongodb.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS SageMaker", logo: "/images/tech/aws.svg" },
      { name: "Google Cloud AI", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure AI", logo: "/images/tech/azure.svg" }
    ]
  },
  {
    category: "Visualization & Analysis",
    items: [
      { name: "Matplotlib", logo: "/images/tech/matplotlib.svg" },
      { name: "Seaborn", logo: "/images/tech/seaborn.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-white uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Medical Imaging Intelligence Tech Stack
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
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
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg"
            >
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-black text-sm text-center">{item.name}</span>
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
