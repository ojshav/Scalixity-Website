"use client";

import Image from "next/image";

type TechItem = { name: string; logo?: string };
type Technologies = Record<string, (TechItem | string)[]>;

const technologies: Technologies = {
  "ChatGPT Models": [
    { name: "GPT-3.5", logo: "/images/tech/gpt-3.5.svg" },
    { name: "GPT-4", logo: "/images/tech/gpt-4.svg" },
    { name: "GPT-4 Turbo", logo: "/images/tech/gpt-4-turbo.svg" }
  ],
  "Web Services": [
    { name: "AWS Lambda", logo: "/images/tech/aws-lambda.svg" },
    { name: "Google Cloud Functions", logo: "/images/tech/google-cloud-functions.svg" },
    { name: "Azure Functions", logo: "/images/tech/azure-functions.svg" }
  ],
  "Web Frameworks": [
    { name: "Next.js", logo: "/images/tech/nextjs.svg" },
    { name: "Django", logo: "/images/tech/django.svg" },
    { name: "Flask", logo: "/images/tech/flask.svg" }
  ],
  "Reverse Proxy": [
    { name: "NGINX", logo: "/images/tech/nginx.svg" },
    { name: "Traefik", logo: "/images/tech/traefik.svg" },
    { name: "HAProxy", logo: "/images/tech/haproxy.svg" }
  ],
  "API Gateway": [
    { name: "Kong", logo: "/images/tech/kong.svg" },
    { name: "AWS API Gateway", logo: "/images/tech/aws-api-gateway.svg" },
    { name: "Apigee", logo: "/images/tech/apigee.svg" }
  ],
  "AI Frameworks": [
    { name: "TensorFlow", logo: "/images/tech/tensorflow.svg" },
    { name: "PyTorch", logo: "/images/tech/pytorch.svg" },
    { name: "Keras", logo: "/images/tech/keras.svg" }
  ],
  "Programming Languages": [
    { name: "Python", logo: "/images/tech/python.svg" },
    { name: "JavaScript", logo: "/images/tech/javascript.svg" },
    { name: "TypeScript", logo: "/images/tech/typescript.svg" }
  ],
  "API Development": [
    { name: "FastAPI", logo: "/images/tech/fastapi.svg" },
    { name: "Flask", logo: "/images/tech/flask.svg" },
    { name: "Express.js", logo: "/images/tech/express.svg" }
  ]
};

export function ToolsAndTechnology() {
  return (
    <section className="bg-[#080B16] py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            TOOL & TECHNOLOGY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            GPT Integrated Solutions
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Our ChatGPT Developers recommend the best technology stack to develop AI solutions for businesses. We utilize cutting-edge tools in AI development, web services, cloud platforms, and API development to ensure seamless integration.
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

export default ToolsAndTechnology;
