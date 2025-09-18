export function WhatWeOffer() {
  const offers = [
    {
      title: "Cross-Platform Development",
      description: "Build seamless apps that work flawlessly across iOS, Android, and the web using a single codebase.",
    },
    {
      title: "Custom UI Components",
      description: "Create stunning, responsive interfaces with Ionic’s flexible UI components and design system.",
    },
    {
      title: "Native Performance",
      description: "Enhance app speed and responsiveness by integrating native device capabilities.",
    },
    {
      title: "App Integrations",
      description: "Seamlessly integrate with third-party APIs, payment gateways, and backend systems.",
    },
    {
      title: "Progressive Web Apps (PWAs)",
      description: "Transform mobile apps into PWAs for offline access, fast loading, and wider reach.",
    },
    {
      title: "Testing & Maintenance",
      description: "Ensure app stability with rigorous testing and ongoing support for bug fixes and updates.",
    }
  ];

  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-2xl shadow-md border border-black">
              <h3 className="text-xl font-semibold text-black mb-4">{offer.title}</h3>
              <p className="text-black">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
