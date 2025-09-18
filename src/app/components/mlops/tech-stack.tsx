"use client";

const techStack = [
  {
    category: "Model Development & Versioning",
    items: [
      { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
      { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
      { name: "MLflow", logo: "/images/tech/mlflow.svg" }
    ]
  },
  {
    category: "Data Pipeline & Feature Engineering",
    items: [
      { name: "Apache Airflow", logo: "/images/tech/apache-spark.svg" },
      { name: "Kafka", logo: "/images/tech/kafka.svg" },
      { name: "Feast", logo: "/images/tech/fhir.webp" }
    ]
  },
  {
    category: "Model Deployment & Serving",
    items: [
      { name: "Kubernetes", logo: "/images/tech/kubernetes.svg" },
      { name: "TensorFlow Serving", logo: "/images/tech/tensor2tensor.svg" },
      { name: "TorchServe", logo: "/images/tech/t5.svg" }
    ]
  },
  {
    category: "CI/CD & Automation",
    items: [
      { name: "GitHub Actions", logo: "/images/tech/gatk.webp" },
      { name: "Jenkins", logo: "/images/tech/jwt.webp" },
      { name: "ArgoCD", logo: "/images/tech/api3.webp" }
    ]
  },
  {
    category: "Monitoring & Performance Tracking",
    items: [
      { name: "Prometheus", logo: "/images/tech/prometheus.webp" },
      { name: "Grafana", logo: "/images/tech/grafana.webp" },
      { name: "Seldon Core", logo: "/images/tech/sd-2-1.webp" }
    ]
  },
  {
    category: "Cloud & Storage Solutions",
    items: [
      { name: "AWS SageMaker", logo: "/images/tech/aws.svg" },
      { name: "Google Vertex AI", logo: "/images/tech/googlecloud.svg" },
      { name: "Azure ML", logo: "/images/tech/azure.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">TECH STACK</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            MLOps Consulting Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We utilize cutting-edge MLOps tools to streamline ML workflows, automate pipelines, and optimize model performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg">
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
