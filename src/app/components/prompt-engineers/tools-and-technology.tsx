"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "Language Models": [
    { name: "GPT-3.5", logo: "/images/tech/gpt-3.5.svg" },
    { name: "GPT-4", logo: "/images/tech/gpt-4.svg" },
    { name: "Claude", logo: "/images/tech/claude.svg" }
  ],
  "Development Tools": [
    { name: "VS Code", logo: "/images/tech/vscode.svg" },
    { name: "Jupyter", logo: "/images/tech/jupyter.svg" },
    { name: "Git", logo: "/images/tech/git.svg" }
  ],
  "Prompt Frameworks": [
    { name: "LangChain", logo: "/images/tech/langchain.svg" },
    { name: "LlamaIndex", logo: "/images/tech/llamaindex.svg" },
    { name: "OpenAI SDK", logo: "/images/tech/openai.svg" }
  ],
  "Testing Tools": [
    { name: "Promptfoo", logo: "/images/tech/promptfoo.svg" },
    { name: "PromptLayer", logo: "/images/tech/promptlayer.svg" },
    { name: "GPTCache", logo: "/images/tech/gptcache.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/images/tech/python.svg" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "TypeScript", logo: "/images/tech/typescript.svg" }
  ],
  "Monitoring Tools": [
    { name: "Weights & Biases", logo: "/images/tech/wandb.svg" },
    { name: "MLflow", logo: "/images/tech/mlflow.svg" },
    { name: "Grafana", logo: "/images/tech/grafana.svg" }
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-black uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Technology Stack for Prompt Engineering
          </h2>
          <p className="text-black mt-4 max-w-3xl mx-auto">
            Our Prompt engineers recommend the best technology stack to develop efficient and effective prompt engineering solutions. We utilize cutting-edge tools in language models, development frameworks, and testing tools to ensure optimal results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="bg-[#F3F1EB] border border-black rounded-lg p-6">
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
                      <span className="text-black text-sm text-center">
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
