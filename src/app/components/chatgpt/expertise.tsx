import { Brain, Code, Database, Shield } from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Our ChatGPT developers create engaging bots that carry out standard, principles-based procedures via the user interface, simulating human contact with digital programs. Accord.Net, Keras, Apache, and several other technologies are part of our core stack.",
  },
  {
    icon: Code,
    title: "NLP – Natural Language Processing",
    description:
      "We develop Natural Language Processing (NLP) applications that assess structured and semi-structured content, including search queries, mined web data, business data repositories, and audio sources, to identify emerging patterns, deliver operational insights, and perform predictive analytics.",
  },
  {
    icon: Database,
    title: "Deep Learning (DL) Development",
    description:
      "We build ML-based DL technologies to create cognitive BI technology frameworks that recognize specific ideas throughout processing. We also delve through complex data to uncover opportunities and achieve precision using ongoing deep-learning algorithms.",
  },
  {
    icon: Shield,
    title: "RPA – Robotic Process Automation",
    description:
      "We integrate robotic process automation (RPA) applications to enhance workflows and provide a company with more scalability and flexibility. These apps can extract structured and semi-structured data, move files, scrape websites, perform calculations, and more.",
  },
];

export function Expertise() {
  return (
    <section className="bg-[#A8B2E7] py-24"> {/* Lavender background for entire page */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">CORE EXPERTISE</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Our core expertise in AI-powered model-based solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-gray-700 hover:border-gray-900 transition-colors" // Beige background behind boxes
            >
              <area.icon className="w-12 h-12 text-black mb-6" />
              <h3 className="text-xl font-bold text-black mb-4">{area.title}</h3>
              <p className="text-black">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
