"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

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
}
type TechItem = { name: string; logo: string } | string;

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">TOOL & TECHNOLOGY</span>
          <h2 className="text-4xl font-bold text-foreground mt-4 mb-6">
            Tech stack we use for Generative AI consulting services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI Developers recommend the best technology stack to develop perfect AI solutions for business.
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
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {Array.isArray(items) ? (
                  items.map((item: TechItem, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center">
                      {typeof item === 'object' && item.logo ? (
                        <>
                          <div className="w-16 h-16 relative mb-2">
                            <Image
                              src={item.logo}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <span className="text-sm text-muted-foreground text-center">{item.name}</span>
                        </>
                      ) : (
                        <span className="text-sm text-muted-foreground text-center px-3 py-2 bg-muted rounded-full">
                          {typeof item === 'string' ? item : item.name}
                        </span>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-wrap gap-2">
                    {(items as TechItem[]).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-sm text-muted-foreground px-3 py-2 bg-muted rounded-full"
                      >
                        {typeof item === 'string' ? item : item.name}
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
