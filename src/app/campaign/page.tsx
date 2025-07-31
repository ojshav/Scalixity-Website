"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/app/components/ui/card";
import { motion } from "framer-motion";
import * as React from "react";

interface Campaign {
  id: number;
  title: string;
  description: string;
  banner: string;
  href?: string;
}

const dummyCampaigns: Campaign[] = [
  {
    id: 1,
    title: "Scalixity UI/UX Competition",
    description: "Showcase your design skills in our upcoming UI/UX competition! Compete with the best, win exciting prizes, and get recognized by industry leaders.",
    banner: "/images/ui-ux-framework.svg",
    href: "/campaign/ui-ux",
  },
  {
    id: 2,
    title: "Build-A-Chatbot Hackathon",
    description: "Create a functional AI chatbot for a real-world use case! Use Scalixity's chatbot service or any API provided to build innovative solutions.",
    banner: "/images/ai-chatbot.svg",
    href: "/campaign/chatbot-hackathon",
  },
  {
    id: 3,
    title: "App Creation Contest",
    description: "Build a business app using Bubble, Glide, or Softr! Focus on business automation using data to create innovative solutions.",
    banner: "/images/app-development.svg",
    href: "/campaign/app-creation",
  },
  {
    id: 4,
    title: "AI Product Idea Pitch Contest",
    description: "Pitch your AI startup idea in under 2 minutes! Submit a short video and one-pager to showcase your innovative AI product concept.",
    banner: "/images/ai-innovation.svg",
    href: "/campaign/ai-pitch",
  },
  {
    id: 5,
    title: "AI Voice Bot Building Contest",
    description: "Create a voice-enabled assistant using tools like Dialogflow or ElevenLabs! Build innovative voice solutions for healthcare, e-commerce, or education.",
    banner: "/images/voice-assistant.svg",
    href: "/campaign/voice-bot",
  },
  {
    id: 6,
    title: "GPT-based Tool Contest",
    description: "Build a fun/useful GPT-powered tool using OpenAI API! Create innovative tools for resume checking, mental wellness, productivity, or any creative application.",
    banner: "/images/ai-tools.svg",
    href: "/campaign/gpt-tool",
  },
];

export default function CampaignPage() {
  return (
    <div className="bg-[#FEFBF2] min-h-screen flex flex-col">
      {/* Campaign Content */}
      <div className="w-full px-6 lg:px-12 xl:px-16 flex flex-col items-center text-center mb-32 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-amber-600">
            Active Campaigns
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore and register for our ongoing competitions and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full max-w-7xl">
          {dummyCampaigns.map((campaign, index) => (
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
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {campaign.href ? (
                <Link href={campaign.href} className="block">
                  <Card className="group cursor-pointer bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden transform hover:rotate-1">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={campaign.banner} 
                          alt={campaign.title} 
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <CardTitle className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {campaign.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed text-sm lg:text-base">
                          {campaign.description}
                        </CardDescription>
                        <div className="mt-4 flex items-center text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors duration-300">
                          Learn More
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ) : (
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden transform hover:rotate-1">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img 
                        src={campaign.banner} 
                        alt={campaign.title} 
                        className="w-full h-48 object-cover transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <CardTitle className="text-xl lg:text-2xl font-bold mb-3 text-gray-900">
                        {campaign.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {campaign.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
