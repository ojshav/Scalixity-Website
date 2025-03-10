"use client";

const techStack = [
  {
    category: "Core Frameworks & Libraries",
    items: [
      { name: "React Native", logo: "/tech/react-native.svg" },
      { name: "Expo", logo: "/tech/expo.svg" },
      { name: "NativeScript", logo: "/tech/nativescript.svg" }
    ]
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", logo: "/tech/redux.svg" },
      { name: "MobX", logo: "/tech/mobx.svg" },
      { name: "Zustand", logo: "/tech/zustand.svg" }
    ]
  },
  {
    category: "UI Libraries & Components",
    items: [
      { name: "React Native Paper", logo: "/tech/react-native-paper.svg" },
      { name: "NativeBase", logo: "/tech/nativebase.svg" },
      { name: "Tailwind CSS", logo: "/tech/tailwind.svg" }
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Firebase", logo: "/tech/firebase.svg" },
      { name: "GraphQL", logo: "/tech/graphql.svg" },
      { name: "REST APIs", logo: "/tech/rest.svg" }
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
    category: "Build & Deployment",
    items: [
      { name: "Fastlane", logo: "/tech/fastlane.svg" },
      { name: "Bitrise", logo: "/tech/bitrise.svg" },
      { name: "App Store & Google Play", logo: "/tech/app-store-google-play.svg" }
    ]
  }
];

export function TechStack() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-black">
            TECHNOLOGY STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            React Native Tech Stack
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We use cutting-edge tools and frameworks to build seamless, high-performance mobile applications.
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
