"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Enterprise Needs Assessment & Strategy",
    description:
      "We start by understanding business challenges, objectives, and technology landscapes to define a strategic roadmap for enterprise application development.",
  },
  {
    title: "Architecture & System Design",
    description:
      "Design scalable, secure, and high-performing enterprise architectures leveraging microservices, APIs, and cloud-native solutions.",
  },
  {
    title: "Enterprise Application Development",
    description:
      "Develop robust and feature-rich applications tailored to enterprise workflows, ensuring seamless integration with existing systems.",
  },
  {
    title: "Testing, Compliance & Security Assurance",
    description:
      "Conduct comprehensive testing to ensure security, compliance, and optimal performance for enterprise-grade applications.",
  },
  {
    title: "Deployment & Enterprise Integration",
    description:
      "Deploy applications with automated CI/CD pipelines, ensuring smooth integration with enterprise ecosystems and minimal downtime.",
  },
  {
    title: "Ongoing Maintenance & Scalability",
    description:
      "Monitor application performance, provide continuous support, and implement iterative improvements to meet evolving business needs.",
  },
];

export function EnterpriseAppDevelopmentProcess() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Enterprise Application Development Lifecycle
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Our structured approach ensures enterprise applications are scalable, secure, and aligned with business goals.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black/20" />

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
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                </div>

                <div className="bg-[#F3F1EB] p-8 rounded-xl border border-black">
                  <h3 className="text-xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-black/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnterpriseAppDevelopmentProcess;
