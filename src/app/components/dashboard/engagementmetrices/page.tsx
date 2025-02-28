'use client'

import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, PieChart, Pie, 
  Cell, AreaChart, Area, ComposedChart
} from 'recharts';

export default function EngagementMetrics() {
  // Dummy data for session duration over time
  const sessionDurationData = [
    { period: 'Jan 1-7', duration: 3.2, previous: 2.9 },
    { period: 'Jan 8-14', duration: 3.5, previous: 3.0 },
    { period: 'Jan 15-21', duration: 3.8, previous: 3.2 },
    { period: 'Jan 22-28', duration: 3.4, previous: 3.3 },
    { period: 'Jan 29-Feb 4', duration: 3.9, previous: 3.4 },
    { period: 'Feb 5-11', duration: 4.1, previous: 3.5 },
    { period: 'Feb 12-18', duration: 4.3, previous: 3.7 },
    { period: 'Feb 19-25', duration: 4.2, previous: 3.8 },
  ];

  // Dummy data for pages per session
  const pagesPerSessionData = [
    { period: 'Jan 1-7', pages: 2.8, previous: 2.5 },
    { period: 'Jan 8-14', pages: 3.0, previous: 2.6 },
    { period: 'Jan 15-21', pages: 3.2, previous: 2.7 },
    { period: 'Jan 22-28', pages: 2.9, previous: 2.7 },
    { period: 'Jan 29-Feb 4', pages: 3.3, previous: 2.8 },
    { period: 'Feb 5-11', pages: 3.4, previous: 2.9 },
    { period: 'Feb 12-18', pages: 3.6, previous: 3.0 },
    { period: 'Feb 19-25', pages: 3.5, previous: 3.1 },
  ];

  // Dummy data for bounce rate
  const bounceRateData = [
    { period: 'Jan 1-7', rate: 45.2, previous: 48.5 },
    { period: 'Jan 8-14', rate: 43.8, previous: 47.9 },
    { period: 'Jan 15-21', rate: 42.5, previous: 47.1 },
    { period: 'Jan 22-28', rate: 43.1, previous: 46.8 },
    { period: 'Jan 29-Feb 4', rate: 41.7, previous: 46.3 },
    { period: 'Feb 5-11', rate: 40.2, previous: 45.8 },
    { period: 'Feb 12-18', rate: 38.9, previous: 45.2 },
    { period: 'Feb 19-25', rate: 39.5, previous: 44.7 },
  ];

  // Dummy data for most visited pages
  const mostVisitedPagesData = [
    { page: 'Home Page', views: 145200, avgTime: 2.3, bounceRate: 39.2 },
    { page: 'Product Listing', views: 98400, avgTime: 3.8, bounceRate: 28.7 },
    { page: 'Blog Section', views: 76500, avgTime: 4.5, bounceRate: 35.4 },
    { page: 'About Us', views: 42700, avgTime: 2.1, bounceRate: 51.2 },
    { page: 'Contact Page', views: 38900, avgTime: 1.8, bounceRate: 48.6 },
    { page: 'Pricing Page', views: 35600, avgTime: 3.2, bounceRate: 32.1 },
    { page: 'Login Page', views: 29800, avgTime: 1.2, bounceRate: 22.5 },
    { page: 'FAQ Section', views: 25400, avgTime: 3.9, bounceRate: 30.8 },
  ].sort((a, b) => b.views - a.views);

  // Device distribution data
  const deviceData = [
    { name: 'Mobile', value: 62 },
    { name: 'Desktop', value: 31 },
    { name: 'Tablet', value: 7 },
  ];

  // Summary metrics
  const summaryMetrics = {
    avgSessionDuration: 4.2,
    avgPagesPerSession: 3.5, 
    avgBounceRate: 39.5,
    totalPageViews: 492500,
    previousAvgSessionDuration: 3.8,
    previousAvgPagesPerSession: 3.1,
    previousAvgBounceRate: 44.7,
  };

  const durationChange = ((summaryMetrics.avgSessionDuration - summaryMetrics.previousAvgSessionDuration) / summaryMetrics.previousAvgSessionDuration * 100);
const pagesChange = ((summaryMetrics.avgPagesPerSession - summaryMetrics.previousAvgPagesPerSession) / summaryMetrics.previousAvgPagesPerSession * 100);
const bounceChange = ((summaryMetrics.avgBounceRate - summaryMetrics.previousAvgBounceRate) / summaryMetrics.previousAvgBounceRate * 100);
  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF6B6B'];

  // Define valid sort keys type
  type SortKey = 'views' | 'avgTime' | 'bounceRate';
  
  // For sorting most visited pages
  const [sortBy, setSortBy] = useState<SortKey>('views');
  const sortedPages = [...mostVisitedPagesData].sort((a, b) => b[sortBy] - a[sortBy]);
  
  return (
    <div className="p-6 space-y-8 bg-card-50">
      <div>
        <h1 className="text-3xl font-bold">Engagement Metrics</h1>
        <p className="text-gray-600">User engagement and interaction analytics.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm uppercase">Avg. Session Duration</h3>
          <div className="flex items-end mt-2">
            <span className=" text-3xl font-bold">{summaryMetrics.avgSessionDuration}</span>
            <span className=" ml-1 text-xl">min</span>
            <span className={`ml-2 text-sm ${Number(durationChange) > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {durationChange > 0 ? '↑' : '↓'} {Math.abs(durationChange)}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm uppercase">Avg. Pages Per Session</h3>
          <div className="flex items-end mt-2">
            <span className="text-3xl font-bold">{summaryMetrics.avgPagesPerSession}</span>
            <span className=" ml-1 text-xl">pages</span>
            <span className={`ml-2 text-sm ${Number(pagesChange) > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {pagesChange > 0 ? '↑' : '↓'} {Math.abs(pagesChange)}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
        </div>
        
        <div className="bg-card p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm uppercase">Bounce Rate</h3>
          <div className="flex items-end mt-2">
            <span className="text-3xl font-bold">{summaryMetrics.avgBounceRate}%</span>
            <span className={` ml-2 text-sm ${Number(bounceChange) < 0 ? 'text-green-500' : 'text-red-500'}`}>
              {bounceChange < 0 ? '↓' : '↑'} {Math.abs(bounceChange)}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Session Duration Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className=" text-xl font-semibold mb-4">Average Session Duration</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={sessionDurationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} min`, 'Duration']} />
              <Legend />
              <Area type="monotone" dataKey="duration" name="Current Period" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Area type="monotone" dataKey="previous" name="Previous Period" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pages Per Session Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Pages Per Session</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={pagesPerSessionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} pages`, 'Pages']} />
              <Legend />
              <Area type="monotone" dataKey="pages" name="Current Period" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              <Area type="monotone" dataKey="previous" name="Previous Period" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bounce Rate Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Bounce Rate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bounceRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis domain={[35, 50]} />
              <Tooltip formatter={(value) => [`${value}%`, 'Bounce Rate']} />
              <Legend />
              <Line type="monotone" dataKey="rate" name="Current Period" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="previous" name="Previous Period" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Distribution */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Device Distribution</h2>
          <div className="flex items-center justify-center h-full">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Usage']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Most Visited Pages */}
      <div className="bg-card p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className=" text-xl font-semibold">Most Visited Pages</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setSortBy('views')}
              className={`px-3 py-1 text-sm rounded-md ${sortBy === 'views' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              By Views
            </button>
            <button 
              onClick={() => setSortBy('avgTime')}
              className={`px-3 py-1 text-sm rounded-md ${sortBy === 'avgTime' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              By Time
            </button>
            <button 
              onClick={() => setSortBy('bounceRate')}
              className={`px-3 py-1 text-sm rounded-md ${sortBy === 'bounceRate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              By Bounce
            </button>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={sortedPages} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="page" type="category" width={120} />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'Views') return [`${value.toLocaleString()}`, 'Page Views'];
                if (name === 'Avg Time') return [`${value} min`, 'Avg. Time on Page'];
                if (name === 'Bounce Rate') return [`${value}%`, 'Bounce Rate'];
                return [value, name];
              }}
            />
            <Legend />
            <Bar dataKey="views" name="Views" barSize={20} fill="#8884d8" />
            <Line dataKey="avgTime" name="Avg Time" stroke="#ff7300" />
            <Line dataKey="bounceRate" name="Bounce Rate" stroke="#82ca9d" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}