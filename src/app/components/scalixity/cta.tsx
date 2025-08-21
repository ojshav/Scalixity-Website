"use client";

import * as React from "react";
import { Button } from "@/src/app/components/ui/button";
import Link from "next/link";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function ScalixityCTA() {
  const { openPopup } = usePopup();

  return (
    <section 
      className="py-12 px-4 bg-[#F3F1EB]"
    >
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-4">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Scale Your Business?
            </h2>
            
            <p className="text-lg sm:text-xl text-black mb-8 leading-relaxed font-medium max-w-xl lg:max-w-none">
              Get affordable tech solutions that deliver real results. No overspending, just smart solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button 
                onClick={openPopup}
                className="bg-[#A8B2E7] hover:bg-[#9BA5D9] text-white px-8 py-3 text-base font-semibold rounded-full shadow-sm"
              >
                Let&apos;s Scale Together
              </Button>
              
              <Link href="/services">
                <Button 
                  className="bg-[#F3F1EB] hover:bg-[#F3F1EB] text-black border border-black px-8 py-3 text-base font-semibold rounded-full shadow-sm"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
            
            <p className="text-base text-gray-600 max-w-lg lg:max-w-none">
              Based in the UK, delivering affordable tech solutions that help businesses scale without overspending.
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-2xl h-full flex items-center">
              <img
                src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755497964/89e8d5a42093b2f921a4671c9b50972c163ecea7_bdrbwy.png"
                alt="Scalixity Tech Solutions"
                className="w-full h-full object-cover -mt-16 -mb-16 -mr-16"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
