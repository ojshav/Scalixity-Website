"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, TechItem[]>;

const technologies: Technologies = {
  "AI Frameworks": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" }
  ],
  "Integration & Development Tools": [
    { name: "Google Dialogflow", logo: "/images/tech/dialogflow.svg" },
    { name: "Microsoft BotFramework", logo: "/images/tech/botframework.svg" },
    { name: "Amazon Lex", logo: "/images/tech/amazonlex.svg" },
    { name: "BotMap", logo: "/images/tech/botmap.svg" },
    { name: "Botsify", logo: "/images/tech/botsify.svg" },
    { name: "Rasa", logo: "/images/tech/rasa.svg" },
    { name: "Wit.ai", logo: "/images/tech/witai.svg" },
    { name: "Docker", logo: "/images/tech/docker.svg" },
    { name: "Kubernetes", logo: "/images/tech/kubernetes.svg" },
    { name: "Ansible", logo: "/images/tech/ansible.svg" }
  ],
  "OpenAI Models": [
    { name: "GPT-3", logo: "/images/tech/gpt3.svg" },
    { name: "GPT-3.5 Turbo", logo: "/images/tech/gpt3-5.svg" },
    { name: "GPT-4", logo: "/images/tech/gpt-4.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/images/tech/python.svg" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "TypeScript", logo: "/images/tech/typescript.svg" },
    { name: "Java", logo: "/images/tech/java.svg" },
    { name: "C++", logo: "/images/tech/cpp.svg" }
  ],
  "Databases": [
    { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
    { name: "MongoDB", logo: "/images/tech/mongodb.svg" },
    { name: "MySQL", logo: "/images/tech/mysql.svg" },
    { name: "Firebase", logo: "/images/tech/firebase.svg" },
    { name: "Redis", logo: "/images/tech/redis.svg" }
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-gray-800 uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Technology Stack for Stable Diffusion Development
          </h2>
          <p className="text-gray-800 mt-4 max-w-3xl mx-auto">
            Our developers utilize cutting-edge tools and frameworks for image generation, fine-tuning models, and seamless API deployment to deliver the best Stable Diffusion solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="bg-[#F3F1EB] border border-gray-800 rounded-lg p-6">
              <h3 className="text-black font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) =>
                  typeof item === "object" ? (
                    <div key={idx} className="flex flex-col items-center">
                      <Image
                        src={item.logo!}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="mb-2"
                      />
                      <span className="text-gray-800 text-sm text-center">
                        {item.name}
                      </span>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsAndTechnology;
