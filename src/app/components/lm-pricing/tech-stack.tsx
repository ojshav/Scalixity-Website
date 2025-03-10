"use client";

const techStack = [
  {
    category: "Large Language Models",
    items: [
      { name: "OpenAI GPT", logo: "/tech/openai.svg" },
      { name: "Anthropic Claude", logo: "/tech/anthropic.svg" },
      { name: "Google Gemini", logo: "/tech/google-gemini.svg" },
      { name: "Meta Llama", logo: "/tech/meta-llama.svg" },
    ],
  },
  {
    category: "API & Backend Services",
    items: [
      { name: "FastAPI", logo: "/tech/fastapi.svg" },
      { name: "Flask", logo: "/tech/flask.svg" },
      { name: "Node.js", logo: "/tech/nodejs.svg" },
    ],
  },
  {
    category: "Cloud & Deployment",
    items: [
      { name: "AWS Lambda", logo: "/tech/aws-lambda.svg" },
      { name: "Google Cloud Functions", logo: "/tech/gcp-functions.svg" },
      { name: "Vercel", logo: "/tech/vercel.svg" },
    ],
  },
  {
    category: "Data Processing & Storage",
    items: [
      { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
      { name: "MongoDB", logo: "/tech/mongodb.svg" },
      { name: "Redis", logo: "/tech/redis.svg" },
    ],
  },
  {
    category: "Monitoring & Logging",
    items: [
      { name: "Prometheus", logo: "/tech/prometheus.svg" },
      { name: "Datadog", logo: "/tech/datadog.svg" },
      { name: "ELK Stack", logo: "/tech/elk.svg" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Tech Stack for LLM API Pricing Calculator
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We leverage cutting-edge tools and frameworks to deliver precise and efficient LLM API cost calculations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-black shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-black text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
