"use client";

const techStack = {
  "Risk Modeling & Analytics": [
    { name: "SAS", logo: "/tech/sas.svg" },
    { name: "R", logo: "/tech/r.svg" },
    { name: "Python (Scikit-learn)", logo: "/tech/python.svg" }
  ],
  "Machine Learning Frameworks": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "XGBoost", logo: "/tech/xgboost.svg" }
  ],
  "Data Visualization": [
    { name: "Tableau", logo: "/tech/tableau.svg" },
    { name: "Power BI", logo: "/tech/powerbi.svg" },
    { name: "Matplotlib", logo: "/tech/matplotlib.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/tech/python.svg" },
    { name: "R", logo: "/tech/r.svg" },
    { name: "SQL", logo: "/tech/sql.svg" }
  ],
  "Cloud & AI Services": [
    { name: "AWS SageMaker", logo: "/tech/aws-sagemaker.svg" },
    { name: "Google AI", logo: "/tech/googleai.svg" },
    { name: "Azure ML", logo: "/tech/azure.svg" }
  ],
  "MLOps & Deployment": [
    { name: "Docker", logo: "/tech/docker.svg" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
    { name: "MLflow", logo: "/tech/mlflow.svg" }
  ],
  "Databases": [
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/tech/mongodb.svg" },
    { name: "BigQuery", logo: "/tech/bigquery.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Technologies We Use for Credit Risk Management
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={index} className="border border-black rounded-lg p-6 bg-[#F3F1EB]">
              <h3 className="text-xl font-semibold text-black mb-4">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
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
