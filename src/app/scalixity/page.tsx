"use client";

import * as React from "react";

import { ScalixityHero } from "@/src/app/components/scalixity-hero";
import { ScalixityDashboardAnalytics } from "@/src/app/components/scalixity-dashboard-analytics";
import WhatWeDo from "@/src/app/components/scalixity/what-we-do";
import WhyChooseUs from "@/src/app/components/scalixity/why-choose-us";
import ClientTestimonials from "@/src/app/components/scalixity/client-testimonials";
import InternationalClients from "@/src/app/components/scalixity/international-clients";
import ContactForm from "@/src/app/components/scalixity/contact-form";
import ScalixityCTA from "@/src/app/components/scalixity/cta";
import PopupForm from "@/src/app/components/scalixity/popup-form";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function ScalixityPage() {
  const { isOpen, closePopup } = usePopup();

  return (
    <div className="min-h-screen flex flex-col bg-[#F2E5DC]">
      
      {/* Hero Section */}
      <ScalixityHero />
      
      {/* Dashboard Analytics Section */}
      <ScalixityDashboardAnalytics />
      
      {/* What We Do Section */}
      <WhatWeDo />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Client Testimonials Section */}
      <ClientTestimonials />
      
      {/* International Clients Section */}
      <InternationalClients />
     
      {/* CTA Section */}
      <ScalixityCTA />

       {/* Contact Form Section */}
       <ContactForm />

      {/* Popup Form */}
      <PopupForm isOpen={isOpen} onClose={closePopup} />
    </div>
  );
}
