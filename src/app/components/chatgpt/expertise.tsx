import { Brain, Code, Database, Shield, Users, Zap } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Our ChatGPT developers create engaging bots that carry out standard, principles-based procedures via the user interface, simulating human contact with digital programs. Accord.Net, Keras, Apache, and several other technologies are part of our core stack."
  },
  {
    icon: Code,
    title: "NLP – Natural Learning",
    description: "We develop Natural Language Processing (NLP) applications that assess structured and semi-structured content, including search queries, mined web data, business data repositories, and audio sources, to identify emerging patterns, deliver operational insights, and do predictive analytics."
  },
  {
    icon: Database,
    title: "Deep Learning (DL) Development",
    description: "We build ML-based DL technologies to build cognitive BI technology frameworks that recognize specific ideas throughout processing processes. We also delve through complex data to reveal various opportunities and achieve precise perfection using ongoing deep-learning algorithms."
  },
  {
    icon: Shield,
    title: "RPA – Robotic Process",
    description: "We integrate robotic process automation (RPA) applications to enhance workflows and provide a company with more scalability and flexibility. These apps can extract structured and semi-structured data from documents, copy and paste data, move files and folders, scrape websites, perform calculations, and more."
  }
]

export function Expertise() {
  return (
    <section className="bg-[#080B16] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            CORE EXPERTISE
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our core-expertise in AI powered model-based solutions
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
