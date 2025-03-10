"use client";

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-8">
          Benefits of AI Agents in Fintech
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto mb-12">
          Explore how AI agents are transforming the fintech landscape — improving security, enhancing customer experiences, and driving smarter financial strategies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fraud Prevention", description: "AI agents identify and mitigate fraudulent activities by analyzing transaction patterns in real-time." },
            { title: "Enhanced Customer Experience", description: "Personalized AI interactions streamline support and tailor financial solutions for users." },
            { title: "Accurate Risk Assessment", description: "AI models evaluate risk factors efficiently, improving credit scoring and investment decisions." },
            { title: "Operational Efficiency", description: "Automate repetitive tasks like data entry and transaction processing, saving time and resources." },
            { title: "Data-Driven Insights", description: "Leverage AI to uncover financial trends and optimize strategies based on real-time data analysis." },
            { title: "Portfolio Optimization", description: "AI algorithms manage investments by balancing risk and reward, maximizing returns." },
          ].map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-lg border border-black hover:border-black transition-colors">
              <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
