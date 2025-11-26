import React from 'react';
import { Target, Scale, Leaf, Heart } from 'lucide-react';

const CoreValue = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge R&D.',
    },
    {
      icon: Scale,
      title: 'Ethical AI',
      description: 'Transparent models that prioritize fairness.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Green computing and energy-efficient code.',
    },
    {
      icon: Heart,
      title: 'Client-First',
      description: 'Partnerships built on trust and mutual growth.',
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
              We believe that technology should serve humanity, not replace it. Our
              ethical framework guides every line of code we write.
            </p>
            <a
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
            </a>
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

