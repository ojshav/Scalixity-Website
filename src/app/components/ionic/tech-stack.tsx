"use client";

const techStack = [
  {
    category: "Framework & Core Technologies",
    items: [
      { name: "Ionic Framework", logo: "/images/tech/ionic.svg" },
      { name: "Angular", logo: "/images/tech/angular.svg" },
      { name: "React", logo: "/images/tech/react.webp" },
      { name: "Vue.js", logo: "/images/tech/vue.svg" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", logo: "/images/tech/redux.svg" },
      { name: "NgRx", logo: "/images/tech/nginx.svg" },
      { name: "Zustand", logo: "/images/tech/zustand.svg" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", logo: "/images/tech/nodejs.svg" },
      { name: "Firebase", logo: "/images/tech/firebase.svg" },
      { name: "GraphQL", logo: "/images/tech/graphql.svg" },
      { name: "REST APIs", logo: "/images/tech/rest-api.svg" },
    ],
  },
  {
    category: "UI & Styling",
    items: [
      { name: "Ionic UI Components", logo: "/images/tech/ionic.svg" },
      { name: "Tailwind CSS", logo: "/images/tech/tailwind.svg" },
      { name: "Material UI", logo: "/images/tech/material.svg" },
    ],
  },
  {
    category: "Build & Deployment",
    items: [
      { name: "Capacitor", logo: "/images/tech/capacitor.svg" },
      { name: "Cordova", logo: "/images/tech/cordova.svg" },
      { name: "Netlify", logo: "/images/tech/netlify.svg" },
      { name: "Vercel", logo: "/images/tech/vercel.svg" },
    ],
  },
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Our Ionic App Development Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We utilize modern tools and frameworks to build high-performance, scalable Ionic applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
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

export default TechStack;
