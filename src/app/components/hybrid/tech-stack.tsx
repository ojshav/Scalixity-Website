"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Core Technologies",
    items: [
      { name: "JavaScript", logo: "/tech/javascript.svg" },
      { name: "TypeScript", logo: "/tech/typescript.svg" },
      { name: "HTML5", logo: "/tech/html5.svg" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React Native", logo: "/tech/react-native.svg" },
      { name: "Flutter", logo: "/tech/flutter.svg" },
      { name: "Ionic", logo: "/tech/ionic.svg" }
    ]
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", logo: "/tech/redux.svg" },
      { name: "MobX", logo: "/tech/mobx.svg" },
      { name: "Context API", logo: "/tech/context-api.svg" }
    ]
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "Jest", logo: "/tech/jest.svg" },
      { name: "Detox", logo: "/tech/detox.svg" },
      { name: "Appium", logo: "/tech/appium.svg" }
    ]
  },
  {
    category: "APIs & Backend",
    items: [
      { name: "Firebase", logo: "/tech/firebase.svg" },
      { name: "GraphQL", logo: "/tech/graphql.svg" },
      { name: "REST API", logo: "/tech/rest-api.svg" }
    ]
  },
  {
    category: "Deployment & CI/CD",
    items: [
      { name: "App Store", logo: "/tech/app-store.svg" },
      { name: "Google Play", logo: "/tech/google-play.svg" },
      { name: "Fastlane", logo: "/tech/fastlane.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#5b0bb5] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Hybrid App Development Tech Stack
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Leveraging modern frameworks and technologies to build seamless cross-platform mobile applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#5b0bb5] mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img src={item.logo} alt={item.name} className="w-12 h-12 mb-2" />
                    <span className="text-gray-600 text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
