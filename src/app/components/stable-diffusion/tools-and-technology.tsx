"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "Stable Diffusion Models": [
    { name: "Stable Diffusion v1.5", logo: "/tech/sd-v1-5.svg" },
    { name: "Stable Diffusion XL (SDXL)", logo: "/tech/sdxl.svg" },
    { name: "Stable Diffusion 2.1", logo: "/tech/sd-2-1.svg" }
  ],
  "Image Generation Frameworks": [
    { name: "Automatic1111 WebUI", logo: "/tech/automatic1111.svg" },
    { name: "InvokeAI", logo: "/tech/invokeai.svg" },
    { name: "ComfyUI", logo: "/tech/comfyui.svg" }
  ],
  "Cloud & GPU Services": [
    { name: "RunPod", logo: "/tech/runpod.svg" },
    { name: "Lambda Labs", logo: "/tech/lambdalabs.svg" },
    { name: "Google Colab Pro", logo: "/tech/colab.svg" }
  ],
  "Model Fine-Tuning": [
    { name: "DreamBooth", logo: "/tech/dreambooth.svg" },
    { name: "LoRA (Low-Rank Adaptation)", logo: "/tech/lora.svg" },
    { name: "Textual Inversion", logo: "/tech/textual-inversion.svg" }
  ],
  "API & Deployment": [
    { name: "Stable Diffusion API", logo: "/tech/sd-api.svg" },
    { name: "Replicate AI", logo: "/tech/replicate.svg" },
    { name: "Hugging Face Spaces", logo: "/tech/huggingface.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/tech/python.svg" },
    { name: "JavaScript", logo: "/tech/javascript.svg" },
    { name: "TypeScript", logo: "/tech/typescript.svg" }
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
