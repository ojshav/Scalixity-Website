"use client";

export function AIApplications() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-purple-900 py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-8">
          AI Applications in Insurance
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12">
          Explore how AI revolutionizes the insurance industry, enhancing risk assessment, claims processing, and customer experiences.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fraud Detection", description: "AI algorithms identify and prevent fraudulent claims by analyzing data patterns and anomalies." },
            { title: "Risk Assessment", description: "Predict potential risks using AI models for smarter policy decisions and optimized strategies." },
            { title: "Claims Automation", description: "Streamline claims processing with AI, reducing manual tasks and improving efficiency." },
            { title: "Personalized Policies", description: "AI tailors insurance plans to individual customers based on their data and behavior." },
            { title: "Predictive Analytics", description: "Leverage AI insights to forecast trends, optimize pricing, and enhance customer retention." },
            { title: "Chatbots & Virtual Assistants", description: "Provide 24/7 customer support and instant policy information through AI chatbots." },
          ].map((app, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-lg border border-white/20 hover:border-white/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">{app.title}</h3>
              <p className="text-gray-200">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIApplications;




