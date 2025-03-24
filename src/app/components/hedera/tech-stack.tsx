"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techCategories = {
  "DL Frameworks": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" },
    { name: "MXNet", logo: "/images/tech/mxnet.svg" },
  ],
  "Modules/Toolkits": [
    { name: "Hugging Face Transformers", logo: "/images/tech/huggingface.svg" },
    { name: "ONNX", logo: "/images/tech/onnx.svg" },
    { name: "Core ML", logo: "/images/tech/coreml.svg" },
  ],
  Libraries: [
    { name: "SciKit-Learn", logo: "/images/tech/scikit-learn.svg" },
    { name: "Pandas", logo: "/images/tech/pandas.svg" },
    { name: "NumPy", logo: "/images/tech/numpy.svg" },
    { name: "Matplotlib", logo: "/images/tech/matplotlib.svg" },
    { name: "Seaborn", logo: "/images/tech/seaborn.svg" },
  ],
  "Image Classification Models": [
    "VGG-16",
    "ResNet 50",
    "Inceptionv3",
    "EfficientNet",
    "MobileNet",
  ],
  "Generative AI Models": [
    "Generative Adversarial Networks (GANs)",
    "Transformer Models (GPT-4, BERT)",
    "Diffusion Models",
    "StyleGAN",
  ],
  "Neural Networks": [
    "Convolutional Neural Networks (CNN)",
    "Recurrent Neural Networks (RNN)",
    "Autoencoders",
    "Graph Neural Networks (GNN)",
    "Long Short-Term Memory (LSTM)",
  ],
  Algorithms: [
    "Supervised/Unsupervised Learning",
    "Reinforcement Learning",
    "Few-shot Learning",
    "Transfer Learning",
    "Clustering Algorithms",
  ],
};

type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TOOLS & TECHNOLOGIES
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Technology Stack for Scalixity&apos;s AI Solutions
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Discover the powerful AI technologies we use to build intelligent,
            efficient, and scalable solutions for your business.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(techCategories).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] rounded-xl border border-black p-6"
            >
              <h3 className="text-lg font-semibold text-black mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {Array.isArray(items) ? (
                  items.map((item: TechItem, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center"
                    >
                      {typeof item === "object" && item.logo ? (
                        <>
                          <div className="w-16 h-16 relative mb-2">
                            <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-black text-center">
                            {item.name}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-black text-center px-3 py-2 bg-[#E8E6E0] rounded-full">
                          {typeof item === "string" ? item : item.name}
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-wrap gap-2">
                    {(items as TechItem[]).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-black px-3 py-2 bg-[#E8E6E0] rounded-full"
                      >
                        {typeof item === "string" ? item : item.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
