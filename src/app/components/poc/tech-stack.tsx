"use client";

const techStack = [
  {
    category: "Machine Learning Frameworks",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
      { name: "Scikit-Learn", logo: "/images/tech/scikit-learn.svg" }
    ]
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS SageMaker", logo: "/images/tech/aws.svg" },
      { name: "Google AI Platform", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure Machine Learning", logo: "/images/tech/azure.svg" }
    ]
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "Apache Spark", logo: "/images/tech/spark.svg" },
      { name: "Kafka", logo: "/images/tech/kafka.svg" },
      { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" }
    ]
  },
  {
    category: "Model Deployment & APIs",
    items: [
      { name: "FastAPI", logo: "/images/tech/fastapi.svg" },
      { name: "Flask", logo: "/images/tech/flask.svg" },
      { name: "TensorFlow Serving", logo: "/images/tech/tensorflow.svg" }
    ]
  },
  {
    category: "MLOps & Monitoring",
    items: [
      { name: "MLflow", logo: "/images/tech/mlflow.svg" },
      { name: "Kubeflow", logo: "/images/tech/kubernetes.svg" },
      { name: "Prometheus", logo: "/images/tech/prometheus.webp" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI POC Development Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Leveraging the latest AI tools, frameworks, and cloud solutions to build scalable, high-performance AI POCs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-black text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
