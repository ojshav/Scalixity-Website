"use client";

import * as React from "react";
import { Button } from "@/src/app/components/ui/button";
import Link from "next/link";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function ScalixityCTA() {
  const { openPopup } = usePopup();

  return (
    <section 
      className="py-12 px-4 bg-white"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-4">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Scale Your Business?
            </h2>
            
            <p className="text-lg sm:text-xl text-amber-600 mb-8 leading-relaxed font-medium max-w-xl lg:max-w-none">
              Get affordable tech solutions that deliver real results. No overspending, just smart solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button 
                onClick={openPopup}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-semibold rounded-lg shadow-sm"
              >
                Let&apos;s Scale Together
              </Button>
              
              <Link href="/services">
                <Button 
                  variant="outline" 
                  className="bg-[#FFC145] hover:bg-[#FFB833] text-white border-2 border-[#FFC145] px-8 py-3 text-base font-semibold rounded-lg shadow-sm"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
            
            <p className="text-base text-gray-600 max-w-lg lg:max-w-none">
              Based in the UK, delivering affordable tech solutions that help businesses scale without overspending.
            </p>
          </div>
          
          {/* Right Side - Video */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-lg overflow-hidden">
              <video
                className="w-full h-auto rounded-xl shadow-lg -mt-16 -mb-16 -mr-16"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              >
                <source src="https://res.cloudinary.com/dxwspucxw/video/upload/v1755092464/Hailuo_Video_412032205348503561_skjo5q.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
