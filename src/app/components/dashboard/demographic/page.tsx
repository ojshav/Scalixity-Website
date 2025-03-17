'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import WorldMap from '@/src/app/components/WorldMap';

interface CountryData {
  country: string;
  id?: string;
  total_visitors: number;
}

interface EngagementData {
  page: string;
  visits: number;
  unique_visitors: number;
}

export default function PortfolioMetrics() {
  const [visitorData, setVisitorData] = useState<CountryData[]>([]);
  const [engagementData, setEngagementData] = useState<EngagementData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDemographicData = async () => {
      try {
        // Fetch demographic analytics
        const demographicResponse = await fetch('http://kea.mywire.org:5000/api/demographic-analytics');
        if (!demographicResponse.ok) {
          throw new Error('Failed to fetch demographic data');
        }
        const demographicData = await demographicResponse.json();

        // Transform country distribution data
        const transformedCountryData: CountryData[] = demographicData.countryDistribution.map((country: { country: string, visitor_count: number }) => ({
          id: getCountryCode(country.country),
          country: country.country,
          total_visitors: country.visitor_count
        })).slice(0, 5); // Limit to top 5 countries

        // Transform page engagement data
        const transformedEngagementData: EngagementData[] = demographicData.pageEngagement.map((page: { page: string, visits: number, unique_visitors: number }) => ({
          page: page.page,
          visits: page.visits,
          unique_visitors: page.unique_visitors
        }));

        setVisitorData(transformedCountryData);
        setEngagementData(transformedEngagementData);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching demographic data:', err);
        setError('Failed to load demographic data');
        setIsLoading(false);
      }
    };

    fetchDemographicData();
  }, []);

  // Utility function to get country code (you might want to expand this)
  const getCountryCode = (countryName: string): string => {
    const countryCodeMap: { [key: string]: string } = {
      'United States': 'US',
      'India': 'IN',
      'United Kingdom': 'GB',
      'Germany': 'DE',
      'Canada': 'CA'
    };
    return countryCodeMap[countryName] || 'UN'; // Default to 'UN' (Unknown) if no match
  };

  // Calculate max visits for color scaling
  const maxVisits = engagementData.length 
    ? Math.max(...engagementData.map(item => item.visits)) 
    : 0;

  if (isLoading) {
    return (
      <div className="p-6 text-center">
        <p>Loading demographic data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      {/* Visitor Distribution - Map */}
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">Visitor Distribution</h2>
        <div className="h-96">
          <WorldMap 
            data={visitorData.map(item => ({ 
              id: item.id || 'UN',
              country: item.country,
              users: item.total_visitors,
              value: item.total_visitors
            }))} 
          />
        </div>
      </div>

      {/* Website Engagement */}
      <div className="bg-card p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-500">Website Engagement</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="page" />
            <YAxis />
            <Tooltip 
              formatter={(value, name) => [
                name === 'visits' ? `${value} visits` : `${value} unique visitors`,
                name === 'visits' ? 'Visits' : 'Unique Visitors'
              ]} 
            />
            <Legend />
            <Bar dataKey="visits" name="Visits">
              {engagementData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={`rgba(255, 0, 0, ${0.3 + (entry.visits / maxVisits) * 0.7})`} 
                />
              ))}
            </Bar>
            <Bar dataKey="unique_visitors" name="Unique Visitors" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}