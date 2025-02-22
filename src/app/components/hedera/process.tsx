"use client"

import { motion } from 'framer-motion'

const processSteps = [
  {
    title: "Comprehensive Analysis & Strategic Planning",
    description: "Our journey begins with a thorough analysis of your existing systems, workflows, and data structures. This crucial step identifies opportunities where Hedra's decentralized ledger technology can drive innovation, ensuring a strong foundation for tailored solutions."
  },
  {
    title: "Custom Solution Design & Prototype Development",
    description: "Once the strategic approach is clear, we design custom decentralized solutions. A prototype is created to test functionality, security, and scalability, ensuring alignment with business goals before full-scale deployment."
  },
  {
    title: "Seamless Implementation & Integration",
    description: "With a validated prototype, we move into full implementation, seamlessly integrating Hedra’s technology into your existing systems. Our team works closely with yours to ensure minimal disruption and maximum efficiency."
  },
  {
    title: "Ongoing Monitoring & Continuous Improvement",
    description: "After deployment, we provide continuous monitoring and support. Real-time performance tracking and regular updates guarantee that the decentralized solutions remain secure, scalable, and future-ready."
  }
]

export function Process() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Decentralized Solution Implementation Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Hedra, our process blends strategic planning with technological innovation. We work collaboratively with you to design and implement decentralized solutions that enhance security, transparency, and operational efficiency.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full" />
                </div>
                
                <div className="bg-card p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process;
