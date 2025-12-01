"use client";

import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { gsap } from "gsap";

interface OnboardingPopupProps {
  onClose: () => void;
}

export default function OnboardingPopup({ onClose }: OnboardingPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerBgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formElementsRef = useRef<(HTMLDivElement | HTMLButtonElement)[]>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation timeline
      const tl = gsap.timeline();

      // Animate overlay fade in
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate card entrance with elastic effect
      tl.fromTo(
        cardRef.current,
        { 
          scale: 0.7, 
          opacity: 0, 
          y: 50,
          rotateX: -15
        },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          duration: 0.6, 
          ease: "back.out(1.4)"
        },
        "-=0.1"
      );

      // Animate decorative header background
      tl.fromTo(
        headerBgRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.5, ease: "power2.out" },
        "-=0.4"
      );

      // Animate close button
      tl.fromTo(
        closeButtonRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.4, ease: "back.out(2)" },
        "-=0.3"
      );

      // Animate title
      tl.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.3"
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      );

      // Staggered animation for form elements
      tl.fromTo(
        formElementsRef.current,
        { x: -30, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.2"
      );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = (shouldSetFlag: boolean = false) => {
    // Exit animation
    const tl = gsap.timeline({
      onComplete: () => {
        if (shouldSetFlag) {
          localStorage.setItem("hasSeenOnboarding", "true");
        }
        onClose();
      }
    });

    tl.to(formElementsRef.current, {
      x: 30,
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in"
    });

    tl.to(
      [titleRef.current, subtitleRef.current],
      { y: -20, opacity: 0, duration: 0.2, ease: "power2.in" },
      "-=0.1"
    );

    tl.to(
      cardRef.current,
      { 
        scale: 0.8, 
        opacity: 0, 
        y: 30,
        rotateX: 15,
        duration: 0.3, 
        ease: "back.in(1.4)"
      },
      "-=0.1"
    );

    tl.to(
      overlayRef.current,
      { opacity: 0, duration: 0.2, ease: "power2.in" },
      "-=0.2"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${baseURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: "lead generated"
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      // Only set localStorage flag after successful submission
      handleClose(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10  p-4"
      style={{ opacity: 0 }}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
        style={{ opacity: 0, perspective: "1000px" }}
      >
        {/* Decorative Header Background */}
        <div
          ref={headerBgRef}
          className="absolute top-0 left-0 right-0 h-32 bg-[#FFF2D5] rounded-b-[50%] scale-x-150 -translate-y-10"
        />

        <button
          ref={closeButtonRef}
          onClick={() => handleClose(false)}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-[#590178] hover:bg-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative z-0 px-8 pt-12 pb-8">
          <div className="text-center mb-8">
            <h2
              ref={titleRef}
              className="text-2xl font-bold text-[#590178] mb-2"
            >
              Welcome to Scalixity!
            </h2>
            <p
              ref={subtitleRef}
              className="text-gray-600 text-sm"
            >
              Let&apos;s get to know you better. Please fill in your details to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div ref={(el) => { if (el) formElementsRef.current[0] = el; }}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#590178] focus:ring-2 focus:ring-[#590178]/20 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div ref={(el) => { if (el) formElementsRef.current[1] = el; }}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#590178] focus:ring-2 focus:ring-[#590178]/20 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div ref={(el) => { if (el) formElementsRef.current[2] = el; }}>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#590178] focus:ring-2 focus:ring-[#590178]/20 outline-none transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded-lg">
                {error}
              </div>
            )}
            <button
              ref={(el) => { if (el) formElementsRef.current[3] = el; }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#590178] text-white font-semibold py-3 rounded-lg hover:bg-[#4a0163] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? "Submitting..." : "Get Started"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
