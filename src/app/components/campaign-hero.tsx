"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CampaignHero() {
  return (
                   <section 
        className="w-full flex items-start lg:items-center justify-center pt-24 sm:pt-28 lg:pt-0 lg:min-h-screen"
        style={{
          backgroundColor: "#fefcfd"
        }}
      >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-start lg:items-center lg:min-h-screen">
           {/* Content Column */}
                       <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 text-center lg:text-left lg:ml-2"
           >
             {/* Main Heading */}
                         <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
               style={{ fontFamily: 'Playfair Display, serif' }}
             >
               <span className="text-amber-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Join Scalixity's</span>
               <br />
               <span className="text-gray-900">Innovation Challenges</span>
             </motion.h1>

             {/* Subtitle */}
             <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
               className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
               style={{ fontFamily: 'Playfair Display, serif' }}
             >
               Compete with the best minds, showcase your skills, and<br />
               win exciting prizes in our cutting-edge AI and technology competitions.
             </motion.p>

             {/* Call to Action */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
               className="space-y-2 sm:space-y-3 lg:space-y-4"
             >
               <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                 Ready to make your mark?
               </p>
               <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
                 <Link href="/campaign/ui-ux">
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                   >
                     Explore Campaigns
                   </motion.button>
                 </Link>
                 <Link href="/campaign/ui-ux">
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-amber-100 text-amber-700 hover:bg-amber-200 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-lg transition-all duration-300"
                   >
                     Get Started
                   </motion.button>
                 </Link>
               </div>
             </motion.div>
           </motion.div>

                       {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative h-full w-full hidden xl:block"
            >
                          <img
                src="https://res.cloudinary.com/dxwspucxw/image/upload/v1753955746/hero_section_-_2_xvsxkz.png"
                alt="Scalixity Campaign Hero"
                className="absolute -left-24 top-40 h-4/5 w-auto object-contain scale-150"
              />
            </motion.div>
         </div>
       </div>
     </section>
   );
} 