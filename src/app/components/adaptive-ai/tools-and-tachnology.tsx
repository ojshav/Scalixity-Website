"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "Programming Languages": [
    { name: "Python", logo: "/tech/python.svg" },
    { name: "JavaScript", logo: "/tech/javascript.svg" },
    { name: "R", logo: "/tech/r.svg" },
    { name: "Julia", logo: "/tech/julia.svg" },
  ],
  "AI Frameworks": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "Keras", logo: "/tech/keras.svg" },
    { name: "ONNX", logo: "/tech/onnx.svg" },
  ],
  "Integration & Dev Tools": [
    { name: "Docker", logo: "/tech/docker.svg" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
    { name: "CI/CD Pipelines", logo: "/tech/cicd.svg" },
    { name: "FastAPI", logo: "/tech/fastapi.svg" },
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" },
  ],
  "Databases": [
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/tech/mongodb.svg" },
    { name: "BigQuery", logo: "/tech/bigquery.svg" },
    { name: "Snowflake", logo: "/tech/snowflake.svg" },
  ],
  "Neural Networks": [
    "CNN",
    "RNN",
    "Transformer Networks",
    "Variational Autoencoders",
    "Bayesian Networks",
  ],
  "Algorithms": [
    "Clustering",
    "Metric Learning",
    "Few-shot Learning",
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
  ],
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Tech stack we use to build Adaptive AI solutions
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Our AI Developers recommend the best technology stack to develop
            perfect Adaptive AI solutions for businesses. We use cutting-edge
            tools for AI development, data management, cloud computing,
            deployment, and machine learning.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 6).map(([category, items], index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Array.isArray(items) &&
                    items.map((item, idx) =>
                      typeof item === "object" ? (
                        <div key={idx} className="flex flex-col items-center">
                          <Image
                            src={item.logo!}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="mb-2"
                          />
                          <span className="text-gray-400 text-sm text-center">
                            {item.name}
                          </span>
                        </div>
                      ) : null
                    )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(6).map(([category, items], index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {typeof items === "object" &&
                    items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#1A1B26] text-gray-400 rounded-full text-sm"
                      >
                        {typeof item === "string" ? item : item.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
