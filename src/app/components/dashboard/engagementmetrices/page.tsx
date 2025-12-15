"use client"

import React, { useState, useEffect } from "react"
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts"
import { Clock, FileText, TrendingDown, Monitor } from "lucide-react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/src/app/components/ui/chart"

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"
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
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle window resize for responsive pie chart
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [engagementRes, pagesRes, deviceRes] = await Promise.all([
          fetch(`${baseURL}/api/engagement`),
          fetch(`${baseURL}/api/most-visited`),
          fetch(`${baseURL}/api/device-distribution`)
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

  // Blue shades for device distribution
  const BLUE_SHADES = ['#3B82F6', '#60A5FA'];

  // Calculate responsive radius for pie chart
  const pieChartRadius = React.useMemo(() => {
    if (windowWidth === 0) {
      // Default values before window width is known
      return { innerRadius: 30, outerRadius: 60 };
    }
    if (windowWidth < 640) {
      // Mobile: smaller radius
      return { innerRadius: 25, outerRadius: 50 };
    } else if (windowWidth < 1024) {
      // Tablet: medium radius
      return { innerRadius: 35, outerRadius: 70 };
    } else {
      // Desktop: larger radius
      return { innerRadius: 40, outerRadius: 80 };
    }
  }, [windowWidth]);

  const sessionDurationChartConfig = {
    duration: {
      label: "Session Duration",
      color: "#3B82F6",
    },
  } satisfies ChartConfig

  const pagesPerSessionChartConfig = {
    pages: {
      label: "Pages Per Session",
      color: "#3B82F6",
    },
  } satisfies ChartConfig

  const bounceRateChartConfig = {
    rate: {
      label: "Bounce Rate",
      color: "#3B82F6",
    },
  } satisfies ChartConfig

  const deviceChartConfig = {
    Desktop: {
      label: "Desktop",
      color: "#1E40AF",
    },
    Mobile: {
      label: "Mobile",
      color: "#60A5FA",
    },
  } satisfies ChartConfig

  const mostVisitedPagesChartConfig = {
    views: {
      label: "Views",
      color: "#590178",
    },
    avgTime: {
      label: "Avg Time",
      color: "#10B981",
    },
    bounceRate: {
      label: "Bounce Rate",
      color: "#F59E0B",
    },
  } satisfies ChartConfig

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
  const durationChange = summaryMetrics.previousAvgSessionDuration > 0 
    ? ((summaryMetrics.avgSessionDuration - summaryMetrics.previousAvgSessionDuration) / summaryMetrics.previousAvgSessionDuration * 100)
    : 0;
  const pagesChange = summaryMetrics.previousAvgPagesPerSession > 0
    ? ((summaryMetrics.avgPagesPerSession - summaryMetrics.previousAvgPagesPerSession) / summaryMetrics.previousAvgPagesPerSession * 100)
    : 0;
  const bounceChange = summaryMetrics.previousAvgBounceRate > 0
    ? ((summaryMetrics.avgBounceRate - summaryMetrics.previousAvgBounceRate) / summaryMetrics.previousAvgBounceRate * 100)
    : 0;

  return (
    <div className="space-y-4 md:space-y-6 px-2 md:px-0">
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#000000' }}>Engagement Metrics</h1>
        <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#666666' }}>User engagement and interaction analytics.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-2 sm:mr-3 flex items-center justify-center shrink-0 self-center">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h3 className="text-xs sm:text-sm uppercase leading-none mb-0 self-center" style={{ color: '#590178', fontWeight: 600 }}>Avg. Session Duration</h3>
          </div>
          <div className="flex items-end mt-2">
            <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#590178' }}>{summaryMetrics.avgSessionDuration}</span>
            <span className="ml-1 text-lg sm:text-xl" style={{ color: '#666666' }}>min</span>
            <span className={`ml-2 text-xs sm:text-sm ${Number(durationChange) > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {durationChange > 0 ? '↑' : '↓'} {Math.abs(durationChange).toFixed(2)}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-2 sm:mr-3 flex items-center justify-center shrink-0 self-center">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h3 className="text-xs sm:text-sm uppercase leading-none mb-0 self-center" style={{ color: '#590178', fontWeight: 600 }}>Avg. Pages Per Session</h3>
          </div>
          <div className="flex items-end mt-2">
            <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#590178' }}>{summaryMetrics.avgPagesPerSession}</span>
            <span className="ml-1 text-lg sm:text-xl" style={{ color: '#666666' }}>pages</span>
            <span className={`ml-2 text-xs sm:text-sm ${Number(pagesChange) > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {pagesChange > 0 ? '↑' : '↓'} {Math.abs(pagesChange).toFixed(2)}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
        </div>
        
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-2 sm:mr-3 flex items-center justify-center shrink-0 self-center">
              <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h3 className="text-xs sm:text-sm uppercase leading-none mb-0 self-center" style={{ color: '#590178', fontWeight: 600 }}>Bounce Rate</h3>
          </div>
          <div className="flex items-end mt-2">
            <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#590178' }}>{summaryMetrics.avgBounceRate}%</span>
            <span className={`ml-2 text-xs sm:text-sm ${Number(bounceChange) < 0 ? 'text-green-500' : 'text-red-500'}`}>
              {bounceChange < 0 ? '↓' : '↑'} {Math.abs(bounceChange).toFixed(2)}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs. previous period</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Session Duration Chart */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex items-center justify-center -mt-1">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Average Session Duration</h2>
          </div>
          <ChartContainer
            config={sessionDurationChartConfig}
            className="h-[200px] sm:h-[250px] lg:h-[300px] w-full"
          >
            <AreaChart
              data={sessionData}
              margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                type="monotone"
                dataKey="duration"
                stroke="var(--color-duration)"
                fill="var(--color-duration)"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>

        {/* Pages Per Session Chart */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex items-center justify-center -mt-1">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Pages Per Session</h2>
          </div>
          <ChartContainer
            config={pagesPerSessionChartConfig}
            className="h-[200px] sm:h-[250px] lg:h-[300px] w-full"
          >
            <LineChart
              data={sessionData}
              margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="pages"
                stroke="var(--color-pages)"
                strokeWidth={3}
                dot={{ r: 4, fill: "var(--color-pages)", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Bounce Rate Chart */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex items-center justify-center -mt-1">
              <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Bounce Rate</h2>
          </div>
          <ChartContainer
            config={bounceRateChartConfig}
            className="h-[200px] sm:h-[250px] lg:h-[300px] w-full"
          >
            <LineChart
              data={sessionData}
              margin={{ top: 10, right: 10, bottom: 0, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="var(--color-rate)"
                strokeWidth={3}
                dot={{ r: 4, fill: "var(--color-rate)", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Device Distribution */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4 flex items-center justify-center">
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Device Distribution</h2>
          </div>
          <div className="flex items-start justify-center h-[220px] sm:h-[270px] lg:h-[320px]">
            <ChartContainer
              config={deviceChartConfig}
              className="h-[200px] sm:h-[250px] lg:h-[300px] w-full"
            >
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={pieChartRadius.innerRadius}
                  outerRadius={pieChartRadius.outerRadius}
                  dataKey="value"
                  label={windowWidth >= 640 ? ({ name, percent }: { name: string; percent: number }) =>
                    `${name}: ${(percent * 100).toFixed(1)}%`
                  : false}
                  labelLine={false}
                >
                  {deviceData.map((entry, index) => {
                    const color = deviceChartConfig[entry.name as keyof typeof deviceChartConfig]?.color || BLUE_SHADES[index % BLUE_SHADES.length];
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={color}
                      />
                    );
                  })}
                </Pie>
                <ChartTooltip
                  content={<ChartTooltipContent />}
                  formatter={(value: number | string, name: string, props: { payload?: { value: number; percent?: number } }) => {
                    // Use percent from payload if available, otherwise calculate it
                    const percent = props?.payload?.percent;
                    if (percent !== undefined) {
                      return [`${(percent * 100).toFixed(1)}%`, "Usage"];
                    }
                    // Fallback calculation
                    const total = deviceData.reduce((sum, item) => sum + item.value, 0);
                    const percentage = total > 0 ? ((Number(value) / total) * 100).toFixed(1) : '0';
                    return [`${percentage}%`, "Usage"];
                  }}
                />
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
      </div>

      {/* Most Visited Pages */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 sm:mb-6 lg:mb-8 gap-3 sm:gap-0">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Most Visited Pages</h2>
          <div className="flex gap-2 flex-wrap">
            <button 
              onClick={() => setSortBy('views')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${sortBy === 'views' ? 'text-white' : 'bg-white text-gray-700 border-2'}`}
              style={sortBy === 'views' ? { backgroundColor: '#590178', border: '2px solid #590178' } : { borderColor: '#590178' }}
            >
              By Views
            </button>
            <button 
              onClick={() => setSortBy('avgTime')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${sortBy === 'avgTime' ? 'text-white' : 'bg-white text-gray-700 border-2'}`}
              style={sortBy === 'avgTime' ? { backgroundColor: '#590178', border: '2px solid #590178' } : { borderColor: '#590178' }}
            >
              By Time
            </button>
            <button 
              onClick={() => setSortBy('bounceRate')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${sortBy === 'bounceRate' ? 'text-white' : 'bg-white text-gray-700 border-2'}`}
              style={sortBy === 'bounceRate' ? { backgroundColor: '#590178', border: '2px solid #590178' } : { borderColor: '#590178' }}
            >
              By Bounce
            </button>
          </div>
        </div>
        <ChartContainer
          config={mostVisitedPagesChartConfig}
          className="h-[300px] sm:h-[350px] lg:h-[400px] w-full"
        >
          <ComposedChart
            data={sortedPages}
            layout="vertical"
            margin={{ top: 20, right: 10, bottom: 20, left: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              type="number" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              dataKey="page" 
              type="category" 
              width={80}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar 
              dataKey="views" 
              name="Views" 
              barSize={20} 
              fill="var(--color-views)" 
            />
            <Line 
              dataKey="avgTime" 
              name="Avg Time" 
              stroke="var(--color-avgTime)"
              strokeWidth={2}
              dot={{ r: 3, fill: "var(--color-avgTime)", strokeWidth: 1, stroke: "#fff" }}
            />
            <Line 
              dataKey="bounceRate" 
              name="Bounce Rate" 
              stroke="var(--color-bounceRate)"
              strokeWidth={2}
              dot={{ r: 3, fill: "var(--color-bounceRate)", strokeWidth: 1, stroke: "#fff" }}
            />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  );
}