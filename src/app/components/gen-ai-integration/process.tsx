"use client"
import { motion } from 'framer-motion'

const steps = [
  {
    number: "01",
    title: "Analyzing Client Objectives",
    description: "Collaboration with our partners helps us penetrate to the core of distinct business needs, obstacles, and goals. This understanding leads to pinpointing those operations, processes, or sectors where Generative AI can inject value and sharpen efficiency."
  },
  {
    number: "02",
    title: "Model Determination",
    description: "Once the need is known, an appropriate pre-trained Generative AI model, or a blend of models, is chosen. Selections vary widely and might include well-known models like GPT-3, GPT-4, or specialized image-oriented generative frameworks."
  },
  {
    number: "03",
    title: "Tailoring and Precision-Tuning",
    description: "The selected model undergoes rigorous customization and precision-tuning to resonate with the partner’s specific commercial needs and industry-relevant data. This process includes model training with related datasets from the partner, enhancing its responsiveness to unique applications."
  },
  {
    number: "04",
    title: "Incorporation of Data",
    description: "Integration of the partner’s diverse data, whether text, imagery, or different data formats, into the Generative AI architecture is ensured. This is realized through an uninterrupted data flow from assorted sources like databases, cloud repositories, APIs, or live data channels."
  },
  {
    number: "05",
    title: "Merging with Workflows",
    description: "Our team liaises with the partner’s IT and development personnel to embed the Generative AI solution within their extant workflows and mechanisms. This involves crafting APIs, connectors, or bespoke interfaces to facilitate effortless coordination between the Generative AI module and the other instruments or platforms utilized by the partner."
  },
  {
    number: "06",
    title: "Scrutiny and Appraisal",
    description: "Before ultimate deployment, the combined Generative AI system is subjected to meticulous scrutiny and appraisal. This validates its functionality, exactitude, and accord with the partner’s processes, and assures the creation of premium-quality results."
  },
  {
    number: "07",
    title: "Implementation and Upkeep",
    description: "After comprehensive assessment and endorsement, the Generative AI system is introduced into the partner’s operational sphere. Persistent oversight and performance metrics are employed to verify the optimal operation, trustworthiness, and expandability of the solution."
  },
  {
    number: "08",
    title: "Assistance and Preservation",
    description: "We extend perpetual assistance, preservation, and augmentations to the Generative AI integration, securing that it remains state-of-the-art, operative, and attuned to any shifts in business imperatives or technological evolution."
  }
]

export function Process() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            Our Generative AI Integration Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            A step-by-step guide to integrating Generative AI into your workflow, ensuring optimal performance, compatibility, and excellence in every aspect of your business.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-black md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 top-2 w-[30px] h-[30px] bg-black rounded-full flex items-center justify-center md:relative md:left-auto md:top-auto md:mx-8">
                    <div className="w-2 h-2 bg-[#A8B2E7] rounded-full" />
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="bg-[#F3F1EB] p-6 rounded-xl border border-black">
                      <div className="text-black text-sm font-bold mb-2">STEP {step.number}</div>
                      <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                      <p className="text-black">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
