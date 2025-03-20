"use client";

import Image from "next/image";

const technologies = {
  "Design Tools": [
    { name: "Figma", logo: "/images/tech/figma.svg" },
    { name: "Adobe XD", logo: "/images/tech/adobe-xd.svg" },
    { name: "Sketch", logo: "/images/tech/sketch.svg" }
  ],
  "Prototyping & Wireframing": [
    { name: "InVision", logo: "/images/tech/invision.svg" },
    { name: "Balsamiq", logo: "/images/tech/balsamiq.svg" },
    { name: "Axure RP", logo: "/images/tech/axure.svg" }
  ],
  "Collaboration & Handoff": [
    { name: "Zeplin", logo: "/images/tech/zeplin.svg" },
    { name: "Abstract", logo: "/images/tech/abstract.svg" },
    { name: "Avocode", logo: "/images/tech/avocode.svg" }
  ],
  "UI Libraries & Frameworks": [
    "Material Design", "iOS Human Interface", "Tailwind UI", "Bootstrap"
  ]
};

export function MobileAppDesignTools() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="text-sm text-black uppercase tracking-wider">TOOLS & TECHNOLOGY</span>
          <h2 className="text-4xl font-bold text-black mt-2">
            Technology Stack We Use
          </h2>
          <p className="text-black mt-4 max-w-3xl mx-auto">
            We leverage cutting-edge design tools and frameworks to craft exceptional mobile app experiences.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(0, 3).map(([category, items], index) => (
              <div key={index} className="border border-black rounded-lg p-6 bg-[#F3F1EB] shadow-lg hover:shadow-black/50 transition-all">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {items.map((item, idx) =>
                    typeof item === "object" ? (
                      <div key={idx} className="flex flex-col items-center">
                        <Image src={item.logo!} alt={item.name} width={40} height={40} className="mb-2" />
                        <span className="text-black text-sm text-center">{item.name}</span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(technologies).slice(3).map(([category, items], index) => (
              <div key={index} className="border border-black rounded-lg p-6 bg-[#F3F1EB] shadow-lg hover:shadow-black/50 transition-all">
                <h3 className="text-black font-semibold mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <span key={idx} className="text-black text-sm">
                      {typeof item === "string" ? item : item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default MobileAppDesignTools;
