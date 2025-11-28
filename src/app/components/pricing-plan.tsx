'use client';

import React from 'react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
}

const pricingData: PricingTier[] = [
  {
    name: 'Beginner',
    price: '$29',
    period: '/month',
    description: 'Perfect for small projects and startups',
    features: [
      { text: 'Up to 5 projects', included: true },
      { text: 'Basic support', included: true },
      { text: '10 GB storage', included: true },
      { text: 'Community access', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Priority support', included: false },
      { text: 'Custom integrations', included: false },
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'Priority support', included: true },
      { text: '100 GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'API access', included: true },
      { text: 'Team collaboration', included: true },
      { text: 'Custom domain', included: true },
      { text: 'White-label solution', included: false },
    ],
    buttonText: 'Get Started',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/month',
    description: 'For large enterprises and teams',
    features: [
      { text: 'Unlimited everything', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'White-label solution', included: true },
      { text: 'SLA guarantee', included: true },
      { text: 'Dedicated account manager', included: true },
    ],
    buttonText: 'Contact Sales',
  },
];

export default function PricingPlan() {
  return (
    <div className="min-h-screen bg-[#FFF2D5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold font-playfair text-center text-[#6B2D8F] mb-16">
          Pricing Plans
        </h1>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((tier, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10 cursor-pointer relative ${
                tier.popular ? 'ring-4 ring-[#6B2D8F] ring-opacity-50' : ''
              }`}
            >
              {/* Hover Background Overlay */}
              <div className="absolute inset-0 bg-[#6B2D8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Card Header */}
              <div className="bg-[#6B2D8F] text-white py-8 px-6 text-center relative z-10">
                {tier.popular && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-[#6B2D8F] text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <h2 className="text-3xl font-bold font-playfair mb-2">{tier.name}</h2>
              </div>

              {/* Card Body */}
              <div className="p-8 relative z-10 group-hover:text-white transition-colors duration-500">
                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-[#6B2D8F] group-hover:text-white transition-colors duration-500">
                      {tier.price}
                    </span>
                    <span className="text-xl text-gray-600 group-hover:text-white ml-2 transition-colors duration-500">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-gray-600 group-hover:text-white text-sm transition-colors duration-500">{tier.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <svg
                        className={`w-6 h-6 flex-shrink-0 transition-colors duration-500 ${
                          feature.included
                            ? 'text-green-500 group-hover:text-white'
                            : 'text-gray-300 group-hover:text-white group-hover:opacity-50'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {feature.included ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        )}
                      </svg>
                      <span
                        className={`text-sm transition-colors duration-500 ${
                          feature.included
                            ? 'text-gray-700 group-hover:text-white'
                            : 'text-gray-400 line-through group-hover:text-white group-hover:opacity-50'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-500 ${
                    tier.popular
                      ? 'bg-[#6B2D8F] text-white hover:bg-[#5A2478] shadow-lg group-hover:bg-white group-hover:text-[#6B2D8F]'
                      : 'bg-[#6B2D8F] bg-opacity-10 text-[#6B2D8F] hover:bg-opacity-20 border-2 border-[#6B2D8F] group-hover:bg-white group-hover:border-white group-hover:text-[#6B2D8F]'
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">
            All plans include SSL certificate, 99.9% uptime guarantee, and
            regular backups
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Need a custom plan?{' '}
            <button className="text-[#6B2D8F] font-semibold hover:underline transition-all duration-300">
              Contact us
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

