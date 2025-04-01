"use client";

const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", logo: "/images/tech/python.svg" },
      { name: "R", logo: "/images/tech/r.svg" },
    ],
  },
  {
    category: "Machine Learning Frameworks",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg" }
    ],
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "Pandas", logo: "/images/tech/pandas.svg" },
      { name: "Apache Spark", logo: "/images/tech/spark.svg" },
      { name: "Hadoop", logo: "/images/tech/hadoop.svg" },
    ],
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS SageMaker", logo: "/images/tech/aws.svg" },
      { name: "Google Vertex AI", logo: "/images/tech/google-cloud.svg" },
      { name: "Azure ML", logo: "/images/tech/azure.svg" },
    ],
  },
  {
    category: "Model Monitoring & MLOps",
    items: [
      { name: "MLflow", logo: "/images/tech/mlflow.svg" },
      { name: "Kubeflow", logo: "/images/tech/kubernetes.svg" },
      { name: "DVC", logo: "/images/tech/d3.svg" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Machine Learning Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build, train, and deploy high-performance ML models.
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
