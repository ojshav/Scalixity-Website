"use client";

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-8">
          Benefits of AI in Manufacturing
        </h2>
        <p className="text-lg text-black text-opacity-80 max-w-2xl mx-auto mb-12">
          Discover how AI transforms manufacturing processes — boosting productivity, ensuring quality, and driving innovation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Predictive Maintenance", description: "AI analyzes equipment data to predict failures, reducing unexpected downtime." },
            { title: "Enhanced Product Quality", description: "AI-powered vision systems detect defects in real-time, ensuring high-quality standards." },
            { title: "Supply Chain Optimization", description: "AI processes data to optimize inventory levels and minimize delivery delays." },
            { title: "Demand Forecasting", description: "AI models predict product demand, aligning production with market needs." },
            { title: "Energy Efficiency", description: "AI monitors and adjusts energy usage, cutting costs and reducing carbon footprint." },
            { title: "Smart Automation", description: "AI automates complex tasks, increasing efficiency and reducing manual errors." },
          ].map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-lg border border-black">
              <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black text-opacity-80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
