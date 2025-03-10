"use client";

const techStack = {
  "Framework & Language": [
    { name: "Flutter", logo: "/tech/flutter.svg" },
    { name: "Dart", logo: "/tech/dart.svg" }
  ],
  "State Management": [
    { name: "Provider", logo: "/tech/provider.svg" },
    { name: "Riverpod", logo: "/tech/riverpod.svg" },
    { name: "Bloc", logo: "/tech/bloc.svg" }
  ],
  "Backend & Database": [
    { name: "Firebase", logo: "/tech/firebase.svg" },
    { name: "Node.js", logo: "/tech/nodejs.svg" },
    { name: "GraphQL", logo: "/tech/graphql.svg" }
  ],
  "Testing & Debugging": [
    { name: "Flutter Test", logo: "/tech/flutter-test.svg" },
    { name: "Mockito", logo: "/tech/mockito.svg" },
    { name: "Integration Testing", logo: "/tech/integration-testing.svg" }
  ],
  "UI & Styling": [
    { name: "Material Design", logo: "/tech/material.svg" },
    { name: "Cupertino Widgets", logo: "/tech/cupertino.svg" },
    { name: "Lottie", logo: "/tech/lottie.svg" }
  ],
  "CI/CD & DevOps": [
    { name: "Codemagic", logo: "/tech/codemagic.svg" },
    { name: "GitHub Actions", logo: "/tech/github-actions.svg" },
    { name: "Fastlane", logo: "/tech/fastlane.svg" }
  ],
  "Platform & Deployment": [
    { name: "iOS", logo: "/tech/ios.svg" },
    { name: "Android", logo: "/tech/android.svg" },
    { name: "Web", logo: "/tech/web.svg" }
  ]
};

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Technologies We Use for Flutter App Development
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, items], index) => (
            <div key={index} className="border border-black rounded-lg p-6 bg-[#F3F1EB]">
              <h3 className="text-xl font-semibold text-black mb-4">{category}</h3>
              <div className="grid grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img
                      src={item.logo}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="mb-2"
                    />
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
