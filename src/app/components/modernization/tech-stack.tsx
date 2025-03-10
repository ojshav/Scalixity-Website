"use client";

const techStack = [
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS", logo: "/tech/aws.svg" },
      { name: "Microsoft Azure", logo: "/tech/azure.svg" },
      { name: "Google Cloud", logo: "/tech/gcp.svg" }
    ]
  },
  {
    category: "Containerization & Orchestration",
    items: [
      { name: "Docker", logo: "/tech/docker.svg" },
      { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
      { name: "Helm", logo: "/tech/helm.svg" }
    ]
  },
  {
    category: "Microservices & APIs",
    items: [
      { name: "Spring Boot", logo: "/tech/springboot.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
      { name: "GraphQL", logo: "/tech/graphql.svg" }
    ]
  },
  {
    category: "DevOps & CI/CD",
    items: [
      { name: "Jenkins", logo: "/tech/jenkins.svg" },
      { name: "GitHub Actions", logo: "/tech/github-actions.svg" },
      { name: "GitLab CI/CD", logo: "/tech/gitlab.svg" }
    ]
  },
  {
    category: "Database Modernization",
    items: [
      { name: "MongoDB", logo: "/tech/mongodb.svg" },
      { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
      { name: "Amazon RDS", logo: "/tech/rds.svg" }
    ]
  },
  {
    category: "Monitoring & Security",
    items: [
      { name: "Prometheus", logo: "/tech/prometheus.svg" },
      { name: "Grafana", logo: "/tech/grafana.svg" },
      { name: "SonarQube", logo: "/tech/sonarqube.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            App Modernization Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We use cutting-edge technologies to modernize legacy applications, ensuring scalability, performance, and security.
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
