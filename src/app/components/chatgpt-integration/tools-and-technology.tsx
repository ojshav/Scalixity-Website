"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "ChatGPT Models": [
    { name: "GPT-3.5", logo: "/tech/gpt-3.5.svg" },
    { name: "GPT-4", logo: "/tech/gpt-4.svg" },
    { name: "GPT-4 Turbo", logo: "/tech/gpt-4-turbo.svg" }
  ],
  "Web Services": [
    { name: "AWS Lambda", logo: "/tech/aws-lambda.svg" },
    { name: "Google Cloud Functions", logo: "/tech/google-cloud-functions.svg" },
    { name: "Azure Functions", logo: "/tech/azure-functions.svg" }
  ],
  "Web Frameworks": [
    { name: "Next.js", logo: "/tech/nextjs.svg" },
    { name: "Django", logo: "/tech/django.svg" },
    { name: "Flask", logo: "/tech/flask.svg" }
  ],
  "Reverse Proxy": [
    { name: "NGINX", logo: "/tech/nginx.svg" },
    { name: "Traefik", logo: "/tech/traefik.svg" },
    { name: "HAProxy", logo: "/tech/haproxy.svg" }
  ],
  "API Gateway": [
    { name: "Kong", logo: "/tech/kong.svg" },
    { name: "AWS API Gateway", logo: "/tech/aws-api-gateway.svg" },
    { name: "Apigee", logo: "/tech/apigee.svg" }
  ],
  "AI Frameworks": [
    { name: "TensorFlow", logo: "/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/tech/pytorch.svg" },
    { name: "Keras", logo: "/tech/keras.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/tech/python.svg" },
    { name: "JavaScript", logo: "/tech/javascript.svg" },
    { name: "TypeScript", logo: "/tech/typescript.svg" }
  ],
  "API Development": [
    { name: "FastAPI", logo: "/tech/fastapi.svg" },
    { name: "Flask", logo: "/tech/flask.svg" },
    { name: "Express.js", logo: "/tech/express.svg" }
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#A8B2E7] py-20"> {/* Lavender background */}
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-black uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Technology Stack We Use to Build ChatGPT Integrated Solutions
          </h2>
          <p className="text-black mt-4 max-w-3xl mx-auto">
            Our ChatGPT Developers recommend the best technology stack to develop AI solutions for businesses. We utilize cutting-edge tools in AI development, web services, cloud platforms, and API development to ensure seamless integration.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(technologies).map(([category, items], index) => (
            <div key={index} className="bg-[#F3F1EB] border border-black rounded-lg p-6"> {/* Beige card with black border */}
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
