"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "Programming Languages": [
    { name: "Python", logo: "/images/tech/python.svg" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "R", logo: "/images/tech/r.svg" },
    { name: "Julia", logo: "/images/tech/julia.svg" },
  ],
  "AI Development Tools": [
    { name: "Jupyter Notebook", logo: "/images/tech/jupyter.svg" },
    { name: "Google Colab", logo: "/images/tech/colab.svg" },
    { name: "Hugging Face", logo: "/images/tech/huggingface.svg" },
  ],
  "Data Warehousing & Management": [
    { name: "BigQuery", logo: "/images/tech/bigquery.svg" },
    { name: "Snowflake", logo: "/images/tech/snowflake.svg" },
    { name: "Redshift", logo: "/images/tech/redshift.svg" },
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" },
  ],
  "ML Platforms": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" },
  ],
  "Generative AI Models": ["GPT-3.5", "Gemini", "Claude AI"],
  "Algorithms": [
    "Clustering",
    "Metric Learning",
    "Few-shot Learning",
    "Supervised Learning",
    "Unsupervised Learning",
  ],
  "Neural Networks": [
    "CNN",
    "RNN",
    "Representation Learning",
    "Variational Autoencoders",
    "Manifold Learning",
    "Bayesian Networks",
  ],
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-black uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-4xl font-bold text-black mt-4">
            Tech stack we use to build advanced AI agents
          </h2>
          <p className="text-xl text-black mt-4 max-w-3xl mx-auto">
            Our AI Developers recommend the best technology stack to develop
            perfect Enterprise AI Agents for businesses. We use cutting-edge
            tools for AI development, data management, cloud computing,
            deployment, and machine learning.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 6).map(([category, items], index) => (
              <div key={index} className="border border-black rounded-2xl p-6 shadow-lg">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {items.map((item, idx) =>
                    typeof item === "object" ? (
                      <div key={idx} className="flex flex-col items-center">
                        <Image
                          src={item.logo!}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="mb-2"
                        />
                        <span className="text-black text-sm text-center">
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
              <div key={index} className="border border-black rounded-2xl p-6 shadow-lg">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span key={idx} className="text-black text-sm">
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

export default ToolsAndTechnology;
