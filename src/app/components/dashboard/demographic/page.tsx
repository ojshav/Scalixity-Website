'use client';

import React, { useState } from 'react';
import { 
  ComposedChart, Bar, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, Cell,
  BarChart
} from 'recharts';

export default function Demographics() {
  // Dummy data for Geographical Distribution with country codes
  const geoDistributionData = [
    { id: 'US', country: 'United States', users: 42500, value: 42500 },
    { id: 'IN', country: 'India', users: 15300, value: 15300 },
    { id: 'GB', country: 'United Kingdom', users: 9200, value: 9200 },
    { id: 'DE', country: 'Germany', users: 8700, value: 8700 },
    { id: 'CA', country: 'Canada', users: 7600, value: 7600 },
    { id: 'AU', country: 'Australia', users: 6400, value: 6400 },
    { id: 'FR', country: 'France', users: 5800, value: 5800 },
    { id: 'BR', country: 'Brazil', users: 4900, value: 4900 },
    { id: 'JP', country: 'Japan', users: 4200, value: 4200 },
    { id: 'MX', country: 'Mexico', users: 3800, value: 3800 },
    { id: 'IT', country: 'Italy', users: 3500, value: 3500 },
    { id: 'ES', country: 'Spain', users: 3200, value: 3200 },
    { id: 'KR', country: 'South Korea', users: 2900, value: 2900 },
    { id: 'NL', country: 'Netherlands', users: 2600, value: 2600 },
    { id: 'RU', country: 'Russia', users: 2400, value: 2400 },
    { id: 'Other', country: 'Other Countries', users: 18900, value: 18900 }
  ];

  // Top countries for the legend
  const topCountries = geoDistributionData.slice(0, 5);

  // Dummy data for User Interests
  const userInterestsData = [
    { category: 'Technology', interactions: 8700, timeSpent: 15.2 },
    { category: 'Business', interactions: 6200, timeSpent: 12.5 },
    { category: 'Entertainment', interactions: 9400, timeSpent: 18.3 },
    { category: 'Sports', interactions: 5100, timeSpent: 10.8 },
    { category: 'Health', interactions: 7300, timeSpent: 14.6 },
    { category: 'Education', interactions: 6800, timeSpent: 13.9 },
  ];

  // Dummy data for User Behavior (page views per section)
  const userBehaviorData = [
    { section: 'Home', views: 12500, avgTimeMin: 2.3 },
    { section: 'Products', views: 9800, avgTimeMin: 4.2 },
    { section: 'Blog', views: 7200, avgTimeMin: 5.8 },
    { section: 'About', views: 3600, avgTimeMin: 3.1 },
    { section: 'Pricing', views: 6400, avgTimeMin: 4.5 },
    { section: 'Contact', views: 2900, avgTimeMin: 1.9 },
  ];

  // Dummy data for Heatmap representation (click density by page area)
  const heatmapData = [
    { area: 'Header Nav', clicks: 18400, conversionRate: 3.2 },
    { area: 'Hero Section', clicks: 24700, conversionRate: 4.7 },
    { area: 'Feature Cards', clicks: 15300, conversionRate: 5.1 },
    { area: 'Testimonials', clicks: 9800, conversionRate: 3.8 },
    { area: 'Product Lists', clicks: 21500, conversionRate: 6.2 },
    { area: 'Footer Links', clicks: 7200, conversionRate: 1.9 },
    { area: 'CTAs', clicks: 19600, conversionRate: 8.5 },
    { area: 'Blog Content', clicks: 11300, conversionRate: 4.3 },
  ];

  // Colors for various charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF6B6B', '#6A6AFF', '#A4DE6C'];
  
  // Normalize data for heatmap visualization
  const maxClicks = Math.max(...heatmapData.map(item => item.clicks));
  
  // Define interface for the country data
  interface CountryData {
    id: string;
    country: string;
    users: number;
    value: number;
  }
  
  // World Map SVG component with data visualization
  const WorldMap = ({ data }: { data: CountryData[] }) => {
    const maxUsers = Math.max(...data.map(country => country.users));
    
    // Function to get color intensity based on user count
    const getColorIntensity = (users: number) => {
      const normalizedValue = users / maxUsers;
      return `rgba(53, 111, 183, ${0.2 + normalizedValue * 0.8})`; // Blue with varying opacity
    };
    
    return (
      <div className="relative">
        <svg viewBox="0 0 1000 500" className="w-full">
          {/* World map simplified outline */}
          <path d="M473,144.4l17.5-15.4l21-4.2l7.7,10.5l16.1,9.8l-5.6,8.4l-14,1.4l-18.9,13.3l-8.4-12.6L473,144.4z" fill={getColorIntensity(data.find(c => c.id === 'US')?.users || 0)} stroke="#ccc" />
          <path d="M526.1,274.7l-15.4-5.6l-4.9-16.1l8.4-15.4l23.1,2.8l14,15.4l-10.5,14.7L526.1,274.7z" fill={getColorIntensity(data.find(c => c.id === 'BR')?.users || 0)} stroke="#ccc" />
          <path d="M587.7,108.3l10.5-2.1l14.7,4.9l-2.1,11.9l-14,4.2l-9.1-7L587.7,108.3z" fill={getColorIntensity(data.find(c => c.id === 'GB')?.users || 0)} stroke="#ccc" />
          <path d="M609.4,123l9.8-1.4l12.6,4.9l2.8,8.4l-4.9,4.2l-14-4.2l-6.3-7L609.4,123z" fill={getColorIntensity(data.find(c => c.id === 'DE')?.users || 0)} stroke="#ccc" />
          <path d="M603.1,114.6l-7,2.1l-5.6-7.7l7-3.5L603.1,114.6z" fill={getColorIntensity(data.find(c => c.id === 'FR')?.users || 0)} stroke="#ccc" />
          <path d="M599.6,138.8l5.6-4.2l7.7,2.1l-2.1,7.7l-7,2.1L599.6,138.8z" fill={getColorIntensity(data.find(c => c.id === 'IT')?.users || 0)} stroke="#ccc" />
          <path d="M594.7,130.2l4.9-2.1l4.9,4.9l-4.9,3.5L594.7,130.2z" fill={getColorIntensity(data.find(c => c.id === 'ES')?.users || 0)} stroke="#ccc" />
          <path d="M698.8,126.5l21-9.8l28.7,2.8l23.1,15.4l-7.7,14l-20.3,8.4l-29.4-2.1l-15.4-11.9L698.8,126.5z" fill={getColorIntensity(data.find(c => c.id === 'RU')?.users || 0)} stroke="#ccc" />
          <path d="M719.1,192.4l21-8.4l14,2.1l7.7,14l-15.4,11.2l-19.6-1.4L719.1,192.4z" fill={getColorIntensity(data.find(c => c.id === 'IN')?.users || 0)} stroke="#ccc" />
          <path d="M790.8,162.3l10.5-7l14,4.2l4.9,11.2l-7.7,7.7l-14-2.8L790.8,162.3z" fill={getColorIntensity(data.find(c => c.id === 'JP')?.users || 0)} stroke="#ccc" />
          <path d="M779.6,175.6l7-5.6l7,2.1l3.5,7l-5.6,4.9l-7.7-2.1L779.6,175.6z" fill={getColorIntensity(data.find(c => c.id === 'KR')?.users || 0)} stroke="#ccc" />
          <path d="M700.2,246.7l21-9.1l14,7.7l-4.9,14l-16.1,2.1L700.2,246.7z" fill={getColorIntensity(data.find(c => c.id === 'AU')?.users || 0)} stroke="#ccc" />
          <path d="M492.6,123.7l7.7-1.4l5.6,5.6l-4.9,4.9l-7-3.5L492.6,123.7z" fill={getColorIntensity(data.find(c => c.id === 'CA')?.users || 0)} stroke="#ccc" />
          <path d="M484.2,153.5l7-2.1l4.9,4.9l-2.8,4.9l-7-2.1L484.2,153.5z" fill={getColorIntensity(data.find(c => c.id === 'MX')?.users || 0)} stroke="#ccc" />
          <path d="M695.3,162.3l14-7l7.7,3.5l2.1,8.4l-10.5,7l-10.5-2.8L695.3,162.3z" fill={getColorIntensity(data.find(c => c.id === 'CN')?.users || 0)} stroke="#ccc" />
          <path d="M633.1,123l5.6-2.1l7,2.1l-0.7,4.9l-6.3,2.1L633.1,123z" fill={getColorIntensity(data.find(c => c.id === 'NL')?.users || 0)} stroke="#ccc" />
          
          {/* Legend for the map */}
          <g transform="translate(20, 20)">
            <text x="0" y="0" className="text-sm font-semibold" fill="#333">Top User Locations</text>
            {topCountries.map((country, index) => (
              <g key={index} transform={`translate(0, ${20 + index * 20})`}>
                <rect width="15" height="15" fill={getColorIntensity(country.users)} stroke="#ccc" />
                <text x="20" y="12" className="text-xs" fill="#333">{country.country} ({country.users.toLocaleString()})</text>
              </g>
            ))}
          </g>
        </svg>
        
        {/* Disclaimer note */}
        <div className="absolute bottom-0 right-0 text-xs text-gray-500 p-1">
          *Simplified map for visualization purposes
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-8 bg-card-50">
      <div>
        <h1 className="text-3xl font-bold">Demographics</h1>
        <p className="text-gray-600">User demographic information and statistics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Geographical Distribution - Map */}
        <div className="bg-card p-4 rounded-lg shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Geographical Distribution</h2>
          <div className="h-96">
            <WorldMap data={geoDistributionData} />
          </div>
        </div>

        {/* User Interests */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Interests</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={userInterestsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="interactions" fill="#8884d8" name="Interactions">
                {userInterestsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
              <Line yAxisId="right" type="monotone" dataKey="timeSpent" stroke="#ff7300" name="Avg Time (min)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* User Behavior */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Behavior by Section</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={userBehaviorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="section" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar yAxisId="left" dataKey="views" fill="#82ca9d" name="Page Views" />
              <Line yAxisId="right" type="monotone" dataKey="avgTimeMin" stroke="#ff7300" name="Avg Time (min)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Heatmap & Click Tracking */}
        <div className="bg-card p-4 rounded-lg shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Click Heatmap by Page Area</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={heatmapData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip formatter={(value, name) => [
                name === 'clicks' ? `${value.toLocaleString()} clicks` : `${value}% conversion`,
                name === 'clicks' ? 'Clicks' : 'Conversion Rate'
              ]} />
              <Legend />
              <Bar dataKey="clicks" name="Clicks">
                {/* Color intensity based on click count (simulating heatmap) */}
                {heatmapData.map((entry, index) => {
                  const opacity = 0.3 + (entry.clicks / maxClicks) * 0.7; // Scale between 0.3-1.0
                  return <Cell key={`cell-${index}`} fill={`rgba(255, 0, 0, ${opacity})`} />;
                })}
              </Bar>
              <Bar dataKey="conversionRate" name="Conversion Rate %" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}