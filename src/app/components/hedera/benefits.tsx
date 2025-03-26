"use client";

const benefits = [
  {
    title: "High Performance & Scalability",
    description: "Leverage Hedera's fast, fair, and secure network to build applications that scale seamlessly with your business growth. With the ability to handle thousands of transactions per second, Hedera ensures your app remains responsive, efficient, and prepared for mass adoption."
  },
  {
    title: "Low & Predictable Fees",
    description: "Develop cost-effective blockchain solutions with Hedera's low, predictable transaction fees. Say goodbye to fluctuating costs — Hedera's transparent pricing model allows for better financial planning and sustained project growth."
  },
  {
    title: "Decentralized Trust & Transparency",
    description: "Harness the power of decentralized consensus to build transparent and secure applications. Hedera's unique hashgraph technology removes intermediaries, ensuring trust, authenticity, and reliability for every transaction processed by your app."
  },
  {
    title: "Real-Time Settlement & Speed",
    description: "Enable instant finality for transactions, ensuring real-time processing for your app's critical operations. This reduces latency, enhances user experience, and allows your business to operate without delays or bottlenecks."
  },
  {
    title: "Energy Efficiency & Sustainability",
    description: "Benefit from Hedera's eco-friendly consensus mechanism, designed to minimize your app's carbon footprint. Unlike traditional blockchains, Hedera achieves high performance without excessive energy consumption, supporting sustainable innovation and responsible tech solutions."
  },
  {
    title: "Enterprise-Grade Security & Reliability",
    description: "Protect your blockchain applications with Hedera's robust security model. Built on the hashgraph algorithm and backed by a globally distributed council, Hedera safeguards data integrity, resists attacks, and builds unwavering user confidence."
  }
];

export function Benefits() {
  return (
    <section className="bg-[#A8B2E7] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Benefits of Hedera App Development
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-16">
          Unlock the full potential of blockchain technology with Hedera — delivering fast, secure, and cost-effective solutions tailored for modern businesses. Whether You&apos;re developing a decentralized application or integrating blockchain into existing systems, Hedera empowers innovation with confidence.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#F3F1EB] p-6 rounded-lg border border-gray-800 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
              <p className="text-gray-900 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
