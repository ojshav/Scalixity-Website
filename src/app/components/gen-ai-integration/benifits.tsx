const benefits = [
  {
    title: "Automating Customer Support",
    description: "Instant, precise answers to client inquiries are now possible, lessening the burden on support staff. This increases customer contentment while cutting down on support expenses."
  },
  {
    title: "Enhanced Data Analysis and Insight Extraction",
    description: "Generative AI serves to examine extensive data sets, pulling out critical insights that enable more streamlined and powerful data-based decision-making."
  },
  {
    title: "Natural Language Processing (NLP) Enhancement",
    description: "A variety of NLP-related tasks such as sentiment evaluation, synopsis, and language conversion can be automated, thereby boosting effectiveness and output within the organization."
  },
  {
    title: "Innovation in Creative Design",
    description: "AI allows for the production of distinctive visuals, artwork, and graphic layouts, unlocking fresh prospects for branding and promotional endeavors."
  },
  {
    title: "Content Creation Automation",
    description: "The automation of crafting captivating, tailored content like blog pieces, social media updates, and product details conserves both time and effort, yet assures quality and uniformity."
  },
  {
    title: "Virtual Training Module Development",
    description: "Generative AI can be used to build interactive educational modules and simulations, facilitating employees in augmenting their skills in a virtual setting, which leads to better performance and slashes training expenditures."
  },
  {
    title: "Fraud Detection and Prevention",
    description: "Generative AI’s analysis of patterns and identification of irregularities in financial dealings aids businesses in actively discovering and averting fraudulent conduct, thereby preserving assets and trust."
  },
  {
    title: "Workflow Automation and Integration",
    description: "The infusion of Generative AI into business operations automates monotonous tasks and streamlines procedures, boosting efficiency in daily operations, and allowing staff to dedicate time to more intricate and strategic functions."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Benefits of Our Consulting Services
        </h2>
        <p className="text-xl text-black text-center mb-8">
          How does integrating Generative AI contribute to business success? Explore the transformative potential of Generative AI, driving innovation, efficiency, and success in today’s competitive landscape.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-black">
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-black">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
