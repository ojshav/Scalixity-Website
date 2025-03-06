import { Cloud, Database, Shield, Cpu, Code, TrendingUp } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Cloud,
    title: "GCP Cloud Strategy & Migration",
    description: "Migrate seamlessly to Google Cloud with a structured approach ensuring scalability, security, and efficiency."
  },
  {
    icon: Database,
    title: "Big Data & Analytics",
    description: "Harness the power of BigQuery, Dataflow, and AI-driven insights to transform raw data into business intelligence."
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement robust security frameworks with Google’s best-in-class security tools and compliance solutions."
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning Solutions",
    description: "Build intelligent applications with AutoML, Vertex AI, and TensorFlow to drive innovation and automation."
  },
  {
    icon: Code,
    title: "Cloud-Native Application Development",
    description: "Leverage Kubernetes, Cloud Run, and serverless computing to create scalable and resilient applications."
  },
  {
    icon: TrendingUp,
    title: "Cost Optimization & Performance Tuning",
    description: "Optimize cloud costs and performance using GCP’s advanced monitoring, scaling, and cost-management tools."
  }
]

export function GCPExpertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our GCP Cloud Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Unlock the full potential of Google Cloud with our expertise in scalable, secure, and high-performance cloud solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
