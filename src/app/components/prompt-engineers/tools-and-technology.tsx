"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "DL Frameworks": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "Keras", logo: "/tech/keras.svg" },
  ],
  "Data Storage": [
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/tech/mongodb.svg" },
    { name: "MySQL", logo: "/tech/mysql.svg" },
    { name: "Firebase", logo: "/tech/firebase.svg" },
    { name: "Redis", logo: "/tech/redis.svg" },
  ],
  "Data Processing": [
    { name: "Apache Spark", logo: "/tech/spark.svg" },
    { name: "Hadoop", logo: "/tech/hadoop.svg" },
  ],
  "Machine Learning": [
    { name: "Scikit-learn", logo: "/tech/sklearn.svg" },
    { name: "XGBoost", logo: "/tech/xgboost.svg" },
  ],
  "Model Deployment": [
    { name: "TensorFlow Serving", logo: "/tech/tf-serving.svg" },
    { name: "MLflow", logo: "/tech/mlflow.svg" },
  ],
  "API Development": [
    { name: "FastAPI", logo: "/tech/fastapi.svg" },
    { name: "Flask", logo: "/tech/flask.svg" },
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" },
  ],
  "Frontend": [
    { name: "React", logo: "/tech/react.svg" },
    { name: "Next.js", logo: "/tech/nextjs.svg" },
  ],
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      {/* Lavender Background */}
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-gray-700 uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Tech stack our Prompt Engineers work with
          </h2>
          <p className="text-gray-800 mt-4">
            Our Prompt engineers recommend the best technology stack to develop
            perfect Adaptive AI solutions for businesses.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6 bg-[#F3F1EB]">
                {/* Beige Box with Light Black Border */}
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
                        <span className="text-gray-800 text-sm text-center">{item.name}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="border border-gray-700 rounded-lg p-6 bg-[#F3F1EB]">
                {/* Beige Box with Light Black Border */}
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#E5DCCE] text-gray-800 rounded-full text-sm"
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
