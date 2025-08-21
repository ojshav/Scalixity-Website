"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/src/app/components/ui/button";
import { usePopup } from "@/src/app/hooks/use-popup";

export default function InternationalClients() {
  const { openPopup } = usePopup();

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-32">
      {/* Wave Animation Background */}
      <motion.div 
        className="absolute inset-0 z-0 top-[10rem]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://res.cloudinary.com/dxwspucxw/image/upload/v1755492397/c64db3caaf991855741eb60d0246d83665bb85eb_y4uclc.png"
          alt="Wave Animation"
          className="w-full h-auto object-cover opacity-10 blur-sm"
        />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto"
        >
                     <div
             className="bg-[#D8E0F0] rounded-2xl p-8 sm:p-10"
           >
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              International Clients
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              While we&apos;re based in the UK, our solutions serve businesses worldwide. From London to Mumbai, 
              we deliver technology that transcends borders while maintaining local compliance and support.
            </p>
            
            {/* Client Logos Placeholder */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mb-8">
              <div className="text-gray-500 text-sm font-medium">UK Clients</div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-500 text-sm font-medium">European Markets</div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-500 text-sm font-medium">Asia Pacific</div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-500 text-sm font-medium">North America</div>
            </div>

                         {/* CTA Button */}
             <motion.div
               whileHover={{ 
                 scale: 1.05,
                 y: -2
               }}
               whileTap={{ 
                 scale: 0.95,
                 y: 0
               }}
               transition={{ 
                 duration: 0.3,
                 ease: "easeOut"
               }}
               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
             >
               <Button 
                 onClick={openPopup}
                 className="bg-[#A8B2E7] hover:bg-[#9BA5D9] text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
               >
                 Join Our Success Stories
               </Button>
               
               <Button 
                 asChild
                 className="bg-[#D8E0F0] hover:bg-[#D8E0F0] text-black border border-black px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
               >
                 <a href="http://localhost:3000/industries">Explore</a>
               </Button>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
