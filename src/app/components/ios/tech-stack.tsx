"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "Swift", logo: "/images/tech/swift.svg" },
      { name: "Objective-C", logo: "/images/tech/objectivec.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "SwiftUI", logo: "/images/tech/swiftui.svg" },
      { name: "UIKit", logo: "/images/tech/uikit.svg" },
      { name: "Combine", logo: "/images/tech/combine.svg" },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Firebase", logo: "/images/tech/firebase.svg" },
      { name: "CoreData", logo: "/images/tech/coredata.svg" },
      { name: "Realm", logo: "/images/tech/realm.svg" },
    ],
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "XCTest", logo: "/images/tech/xctest.svg" },
      { name: "TestFlight", logo: "/images/tech/testflight.svg" },
      { name: "Postman", logo: "/images/tech/postman.svg" },
    ],
  },
  {
    category: "Deployment & CI/CD",
    items: [
      { name: "App Store Connect", logo: "/images/tech/app-store.svg" },
      { name: "Fastlane", logo: "/images/tech/fastlane.svg" },
      { name: "Bitrise", logo: "/images/tech/bitrise.svg" },
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
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            iOS App Development Tech Stack
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
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
              className="bg-[#F3F1EB] p-8 rounded-xl shadow-lg border border-black"
            >
              <h3 className="text-2xl font-bold text-black mb-6">{stack.category}</h3>
              <div className="flex flex-wrap gap-4">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center w-[100px]">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 mb-2 border border-black rounded-lg"
                    />
                    <span className="text-black text-sm text-center">{item.name}</span>
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
