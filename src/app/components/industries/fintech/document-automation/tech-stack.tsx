"use client";

const techStack = {
  
  "Natural Language Processing (NLP)": [
    { name: "spaCy", logo: "/images/tech/spacy.svg" },
    { name: "Transformers (Hugging Face)", logo: "/images/tech/huggingface.svg" },
    { name: "BERT", logo: "/images/tech/bert.svg" }
  ],
  "Data Extraction & Parsing": [
    { name: "BeautifulSoup", logo: "/images/tech/azure.svg" },
    { name: "Pandas", logo: "/images/tech/pandas.svg" },
    { name: "Apache PDFBox", logo: "/images/tech/spark.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/images/tech/python.svg" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "Java", logo: "/images/tech/java.svg" }
  ],
  "Cloud & AI Services": [
    { name: "AWS Textract", logo: "/images/tech/aws.svg" },
    { name: "Google AI", logo: "/images/tech/googlecloud.svg" },
    { name: "Azure Cognitive Services", logo: "/images/tech/azure.svg" }
  ],
  "MLOps & Deployment": [
    { name: "Docker", logo: "/images/tech/docker.svg" },
    { name: "Kubernetes", logo: "/images/tech/kubernetes.svg" },
    { name: "MLflow", logo: "/images/tech/mlflow.svg" }
  ],
  "Databases & Storage": [
    { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
    { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
    { name: "Firebase", logo: "/images/tech/firebase.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Technologies We Use for Financial Document Automation
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
