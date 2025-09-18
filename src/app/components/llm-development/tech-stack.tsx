
import Image from "next/image";

const technologies = {
  "LLM Frameworks": [
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "Hugging Face", logo: "/images/tech/huggingface.svg" },
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" },
  ],
  "LLM Models": [
    { name: "GPT-3", logo: "/images/tech/gpt3.svg" },
    { name: "BERT", logo: "/images/tech/bert.svg" },
    { name: "T5", logo: "/images/tech/t5.svg" },
  ],
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Our Tech Stack
        </h2>
        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
              <h3 className="text-xl font-bold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="mb-2 filter invert"
                    />
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
