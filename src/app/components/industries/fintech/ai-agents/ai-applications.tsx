"use client";

export function AIAgents() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-8">
          AI Agents in Fintech
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto mb-12">
          Discover how AI agents are revolutionizing the fintech industry — enhancing fraud detection, personalizing customer experiences, and optimizing financial strategies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fraud Detection", description: "AI agents analyze transactions in real-time to identify and prevent fraudulent activities." },
            { title: "Personalized Financial Advice", description: "Smart AI systems offer tailored investment strategies and financial planning." },
            { title: "Credit Scoring", description: "AI models assess creditworthiness using alternative data for more accurate scoring." },
            { title: "Customer Support Bots", description: "AI-powered chatbots provide instant assistance for banking and investment queries." },
            { title: "Risk Management", description: "AI agents forecast financial risks and optimize portfolio management strategies." },
            { title: "Automated Trading", description: "AI algorithms execute trades based on real-time data analysis, maximizing returns." },
          ].map((app, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-lg border border-black hover:border-black transition-colors">
              <h3 className="text-2xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIAgents;
