"use client";

import { useState } from 'react'
import PopupForm from './scalixity/popup-form'

const processSteps = [
  {
    title: "Executive Briefing",
    duration: "2 Hours",
    description: "Initial consultation and requirements gathering"
  },
  {
    title: "Technology Assessment",
    duration: "2-3 Days",
    description: "Technical evaluation and solution planning"
  },
  {
    title: "Proof of Concept (POC)",
    duration: "8-12 Weeks",
    description: "Development and validation of initial solution"
  },
  {
    title: "AI Application Deployment in Production",
    duration: "3-4 Months",
    description: "Full implementation and deployment to production"
  }
];  // Added closing bracket and semicolon here

export function OurProcess() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="bg-[#9FA8DA] py-32">
      <div className="container mx-auto px-4">
        <span className="block text-center text-lg text-black uppercase tracking-wider mb-4">
          OUR PROCESS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 max-w-5xl mx-auto">
          Start improving your efficiency and reducing your operational costs with Generative AI
          in just a few weeks, not years.
        </h2>
        <div className="flex justify-center mb-20">
          <button
            onClick={handleOpenPopup}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-black text-white font-medium text-lg hover:bg-gray-900 transition-colors"
          >
            Contact Us
          </button>
        </div>
        <div className="relative max-w-4xl mx-auto mb-32">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black transform -translate-x-1/2" />
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 top-0 w-4 h-4 bg-black rounded-full transform -translate-x-1/2 -translate-y-2" />
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-4 bottom-0 w-px bg-black transform -translate-x-1/2" />
                )}
                <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2" />
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>                  
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-black">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-black font-medium mb-2">{step.duration}</p>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Helping startups to large-sized organizations with tailored solutions
          </h3>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            As industry leaders, we bring a deep understanding of AI, Generative AI, Agentic AI, Chatbots, and
            Cloud technologies. Our skilled team of data scientists, engineers, developers, and MLOps specialists
            build scalable, end-to-end solutions tailored to your needs. We ensure measurable impacts, prioritize
            data security, and support you fully from pre-processing data to technology evaluation, delivering
            solutions that grow with your business.
          </p>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </section>
  )
}