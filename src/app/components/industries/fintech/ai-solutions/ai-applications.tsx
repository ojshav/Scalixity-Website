 "use client";

export function AIApplications() {
  return (
    <section className="bg-[#590178] py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-8">
          AI Applications in Fintech
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto mb-12">
          Discover how AI is revolutionizing the financial industry — enhancing security, optimizing transactions, and delivering smarter insights.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fraud Detection", description: "AI identifies suspicious transactions in real time, preventing financial crimes before they happen." },
            { title: "Automated Trading", description: "Leverage AI-driven algorithms to execute high-frequency trades with precision and speed." },
            { title: "Risk Assessment", description: "AI analyzes vast datasets to assess creditworthiness and manage financial risks effectively." },
            { title: "Personalized Banking", description: "AI-driven chatbots and analytics provide tailored financial advice and customer support." },
            { title: "Regulatory Compliance", description: "Automate compliance checks and detect anomalies to ensure adherence to financial regulations." },
            { title: "Financial Forecasting", description: "AI predicts market trends and helps businesses make data-driven investment decisions." },
          ].map((app, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-lg border border-black hover:border-gray-700 transition-colors">
              <h3 className="text-2xl font-bold text-black mb-4">{app.title}</h3>
              <p className="text-black">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;
