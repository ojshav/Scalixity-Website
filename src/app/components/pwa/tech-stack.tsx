"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    category: "Core Technologies",
    items: [
      { name: "React", logo: "/tech/react.svg" },
      { name: "Next.js", logo: "/tech/nextjs.svg" },
      { name: "Vue.js", logo: "/tech/vue.svg" }
    ]
  },
  {
    category: "Service Workers & Caching",
    items: [
      { name: "Workbox", logo: "/tech/workbox.svg" },
      { name: "Service Worker API", logo: "/tech/service-worker.svg" },
      { name: "Cache Storage API", logo: "/tech/cache-api.svg" }
    ]
  },
  {
    category: "App Manifest & Icons",
    items: [
      { name: "Web App Manifest", logo: "/tech/manifest.svg" },
      { name: "Favicon Generator", logo: "/tech/favicon.svg" },
      { name: "PWA Asset Generator", logo: "/tech/pwa-asset.svg" }
    ]
  },
  {
    category: "UI & Styling",
    items: [
      { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
      { name: "Material UI", logo: "/tech/mui.svg" },
      { name: "Bootstrap", logo: "/tech/bootstrap.svg" }
    ]
  },
  {
    category: "Testing & Debugging",
    items: [
      { name: "Lighthouse", logo: "/tech/lighthouse.svg" },
      { name: "Jest", logo: "/tech/jest.svg" },
      { name: "Cypress", logo: "/tech/cypress.svg" }
    ]
  },
  {
    category: "Build & Deployment",
    items: [
      { name: "Vite", logo: "/tech/vite.svg" },
      { name: "Netlify", logo: "/tech/netlify.svg" },
      { name: "Firebase Hosting", logo: "/tech/firebase.svg" }
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
            PWA Development Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the tools and frameworks we use to build fast, reliable, and engaging Progressive Web Apps.
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
