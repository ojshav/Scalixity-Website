'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

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

export type FlexiblePricingPlan = {
  name?: string;
  title?: string;
  price?: string;
  amount?: string;
  priceRange?: string;
  period?: string;
  billingPeriod?: string;
  description?: string;
  features?: Array<string | { text: string; included: boolean }>;
  bulletPoints?: string[];
  buttonText?: string;
  ctaText?: string;
  popular?: boolean;
  highlighted?: boolean;
};

export interface PricingPlanObject {
  beginner?: {
    priceRange: string;
    description: string;
    bulletPoints: string[];
  };
  professional?: {
    priceRange: string;
    description: string;
    bulletPoints: string[];
  };
  pro?: {
    priceRange: string;
    description: string;
    bulletPoints: string[];
  };
}

interface PricingPlanProps {
  pricingPlans?: PricingPlanObject | FlexiblePricingPlan[];
  pricing?: {
    starting: string;
    description: string;
  };
}

const defaultPricingData: PricingTier[] = [
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
    buttonText: 'Get Started',
  },
];

export default function PricingPlan({ pricingPlans, pricing }: PricingPlanProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Transform API pricingPlans to component format, or use default
  let displayPricingData: PricingTier[] = defaultPricingData;

  if (pricingPlans) {
    // Handle object structure from backend (beginner, professional, pro)
    if (typeof pricingPlans === 'object' && !Array.isArray(pricingPlans)) {
      const plans: PricingTier[] = [];
      
      // Map beginner plan
      if (pricingPlans.beginner) {
        plans.push({
          name: 'Beginner',
          price: pricingPlans.beginner.priceRange || '$0',
          period: '',
          description: pricingPlans.beginner.description || 'Perfect for small projects and startups',
          features: Array.isArray(pricingPlans.beginner.bulletPoints)
            ? pricingPlans.beginner.bulletPoints.map((point: string) => ({ text: point, included: true }))
            : [],
          buttonText: 'Get Started',
          popular: false,
        });
      }

      // Map professional plan
      if (pricingPlans.professional) {
        plans.push({
          name: 'Professional',
          price: pricingPlans.professional.priceRange || '$0',
          period: '',
          description: pricingPlans.professional.description || 'Ideal for growing businesses',
          features: Array.isArray(pricingPlans.professional.bulletPoints)
            ? pricingPlans.professional.bulletPoints.map((point: string) => ({ text: point, included: true }))
            : [],
          buttonText: 'Get Started',
          popular: true, // Professional is typically the popular one
        });
      }

      // Map pro plan
      if (pricingPlans.pro) {
        plans.push({
          name: 'Pro',
          price: pricingPlans.pro.priceRange || '$0',
          period: '',
          description: pricingPlans.pro.description || 'For large enterprises and teams',
          features: Array.isArray(pricingPlans.pro.bulletPoints)
            ? pricingPlans.pro.bulletPoints.map((point: string) => ({ text: point, included: true }))
            : [],
          buttonText: 'Contact Sales',
          popular: false,
        });
      }

      if (plans.length > 0) {
        displayPricingData = plans;
      }
    } 
    // Handle array structure (fallback for other formats)
    else if (Array.isArray(pricingPlans) && pricingPlans.length > 0) {
      displayPricingData = pricingPlans.map((plan: FlexiblePricingPlan, index: number) => ({
        name: plan.name || plan.title || `Plan ${index + 1}`,
        price: plan.price || plan.amount || plan.priceRange || '$0',
        period: plan.period || plan.billingPeriod || '/month',
        description: plan.description || '',
        features: Array.isArray(plan.features) 
          ? plan.features.map((f: string | { text: string; included: boolean }) => 
              typeof f === 'string' 
                ? { text: f, included: true }
                : { text: typeof f.text === 'string' ? f.text : '', included: f.included !== false }
            )
          : Array.isArray(plan.bulletPoints)
          ? plan.bulletPoints.map((point: string) => ({ text: point, included: true }))
          : [],
        buttonText: plan.buttonText || plan.ctaText || 'Get Started',
        popular: plan.popular || plan.highlighted || index === 1,
      }));
    }
  } else if (pricing) {
    // If only pricing object is provided, create a simple pricing display
    displayPricingData = [
      {
        name: 'Starting Price',
        price: pricing.starting,
        period: '',
        description: pricing.description,
        features: [
          { text: 'Custom solution tailored to your needs', included: true },
          { text: 'Dedicated support', included: true },
          { text: 'Flexible payment options', included: true },
        ],
        buttonText: 'Contact Us',
        popular: false,
      }
    ];
  }

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentSlide > 0 ? currentSlide - 1 : displayPricingData.length - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentSlide < displayPricingData.length - 1 ? currentSlide + 1 : 0;
    scrollToCard(newIndex);
  };

  return (
    <div className="h-full bg-[#FFF2D5] py-8 sm:py-12 md:py-16 px-3 sm:px-4">
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-center text-[#6B2D8F] mb-8 sm:mb-12 md:mb-16 px-2">
          Pricing Plans
        </h1>

        {/* Mobile Horizontal Scroll Container with Navigation */}
        <div className="relative md:hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white text-[#6B2D8F] rounded-full p-2 shadow-lg hover:bg-[#6B2D8F] hover:text-white transition-all duration-300"
            aria-label="Previous plan"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white text-[#6B2D8F] rounded-full p-2 shadow-lg hover:bg-[#6B2D8F] hover:text-white transition-all duration-300"
            aria-label="Next plan"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto snap-x snap-mandatory scrollbar-hide flex gap-4 px-10"
          >
            {displayPricingData.map((tier, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-full"
              >
                <div
                  className={`group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer relative ${
                    tier.popular ? 'ring-2 ring-[#6B2D8F] ring-opacity-50' : ''
                  }`}
                >
                  {/* Hover Background Overlay */}
                  <div className="absolute inset-0 bg-[#6B2D8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Card Header */}
                  <div className="bg-[#6B2D8F] text-white py-6 px-4 text-center relative z-10">
                    {tier.popular && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-[#6B2D8F] text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </div>
                    )}
                    <h2 className="text-2xl font-bold font-playfair mb-2">{tier.name}</h2>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 relative z-10 group-hover:text-white transition-colors duration-500">
                    {/* Description (Price hidden) */}
                    <div className="text-center mb-5">
                      <p className="text-gray-600 group-hover:text-white text-xs transition-colors duration-500">
                        {tier.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2"
                        >
                          <svg
                            className={`w-5 h-5 flex-shrink-0 transition-colors duration-500 ${
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
                            className={`text-xs transition-colors duration-500 ${
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
                    <Link href="/contact">
                      <button
                        className={`w-full py-3 px-4 rounded-lg font-semibold text-base transition-all duration-500 ${
                          tier.popular
                            ? 'bg-[#6B2D8F] text-white hover:bg-[#5A2478] shadow-lg group-hover:bg-white group-hover:text-[#6B2D8F]'
                            : 'bg-[#6B2D8F] bg-opacity-10 text-[#6B2D8F] hover:bg-opacity-20 border-2 border-[#6B2D8F] group-hover:bg-white group-hover:border-white group-hover:text-[#6B2D8F]'
                        }`}
                      >
                        {tier.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {displayPricingData.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#6B2D8F] w-6' : 'bg-[#6B2D8F] bg-opacity-30'
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet and Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayPricingData.map((tier, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden transition-all duration-500 lg:hover:scale-110 hover:shadow-2xl lg:hover:z-10 cursor-pointer relative ${
                tier.popular ? 'ring-2 sm:ring-4 ring-[#6B2D8F] ring-opacity-50' : ''
              }`}
            >
              {/* Hover Background Overlay */}
              <div className="absolute inset-0 bg-[#6B2D8F] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Card Header */}
              <div className="bg-[#6B2D8F] text-white py-6 sm:py-8 px-4 sm:px-6 text-center relative z-10">
                {tier.popular && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-[#6B2D8F] text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair mb-2">{tier.name}</h2>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 md:p-8 relative z-10 group-hover:text-white transition-colors duration-500">
                {/* Description (Price hidden) */}
                <div className="text-center mb-5 sm:mb-6">
                  <p className="text-gray-600 group-hover:text-white text-xs sm:text-sm transition-colors duration-500">
                    {tier.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2 sm:space-x-3"
                    >
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-colors duration-500 ${
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
                        className={`text-xs sm:text-sm transition-colors duration-500 ${
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
                <Link href="/contact">
                  <button
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-500 ${
                      tier.popular
                        ? 'bg-[#6B2D8F] text-white hover:bg-[#5A2478] shadow-lg group-hover:bg-white group-hover:text-[#6B2D8F]'
                        : 'bg-[#6B2D8F] bg-opacity-10 text-[#6B2D8F] hover:bg-opacity-20 border-2 border-[#6B2D8F] group-hover:bg-white group-hover:border-white group-hover:text-[#6B2D8F]'
                    }`}
                  >
                    {tier.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}