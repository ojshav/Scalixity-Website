"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



interface ServiceHeroProps {
  title: string;
  description: string;
  images?: string[];
}

export function ServiceHero({
  title,
  description,
  images,
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".hero-card") as HTMLElement[];
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Responsive values based on screen size
    const initialY = isMobile ? 200 : isTablet ? 250 : 300;
    const card2Y = isMobile ? -20 : isTablet ? -18 : -20;
    const card3Y = isMobile ? -30 : isTablet ? -35 : -40;
    const scrollEnd = isMobile ? "+=2000" : isTablet ? "+=2500" : "+=3000";

    // Animate title on load
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: isMobile ? 30 : 50,
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
    // Card 0: -3 degrees (rotated left)
    // Card 1: 0 degrees (neutral)
    // Card 2: 3 degrees (rotated right)
    const rotations = [-3, 0, 3];
    
    // Set initial state - 1st card visible, 2nd and 3rd start from bottom
    gsap.set(cards, {
      y: (i) => i === 0 ? 0 : initialY,
      rotation: (i) => rotations[i] || 0,
      scale: (i) => i === 0 ? 1 : 0.8,
      opacity: (i) => i === 0 ? 1 : 0,
      zIndex: (i) => i + 1,
    });

    // Scroll-triggered animation - 2nd and 3rd cards come from bottom
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center-=50 center",
        end: scrollEnd,
        pin: true,
        scrub: 1,
      }
    });

    // Keep 1st card visible throughout
    tl.to(cards[0], {
      duration: 0.3,
    })
    // Animate 2nd card from bottom - opacity fades in quickly at the start
    .to(cards[1], {
      opacity: 1,
      duration: 0.8,
      ease: "power1.in",
    }, "<")
    .to(cards[1], {
      y: card2Y,
      rotation: rotations[1] || 0,
      scale: 1,
      duration: 0.85,
      ease: "power2.out",
    }, "<0.05")
    // Then animate 3rd card from bottom after 2nd is complete
    .to(cards[2], {
      opacity: 1,
      duration: 0.15,
      ease: "power1.in",
    }, ">-0.1")
    .to(cards[2], {
      y: card3Y,
      rotation: rotations[2] || 0,
      scale: 1,
      duration: 0.85,
      ease: "power2.out",
    }, "<0.05");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#FFF2D5] h-full lg:h-full lg:min-h-screen flex flex-col items-center justify-center overflow-hidden  lg:pt-28 lg:pb-20">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-6xl mb-16 md:mb-16 lg:mb-16">
        <h1 ref={titleRef} className="text-3xl md:text-5xl lg:text-7xl font-playfair font-bold text-[#590178] mb-2 md:mb-3 lg:mb-4 leading-tight">
          {title}
        </h1>
        {/* <p className="text-lg md:text-xl text-black/70 font-inter max-w-2xl mx-auto">
          {description}
        </p> */}
      </div>

      <div ref={cardsRef} className="relative w-full max-w-9xl h-[350px] md:h-[400px] lg:h-[550px] flex items-center justify-center perspective-1000">
        {(images || [
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2940&auto=format&fit=crop"
        ]).map((src, index) => (
          <div
            key={index}
            className="hero-card absolute w-[90%] md:w-[80%] lg:w-[70%] h-[350px] md:h-[400px] lg:h-[550px] rounded-2xl md:rounded-3xl lg:rounded-[32px] shadow-xl overflow-hidden border border-white/20"
          >
            <img
              src={src}
              alt={`Hero image ${index + 1}`}
              className="w-full h-full object-contain md:object-cover"
            />
            <div className="absolute inset-0 bg-[#590178]/20 mix-blend-multiply" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center max-w-7xl mt-12 md:mt-18 lg:mt-20">
        <p className="text-base md:text-xl lg:text-3xl text-black font-inter font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}


