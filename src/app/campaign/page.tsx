"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/app/components/ui/card";
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
    title: "AI Innovation Challenge",
    description: "Participate in our AI Innovation Challenge and stand a chance to win exciting rewards and internship opportunities.",
    banner: "/images/ai.svg",
  },
];

export default function CampaignPage() {
  return (
    <div className="bg-[#F3F1EB] pt-20 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Active Campaigns</h1>
        <p className="text-xl text-gray-900 mb-8">Explore and register for our ongoing competitions and challenges.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {dummyCampaigns.map((campaign) => (
            campaign.href ? (
              <Link key={campaign.id} href={campaign.href} className="block">
                <Card className="cursor-pointer hover:shadow-xl transition-shadow duration-200">
                  <CardHeader>
                    <img src={campaign.banner} alt={campaign.title} className="w-full max-h-48 object-contain rounded-xl shadow mb-4" />
                    <CardTitle className="text-2xl text-black mb-2">{campaign.title}</CardTitle>
                    <CardDescription className="text-gray-900">{campaign.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ) : (
              <Card key={campaign.id} className="cursor-pointer hover:shadow-xl transition-shadow duration-200">
                <CardHeader>
                  <img src={campaign.banner} alt={campaign.title} className="w-full max-h-48 object-contain rounded-xl shadow mb-4" />
                  <CardTitle className="text-2xl text-black mb-2">{campaign.title}</CardTitle>
                  <CardDescription className="text-gray-900">{campaign.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
