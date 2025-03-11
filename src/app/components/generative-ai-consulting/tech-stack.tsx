"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techCategories = {
  "DL Frameworks": [
    { name: "Caffe2", logo: "/images/tech/caffe2.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "NVCAFFE", logo: "/images/tech/nvcaffe.svg" },
    { name: "Chainer", logo: "/images/tech/chainer.svg" },
    { name: "Theano", logo: "/images/tech/theano.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" }
  ],
  "Modules/Toolkits": [
    { name: "Kurento", logo: "/images/tech/kurento.svg" },
    { name: "ONNX", logo: "/images/tech/onnx.svg" },
    { name: "Core ML", logo: "/images/tech/coreml.svg" }
  ],
  "Libraries": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "Tensor2Tensor", logo: "/images/tech/tensor2tensor.svg" },
    { name: "tf-slim", logo: "/images/tech/tf-slim.svg" },
    { name: "Opennn", logo: "/images/tech/opennn.svg" },
    { name: "Sonnet", logo: "/images/tech/sonnet.svg" },
    { name: "Neuroph", logo: "/images/tech/neuroph.svg" }
  ],
  "Image Classification Models": [
    "VGG-16",
    "ResNet 50",
    "Inceptionv3",
    "EfficientNet"
  ],
  "Generative AI Models": [
    "Generative Adversarial Networks",
    "Transformer Models (GPT3, Lamda)"
  ],
  "Neural Networks": [
    "CNN",
    "RNN",
    "Representation Learning",
    "Variational Autoencoders",
    "Manifold Learning",
    "Bayesian Network",
    "Autoregressive Networks"
  ],
  "Algorithms": [
    "Supervised/Unsupervised Learning",
    "Metric Learning",
    "Fewshot Learning",
    "Cluster"
  ]
};

type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">Tool & Technology</span>
          <h2 className="text-5xl font-bold text-black mt-4 mb-6">
            Tech Stack for Generative AI Consulting
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Our AI developers recommend cutting-edge technology stacks to build tailored AI solutions for your business.
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
              className="bg-white rounded-2xl shadow-lg border border-[#0A0B14] p-8"
            >
              <h3 className="text-3xl font-bold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {Array.isArray(items) ? (
                  items.map((item: TechItem, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center">
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
                          <span className="text-md text-black text-center">{item.name}</span>
                        </>
                      ) : (
                        <span className="text-md text-black bg-[#A8B2E7] px-4 py-2 rounded-full">
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
                        className="text-md text-black bg-[#A8B2E7] px-4 py-2 rounded-full"
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
