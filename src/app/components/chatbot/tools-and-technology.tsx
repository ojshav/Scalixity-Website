"use client";
import Image from 'next/image';

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "Chatbot Frameworks": [
    { name: "Rasa", logo: "/tech/rasa.svg" },
    { name: "Dialogflow", logo: "/tech/dialogflow.svg" },
    { name: "BotPress", logo: "/tech/botpress.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ],
  "NLP & AI Models": [
    { name: "GPT-4", logo: "/tech/gpt4.svg" },
    { name: "BERT", logo: "/tech/bert.svg" },
    { name: "T5", logo: "/tech/t5.svg" }
  ],
  "Programming Languages": ["Python", "JavaScript", "TypeScript", "Go", "Java"],
  "Databases": ["MongoDB", "PostgreSQL", "Firebase", "Redis", "MySQL"],
  "APIs & Integrations": ["Twilio", "Slack API", "WhatsApp API", "Telegram API", "Facebook Messenger"]
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-black uppercase tracking-wider">TOOLS & TECHNOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            AI Chatbot Technology Stack
          </h2>
          <p className="text-black mt-4">
            We leverage industry-leading tools and frameworks to build intelligent and scalable AI chatbot solutions.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="border border-black rounded-lg p-6">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {items.map((item, idx) =>
                    typeof item === "object" ? (
                      <div key={idx} className="flex flex-col items-center">
                        <Image src={item.logo!} alt={item.name} width={40} height={40} className="mb-2" />
                        <span className="text-black text-sm text-center">{item.name}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="border border-black rounded-lg p-6">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-black rounded-full text-sm">
                      {typeof item === "string" ? item : item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
