import { Cloud, LayoutDashboard, LineChart, MessageCircle } from 'lucide-react'

const expertiseAreas = [
  {
    icon: LayoutDashboard,
    title: "Machine Learning",
    description: "Our developers possess a comprehensive understanding of machine learning techniques, such as continual, supervised, and unsupervised learning, deep reinforcement learning, and attention mechanisms. This proficiency allows us to effortlessly integrate adaptive AI models into existing systems."
  },
  {
    icon: MessageCircle,
    title: "Natural Language Processing",
    description: "We are experienced in NLP techniques such as sentiment analysis, topic modeling, and language translation, which makes us more proficient in training and building an adaptive AI solution."
  },
  {
    icon: LineChart,
    title: "Data Analysis & Statistics",
    description: "We have experience and familiarity with statistical models utilized in machine learning, including Bayesian models and Gaussian processes. Our Adaptive AI development process is built around a solid comprehension of statistics which encompasses probability, regression analysis, and hypothesis testing."
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Our AI engineers use cloud computing platforms like AWS and Azure to build scalable Adaptive AI solutions which can be easily deployed across multiple devices for a wider audience usage."
  }
]

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Core Expertise
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our core expertise in adaptive AI systems development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black hover:border-black transition-colors"
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise;
