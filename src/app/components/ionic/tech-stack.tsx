"use client";

const techStack = [
  {
    category: "Framework & Core Technologies",
    items: [
      { name: "Ionic Framework", logo: "/tech/ionic.svg" },
      { name: "Angular", logo: "/tech/angular.svg" },
      { name: "React", logo: "/tech/react.svg" },
      { name: "Vue.js", logo: "/tech/vue.svg" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", logo: "/tech/redux.svg" },
      { name: "NgRx", logo: "/tech/ngrx.svg" },
      { name: "Zustand", logo: "/tech/zustand.svg" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", logo: "/tech/nodejs.svg" },
      { name: "Firebase", logo: "/tech/firebase.svg" },
      { name: "GraphQL", logo: "/tech/graphql.svg" },
      { name: "REST APIs", logo: "/tech/rest.svg" },
    ],
  },
  {
    category: "UI & Styling",
    items: [
      { name: "Ionic UI Components", logo: "/tech/ionic-ui.svg" },
      { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
      { name: "Material UI", logo: "/tech/mui.svg" },
    ],
  },
  {
    category: "Build & Deployment",
    items: [
      { name: "Capacitor", logo: "/tech/capacitor.svg" },
      { name: "Cordova", logo: "/tech/cordova.svg" },
      { name: "Netlify", logo: "/tech/netlify.svg" },
      { name: "Vercel", logo: "/tech/vercel.svg" },
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
