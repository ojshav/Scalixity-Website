'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    quote: "I joined on a whim, but it's become a constant in my growth. Everyone brings such honest energy — I leave every session clearer and more focused.",
    author: "Taylor B.",
    role: "Creative Coach"
  },
  {
    quote: "It's rare to find a space that's this structured and this human. I've made more progress in 3 months than I had in a year alone.",
    author: "Samir R.",
    role: "Indie Developer"
  },
  {
    quote: "The feedback is gold. Supportive, but not sugarcoated. I always feel seen and challenged in the best way.",
    author: "Renee L.",
    role: "Marketing Strategist"
  },
  {
    quote: "I used to overthink every move in my business. Now I have a circle that keeps me grounded, focused, and—honestly—excited to show up.",
    author: "Alex M.",
    role: "Wellness Entrepreneur"
  },
  {
    quote: "This isn't just another online group — it feels like a team. The accountability and support have helped me stay consistent like never before.",
    author: "Jordan K.",
    role: "Freelance Illustrator"
  }
];

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#FFF2D5] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Header - visible only on mobile */}
        <div className="mb-8 sm:hidden">
          <p className="text-xs font-manrope font-medium tracking-wider text-black/70 mb-4 uppercase">Testimonials</p>
          <h2 className="font-playfair text-3xl leading-[1.1] font-normal text-[#2D2D2D]">
            What Our Members <span className="italic font-semibold">Are Saying</span>
          </h2>
        </div>

        {/* Mobile Carousel - visible only on mobile */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-[#2D2D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-[#2D2D2D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-[#2D2D2D] w-6' : 'bg-[#2D2D2D]/30'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet and Desktop Layout */}
        <div className="hidden sm:flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-6">
          {/* Left Side: Header and 1 Testimonial */}
          <div className="lg:w-[35%] flex flex-col justify-between gap-6 sm:gap-8 md:gap-10">
            <div>
              <p className="text-xs sm:text-sm font-manrope font-medium tracking-wider text-black/70 mb-4 sm:mb-6 uppercase">Testimonials</p>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-normal text-[#2D2D2D]">
                What Our Members <span className="italic font-semibold">Are Saying</span>
              </h2>
            </div>

            {/* Third testimonial - placed below header on desktop */}
            <div className="hidden lg:block mt-auto">
              <TestimonialCard {...testimonials[2]} />
            </div>
          </div>

          {/* Right Side: Grid of testimonials */}
          <div className="lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <TestimonialCard {...testimonials[0]} />
            <TestimonialCard {...testimonials[1]} />
            {/* Show third testimonial in grid on tablet */}
            <div className="lg:hidden">
              <TestimonialCard {...testimonials[2]} />
            </div>
            <TestimonialCard {...testimonials[3]} />
            <TestimonialCard {...testimonials[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => {
  return (
    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px] shadow-[0px_4px_19px_0px_#00000026] hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full min-h-[240px] sm:min-h-[260px] md:min-h-[280px]">
      <p className="text-[#4A4A4A] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed mb-6 sm:mb-7 md:mb-8 font-normal">
        &quot;{quote}&quot;
      </p>
      <div className="mt-auto">
        <p className="text-sm sm:text-base text-[#555] font-normal">
          <span className="text-[#1a1a1a] font-medium">— {author}</span> <span className="text-gray-400 mx-1">/</span> {role}
        </p>
      </div>
    </div>
  );
}
