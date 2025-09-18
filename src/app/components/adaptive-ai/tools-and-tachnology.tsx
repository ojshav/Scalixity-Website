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
  "AI Frameworks": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" },
    { name: "ONNX", logo: "/images/tech/onnx.svg" },
  ],
  "Integration & Dev Tools": [
    { name: "Docker", logo: "/images/tech/docker.svg" },
    { name: "Kubernetes", logo: "/images/tech/kubernetes.svg" },
    { name: "CI/CD Pipelines", logo: "/images/tech/cicd.svg" },
    { name: "FastAPI", logo: "/images/tech/fastapi.svg" },
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" },
  ],
  "Databases": [
    { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
    { name: "BigQuery", logo: "/images/tech/bigquery.svg" },
    { name: "Snowflake", logo: "/images/tech/snowflake.svg" },
  ],
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender section background */}
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-black uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Tech stack we use to build Adaptive AI solutions
          </h2>
          <p className="text-black mt-4 max-w-3xl mx-auto">
            Our AI Developers recommend the best technology stack to develop
            perfect Adaptive AI solutions for businesses. We use cutting-edge
            tools for AI development, data management, cloud computing,
            deployment, and machine learning.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 6).map(([category, items], index) => (
              <div
                key={index}
                className="bg-[#F3F1EB] border-2 border-black rounded-lg p-6"
              >
                <h3 className="text-black font-semibold mb-6">{category}</h3>
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
              <div
                key={index}
                className="bg-[#F3F1EB] border-2 border-black rounded-lg p-6"
              >
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {typeof items === "object" &&
                    items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm"
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
