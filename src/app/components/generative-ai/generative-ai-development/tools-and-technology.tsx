import Image from 'next/image';

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "DL Frameworks": [
    { name: "MXNet", logo: "/images/tech/mxnet.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" }
  ],
  "Cloud Platform": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" }
  ],
  "Generative AI Models": [
    { name: "GPT-3", logo: "/images/ai-chatbot.svg" },
    { name: "GPT-3.5 Turbo", logo: "/images/ai-powered-maintenance.svg" },
    { name: "Lamda", logo: "/images/ai-voice-ordering.svg" }
  ],
  "Libraries": ["OpenNN", "Neuroph", "Sonnet", "TensorFlow", "Tensor2Tensor", "tf-slim"],
  "Algorithms": ["Clustering", "Metric Learning", "Fewshot Learning", "Supervised/Unsupervised Learning"],
  "Neural Networks": ["CNN", "Representation Learning", "RNN", "Variational Autoencoders", "Manifold Learning", "Bayesian Network"]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-sm text-black uppercase tracking-wider">TOOL & TECHNOLOGY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Technology stack we use
          </h2>
          <p className="text-black mt-4">
            Our experts recommend the best technology stack for Generative AI development to
            create cutting-edge solutions.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="border-2 border-black rounded-lg p-6 bg-[#F3F1EB]"> {/* Soft beige box */}
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Array.isArray(items) &&
                    items.map((item, idx) =>
                      typeof item === "object" ? (
                        <div key={idx} className="flex flex-col items-center">
                          <Image src={item.logo!} alt={item.name} width={40} height={40} className="mb-2 filter invert" />
                          <span className="text-black text-sm text-center">{item.name}</span>
                        </div>
                      ) : null
                    )
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="border-2 border-black rounded-lg p-6 bg-[#F3F1EB]"> {/* Soft beige box */}
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-col gap-2">  {/* Changed from flex-wrap to flex-col for plain text */}
                  {typeof items === "object" &&
                    items.map((item, idx) => (
                      <span key={idx} className="text-black text-base">{typeof item === "string" ? item : item.name}</span>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolsAndTechnology;
