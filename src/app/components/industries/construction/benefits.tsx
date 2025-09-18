"use client";

export function AIBenefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-8">
          Benefits of AI in Construction
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto mb-12">
          Unlock the power of AI to revolutionize construction — boosting productivity, enhancing safety, and driving smarter decision-making.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Increased Efficiency", description: "Automate routine tasks, optimize workflows, and reduce project delays with AI-driven insights." },
            { title: "Enhanced Safety", description: "Real-time hazard detection and predictive analytics help create safer job sites." },
            { title: "Cost Savings", description: "AI-powered forecasting minimizes budget overruns by accurately predicting expenses and resource needs." },
            { title: "Smart Decision-Making", description: "Gain data-backed insights to plan better, manage risks, and streamline operations." },
            { title: "Sustainable Construction", description: "Leverage AI to design eco-friendly buildings and reduce energy consumption." },
            { title: "Real-Time Monitoring", description: "Track site progress and identify issues instantly using AI and drone technology." },
          ].map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-lg border border-black hover:border-orange-400 transition-colors">
              <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIBenefits;
