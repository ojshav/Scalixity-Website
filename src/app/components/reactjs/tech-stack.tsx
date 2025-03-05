"use client";


const techStack = [
  {
    category: "Core Libraries & Frameworks",
    items: [
      { name: "React", logo: "/tech/react.svg" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Gatsby", logo: "/tech/gatsby.svg" }
    ]
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", logo: "/tech/redux.svg" },
      { name: "Zustand", logo: "/tech/zustand.svg" },
      { name: "Recoil", logo: "/tech/recoil.svg" }
    ]
  },
  {
    category: "UI Libraries & Components",
    items: [
      { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
      { name: "Material UI", logo: "/tech/mui.svg" },
      { name: "Chakra UI", logo: "/tech/chakra.svg" }
    ]
  },
  {
    category: "API & Backend Integration",
    items: [
      { name: "GraphQL", logo: "/tech/graphql.svg" },
      { name: "REST APIs", logo: "/tech/rest.svg" },
      { name: "Firebase", logo: "/tech/firebase.svg" }
    ]
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "Jest", logo: "/tech/jest.svg" },
      { name: "Cypress", logo: "/tech/cypress.svg" },
      { name: "React Testing Library", logo: "/tech/react-testing-library.svg" }
    ]
  },
  {
    category: "Build & Deployment",
    items: [
      { name: "Webpack", logo: "/tech/webpack.svg" },
      { name: "Vite", logo: "/tech/vite.svg" },
      { name: "Netlify", logo: "/tech/netlify.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            ReactJS Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage modern tools and frameworks to build scalable, high-performance React applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-muted-foreground text-sm text-center">{item.name}</span>
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
