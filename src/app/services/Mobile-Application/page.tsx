'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CTA } from "@/src/app/components/cta";
import { ServiceHero } from "@/src/app/components/service-hero";
import KeyFeatures from "@/src/app/components/keyfeatures"
import { Benefits } from "@/src/app/components/benefits";
import TechnologiesUsed from "@/src/app/components/technologiesused";
import PricingPlan from "@/src/app/components/pricing-plan";
import type { PricingPlanObject, FlexiblePricingPlan } from "@/src/app/components/pricing-plan";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface ServiceData {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  technologies: Array<{ name: string; icon: string }>;
  benefits: string[];
  pricingPlans?: PricingPlanObject | FlexiblePricingPlan[];
  pricing?: {
    starting: string;
    description: string;
  };
}

export default function MobileApplicationPage() {
  const pathname = usePathname();
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract slug from pathname (e.g., /services/mobile-application -> mobile-application)
  const slug = pathname?.split('/').pop() || 'mobile-application';

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${baseURL}/api/website-services/${slug}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch service data');
        }

        const result = await response.json();
        if (result.success && result.data) {
          setServiceData(result.data);
        } else {
          throw new Error('Invalid service data format');
        }
      } catch (err) {
        console.error('Error fetching service data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load service data');
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [slug]);

  if (loading) {
    return (
      <main className="bg-[#FFF2D5] text-[#1A1A1A] min-h-screen flex items-center justify-center">
        <p className="text-[#4A0E78] text-lg">Loading service data...</p>
      </main>
    );
  }

  if (error || !serviceData) {
    return (
      <main className="bg-[#FFF2D5] text-[#1A1A1A] min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-lg">Error: {error || 'Service not found'}</p>
      </main>
    );
  }

  return (
    <main className="bg-[#FFF2D5] text-[#1A1A1A]">
      <ServiceHero
        title={serviceData.title}
        description={serviceData.description}
        images={[
          "/images/mobile application/1.png",
          "/images/mobile application/2.png",
          "/images/mobile application/3.png"
        ]}
      />
      <KeyFeatures features={serviceData.features} />
      <Benefits 
        title="Benefits"
        subtitle="We combine technical expertise with creative innovation to deliver exceptional results"
        benefits={serviceData.benefits}
        ctaText="Start Your Project"
        ctaLink="/contact"
      /> 
      <TechnologiesUsed technologies={serviceData.technologies} />
      <PricingPlan pricingPlans={serviceData.pricingPlans} pricing={serviceData.pricing} />
      <CTA />
    </main>
  );
}

