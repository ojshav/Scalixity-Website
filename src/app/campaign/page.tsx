"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/app/components/ui/card";
import { motion } from "framer-motion";
import * as React from "react";
import { CampaignHero } from "@/src/app/components/campaign-hero";
import CompetitionCTA from "@/src/app/campaign/ui-ux/cta";

interface Campaign {
  id: number;
  name: string;
  description?: string;
  image_url?: string;
  start_date: string;
  end_date: string;
  type: string;
  created_at: string;
  updated_at: string;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export default function CampaignPage() {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`${baseURL}/api/campaigns`);
        if (!response.ok) throw new Error("Failed to fetch campaigns");
        const data = await response.json();
        setCampaigns(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Error fetching campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#fefcfd" }}>
      {/* Hero Section */}
      <CampaignHero />
      
      {/* Campaign Content */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 flex flex-col items-start mb-16 sm:mb-24 lg:mb-32 pt-8 sm:pt-12 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center lg:text-left lg:ml-2 pt-4 sm:pt-8 lg:pt-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-amber-600 px-4 sm:px-0" style={{ fontFamily: 'Playfair Display, serif' }}>
            Active Campaigns
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 max-w-3xl leading-relaxed mb-8 sm:mb-12 lg:mb-16 font-bold px-4 sm:px-0 mx-auto lg:mx-0" style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore and register for our ongoing competitions and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 w-full max-w-7xl mx-auto px-4 sm:px-0">
          {loading ? (
            <div className="col-span-full text-center py-12 text-gray-500">Loading campaigns...</div>
          ) : error ? (
            <div className="col-span-full text-center py-12 text-red-500">{error}</div>
          ) : campaigns.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">No campaigns available at the moment.</div>
          ) : (
            campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  ease: "easeOut", 
                  delay: index * 0.1 
                }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.01,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ 
                  y: -2, 
                  scale: 0.98,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                <Link href="/campaign/ui-ux" className="block no-underline">
                  <Card className="group cursor-pointer bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl active:shadow-xl transition-all duration-500 rounded-2xl sm:rounded-3xl overflow-hidden hover:-translate-y-2 active:-translate-y-1">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={campaign.image_url || "https://res.cloudinary.com/dxwspucxw/image/upload/v1753994862/Gemini_Generated_Image_sji16vsji16vsji1_g2dkbq.png"} 
                          alt={campaign.name} 
                          className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover group-hover:scale-110 group-active:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {campaign.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {campaign.description || "No description available"}
                        </CardDescription>
                        <div className="mt-3 sm:mt-4 flex items-center text-amber-600 font-semibold text-xs sm:text-sm">
                          Learn More
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* CTA Section */}
      <CompetitionCTA />
    </div>
  );
}
