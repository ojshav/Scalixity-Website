"use client";

import Image from "next/image";

const tools = [
  { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
  { name: "PyTorch", icon: "/icons/pytorch.svg" },
  { name: "OpenAI", icon: "/icons/openai.svg" },
  { name: "Google Cloud AI", icon: "/icons/googlecloud.svg" },
  { name: "AWS AI Services", icon: "/icons/aws.svg" },
  { name: "Microsoft Azure AI", icon: "/icons/azure.svg" },
  { name: "LangChain", icon: "/icons/langchain.svg" },
  { name: "Hugging Face", icon: "/icons/huggingface.svg" },
];

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Tools & Technologies</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We leverage cutting-edge AI tools and platforms to build powerful solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#F3F1EB] p-6 rounded-full mb-4">
                <Image src={tool.icon} alt={tool.name} width={48} height={48} className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold text-black text-center">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsAndTechnology;
