import Image from 'next/image'

const technologies = {
  "LLM Frameworks": [
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "Hugging Face", logo: "/tech/huggingface.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ],
  "LLM Models": [
    { name: "GPT-3", logo: "/tech/gpt3.svg" },
    { name: "BERT", logo: "/tech/bert.svg" },
    { name: "T5", logo: "/tech/t5.svg" }
  ]
}

export function TechStack() {
  return (
    <section className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Tech Stack</h2>
        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="bg-[#0F1629] p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="mb-2"
                    />
                    <span className="text-gray-400 text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

