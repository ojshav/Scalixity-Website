"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = {
  "Deep Learning Frameworks": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" }
  ],
  "Computer Vision Libraries": [
    { name: "OpenCV", logo: "/tech/opencv.svg" },
    { name: "Detectron2", logo: "/tech/detectron2.svg" }
  ],
  "Model Deployment & Optimization": [
    { name: "ONNX", logo: "/tech/onnx.svg" },
    { name: "TensorRT", logo: "/tech/tensorrt.svg" }
  ],
  "Edge AI & IoT Integration": [
    { name: "NVIDIA Jetson", logo: "/tech/jetson.svg" },
    { name: "Intel OpenVINO", logo: "/tech/openvino.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="py-24" style={{ backgroundColor: "#A8B2E7" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            COMPUTER VISION TECH STACK
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Computer Vision Technology Stack
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We utilize cutting-edge AI and computer vision tools to build efficient, scalable, and high-performance visual recognition solutions.
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border-2 border-black p-6"
              style={{ backgroundColor: "#F3F1EB", color: "black" }}
            >
              <h3 className="text-lg font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center">
                    <div className="w-16 h-16 relative mb-2">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain filter invert"
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

export default TechStack;
