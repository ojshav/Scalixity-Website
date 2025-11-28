import React from 'react';
import { Target, Scale, Leaf, Heart } from 'lucide-react';

const CoreValue = () => {
  const values = [
    {
      icon: Target,
      title: 'Customer-Centric Delivery',
      description: 'We build every solution around the client&apos;s goals, ensuring clarity, transparency, and measurable impact at every step.',
    },
    {
      icon: Scale,
      title: 'Quality & Reliability',
      description: 'From architecture to deployment, we focus on stable, scalable, and maintainable products that stand the test of time.',
    },
    {
      icon: Leaf,
      title: 'Innovation with Purpose',
      description: 'We adopt modern technologies and AI-driven approaches that solve real problems — not just add complexity.',
    },
    {
      icon: Heart,
      title: 'Ownership & Accountability',
      description: 'We treat every project as our own, taking full responsibility for outcomes, timelines, and long-term support.',
    },
  ];

  return (
    <section className="bg-[#FFF2D5] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Our core values guide how we work, collaborate, and deliver. They define our commitment to quality, innovation, and building solutions that truly make a difference for our clients.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center text-purple-700 font-semibold text-lg hover:text-purple-800 hover:no-underline transition-colors"
            >
              Read our Sustainability Report
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a> */}
          </div>

          {/* Right Side - Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-7 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-purple-700" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-purple-700 text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;

