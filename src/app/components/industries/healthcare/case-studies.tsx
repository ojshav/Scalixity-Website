"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    title: "AI-Powered Diagnostic Imaging",
    description:
      "Implemented an AI system that improved the accuracy of radiological diagnoses by 30%, reducing misdiagnosis rates and improving patient outcomes.",
    image: "/images/ai-patient-monitoring.svg",
    results: [
      "30% increase in diagnostic accuracy",
      "25% reduction in diagnosis time",
      "Improved early detection of diseases"
    ]
  },
  {
    title: "Predictive Analytics for Patient Care",
    description:
      "Developed a machine learning model that predicts patient readmission risks, allowing hospitals to provide targeted interventions and reduce readmission rates by 22%.",
    image: "/images/icons/healthcare.svg",
    results: [
      "22% reduction in readmission rates",
      "Significant cost savings for hospitals",
      "Improved patient satisfaction scores"
    ]
  }
];

export function CaseStudies() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Case Studies</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Real-world examples of how our AI solutions have transformed healthcare operations and patient care.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center border-2 border-black bg-[#F3F1EB] p-8 rounded-xl"
            >
              <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl font-bold text-black mb-4">{study.title}</h3>
                <p className="text-black mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-black">
                      <span className="w-2 h-2 bg-black rounded-full mr-2"></span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="relative h-[300px] rounded-xl overflow-hidden border-2 border-black">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
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

export default CaseStudies;
