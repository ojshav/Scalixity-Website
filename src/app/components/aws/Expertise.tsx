import { Cloud, Server, Lock, Cpu, Users, Activity } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Cloud,
    title: "AWS Cloud Architecture",
    description: "Design and implement scalable, secure, and high-performing AWS cloud infrastructures tailored to your business needs."
  },
  {
    icon: Server,
    title: "Serverless Computing",
    description: "Leverage AWS Lambda and other serverless technologies to build cost-efficient and highly scalable applications."
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Ensure your AWS environment meets the highest security standards with best practices in encryption, identity management, and compliance."
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Harness AWS AI/ML services like SageMaker to build intelligent, data-driven applications."
  },
  {
    icon: Users,
    title: "DevOps & Automation",
    description: "Implement CI/CD pipelines, infrastructure as code, and automation strategies for seamless AWS cloud operations."
  },
  {
    icon: Activity,
    title: "Cost Optimization & Performance Tuning",
    description: "Optimize AWS workloads to maximize performance while minimizing operational costs."
  }
]

export function AWSExpertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our AWS Cloud Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Unlock the full potential of AWS with our cloud expertise, ensuring secure, scalable, and efficient cloud solutions.
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
