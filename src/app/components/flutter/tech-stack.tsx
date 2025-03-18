"use client";

const techStack = {
  "Framework & Language": [
    { name: "Flutter", logo: "/images/tech/flutter.svg" },
    { name: "Dart", logo: "/images/tech/dart.svg" }
  ],
  "State Management": [
    { name: "Provider", logo: "/images/tech/provider.svg" },
    { name: "Riverpod", logo: "/images/tech/riverpod.svg" },
    { name: "Bloc", logo: "/images/tech/bloc.svg" }
  ],
  "Backend & Database": [
    { name: "Firebase", logo: "/images/tech/firebase.svg" },
    { name: "Node.js", logo: "/images/tech/nodejs.svg" },
    { name: "GraphQL", logo: "/images/tech/graphql.svg" }
  ],
  "Testing & Debugging": [
    { name: "Flutter Test", logo: "/images/tech/flutter-test.svg" },
    { name: "Mockito", logo: "/images/tech/mockito.svg" },
    { name: "Integration Testing", logo: "/images/tech/integration-testing.svg" }
  ],
  "UI & Styling": [
    { name: "Material Design", logo: "/images/tech/material.svg" },
    { name: "Cupertino Widgets", logo: "/images/tech/cupertino.svg" },
    { name: "Lottie", logo: "/images/tech/lottie.svg" }
  ],
  "CI/CD & DevOps": [
    { name: "Codemagic", logo: "/images/tech/codemagic.svg" },
    { name: "GitHub Actions", logo: "/images/tech/github-actions.svg" },
    { name: "Fastlane", logo: "/images/tech/fastlane.svg" }
  ],
  "Platform & Deployment": [
    { name: "iOS", logo: "/images/tech/ios.svg" },
    { name: "Android", logo: "/images/tech/android.svg" },
    { name: "Web", logo: "/images/tech/web.svg" }
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
