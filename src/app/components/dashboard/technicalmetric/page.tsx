'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/app/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/app/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Clock, Laptop, Smartphone } from 'lucide-react';

export default function TechnicalMetrics() {
  const [activeTab, setActiveTab] = useState('performance');
  
  interface PerformanceData {
    name: string;
    loadTime: number;
    page: string;
  }
  
  interface PagePerformance {
    page: string | null;
    avg_fcp: string | number;
    avg_lcp: string | number;
    avg_tti: string | number;
    avg_loadTime: string | number;
    total_records: number;
  }
  
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  const [deviceData, setDeviceData] = useState([]);
  const [hourlyPerformance, setHourlyPerformance] = useState([]);
  const [pagePerformance, setPagePerformance] = useState<PagePerformance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Generate a unique color for each page
  const generatePageColor = (index: number) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];
    return COLORS[index % COLORS.length];
  };

  // Helper function to calculate overall average across all pages
  const calculateOverallAverage = (metricKey: 'avg_fcp' | 'avg_lcp' | 'avg_tti' | 'avg_loadTime') => {
    if (!pagePerformance.length) return 0;
    
    let totalWeightedValue = 0;
    let totalRecords = 0;
    
    pagePerformance.forEach(page => {
      // Ensure the value is a proper number and convert if necessary
      const metricValue = typeof page[metricKey] === 'string' 
        ? parseFloat(page[metricKey]) 
        : page[metricKey];
        
      if (metricValue && !isNaN(metricValue) && page.total_records) {
        // Make sure the value is positive
        const positiveValue = Math.abs(metricValue);
        totalWeightedValue += positiveValue * page.total_records;
        totalRecords += page.total_records;
      }
    });
    
    return totalRecords > 0 ? totalWeightedValue / totalRecords : 0;
  };

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch aggregated performance data with web vitals
        const performanceRes = await fetch('http://localhost:5000/api/technical-metrics/aggregate');
        if (!performanceRes.ok) throw new Error('Failed to fetch performance data');
        
        const performanceJson = await performanceRes.json();
        
        // Ensure all numeric values are properly parsed and positive
        const cleanedData = performanceJson.data.map((item: PagePerformance) => ({
          ...item,
          avg_fcp: Math.abs(parseFloat(String(item.avg_fcp)) || 0),
          avg_lcp: Math.abs(parseFloat(String(item.avg_lcp)) || 0),
          avg_tti: Math.abs(parseFloat(String(item.avg_tti)) || 0),
          avg_loadTime: Math.abs(parseFloat(String(item.avg_loadTime)) || 0),
          page: item.page || 'Home'
        }));
        
        setPagePerformance(cleanedData);
        
        // Format data for page load time chart - dynamic based on pages from API
        const formattedPerformance = cleanedData.map((item: PagePerformance) => ({
          name: item.page || 'Home',
          loadTime: item.avg_loadTime,
          page: item.page || 'Home'
        }));
        
        setPerformanceData(formattedPerformance);

        // Fetch device breakdown
        const deviceRes = await fetch('http://localhost:5000/api/technical-metrics?groupBy=deviceType');
        if (!deviceRes.ok) throw new Error('Failed to fetch device data');
        const deviceJson = await deviceRes.json();
        const formattedDevice = deviceJson.data.reduce((acc: { name: any; value: any; }[], curr: { deviceType: any; count: any; }) => {
          acc.push({ name: curr.deviceType || 'Unknown', value: curr.count });
          return acc;
        }, []);
        setDeviceData(formattedDevice);

        // Fetch hourly performance data
        const hourlyRes = await fetch('http://localhost:5000/api/technical-metrics?groupBy=hour');
        if (!hourlyRes.ok) throw new Error('Failed to fetch hourly performance data');
        const hourlyJson = await hourlyRes.json();
        const formattedHourly = hourlyJson.data.map((item: { hour: any; avg_loadTime: any; userCount: any; }) => ({
          hour: item.hour,
          loadTime: Math.abs(parseFloat(item.avg_loadTime) || 0), // Ensure positive values
          users: item.userCount || 0,
        }));
        setHourlyPerformance(formattedHourly);

      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to format milliseconds to seconds with one decimal place
  const msToSeconds = (ms: number) => (ms / 1000).toFixed(1);

  // Colors for the charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];

  // Loading and error states
  if (loading) return <div className="p-4 text-center">Loading technical metrics...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;

  // Calculate overall averages for core web vitals
  const avgFCP = calculateOverallAverage('avg_fcp');
  const avgLCP = calculateOverallAverage('avg_lcp');
  const avgTTI = calculateOverallAverage('avg_tti');
  const avgLoadTime = calculateOverallAverage('avg_loadTime');

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6">
        <div>
        </div>
        
        <Tabs defaultValue="performance" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <Clock size={16} /> Performance
            </TabsTrigger>
            <TabsTrigger value="devices" className="flex items-center gap-2">
              <Laptop size={16} /> Devices & Browsers
            </TabsTrigger>
            <TabsTrigger value="errors" className="flex items-center gap-2">
              <AlertCircle size={16} /> Error Tracking
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Page Load Times (seconds)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${msToSeconds(Number(value))}s`, 'Load Time']} />
                        <Legend />
                        {performanceData.map((entry, index) => (
                          <Line 
                            key={entry.page}
                            type="monotone" 
                            dataKey="loadTime" 
                            name={entry.page} 
                            stroke={generatePageColor(index)} 
                            strokeWidth={2}
                            data={[entry]}
                          />
                        ))}
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Load Time by Hour</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={hourlyPerformance}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip formatter={(value, name) => [
                          name === 'loadTime' ? `${msToSeconds(Number(value))}s` : value,
                          name === 'loadTime' ? 'Load Time' : 'Users'
                        ]} />
                        <Legend />
                        <Area yAxisId="left" type="monotone" dataKey="loadTime" fill="#8884d8" stroke="#8884d8" />
                        <Line yAxisId="right" type="monotone" dataKey="users" stroke="#82ca9d" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600">Avg. Load Time</p>
                      <p className="text-3xl font-bold text-gray-500">{msToSeconds(avgLoadTime)}s</p>
                      <p className="text-sm text-green-600">Overall average</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600">Time to Interactive</p>
                      <p className="text-3xl font-bold text-gray-500">{msToSeconds(avgTTI)}s</p>
                      <p className="text-sm text-gray-600">Average TTI</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-600">First Contentful Paint</p>
                      <p className="text-3xl font-bold text-gray-500">{msToSeconds(avgFCP)}s</p>
                      <p className="text-sm text-gray-600">Average FCP</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600">Largest Contentful Paint</p>
                      <p className="text-3xl font-bold text-gray-500">{msToSeconds(avgLCP)}s</p>
                      <p className="text-sm text-gray-600">Average LCP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="devices" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Device Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Browser Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Chrome', value: 58 },
                            { name: 'Safari', value: 20 },
                            { name: 'Firefox', value: 12 },
                            { name: 'Edge', value: 8 },
                            { name: 'Other', value: 2 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Device Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={[
                          { name: 'iPhone', value: 1.6 },
                          { name: 'Android', value: 1.9 },
                          { name: 'iPad', value: 1.7 },
                          { name: 'Desktop (Chrome)', value: 1.3 },
                          { name: 'Desktop (Firefox)', value: 1.4 },
                          { name: 'Desktop (Safari)', value: 1.5 },
                        ]}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 'dataMax + 0.5']} label={{ value: 'Load time (seconds)', position: 'insideBottom', offset: -5 }} />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="errors" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Error Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: '404', value: 35 },
                            { name: '500', value: 12 },
                            { name: '403', value: 8 },
                            { name: '400', value: 15 },
                            { name: 'Other', value: 5 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {deviceData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Errors Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={[
                          { date: 'Mon', '404': 8, '500': 2, '403': 1 },
                          { date: 'Tue', '404': 10, '500': 3, '403': 2 },
                          { date: 'Wed', '404': 7, '500': 4, '403': 1 },
                          { date: 'Thu', '404': 5, '500': 2, '403': 3 },
                          { date: 'Fri', '404': 12, '500': 3, '403': 1 },
                          { date: 'Sat', '404': 6, '500': 1, '403': 0 },
                          { date: 'Sun', '404': 4, '500': 1, '403': 0 },
                        ]}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="404" stroke="#FF8042" strokeWidth={2} />
                        <Line type="monotone" dataKey="500" stroke="#FF0000" strokeWidth={2} />
                        <Line type="monotone" dataKey="403" stroke="#FFBB28" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Error Logs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Path</th>
                          <th className="text-left py-3 px-4">Error Code</th>
                          <th className="text-left py-3 px-4">Count</th>
                          <th className="text-left py-3 px-4">Last Occurrence</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: 1, path: '/products/123', errorCode: 404, count: 12, lastOccurrence: '2025-02-26T14:23:00' },
                          { id: 2, path: '/api/users', errorCode: 500, count: 8, lastOccurrence: '2025-02-26T16:45:00' },
                        ].map((log) => (
                          <tr key={log.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{log.path}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded text-xs ${
                                log.errorCode === 404 ? 'bg-orange-100 text-orange-800' :
                                log.errorCode === 500 ? 'bg-red-100 text-red-800' :
                                'bg-blue-100 text-blue-800'
                              }`}>
                                {log.errorCode}
                              </span>
                            </td>
                            <td className="py-3 px-4">{log.count}</td>
                            <td className="py-3 px-4">{new Date(log.lastOccurrence).toLocaleString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}