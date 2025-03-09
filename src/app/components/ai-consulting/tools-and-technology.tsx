import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "DL Frameworks": [
    { name: "MXNet", logo: "/tech/mxnet.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "Keras", logo: "/tech/keras.svg" }
  ],
  "Cloud Platform": [
    { name: "AWS", logo: "/tech/aws.svg" },
    { name: "Google Cloud", logo: "/tech/google-cloud.svg" },
    { name: "Azure", logo: "/tech/azure.svg" }
  ],
  "Generative AI Models": [
    { name: "GPT-3", logo: "/tech/gpt3.svg" },
    { name: "GPT-3.5 Turbo", logo: "/tech/gpt3-5.svg" },
    { name: "Lamda", logo: "/tech/lamda.svg" }
  ],
  "Libraries": ["OpenNN", "Neuroph", "Sonnet", "TensorFlow", "Tensor2Tensor", "tf-slim"],
  "Algorithms": ["Clustering", "Metric Learning", "Fewshot Learning", "Supervised/Unsupervised Learning"],
  "Neural Networks": ["CNN", "Representation Learning", "RNN", "Variational Autoencoders", "Manifold Learning", "Bayesian Network"]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#F3F1EB] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-gray-600 uppercase tracking-wider">TOOL & TECHNOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Technology stack we use
          </h2>
          <p className="text-gray-700 mt-4">
            Our experts recommend the best technology stack for Generative AI development to
            create cutting-edge solutions.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="bg-[#A8B2E7] rounded-lg p-6">
                <h3 className="text-gray-900 font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {items.map((item, idx) =>
                    typeof item === "object" ? (
                      <div key={idx} className="flex flex-col items-center">
                        <Image src={item.logo!} alt={item.name} width={40} height={40} className="mb-2" />
                        <span className="text-gray-800 text-sm text-center">{item.name}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="bg-[#A8B2E7] rounded-lg p-6">
                <h3 className="text-gray-900 font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-300 text-gray-900 rounded-full text-sm">
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
