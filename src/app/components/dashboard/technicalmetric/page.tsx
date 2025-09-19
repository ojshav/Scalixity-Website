'use client';
import '@/src/app/globals.css';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/app/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/app/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Clock, Laptop } from 'lucide-react';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
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

  interface BrowserData {
    name: string;
    value: number;
  }
  
  interface DevicePerformance {
    deviceType: string;
    count: number;
    avg_fcp: number;
    avg_lcp: number;
    avg_tti: number;
    avg_loadTime: number;
  }
  
  interface ErrorType {
    name: string;
    value: number;
  }
  
  interface ErrorOverTime {
    date: string;
    [key: string]: string | number | boolean;
  }
  
  
  interface ErrorLog {
    id: number;
    path: string;
    errorCode: number;
    count: number;
    lastOccurrence: string;
  }
  
  const [performanceData, setPerformanceData] = useState<PerformanceData[]>([]);
  interface DeviceData {
    name: string;
    value: number;
  }
  
  const [deviceData, setDeviceData] = useState<DeviceData[]>([]);
  const [browserData, setBrowserData] = useState<BrowserData[]>([]);
  interface HourlyPerformanceData {
    hour: string | number;
    loadTime: number;
    users: number;
  }
  const [hourlyPerformance, setHourlyPerformance] = useState<HourlyPerformanceData[]>([]);
  const [pagePerformance, setPagePerformance] = useState<PagePerformance[]>([]);
  const [devicePerformance, setDevicePerformance] = useState<DevicePerformance[]>([]);
  const [errorTypes, setErrorTypes] = useState<ErrorType[]>([]);
  const [errorsOverTime, setErrorsOverTime] = useState<ErrorOverTime[]>([]);
  const [recentErrorLogs, setRecentErrorLogs] = useState<ErrorLog[]>([]);
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

  // Process device performance data to ensure valid values
  const processDevicePerformanceData = (data: DevicePerformance[]) => {
    return data.map(item => ({
      ...item,
      // Ensure all metrics are positive and reasonable values (under 60,000ms/60sec)
      avg_fcp: item.avg_fcp && !isNaN(item.avg_fcp) && item.avg_fcp > 0 && item.avg_fcp < 60000 ? item.avg_fcp : 0,
      avg_lcp: item.avg_lcp && !isNaN(item.avg_lcp) && item.avg_lcp > 0 && item.avg_lcp < 60000 ? item.avg_lcp : 0,
      avg_tti: item.avg_tti && !isNaN(item.avg_tti) && item.avg_tti > 0 && item.avg_tti < 60000 ? item.avg_tti : 0,
      avg_loadTime: item.avg_loadTime && !isNaN(item.avg_loadTime) && item.avg_loadTime > 0 && item.avg_loadTime < 60000 
        ? item.avg_loadTime 
        : Math.max(item.avg_fcp, item.avg_lcp, item.avg_tti, 0), // Use maximum of other metrics if load time is invalid
      // Ensure device type is never empty
      deviceType: item.deviceType || 'Unknown'
    }));
  };

  // Format device performance data for the bar chart
  const formatDevicePerformanceForChart = (data: DevicePerformance[]) => {
    // Convert to format needed for the chart
    const result = data.map(item => {
      const deviceName = `${item.deviceType}`;
      return {
        name: deviceName,
        loadTime: item.avg_loadTime / 1000, // Convert to seconds
        fcp: item.avg_fcp / 1000,
        lcp: item.avg_lcp / 1000,
        tti: item.avg_tti / 1000,
        count: item.count
      };
    });
    
    return result;
  };

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        // Fetch aggregated performance data with web vitals
        const performanceRes = await fetch(`${baseURL}/api/technical-metrics/aggregate`);
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
        interface DeviceMetric {
          deviceType: string | null; // Nullable if the API might return null
          count: number;
        }
        
        interface FormattedDevice {
          name: string;
          value: number;
        }
        
        const deviceRes = await fetch(`${baseURL}/api/technical-metrics?groupBy=deviceType`);
        if (!deviceRes.ok) throw new Error('Failed to fetch device data');
        
        const deviceJson: { data: DeviceMetric[] } = await deviceRes.json();
        
        const formattedDevice: FormattedDevice[] = deviceJson.data.map((curr) => ({
          name: curr.deviceType || 'Unknown',
          value: curr.count,
        }));
        
        setDeviceData(formattedDevice);
        

        // Fetch device performance data from API
        const devicePerfRes = await fetch(`${baseURL}/api/device-performance`);
        if (!devicePerfRes.ok) throw new Error('Failed to fetch device performance data');
        const devicePerfJson = await devicePerfRes.json();
        
        // Clean and process device performance data
        const processedDevicePerf = processDevicePerformanceData(devicePerfJson.data);
        setDevicePerformance(processedDevicePerf);

        // Fetch browser usage data from the browser-stats API
        const browserRes = await fetch(`${baseURL}/api/browser-stats`);
        if (!browserRes.ok) throw new Error('Failed to fetch browser data');
        const browserJson = await browserRes.json();
        const formattedBrowser = browserJson.data.map((item: { browser: string; count: number }) => ({
          name: item.browser || 'Unknown',
          value: item.count || 0
        }));
        setBrowserData(formattedBrowser);

        // Fetch hourly performance data
        interface HourlyMetric {
  hour: string | number;
  avg_loadTime: string | number;
  userCount: number;
}

interface FormattedHourlyMetric {
  hour: string | number;
  loadTime: number;
  users: number;
}

const hourlyRes = await fetch(`${baseURL}/api/technical-metrics?groupBy=hour`);
if (!hourlyRes.ok) throw new Error('Failed to fetch hourly performance data');

const hourlyJson: { data: HourlyMetric[] } = await hourlyRes.json();

const formattedHourly: FormattedHourlyMetric[] = hourlyJson.data.map((item) => ({
  hour: item.hour,
  loadTime: Math.abs(parseFloat(String(item.avg_loadTime)) || 0), // Ensure positive values
  users: item.userCount || 0,
}));

setHourlyPerformance(formattedHourly);


        // Fetch error tracking data
        const errorTypesRes = await fetch(`${baseURL}/api/error-types`);
        if (!errorTypesRes.ok) throw new Error('Failed to fetch error types data');
        const errorTypesJson = await errorTypesRes.json();
        const formattedErrorTypes = errorTypesJson.data.map((item: { name: string; value: string }) => ({
          name: item.name || 'Unknown',
          value: parseInt(item.value) || 0  // Convert string value to number
        }));
        setErrorTypes(formattedErrorTypes);

        const errorsOverTimeRes = await fetch(`${baseURL}/api/errors-over-time`);
        if (!errorsOverTimeRes.ok) throw new Error('Failed to fetch errors over time data');
        const errorsOverTimeJson = await errorsOverTimeRes.json();
        setErrorsOverTime(errorsOverTimeJson.data as ErrorOverTime[]);

        const recentErrorLogsRes = await fetch(`${baseURL}/api/recent-error-logs`);
        if (!recentErrorLogsRes.ok) throw new Error('Failed to fetch recent error logs');
        const recentErrorLogsJson = await recentErrorLogsRes.json();
        setRecentErrorLogs(recentErrorLogsJson.data as ErrorLog[]);

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
  
  // Error status colors
  const getErrorStatusColor = (errorCode: number) => {
    if (errorCode >= 500) return 'bg-red-100 text-red-800';
    if (errorCode >= 400) return 'bg-orange-100 text-orange-800';
    if (errorCode >= 300) return 'bg-yellow-100 text-yellow-800';
    return 'bg-blue-100 text-blue-800';
  };

  // Loading and error states
  if (loading) return <div className="p-4 text-center">Loading technical metrics...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;

  // Calculate overall averages for core web vitals
  const avgFCP = calculateOverallAverage('avg_fcp');
  const avgLCP = calculateOverallAverage('avg_lcp');
  const avgTTI = calculateOverallAverage('avg_tti');
  const avgLoadTime = calculateOverallAverage('avg_loadTime');

  // Format device performance data for the chart
  const devicePerformanceChartData = formatDevicePerformanceForChart(devicePerformance);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6">
        <div>
        </div>
        
        <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
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
    {/* Tag cloud with horizontal scrolling */}
    <div className="mb-4 overflow-x-auto pb-2">
      <div className="flex flex-nowrap gap-2 min-w-max">
        {performanceData.map((entry, index) => (
          <div 
            key={entry.page} 
            className="flex items-center gap-1 px-2 py-1 text-sm rounded-full whitespace-nowrap flex-shrink-0"
            style={{ backgroundColor: `${generatePageColor(index)}20`, color: generatePageColor(index) }}
          >
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: generatePageColor(index) }}></span>
            <span>{entry.page}</span>
            <span className="font-medium">{msToSeconds(entry.loadTime)}s</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Chart container with fixed height */}
    <div className="h-80 relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={performanceData}
          margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45} 
            textAnchor="end" 
            height={70} 
            tick={false} 
          />
          <YAxis 
            label={{ value: '', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            formatter={(value) => [`${msToSeconds(Number(value))}s`, 'Load Time']}
            labelFormatter={(label) => `Page: ${label}`}
          />
          <Legend />
          <Bar dataKey="loadTime" name="Load Time">
            {performanceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={generatePageColor(index)} />
            ))}
          </Bar>
        </BarChart>
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
                          data={browserData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {browserData.map((entry, index) => (
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
                        data={devicePerformanceChartData}
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          type="number" 
                          domain={[0, 'dataMax + 1']} 
                          label={{ value: 'Time (seconds)', position: 'insideBottom', offset: -5 }} 
                        />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip 
                          formatter={(value, name) => {
                            const labelMap: Record<string, string> = {
                              loadTime: 'Load Time',
                              fcp: 'First Contentful Paint',
                              lcp: 'Largest Contentful Paint',
                              tti: 'Time to Interactive'
                            };
                            return [`${typeof value === 'number' ? value.toFixed(1) : value}s`, labelMap[name as string] || name];
                          }} 
                        />
                        <Legend />
                        <Bar dataKey="loadTime" name="Load Time" fill="#8884d8" />
                        <Bar dataKey="fcp" name="First Contentful Paint" fill="#82ca9d" />
                        <Bar dataKey="lcp" name="Largest Contentful Paint" fill="#ffc658" />
                        <Bar dataKey="tti" name="Time to Interactive" fill="#ff8042" />
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
                          data={errorTypes}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {errorTypes.map((entry, index) => (
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
                      <LineChart data={errorsOverTime}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {errorsOverTime.length > 0 && 
                          Object.keys(errorsOverTime[0])
                            .filter(key => key !== 'date')
                            .map((key, index) => (
                              <Line 
                                key={key}
                                type="monotone" 
                                dataKey={key} 
                                stroke={COLORS[index % COLORS.length]} 
                                strokeWidth={2} 
                              />
                            ))
                        }
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
                        {recentErrorLogs.map((log) => (
                          <tr key={log.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{log.path}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded text-xs ${getErrorStatusColor(log.errorCode)}`}>
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