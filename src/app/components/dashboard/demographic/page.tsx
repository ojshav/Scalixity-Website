'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/src/app/components/ui/chart';
import { FileText } from 'lucide-react';
import WorldMap from '@/src/app/components/WorldMap';
import CustomSelect from '@/src/app/components/common/CustomSelect';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchDemographicData = async () => {
      try {
        // Fetch demographic analytics
        const demographicResponse = await fetch(`${baseURL}/api/demographic-analytics`);
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

  // Categorize pages and get available categories
  const { categorizedPages, availableCategories } = useMemo(() => {
    const services: EngagementData[] = [];
    const industries: EngagementData[] = [];
    const dashboard: EngagementData[] = [];
    const other: EngagementData[] = [];

    engagementData.forEach((page) => {
      const pageName = (page.page || '').toLowerCase();
      if (pageName.includes('/services') || pageName.startsWith('services')) {
        services.push(page);
      } else if (pageName.includes('/industries') || pageName.startsWith('industries')) {
        industries.push(page);
      } else if (pageName.includes('dashboard') || pageName.includes('admin')) {
        dashboard.push(page);
      } else {
        other.push(page);
      }
    });

    const categories: Record<string, EngagementData[]> = {
      all: engagementData,
      services,
      industries,
      dashboard,
      other,
    };

    const available = Object.keys(categories).filter(key => categories[key].length > 0);

    return { categorizedPages: categories, availableCategories: available };
  }, [engagementData]);

  // Get filtered data based on selected category
  const filteredEngagementData = useMemo(() => {
    if (selectedCategory === 'all') {
      return engagementData;
    }
    return categorizedPages[selectedCategory] || [];
  }, [selectedCategory, categorizedPages, engagementData]);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredEngagementData.length / itemsPerPage);
  const paginatedEngagementData = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    return filteredEngagementData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredEngagementData, currentPage, itemsPerPage]);


  const engagementChartConfig: ChartConfig = {
    visits: {
      label: 'Visits',
      color: '#60A5FA',
    },
    unique_visitors: {
      label: 'Unique Visitors',
      color: '#1E40AF',
    },
  };

  // Custom tooltip component to show page name
  const EngagementTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value?: number | string; dataKey?: string; name?: string; color?: string; payload?: EngagementData }>; label?: string }) => {
    if (active && payload && payload.length) {
      const pageName = label || payload[0]?.payload?.page || 'Unknown';
      return (
        <div className="rounded-lg border bg-white p-3 shadow-md">
          <p className="text-sm font-medium mb-2">{`Page: ${pageName}`}</p>
          {payload.map((entry, index) => {
            const name = entry.name || entry.dataKey || 'Value';
            const value = entry.value;
            const color = entry.color || '#60A5FA';
            
            return (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }}></div>
                  <span className="text-sm text-gray-600">{name}</span>
                </div>
                <span className="text-sm font-semibold">{typeof value === 'number' ? value.toLocaleString() : value}</span>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

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
    <div className="space-y-6">
      <div className="mb-6 px-2 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2" style={{ color: '#000000' }}>Demographics</h1>
        <p className="text-sm sm:text-base md:text-lg" style={{ color: '#666666' }}>Geographic distribution and visitor analytics.</p>
      </div>

      {/* Visitor Distribution - Map */}
      <div className="bg-white p-6 rounded-xl mx-2 md:mx-0" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
        <h2 className="text-xl sm:text-2xl font-semibold mb-6" style={{ color: '#000000' }}>Visitor Distribution</h2>
        <div className="h-96 overflow-x-auto">
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
      <div className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] mx-2 md:mx-0">
        <div className="mb-4 md:mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center">
              <div className="p-2 md:p-3 bg-purple-50 rounded-xl mr-3 md:mr-4 flex items-center justify-center">
                <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Website Engagement</h2>
            </div>
            <CustomSelect
              label="Category"
              value={selectedCategory}
              onChange={setSelectedCategory}
              options={availableCategories.map((category) => ({
                value: category,
                label: category.charAt(0).toUpperCase() + category.slice(1),
              }))}
              minWidth={{ xs: '100%', md: '180px' }}
            />
          </div>
        </div>
        <ChartContainer config={engagementChartConfig} className="h-64 md:h-80 relative w-full">
          <BarChart 
            data={paginatedEngagementData}
            margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="page" 
              hide={true}
            />
            <YAxis 
              width={35}
              tickMargin={6}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
            />
            <ChartTooltip 
              content={<EngagementTooltip />} 
              cursor={{ fill: '#F3F4F6' }} 
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="visits"
              name="Visits"
              stackId="a"
              fill="#60A5FA"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="unique_visitors"
              name="Unique Visitors"
              stackId="a"
              fill="#1E40AF"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-4">
            <div className="text-xs md:text-sm text-gray-600 text-center sm:text-left">
              Showing {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, filteredEngagementData.length)} of {filteredEngagementData.length} pages
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className="px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-colors ${
                    currentPage === i
                      ? 'bg-[#590178] text-white'
                      : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                disabled={currentPage === totalPages - 1}
                className="px-2.5 md:px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}