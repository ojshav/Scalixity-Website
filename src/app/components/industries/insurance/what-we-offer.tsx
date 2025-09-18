"use client";

const offerings = [
  {
    title: "AI-Powered Risk Assessment",
    description: "Leverage AI algorithms to assess risks in real-time, ensuring more accurate and data-driven policy decisions.",
  },
  {
    title: "Fraud Detection & Prevention",
    description: "Identify suspicious patterns and anomalies with AI models trained to detect fraudulent insurance claims instantly.",
  },
  {
    title: "Automated Claims Processing",
    description: "Streamline claim verification and payouts using AI, enhancing efficiency and customer satisfaction.",
  },
  {
    title: "Personalized Policy Recommendations",
    description: "Offer tailor-made insurance policies by analyzing customer data and behavior, boosting sales and engagement.",
  },
  {
    title: "Predictive Analytics for Customer Insights",
    description: "Harness AI to predict customer needs, allowing proactive policy suggestions and personalized marketing strategies.",
  },
  {
    title: "Operational Automation",
    description: "Automate routine processes and reduce manual workloads, cutting operational costs and improving productivity.",
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-12">What We Offer in AI-Powered Insurance Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index} 
              className="bg-[#F3F1EB] p-8 rounded-2xl border border-black hover:shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{offering.title}</h3>
              <p className="text-black leading-relaxed">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
