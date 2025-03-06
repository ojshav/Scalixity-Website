"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "Swift", logo: "/tech/swift.svg" },
      { name: "Objective-C", logo: "/tech/objectivec.svg" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "SwiftUI", logo: "/tech/swiftui.svg" },
      { name: "UIKit", logo: "/tech/uikit.svg" },
      { name: "Combine", logo: "/tech/combine.svg" }
    ]
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Firebase", logo: "/tech/firebase.svg" },
      { name: "CoreData", logo: "/tech/coredata.svg" },
      { name: "Realm", logo: "/tech/realm.svg" }
    ]
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "XCTest", logo: "/tech/xctest.svg" },
      { name: "TestFlight", logo: "/tech/testflight.svg" },
      { name: "Postman", logo: "/tech/postman.svg" }
    ]
  },
  {
    category: "Deployment & CI/CD",
    items: [
      { name: "App Store Connect", logo: "/tech/appstore.svg" },
      { name: "Fastlane", logo: "/tech/fastlane.svg" },
      { name: "Bitrise", logo: "/tech/bitrise.svg" }
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
            iOS App Development Tech Stack
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Discover the cutting-edge technologies we use to build high-performance, scalable iOS applications.
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
