'use client'

import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, PieChart, Pie, 
  Cell, AreaChart, Area, ComposedChart
} from 'recharts';

interface SessionDataType {
  duration: number;
  pages: number;
  rate: number;
  period: string;
  bounceRate: string;
}

interface PageDataType {
  page: string;
  views: number;
  avgTime: number;
  bounceRate: number;
}

interface DeviceDataType {
  name: string;
  value: number;
}

export default function EngagementMetrics() {
  // State for API data
  const [sessionData, setSessionData] = useState<SessionDataType[]>([]);
  const [mostVisitedPagesData, setMostVisitedPagesData] = useState<PageDataType[]>([]);
  const [deviceData, setDeviceData] = useState<DeviceDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [engagementRes, pagesRes, deviceRes] = await Promise.all([
          fetch('http://localhost:5000/api/engagement'),
          fetch('http://localhost:5000/api/most-visited'),
          fetch('http://localhost:5000/api/device-distribution')
        ]);

        const engagementData = await engagementRes.json();
        const pagesData = await pagesRes.json();
        const deviceDistribution = await deviceRes.json();

        // Transform engagement data for charts
        const transformedEngagement = engagementData.map((week: { duration: string; pages: string; bounceRate: string; }) => ({
          ...week,
          duration: parseFloat(week.duration),
          pages: parseFloat(week.pages),
          rate: parseFloat(week.bounceRate)
        }));

        setSessionData(transformedEngagement);
        setMostVisitedPagesData(pagesData);
        setDeviceData(deviceDistribution);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate summary metrics from the latest data
  const summaryMetrics = React.useMemo(() => {
    if (sessionData.length === 0) return null;
    const latest = sessionData[sessionData.length - 1];
    const previous = sessionData[sessionData.length - 2];

    return {
      avgSessionDuration: latest.duration,
      avgPagesPerSession: latest.pages,
      avgBounceRate: latest.rate,
      previousAvgSessionDuration: previous?.duration || 0,
      previousAvgPagesPerSession: previous?.pages || 0,
      previousAvgBounceRate: previous?.rate || 0,
    };
  }, [sessionData]);

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF6B6B'];

  // Define valid sort keys type
  type SortKey = keyof Pick<PageDataType, 'views' | 'avgTime' | 'bounceRate'>;
  
  // For sorting most visited pages
  const [sortBy, setSortBy] = useState<SortKey>('views');
  const sortedPages = mostVisitedPagesData.length > 0 
  ? [...mostVisitedPagesData].sort((a, b) => b[sortBy] - a[sortBy]) : [];
  
  if (isLoading || !summaryMetrics) {
    return <div className="p-6">Loading...</div>;
  }

  // Calculate percentage changes
  const durationChange = ((summaryMetrics.avgSessionDuration - summaryMetrics.previousAvgSessionDuration) / summaryMetrics.previousAvgSessionDuration * 100);
  const pagesChange = ((summaryMetrics.avgPagesPerSession - summaryMetrics.previousAvgPagesPerSession) / summaryMetrics.previousAvgPagesPerSession * 100);
  const bounceChange = ((summaryMetrics.avgBounceRate - summaryMetrics.previousAvgBounceRate) / summaryMetrics.previousAvgBounceRate * 100);

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
            <AreaChart data={sessionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} min`, 'Duration']} />
              <Legend />
              <Area type="monotone" dataKey="duration" name="Session Duration" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pages Per Session Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Pages Per Session</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={sessionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} pages`, 'Pages']} />
              <Legend />
              <Area type="monotone" dataKey="pages" name="Pages Per Session" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bounce Rate Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Bounce Rate</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sessionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'Bounce Rate']} />
              <Legend />
              <Line type="monotone" dataKey="rate" name="Bounce Rate" stroke="#ff7300" strokeWidth={2} dot={{ r: 4 }} />
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