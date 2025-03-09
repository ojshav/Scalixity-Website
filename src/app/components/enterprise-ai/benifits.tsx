"use client";

const benefits = [
  {
    title: "Enterprise-Grade Automation",
    description:
      "Streamline operations by automating repetitive tasks, improving efficiency, and reducing costs.",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "Leverage AI-driven insights to make data-backed strategic business decisions with confidence.",
  },
  {
    title: "Scalability & Performance",
    description:
      "Develop AI solutions that scale with your business needs, handling large volumes of data seamlessly.",
  },
  {
    title: "Intelligent Process Optimization",
    description:
      "Optimize workflows with AI-driven recommendations and predictive analytics, increasing productivity.",
  },
  {
    title: "Personalized Customer Experiences",
    description:
      "Use AI to create hyper-personalized interactions, improving customer engagement and satisfaction.",
  },
  {
    title: "Advanced Security & Compliance",
    description:
      "Ensure data protection with AI-driven security solutions that align with industry regulations.",
  },
  {
    title: "AI-Powered Predictive Analytics",
    description:
      "Analyze historical data to forecast trends and drive proactive business strategies.",
  },
  {
    title: "Cost Reduction & ROI Maximization",
    description:
      "Reduce operational costs while maximizing the return on investment through AI-driven optimizations.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Benefits of Enterprise AI Development
        </h2>
        <p className="text-xl text-black text-center mb-8">
          Unlock new efficiencies, enhance decision-making, and drive innovation with AI-powered enterprise solutions.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#A8B2E7] p-6 rounded-lg border-2 border-gray-600 shadow-md"
            >
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
