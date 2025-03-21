"use client";
import { motion,  } from 'framer-motion';
const projects = [
  {
    company: "MetaCity",
    title: "Building the Future of Virtual Real Estate",
    description: "We collaborated with MetaCity to develop a blockchain-powered virtual real estate platform. Our advanced metaverse solutions enabled users to buy, sell, and trade virtual properties securely, with immersive 3D interactions and seamless digital asset management.",
    image: "/images/metaverse-estate.svg",
    features: [
      "Decentralized real estate marketplace powered by blockchain",
      "High-fidelity 3D environments for immersive experiences",
      "Smart contracts ensuring secure transactions",
      "Seamless integration with NFTs and digital asset wallets"
    ]
  },
  {
    company: "MetaEvents",
    title: "Transforming Virtual Gatherings with Immersive Metaverse Events",
    description: "We developed an innovative platform for MetaEvents, allowing users to host and attend virtual conferences, concerts, and meetups in the metaverse. Our solutions enhanced user engagement with interactive avatars, spatial audio, and real-time networking tools.",
    image: "/images/metaverse-events.svg",
    features: [
      "Fully immersive event spaces with customizable environments",
      "AI-driven networking and matchmaking for attendees",
      "Real-time interaction with avatars and spatial audio",
      "Live-streaming and VR support for enhanced engagement"
    ]
  },
  {
    company: "MetaCommerce",
    title: "Redefining E-Commerce in the Metaverse",
    description: "We built a next-generation e-commerce platform for MetaCommerce, integrating virtual shopping experiences with AR and VR technologies. Customers can explore digital stores, try on products virtually, and complete purchases using cryptocurrencies and smart contracts.",
    image: "/images/metaverse-ecommerce.svg",
    features: [
      "AI-powered virtual shopping assistants",
      "Augmented reality try-ons for fashion and accessories",
      "Secure blockchain-based payment processing",
      "Seamless integration with decentralized finance (DeFi) solutions"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Metaverse Development Innovations
            </h2>
          </div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <span className="text-black text-sm">— {project.company}</span>
                <h3 className="text-2xl font-bold text-black mt-2 mb-4">{project.title}</h3>
                <p className="text-black mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
