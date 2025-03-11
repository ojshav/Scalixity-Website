"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "Image Generation Models": [
    { name: "MidJourney", logo: "/images/tech/midjourney.svg" },
    { name: "Stable Diffusion", logo: "/images/tech/stable-diffusion.svg" },
    { name: "DALL-E", logo: "/images/tech/dalle.svg" }
  ],
  "Cloud Infrastructure": [
    { name: "AWS", logo: "/images/tech/aws.svg" },
    { name: "Google Cloud", logo: "/images/tech/google-cloud.svg" },
    { name: "Azure", logo: "/images/tech/azure.svg" }
  ],
  "Image Processing": [
    { name: "OpenCV", logo: "/images/tech/opencv.svg" },
    { name: "PIL", logo: "/images/tech/pillow.svg" },
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" }
  ],
  "Development Tools": [
    { name: "Docker", logo: "/images/tech/docker.svg" },
    { name: "Git", logo: "/images/tech/git.svg" },
    { name: "VS Code", logo: "/images/tech/vscode.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/images/tech/python.svg" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "TypeScript", logo: "/images/tech/typescript.svg" }
  ],
  "APIs & Integration": [
    { name: "REST API", logo: "/images/tech/rest-api.svg" },
    { name: "GraphQL", logo: "/images/tech/graphql.svg" },
    { name: "WebSocket", logo: "/images/tech/websocket.svg" }
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
            Technology Stack Powering MidJourney AI
          </h2>
          <p className="text-black mt-4 max-w-3xl mx-auto">
            Our MidJourney developers leverage cutting-edge technologies to create powerful image generation solutions. We combine advanced AI models with robust infrastructure to deliver exceptional results.
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
