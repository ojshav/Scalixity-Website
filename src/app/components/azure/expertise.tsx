import { Cloud, Database, Shield, Cpu, Code, TrendingUp } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Cloud,
    title: "Azure Cloud Strategy & Migration",
    description: "Seamlessly transition to Azure with a tailored cloud adoption framework that ensures minimal downtime and maximum efficiency."
  },
  {
    icon: Database,
    title: "Data & Analytics Solutions",
    description: "Leverage Azure Synapse, Data Factory, and other cloud-native services to transform raw data into actionable insights."
  },
  {
    icon: Shield,
    title: "Enterprise Security & Governance",
    description: "Implement robust security policies, identity management, and compliance strategies to protect your cloud infrastructure."
  },
  {
    icon: Cpu,
    title: "AI & Cognitive Services",
    description: "Enhance applications with intelligent capabilities using Azure AI, Cognitive Services, and custom ML models."
  },
  {
    icon: Code,
    title: "Modern App Development",
    description: "Build and deploy scalable, cloud-native applications with Azure Kubernetes Service (AKS) and microservices architectures."
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization & Cost Efficiency",
    description: "Optimize workloads to improve performance while reducing cloud expenditure through intelligent scaling and monitoring."
  }
]

export function Expertise() {
  return (
    <section className="py-24" style={{ backgroundColor: '#A8B2E7' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Azure Cloud Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Accelerate your cloud journey with our deep expertise in Azure, delivering secure, scalable, and high-performance cloud solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl border-2 border-black transition-colors"
              style={{ backgroundColor: '#F3F1EB', color: 'black' }}
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <p className="leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
