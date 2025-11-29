"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface MobileServiceHeroProps {
  title: string;
  description: string;
  images?: string[];
}

export function MobileServiceHero({
  title,
  description,
  images,
}: MobileServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".mobile-hero-card") as HTMLElement[];

    // Animate title on load
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // Initial state with custom rotations
    const rotations = [-4, 0, 4];
    
    // Set initial state - 1st card visible, 2nd and 3rd start from bottom
    gsap.set(cards, {
      y: (i) => i === 0 ? 0 : 400,
      rotation: (i) => rotations[i] || 0,
      scale: (i) => i === 0 ? 1 : 0.85,
      opacity: (i) => i === 0 ? 1 : 0,
      zIndex: (i) => i + 1,
    });

    // Scroll-triggered animation - 2nd and 3rd cards come from bottom
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=2800",
        pin: true,
        scrub: 1,
      }
    });

    // Animate 2nd card from bottom first
    tl.to(cards[1], {
      y: -30,
      rotation: rotations[1] || 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    })
    // Then animate 3rd card from bottom after 2nd is complete
    .to(cards[2], {
      y: -60,
      rotation: rotations[2] || 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#FFF2D5] min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl mb-12">
        <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#590178] mb-6 leading-tight">
          {title}
        </h1>
      </div>

      {/* Mobile-oriented card layout - taller for 9:16 aspect ratio */}
      <div ref={cardsRef} className="relative w-full max-w-7xl h-[550px] md:h-[580px] flex items-center justify-center perspective-1000 px-4">
        {(images || [
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2940&auto=format&fit=crop"
        ]).map((src, index) => (
          <div
            key={index}
            className="mobile-hero-card absolute flex items-center justify-center"
            style={{
              // Mobile card dimensions - maintaining 9:16 aspect ratio
              width: 'min(70vw, 300px)',
              aspectRatio: '9/16',
            }}
          >
            {/* Device frame container */}
            <div className="relative w-full h-full rounded-[36px] md:rounded-[44px] shadow-2xl overflow-hidden border-[6px] md:border-[8px] border-white bg-white">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 md:h-7 bg-white rounded-b-3xl z-10" />
              
              {/* Screen content */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <img
                  src={src}
                  alt={`Mobile app screenshot ${index + 1}`}
                  className="w-full h-full object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#590178]/5 via-transparent to-[#590178]/10 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center max-w-7xl mt-16">
        <p className="text-lg md:text-3xl text-black font-inter font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

