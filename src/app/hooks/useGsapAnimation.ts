"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseGsapAnimationOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
  once?: boolean;
}

/**
 * Custom hook to easily create GSAP animations with ScrollTrigger
 * 
 * @example
 * const ref = useGsapAnimation<HTMLDivElement>({
 *   trigger: ref.current,
 *   start: "top 80%",
 *   end: "bottom 20%",
 *   scrub: true,
 * }, (element) => {
 *   gsap.from(element, {
 *     opacity: 0,
 *     y: 50,
 *     duration: 1,
 *   });
 * });
 * 
 * return <div ref={ref}>Animated content</div>;
 */
export function useGsapAnimation<T extends HTMLElement>(
  options: UseGsapAnimationOptions = {},
  animationCallback?: (element: T) => void
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    if (animationCallback) {
      animationCallback(element);
    }

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options, animationCallback]);

  return elementRef;
}

/**
 * Hook for fade-in animation on scroll
 */
export function useFadeIn<T extends HTMLElement>(
  options: UseGsapAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          toggleActions: options.toggleActions || "play none none reverse",
          markers: options.markers || false,
        },
      });
    });

    return () => ctx.revert();
  }, [options]);

  return elementRef;
}

/**
 * Hook for slide-in animation from the left
 */
export function useSlideInLeft<T extends HTMLElement>(
  options: UseGsapAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          toggleActions: options.toggleActions || "play none none reverse",
          markers: options.markers || false,
        },
      });
    });

    return () => ctx.revert();
  }, [options]);

  return elementRef;
}

/**
 * Hook for slide-in animation from the right
 */
export function useSlideInRight<T extends HTMLElement>(
  options: UseGsapAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          toggleActions: options.toggleActions || "play none none reverse",
          markers: options.markers || false,
        },
      });
    });

    return () => ctx.revert();
  }, [options]);

  return elementRef;
}

/**
 * Hook for scale-up animation on scroll
 */
export function useScaleUp<T extends HTMLElement>(
  options: UseGsapAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(elementRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: elementRef.current,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          toggleActions: options.toggleActions || "play none none reverse",
          markers: options.markers || false,
        },
      });
    });

    return () => ctx.revert();
  }, [options]);

  return elementRef;
}

/**
 * Hook for parallax effect
 */
export function useParallax<T extends HTMLElement>(
  speed: number = 0.5,
  options: UseGsapAnimationOptions = {}
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: elementRef.current,
          start: options.start || "top bottom",
          end: options.end || "bottom top",
          scrub: options.scrub ?? true,
          markers: options.markers || false,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, options]);

  return elementRef;
}

