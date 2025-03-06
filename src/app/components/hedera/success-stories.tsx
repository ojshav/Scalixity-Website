"use client";

import { motion } from 'framer-motion';

const successStories = [
  {
    title: "Virtual Retail Revolution",
    description: "We partnered with a global fashion brand to launch an immersive virtual store in the metaverse. By integrating blockchain-based digital ownership and interactive 3D shopping experiences, customer engagement skyrocketed by 70%."
  },
  {
    title: "Metaverse Learning Hub",
    description: "A leading education provider leveraged our expertise to build a fully interactive learning environment in the metaverse. With real-time collaboration, gamified lessons, and AI-driven content, student retention increased by 60%."
  },
  {
    title: "Next-Gen Virtual Events",
    description: "We helped a major event organizer transition to the metaverse, delivering high-impact virtual concerts and conferences. Utilizing NFT ticketing and dynamic 3D environments, attendance and user engagement grew exponentially."
  },
  {
    title: "Decentralized Workspaces",
    description: "A multinational corporation embraced the metaverse for remote work, integrating blockchain security and virtual collaboration tools. The result? A 50% boost in employee productivity and a seamless digital workspace experience."
  }
];

export function SuccessStories() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">SUCCESS STORIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Transforming Businesses in the Metaverse
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how our metaverse solutions have empowered brands, educators, and organizations to thrive in the digital era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card p-8 rounded-xl border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{story.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{story.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;

