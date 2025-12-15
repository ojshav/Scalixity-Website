'use client';
import '@/src/app/globals.css';
import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/app/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/app/components/ui/tabs';
import CustomSelect from '@/src/app/components/common/CustomSelect';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Sector } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/src/app/components/ui/chart';
import { AlertCircle, Clock, Laptop } from 'lucide-react';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];
const PURPLE_COLORS = ['#590178', '#7B2CBF', '#9D4EDD', '#A28DFF', '#C77DFF', '#E0AAFF'];
// Blue color scheme for device and browser charts (matching user analytics)
const BLUE_COLORS = ['#60A5FA', '#3B82F6', '#1E40AF', '#93C5FD', '#2563EB', '#DBEAFE'];
// Device breakdown colors - light blue and dark blue alternating
const DEVICE_COLORS = ['#60A5FA', '#1E40AF'];
// Errors over time colors - distinct multi-color palette
const ERROR_TIME_COLORS = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899'];
// Color schemes for different page categories
const SERVICE_COLORS = ['#590178', '#7B2CBF', '#9D4EDD', '#A28DFF', '#C77DFF', '#E0AAFF'];
const INDUSTRY_COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE', '#2563EB', '#1E40AF'];
const OTHER_COLORS = ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#059669', '#047857'];

export default function TechnicalMetrics() {
  const [activeTab, setActiveTab] = useState('performance');
  const [activeDeviceIndex, setActiveDeviceIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isMobile, setIsMobile] = useState(false);
  
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

  // Categorize pages and get available categories
  const { categorizedPages, availableCategories } = useMemo(() => {
    const services: PerformanceData[] = [];
    const industries: PerformanceData[] = [];
    const dashboard: PerformanceData[] = [];
    const other: PerformanceData[] = [];

    performanceData.forEach((page) => {
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

    const categories: Record<string, PerformanceData[]> = {
      all: performanceData,
      services,
      industries,
      dashboard,
      other,
    };

    const available = Object.keys(categories).filter(key => categories[key].length > 0);

    return { categorizedPages: categories, availableCategories: available };
  }, [performanceData]);

  // Get filtered data based on selected category
  const filteredPerformanceData = useMemo(() => {
    if (selectedCategory === 'all') {
      return performanceData;
    }
    return categorizedPages[selectedCategory] || [];
  }, [selectedCategory, categorizedPages, performanceData]);

  // Handle responsive items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      
      if (mobile) {
        // Mobile - show only 5 items
        setItemsPerPage(5);
      } else if (window.innerWidth < 1024) {
        // Tablet - show 8 items
        setItemsPerPage(8);
      } else {
        // Desktop - show all or 15 items
        setItemsPerPage(15);
      }
      setCurrentPage(0); // Reset to first page on resize
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Reset current page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  // Paginate filtered data
  const paginatedPerformanceData = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPerformanceData.slice(startIndex, endIndex);
  }, [filteredPerformanceData, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(filteredPerformanceData.length / itemsPerPage);

  // Get colors for the selected category
  const getCategoryColors = (category: string) => {
    switch (category) {
      case 'services':
        return SERVICE_COLORS;
      case 'industries':
        return INDUSTRY_COLORS;
      case 'dashboard':
        return PURPLE_COLORS;
      case 'other':
        return OTHER_COLORS;
      default:
        return COLORS;
    }
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

const formattedHourly: FormattedHourlyMetric[] = hourlyJson.data.map((item) => {
  const rawValue = Math.abs(parseFloat(String(item.avg_loadTime)) || 0);
  // API always returns loadTime in milliseconds, so convert to seconds
  const loadTimeInSeconds = rawValue / 1000;
  
  return {
    hour: item.hour,
    loadTime: loadTimeInSeconds,
    users: item.userCount || 0,
  };
});

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

  // Custom tooltip component for Load Time by Hour chart
  const LoadTimeTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ name?: string; value?: number | string; color?: string; dataKey?: string }>; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border bg-white p-3 shadow-md">
          <p className="text-sm font-medium mb-2">{`Hour: ${label}`}</p>
          {payload.map((entry, index) => {
            const name = entry.name || entry.dataKey || 'Value';
            const value = entry.value;
            const color = entry.color || '#3B82F6';
            const isLoadTime = name === 'loadTime' || entry.dataKey === 'loadTime';
            
            return (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }}></div>
                  <span className="text-sm text-gray-600">
                    {isLoadTime ? 'Load Time' : name}
                  </span>
                </div>
                <span className="text-sm font-semibold">
                  {isLoadTime 
                    ? `${Number(value).toFixed(1)} seconds`
                    : String(value)}
                </span>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  // Custom tooltip component for Page Load Times chart
  const PageLoadTimeTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value?: number | string }>; label?: string }) => {
    if (active && payload && payload.length) {
      const value = payload[0]?.value;
      return (
        <div className="rounded-lg border bg-white p-3 shadow-md">
          <p className="text-sm font-medium mb-2">{`Page: ${label}`}</p>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-gray-600">Load Time</span>
            <span className="text-sm font-semibold">{`${msToSeconds(Number(value))} seconds`}</span>
          </div>
        </div>
      );
    }
    return null;
  };

  // Custom responsive legend component for Error Distribution
  const ResponsiveErrorLegendContent = ({ payload, verticalAlign = "bottom" }: { payload?: Array<{ value?: string; dataKey?: string; color?: string }>; verticalAlign?: string }) => {
    if (!payload?.length) {
      return null;
    }

    // Helper to truncate labels on mobile
    const truncateLabel = (label: string, maxLength: number) => {
      if (!label) return '';
      if (label.length <= maxLength) return label;
      return label.substring(0, maxLength) + '...';
    };

    return (
      <div
        className={`flex flex-wrap items-center justify-center gap-2 md:gap-4 ${
          verticalAlign === "top" ? "pb-3" : "pt-3"
        } px-2`}
      >
        {payload.map((item: { value?: string; dataKey?: string; color?: string }, index: number) => {
          // For PieChart with nameKey="name", the value contains the error type name
          const label = String(item.value || item.dataKey || '');

          return (
            <div
              key={item.value || item.dataKey || `legend-item-${index}`}
              className="flex items-center gap-1.5 shrink-0 max-w-full"
            >
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
              <span className="text-xs md:text-sm truncate max-w-[100px] sm:max-w-none">
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{truncateLabel(label, 12)}</span>
              </span>
            </div>
          );
        })}
      </div>
    );
  };

  // Colors for the charts
  
  // shadcn chart configs
  const hourlyPerformanceChartConfig: ChartConfig = {
    loadTime: {
      label: 'Load Time',
      color: '#3B82F6',
    },
    users: {
      label: 'Users',
      color: '#82ca9d',
    },
  };

  const deviceBreakdownChartConfig: ChartConfig = useMemo(() => {
    const config: ChartConfig = {};
    deviceData.forEach((item, index) => {
      const key = item.name || 'Unknown';
      config[key] = {
        label: key,
        color: DEVICE_COLORS[index % DEVICE_COLORS.length],
      };
    });
    return config;
  }, [deviceData]);

  const browserUsageChartConfig: ChartConfig = useMemo(() => {
    const config: ChartConfig = {};
    browserData.forEach((item, index) => {
      const key = item.name || 'Unknown';
      config[key] = {
        label: key,
        color: BLUE_COLORS[index % BLUE_COLORS.length],
      };
    });
    return config;
  }, [browserData]);

  const devicePerformanceChartConfig: ChartConfig = {
    loadTime: {
      label: 'Load Time',
      color: '#3B82F6',
    },
    fcp: {
      label: 'First Contentful Paint',
      color: '#10B981',
    },
    lcp: {
      label: 'Largest Contentful Paint',
      color: '#F59E0B',
    },
    tti: {
      label: 'Time to Interactive',
      color: '#EF4444',
    },
  };

  const errorDistributionChartConfig: ChartConfig = useMemo(() => {
    const config: ChartConfig = {};
    errorTypes.forEach((item, index) => {
      const key = item.name || 'Unknown';
      config[key] = {
        label: key,
        color: BLUE_COLORS[index % BLUE_COLORS.length],
      };
    });
    return config;
  }, [errorTypes]);

  const errorsOverTimeChartConfig: ChartConfig = useMemo(() => {
    if (!errorsOverTime.length) {
      return {};
    }
    const keys = Object.keys(errorsOverTime[0]).filter((key) => key !== 'date');
    const config: ChartConfig = {};
    keys.forEach((key, index) => {
      config[key] = {
        label: key,
        color: ERROR_TIME_COLORS[index % ERROR_TIME_COLORS.length],
      };
    });
    return config;
  }, [errorsOverTime]);
  
  // Error status colors
  const getErrorStatusColor = (errorCode: number) => {
    if (errorCode >= 500) return 'bg-red-100 text-red-700 border border-red-200';
    if (errorCode >= 400) return 'bg-orange-100 text-orange-700 border border-orange-200';
    if (errorCode >= 300) return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
    return 'bg-blue-100 text-blue-700 border border-blue-200';
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
    <div className="space-y-4 md:space-y-6 px-1 md:px-0">
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-2" style={{ color: '#000000' }}>Technical Metrics</h1>
        <p className="text-base md:text-lg" style={{ color: '#666666' }}>Performance monitoring and technical analytics.</p>
      </div>
        
        <Tabs defaultValue={activeTab} className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4 md:mb-6 bg-white rounded-xl p-1 gap-1" style={{ boxShadow: '0 2px 8px rgba(89, 1, 120, 0.08)' }}>
            <TabsTrigger
              value="performance"
              className="flex items-center justify-center gap-1 md:gap-2 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 transition-colors data-[state=active]:bg-[#590178] data-[state=active]:text-white"
            >
              <Clock size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline">Performance</span><span className="sm:hidden">Perf</span>
            </TabsTrigger>
            <TabsTrigger
              value="devices"
              className="flex items-center justify-center gap-1 md:gap-2 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 transition-colors data-[state=active]:bg-[#590178] data-[state=active]:text-white"
            >
              <Laptop size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline">Devices & Browsers</span><span className="sm:hidden">Devices</span>
            </TabsTrigger>
            <TabsTrigger
              value="errors"
              className="flex items-center justify-center gap-1 md:gap-2 rounded-lg px-2 md:px-3 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 transition-colors data-[state=active]:bg-[#590178] data-[state=active]:text-white"
            >
              <AlertCircle size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline">Error Tracking</span><span className="sm:hidden">Errors</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="performance" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Load Time by Hour</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={hourlyPerformanceChartConfig} className="h-[250px] md:h-[300px] w-full">
                    <AreaChart
                      data={hourlyPerformance}
                      margin={{ top: 10, right: 0, bottom: 0, left: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis
                        dataKey="hour"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        tick={{ fontSize: 11 }}
                      />
                      <YAxis
                        yAxisId="left"
                        axisLine={false}
                        tickLine={false}
                        width={40}
                        tickMargin={8}
                        domain={[0, 'dataMax']}
                        tick={{ fontSize: 11 }}
                        tickFormatter={(value) => {
                          // Format numbers more readably
                          if (value >= 1000000) {
                            return `${(value / 1000000).toFixed(1)}M`;
                          } else if (value >= 1000) {
                            return `${(value / 1000).toFixed(1)}k`;
                          } else if (value >= 1) {
                            return value.toFixed(1);
                          } else {
                            return value.toFixed(2);
                          }
                        }}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        width={40}
                        tickMargin={8}
                        tick={{ fontSize: 11 }}
                      />
                      <ChartTooltip
                        content={<LoadTimeTooltip />}
                        cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '5 5' }}
                      />
                      <ChartLegend content={<ChartLegendContent />} />
                      <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="loadTime"
                        stroke="var(--color-loadTime)"
                        fill="var(--color-loadTime)"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="users"
                        stroke="var(--color-users)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: 'rgba(89, 1, 120, 0.05)' }}>
                      <p className="text-xs md:text-sm font-semibold mb-2" style={{ color: '#590178' }}>Avg. Load Time</p>
                      <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#590178' }}>{msToSeconds(avgLoadTime)}s</p>
                      <p className="text-xs md:text-sm text-gray-600">Overall average</p>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: 'rgba(89, 1, 120, 0.05)' }}>
                      <p className="text-xs md:text-sm font-semibold mb-2" style={{ color: '#590178' }}>Time to Interactive</p>
                      <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#590178' }}>{msToSeconds(avgTTI)}s</p>
                      <p className="text-xs md:text-sm text-gray-600">Average TTI</p>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: 'rgba(89, 1, 120, 0.05)' }}>
                      <p className="text-xs md:text-sm font-semibold mb-2" style={{ color: '#590178' }}>First Contentful Paint</p>
                      <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#590178' }}>{msToSeconds(avgFCP)}s</p>
                      <p className="text-xs md:text-sm text-gray-600">Average FCP</p>
                    </div>
                    <div className="p-3 md:p-4 rounded-lg" style={{ backgroundColor: 'rgba(89, 1, 120, 0.05)' }}>
                      <p className="text-xs md:text-sm font-semibold mb-2" style={{ color: '#590178' }}>Largest Contentful Paint</p>
                      <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#590178' }}>{msToSeconds(avgLCP)}s</p>
                      <p className="text-xs md:text-sm text-gray-600">Average LCP</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
            <Card className="col-span-1 md:col-span-2 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <CardHeader className="p-0 mb-4 md:mb-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="p-2 md:p-3 bg-purple-50 rounded-xl mr-3 md:mr-4 flex items-center justify-center">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-700" />
                    </div>
                    <CardTitle className="text-lg md:text-xl font-bold text-gray-900">Page Load Times (seconds)</CardTitle>
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
              </CardHeader>
              <CardContent className="p-0">
                {(() => {
                  const chartData = paginatedPerformanceData.map(item => ({
                    ...item,
                    loadTime: item.loadTime / 1000 // Convert milliseconds to seconds
                  }));
                  const colors = getCategoryColors(selectedCategory);
                  const chartConfig: ChartConfig = {};
                  chartData.forEach((item, index) => {
                    chartConfig[item.name] = {
                      label: item.name,
                      color: colors[index % colors.length],
                    };
                  });

                  return (
                    <>
                      <ChartContainer config={chartConfig} className="h-64 md:h-80 relative w-full">
                        <BarChart 
                          data={chartData}
                          margin={{ top: 20, right: 10, left: 40, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis 
                            dataKey="name"
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
                            content={<PageLoadTimeTooltip />}
                          />
                          <ChartLegend content={<ChartLegendContent />} />
                          <Bar dataKey="loadTime" name="Load Time">
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ChartContainer>
                      
                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-4">
                          <div className="text-xs md:text-sm text-gray-600 text-center sm:text-left">
                            Showing {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, filteredPerformanceData.length)} of {filteredPerformanceData.length} pages
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
                            <div className="flex items-center gap-1">
                              {Array.from({ length: Math.min(totalPages, isMobile ? 3 : 5) }, (_, i) => {
                                let pageNumber;
                                const maxPages = isMobile ? 3 : 5;
                                if (totalPages <= maxPages) {
                                  pageNumber = i;
                                } else if (currentPage < Math.floor(maxPages / 2)) {
                                  pageNumber = i;
                                } else if (currentPage > totalPages - Math.ceil(maxPages / 2) - 1) {
                                  pageNumber = totalPages - maxPages + i;
                                } else {
                                  pageNumber = currentPage - Math.floor(maxPages / 2) + i;
                                }
                                
                                return (
                                  <button
                                    key={i}
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`px-2 md:px-2.5 py-1.5 text-xs md:text-sm font-medium rounded-lg transition-colors min-w-[28px] md:min-w-[32px] ${
                                      currentPage === pageNumber
                                        ? 'bg-[#590178] text-white'
                                        : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                                  >
                                    {pageNumber + 1}
                                  </button>
                                );
                              })}
                            </div>
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
                    </>
                  );
                })()}
              </CardContent>
            </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="devices" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Device Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-56 md:h-64">
                    <ChartContainer config={deviceBreakdownChartConfig} className="h-full w-full">
                      <PieChart>
                        <Pie
                          data={deviceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          innerRadius={50}
                          outerRadius={80}
                          fill="#590178"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          activeIndex={activeDeviceIndex ?? undefined}
                          activeShape={(props: unknown) => {
                            const pieProps = props as { cx: number; cy: number; innerRadius: number; outerRadius: number; startAngle: number; endAngle: number; fill: string };
                            const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = pieProps;
                            return (
                              <g>
                                <Sector
                                  cx={cx}
                                  cy={cy}
                                  innerRadius={innerRadius}
                                  outerRadius={outerRadius + 5}
                                  startAngle={startAngle}
                                  endAngle={endAngle}
                                  fill={fill}
                                />
                              </g>
                            );
                          }}
                          onMouseEnter={(_, index) => setActiveDeviceIndex(index)}
                          onMouseLeave={() => setActiveDeviceIndex(null)}
                        >
                          {deviceData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={DEVICE_COLORS[index % DEVICE_COLORS.length]}
                              stroke={DEVICE_COLORS[index % DEVICE_COLORS.length]}
                              strokeWidth={activeDeviceIndex === index ? 2 : 0}
                            />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                      </PieChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Browser Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={browserUsageChartConfig} className="h-[250px] md:h-[300px] w-full">
                    <PieChart>
                      <Pie
                        data={browserData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        strokeWidth={2}
                      >
                        {browserData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={BLUE_COLORS[index % BLUE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <ChartTooltip 
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <ChartLegend 
                        content={<ChartLegendContent />}
                        verticalAlign="bottom"
                      />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-2 bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Device Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 md:h-80">
                    <ChartContainer config={devicePerformanceChartConfig} className="h-full w-full">
                      <BarChart
                        layout="vertical"
                        data={devicePerformanceChartData}
                        margin={{ top: 5, right: 10, left: isMobile ? 20 : 70, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          type="number" 
                          domain={[0, 'dataMax + 1']}
                          tick={{ fontSize: 11 }}
                        />
                        <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={isMobile ? 40 : 60} />
                        <ChartTooltip 
                          content={<ChartTooltipContent />}
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
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="loadTime" name="Load Time" fill="#3B82F6" />
                        <Bar dataKey="fcp" name="First Contentful Paint" fill="#10B981" />
                        <Bar dataKey="lcp" name="Largest Contentful Paint" fill="#F59E0B" />
                        <Bar dataKey="tti" name="Time to Interactive" fill="#EF4444" />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="errors" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Error Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={errorDistributionChartConfig} className="h-[250px] md:h-[300px] w-full">
                    <PieChart>
                      <Pie
                        data={errorTypes}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        strokeWidth={2}
                      >
                        {errorTypes.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={BLUE_COLORS[index % BLUE_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <ChartTooltip 
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <ChartLegend 
                        content={<ResponsiveErrorLegendContent />}
                        verticalAlign="bottom"
                      />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Errors Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={errorsOverTimeChartConfig} className="h-[250px] md:h-[300px] w-full">
                    <LineChart data={errorsOverTime} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis 
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={10}
                        tick={{ fill: '#6B7280', fontSize: 10 }}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 10 }}
                        width={40}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <ChartLegend content={<ChartLegendContent />} />
                      {errorsOverTime.length > 0 && 
                        Object.keys(errorsOverTime[0])
                          .filter(key => key !== 'date')
                          .map((key, index) => (
                            <Line 
                              key={key}
                              type="monotone" 
                              dataKey={key} 
                              stroke={ERROR_TIME_COLORS[index % ERROR_TIME_COLORS.length]} 
                              strokeWidth={2}
                              dot={{ r: 4, fill: ERROR_TIME_COLORS[index % ERROR_TIME_COLORS.length], strokeWidth: 2, stroke: "#fff" }}
                              activeDot={{ r: 6 }}
                            />
                          ))
                      }
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-2 bg-white rounded-xl" style={{ boxShadow: '0 2px 12px rgba(89, 1, 120, 0.08)' }}>
                <CardHeader className="pb-3 md:pb-6">
                  <CardTitle className="text-lg md:text-2xl" style={{ color: '#000000' }}>Recent Error Logs</CardTitle>
                </CardHeader>
                <CardContent>
                  {recentErrorLogs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 px-4">
                      <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="text-gray-500 text-center">No error logs found</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto rounded-lg border border-gray-200 -mx-4 md:mx-0">
                      <table className="w-full text-xs md:text-sm">
                        <thead>
                          <tr className="bg-[#590178] text-white">
                            <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm uppercase tracking-wider">Path</th>
                            <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm uppercase tracking-wider">Error Code</th>
                            <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm uppercase tracking-wider">Count</th>
                            <th className="text-left py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-sm uppercase tracking-wider hidden sm:table-cell">Last Occurrence</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {recentErrorLogs.map((log, index) => (
                            <tr 
                              key={log.id || `error-log-${index}`} 
                              className="transition-all duration-150 hover:bg-gradient-to-r hover:from-purple-50 hover:to-transparent hover:shadow-sm"
                            >
                              <td className="py-3 md:py-4 px-3 md:px-6 text-gray-900 font-medium">
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#590178] flex-shrink-0"></span>
                                  <span className="truncate max-w-[200px] md:max-w-md" title={log.path}>{log.path}</span>
                                </div>
                                <div className="sm:hidden mt-2 flex items-center gap-2 text-gray-600">
                                  <Clock className="w-3 h-3 text-gray-400" />
                                  <span className="text-xs">{new Date(log.lastOccurrence).toLocaleString()}</span>
                                </div>
                              </td>
                              <td className="py-3 md:py-4 px-3 md:px-6">
                                <span className={`inline-flex items-center px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs font-semibold ${getErrorStatusColor(log.errorCode)} shadow-sm`}>
                                  {log.errorCode}
                                </span>
                              </td>
                              <td className="py-3 md:py-4 px-3 md:px-6">
                                <span className="inline-flex items-center justify-center min-w-[2rem] md:min-w-[2.5rem] px-2 md:px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-medium text-xs md:text-sm">
                                  {log.count}
                                </span>
                              </td>
                              <td className="py-3 md:py-4 px-3 md:px-6 text-gray-600 hidden sm:table-cell">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span>{new Date(log.lastOccurrence).toLocaleString()}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
    </div>
  );
}