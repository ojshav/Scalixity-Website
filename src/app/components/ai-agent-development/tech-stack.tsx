import Image from 'next/image'

const technologies = {
  "Frameworks": [
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "Hugging Face", logo: "/images/tech/huggingface.svg" }
  ],
  "Cloud Platforms": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" }
  ],
  "Tools": [
    { name: "MLflow", logo: "/images/tech/mlflow.svg" },
    { name: "Weights & Biases", logo: "/images/tech/wandb.svg" },
    { name: "Docker", logo: "/images/tech/docker.svg" }
  ]
}

export function TechStack() {
  return (
    <section className="bg-[#0A0B14] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Our Technology Stack
        </h2>
        <div className="grid gap-8">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-6">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
              {Array.isArray(items) && items.map((item: { name: string; logo: string }, idx) => (
  <div key={idx} className="flex flex-col items-center">
    <Image
      src={item.logo}
      alt={item.name}
      width={40}
      height={40}
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

