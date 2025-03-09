import Image from 'next/image';

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, TechItem[]>;

const technologies: Technologies = {
  "AI Frameworks": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "Keras", logo: "/tech/keras.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ],
  "Integration & Dev Tools": [
    { name: "Google Dialogflow", logo: "/tech/dialogflow.svg" },
    { name: "Microsoft BotFramework", logo: "/tech/botframework.svg" },
    { name: "Rasa", logo: "/tech/rasa.svg" }
  ],
  "OpenAI Models": [
    { name: "GPT-3", logo: "/tech/gpt3.svg" },
    { name: "GPT-3.5 Turbo", logo: "/tech/gpt3-5.svg" },
    { name: "GPT-4", logo: "/tech/gpt4.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/tech/python.svg" },
    { name: "JavaScript", logo: "/tech/javascript.svg" },
    { name: "TypeScript", logo: "/tech/typescript.svg" },
    { name: "Java", logo: "/tech/java.svg" }
  ],
  "Databases": [
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/tech/mongodb.svg" },
    { name: "MySQL", logo: "/tech/mysql.svg" }
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-700 uppercase tracking-wider">TOOL & TECHNOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Technology Stack We Use
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Our ChatGPT developers recommend the best technology stack for Generative AI development to create cutting-edge digital solutions for businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="border border-gray-500 rounded-lg p-6 bg-[#F3F1EB] shadow-md">
              <h3 className="text-black font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <Image src={item.logo!} alt={item.name} width={40} height={40} className="mb-2" />
                    <span className="text-gray-800 text-sm text-center">{item.name}</span>
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

