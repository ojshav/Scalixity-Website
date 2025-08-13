"use client";

import * as React from "react";
import { ScalixityHero } from "@/src/app/components/scalixity-hero";
import WhatWeDo from "@/src/app/components/scalixity/what-we-do";
import WhyChooseUs from "@/src/app/components/scalixity/why-choose-us";
import ClientTestimonials from "@/src/app/components/scalixity/client-testimonials";
import ContactForm from "@/src/app/components/scalixity/contact-form";
import ScalixityCTA from "@/src/app/components/scalixity/cta";
import PopupForm from "@/src/app/components/scalixity/popup-form";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function ScalixityPage() {
  const { isOpen, closePopup } = usePopup();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#fefcfd" }}>
      {/* Hero Section */}
      <ScalixityHero />
      
      {/* What We Do Section */}
      <WhatWeDo />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Client Testimonials Section */}
      <ClientTestimonials />
     
      {/* CTA Section */}
      <ScalixityCTA />

       {/* Contact Form Section */}
       <ContactForm />

      {/* Popup Form */}
      <PopupForm isOpen={isOpen} onClose={closePopup} />
    </div>
  );
}
