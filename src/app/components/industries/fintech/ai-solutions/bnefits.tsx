"use client";

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-black mb-8">
          Benefits of AI in Fintech
        </h2>
        <p className="text-lg text-black max-w-2xl mx-auto mb-12">
          AI is transforming financial services — enhancing security, optimizing efficiency, and providing intelligent insights for better decision-making.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fraud Prevention", description: "AI detects fraudulent activities in real-time, ensuring secure transactions and financial safety." },
            { title: "Automated Processes", description: "Reduce manual work with AI-driven automation, improving efficiency and accuracy in financial operations." },
            { title: "Enhanced Customer Experience", description: "AI-powered chatbots and virtual assistants provide personalized support and instant responses." },
            { title: "Data-Driven Insights", description: "AI analyzes vast financial data to offer predictive insights, helping businesses make informed decisions." },
            { title: "Risk Management", description: "AI identifies potential risks early, enabling proactive measures to safeguard financial assets." },
            { title: "Regulatory Compliance", description: "Ensure adherence to financial regulations with AI-powered monitoring and automated compliance checks." },
          ].map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-lg border border-black hover:border-gray-700 transition-colors">
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
