"use client";

import {
  Monitor,
  BarChart3,
  Smartphone,
  MessageSquare,
  ShoppingBag,
  Brain
} from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

const services = [
  {
    title: "Custom Dashboards & Analytics",
    description: "Real-time dashboards and analytics systems that turn your data into clear insights to drive better decisions..",
    icon: BarChart3,
  },
  {
    title: "Web Apps & Websites",
    description: "Powerful, scalable web applications and responsive websites built to streamline operations and deliver great user experiences.",
    icon: Monitor,
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description: "High-performance mobile apps for iOS and Android with sleek UI, smooth performance, and seamless backend integration.",
    icon: Smartphone,
  },
  {
    title: "AI Automations & Chatbots",
    description: "Intelligent AI chatbots and workflow automations that reduce manual work and enhance customer engagement.",
    icon: MessageSquare,
  },
  {
    title: "Custom Ecommerce Development",
    description: "Modern, conversion-focused ecommerce stores with secure checkout, inventory management, and full admin control.",
    icon: ShoppingBag,
  },
  {
    title: "Machine Learning & NLP Solutions",
    description: "Prediction models, classification systems, and NLP pipelines tailored to automate processes and unlock business insights.",
    icon: Brain,
  }
];

export function OurService() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current?.querySelectorAll('.service-card');

    if (cards && containerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center+=100",
          end: "+=150%",
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Initial state
      gsap.set(cards, { y: "100px", opacity: 0 });

      // Entrance animation
      tl.to(cards, {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power3.out"
      })
        // Hold for a moment
        .to({}, { duration: 0.5 })
        // Exit animation
        .to(cards, {
          y: "-100px",
          opacity: 0,
          duration: 2,
          stagger: 0.2,
          ease: "power3.in"
        });
    }
  }, { scope: containerRef });

  return (
    <section className="bg-[#FFF2D5] py-20 md:py-16 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center ">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-black">
            Our Services
          </h2>
          <p className="text-[#590178] text-lg md:text-xl max-w-2xl mx-auto font-inter">
            We provide comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-8 max-w-5xl mx-auto w-full">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="service-card h-full">
              <ServiceCard {...service} />
            </div>
          ))}
          <div className="lg:col-span-3 flex flex-col md:flex-row justify-center gap-8">
            {services.slice(3).map((service, index) => (
              <div key={index + 3} className="service-card w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        <div className=" bg-[#590178] py-20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl max-w-6xl mx-auto w-full relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-2">
              Have an Idea?
            </h3>
            <h3 className="text-4xl md:text-6xl font-bold font-playfair text-white">
              Let&apos;s Make It Real
            </h3>
          </div>
          <Link href="/contact">
            <button className="bg-white text-[#4A0E4E] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-md whitespace-nowrap">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon: Icon }: { title: string, description: string, icon: React.ComponentType<{ strokeWidth?: number; className?: string }> }) {
  return (
    <div className="group bg-[#FFF2D5] p-6 rounded-2xl border border-[#D4B5D8] hover:border-[#3B82F6] shadow-[0px_4px_19px_0px_#00000033] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full min-h-[300px] flex flex-col items-start text-left">
      <div className="mb-2 p-0 rounded-xl transition-colors duration-300 inline-block">
        <Icon strokeWidth={1.5} className="w-14 h-14 text-[#5D2E68]" />
      </div>
      <h3 className="text-2xl font-bold font-playfair mb-4 text-black">
        {title}
      </h3>
      <p className="text-[#590178] font-inter leading-relaxed text-sm ">
        {description}
      </p>
    </div>
  );
}