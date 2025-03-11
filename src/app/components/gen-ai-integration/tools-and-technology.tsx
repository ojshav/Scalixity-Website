import Image from 'next/image'

type TechItem = { name: string; logo?: string }
type Technologies = Record<string, (TechItem | string)[]>

const technologies: Technologies = {
  "AI Frameworks": [
    { name: "MXNet", logo: "/tech/mxnet.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "Keras", logo: "/tech/keras.svg" }
  ],
  "Generative AI Models": [
    { name: "GPT-3", logo: "/tech/gpt3.svg" },
    { name: "GPT-3.5 Turbo", logo: "/tech/gpt3-5.svg" },
    { name: "Lamda", logo: "/tech/lamda.svg" }
  ],
  "Data Processing & Management": [
    { name: "Pandas", logo: "/tech/pandas.svg" },
    { name: "NumPy", logo: "/tech/numpy.svg" },
    { name: "Apache Spark", logo: "/tech/spark.svg" }
  ],
  "Data Virtualization": [
    { name: "Denodo", logo: "/tech/denodo.svg" },
    { name: "Cisco Data Virtualization", logo: "/tech/cisco-dv.svg" }
  ],
  "Containerization & Deployment": [
    { name: "Docker", logo: "/tech/docker.svg" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
    { name: "Helm", logo: "/tech/helm.svg" }
  ],
  "Cloud Platform": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ],
  "Testing & Integration": [
    { name: "JUnit", logo: "/tech/junit.svg" },
    { name: "Mocha", logo: "/tech/mocha.svg" },
    { name: "Jest", logo: "/tech/jest.svg" }
  ],
  "API for AI Model Integration": [
    { name: "FastAPI", logo: "/tech/fastapi.svg" },
    { name: "Flask", logo: "/tech/flask.svg" }
  ],
  "Various Controls": [
    "Version Control (GitHub, GitLab)",
    "CI/CD",
    "Monitoring (Prometheus, Grafana)"
  ],
  "Project Management": [
    "Jira",
    "Trello",
    "Asana"
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TOOL & TECHNOLOGY</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Tech Stack We Use for Generative AI Integration
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our AI developers recommend the best technology stack to develop perfect Generative AI solutions for businesses.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="bg-[#A8B2E7] p-6 rounded-xl border border-black">
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
                        <span className="text-black text-sm text-center">{item.name}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="bg-[#A8B2E7] p-6 rounded-xl border border-black">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#F3F1EB] text-black rounded-full text-sm"
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

