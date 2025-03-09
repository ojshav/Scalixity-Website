"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "AI Models": [
    { name: "Stable Diffusion", logo: "/images/tech/stable-diffusion.svg" },
    { name: "DALL·E", logo: "/images/tech/dalle.svg" },
    { name: "MidJourney AI", logo: "/images/tech/midjourney.svg" }
  ],
  "Cloud Computing": [
    { name: "AWS EC2", logo: "/images/tech/aws-ec2.svg" },
    { name: "Google Cloud AI", logo: "/images/tech/google-cloud-ai.svg" },
    { name: "Azure AI", logo: "/images/tech/azure-ai.svg" }
  ],
  "Deep Learning Frameworks": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" }
  ],
  "Image Processing": [
    { name: "OpenCV", logo: "/images/tech/opencv.svg" },
    { name: "Pillow", logo: "/images/tech/pillow.svg" },
    { name: "TorchVision", logo: "/images/tech/torchvision.svg" }
  ],
  "API Development": [
    { name: "FastAPI", logo: "/images/tech/fastapi.svg" },
    { name: "Flask", logo: "/images/tech/flask.svg" },
    { name: "Express.js", logo: "/images/tech/express.svg" }
  ]
};

export function ToolsAndTechnologyMidJourney() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Technology Stack Powering MidJourney AI
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We utilize cutting-edge tools and technologies for AI-driven image generation. Our stack includes top AI models, deep learning frameworks, and cloud computing services to deliver stunning visuals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="border border-gray-800 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-6">{category}</h3>
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
                      <span className="text-gray-400 text-sm text-center">
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

export default ToolsAndTechnologyMidJourney;
