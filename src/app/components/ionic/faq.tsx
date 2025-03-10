"use client"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is Ionic app development?',
    answer: 'Ionic app development involves creating cross-platform mobile applications using web technologies like HTML, CSS, and JavaScript. These apps run seamlessly on iOS, Android, and the web from a single codebase.'
  },
  {
    question: 'Why choose Ionic for mobile app development?',
    answer: 'Ionic offers a cost-effective solution for cross-platform development, reduces time-to-market, and provides a native-like experience with a single codebase.'
  },
  {
    question: 'Can Ionic apps access native device features?',
    answer: 'Yes! Ionic uses Capacitor and Cordova to access native device features like camera, GPS, and push notifications.'
  },
  {
    question: 'Is Ionic suitable for large-scale applications?',
    answer: 'Absolutely! Ionic is scalable and flexible, making it suitable for both small apps and complex enterprise-level applications.'
  },
  {
    question: 'Do you provide post-launch support for Ionic apps?',
    answer: 'Yes, we offer continuous support, updates, and maintenance to keep your Ionic apps running smoothly.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className='bg-[#A8B2E7] py-20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-black'>Ionic App Development FAQs</h2>
        </div>

        <div className='max-w-3xl mx-auto'>
          {faqs.map((faq, index) => (
            <div key={index} className='mb-4'>
              <button
                className='flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg'
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className='text-black font-semibold'>{faq.question}</span>
                {openIndex === index ? <ChevronUp className='text-black' /> : <ChevronDown className='text-black' />}
              </button>
              {openIndex === index && (
                <div className='p-4 bg-[#F3F1EB] mt-1 border border-black rounded-lg'>
                  <p className='text-black'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
