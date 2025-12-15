'use client';
import '@/src/app/globals.css';
import React, { useState, useEffect, useMemo } from 'react';
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Cell
} from 'recharts';
import { Users, TrendingUp, Activity, UserPlus } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/src/app/components/ui/chart';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

type TimeFilter = 'weekly' | 'monthly' | 'yearly';

interface UserTypeData {
  month: string;
  new: number;
  returning: number;
}

interface ActiveUserData {
  month: string;
  daily: number;
  weekly: number;
  monthly: number;
}

interface CurrentActiveUserData {
  name: string;
  value: number;
  fill: string;
}

export default function UserAnalytics() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('monthly');
  const [analyticsData, setAnalyticsData] = useState({
    totalUsersData: [] as { month: string; users: number }[],
    userTypeData: [] as UserTypeData[],
    activeUsersData: [] as ActiveUserData[],
    growthRateData: [] as { month: string; rate: number }[],
    currentUserBreakdownData: [] as { name: string; value: number }[],
  });

  useEffect(() => {
    Promise.all([
      fetch(`${baseURL}/api/total-users`).then((res) => res.json()),
      fetch(`${baseURL}/api/new-vs-returning`).then((res) => res.json()),
      fetch(`${baseURL}/api/active-users`).then((res) => res.json()),
      fetch(`${baseURL}/api/user-breakdown`).then((res) => res.json()),
      fetch(`${baseURL}/api/growth-rate`).then((res) => res.json()),
    ])
      .then(([totalUsers, newVsReturning, activeUsers, userBreakdown, growthRate]) => {
        // Fix active users data structure - flatten the nested array
        const formattedActiveUsers = Array.isArray(activeUsers[0]) ? activeUsers[0] : activeUsers;

        // Fix growth rate data structure
        const formattedGrowthRate = growthRate.map((item: { month: string; rate: string | null; }) => ({
          month: item.month,
          rate: item.rate === null ? 0 : parseFloat(item.rate)
        }));

        // Transform user type data to match chart expected format
        // API returns: {month: 'Nov', new_users: 0, returning_users: 1}
        // Chart expects: {month: 'November', new: 0, returning: 1}
        const formattedUserTypeData = newVsReturning && newVsReturning.length > 0
          ? newVsReturning.map((item: { month: string; new_users?: number; returning_users?: number; new?: number; returning?: number }) => ({
            month: item.month,
            new: item.new_users !== undefined ? item.new_users : (item.new || 0),
            returning: item.returning_users !== undefined ? item.returning_users : (item.returning || 0),
          }))
          : [];

        setAnalyticsData({
          totalUsersData: totalUsers || [],
          userTypeData: formattedUserTypeData,
          activeUsersData: formattedActiveUsers || [],
          growthRateData: formattedGrowthRate,
          currentUserBreakdownData: userBreakdown || [],
        });

        console.log('Total Users:', totalUsers);
        console.log('Formatted Active Users:', formattedActiveUsers);
        console.log('Formatted Growth Rate:', formattedGrowthRate);
        console.log('User Type Data:', formattedUserTypeData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const totalUsersChartConfig = {
    users: {
      label: 'Total Users',
      color: '#3B82F6',
    },
  } satisfies ChartConfig;

  const userTypeChartConfig = {
    new: {
      label: 'New Users',
      color: '#60A5FA',
    },
    returning: {
      label: 'Returning Users',
      color: '#1E40AF',
    },
  } satisfies ChartConfig;

  const activeUsersChartConfig = {
    Daily: {
      label: 'Daily Active Users',
      color: '#60A5FA',
    },
    Weekly: {
      label: 'Weekly Active Users',
      color: '#3B82F6',
    },
    Monthly: {
      label: 'Monthly Active Users',
      color: '#1E40AF',
    },
  } satisfies ChartConfig;

  const growthRateChartConfig = {
    rate: {
      label: 'Growth Rate',
      color: '#3B82F6',
    },
  } satisfies ChartConfig;

  // Filter and aggregate data based on time filter
  const filteredTotalUsersData = useMemo(() => {
    if (!analyticsData.totalUsersData.length) return [];
    
    if (timeFilter === 'yearly') {
      // Group by year
      const yearlyMap = new Map<string, number>();
      analyticsData.totalUsersData.forEach(item => {
        const year = new Date().getFullYear().toString(); // Use current year as fallback
        yearlyMap.set(year, (yearlyMap.get(year) || 0) + item.users);
      });
      return Array.from(yearlyMap.entries()).map(([year, users]) => ({
        month: year,
        users
      }));
    }
    
    if (timeFilter === 'weekly') {
      // Show last 12 weeks, aggregating monthly data proportionally
      const weeks = [];
      const totalWeeks = 12;
      const totalData = analyticsData.totalUsersData;
      
      for (let i = totalWeeks - 1; i >= 0; i--) {
        const weekDate = new Date();
        weekDate.setDate(weekDate.getDate() - (i * 7));
        const weekNumber = Math.ceil(weekDate.getDate() / 7);
        const monthAbbr = weekDate.toLocaleDateString('en-US', { month: 'short' });
        const weekLabel = `${monthAbbr} W${weekNumber}`;
        
        // Find corresponding month data and divide by ~4.33 (weeks per month)
        const monthIndex = weekDate.getMonth();
        const monthData = totalData[monthIndex] || totalData[totalData.length - 1];
        const weeklyUsers = monthData ? Math.round(monthData.users / 4.33) : 0;
        
        weeks.push({
          month: weekLabel,
          users: weeklyUsers
        });
      }
      return weeks;
    }
    
    // Monthly (default)
    return analyticsData.totalUsersData;
  }, [analyticsData.totalUsersData, timeFilter]);

  const filteredUserTypeData = useMemo(() => {
    if (!analyticsData.userTypeData.length) return [];
    
    if (timeFilter === 'yearly') {
      const yearlyMap = new Map<string, { new: number; returning: number }>();
      analyticsData.userTypeData.forEach(item => {
        const year = new Date().getFullYear().toString();
        const existing = yearlyMap.get(year) || { new: 0, returning: 0 };
        yearlyMap.set(year, {
          new: existing.new + item.new,
          returning: existing.returning + item.returning
        });
      });
      return Array.from(yearlyMap.entries()).map(([year, data]) => ({
        month: year,
        ...data
      }));
    }
    
    if (timeFilter === 'weekly') {
      const weeks = [];
      const totalWeeks = 12;
      const totalData = analyticsData.userTypeData;
      
      for (let i = totalWeeks - 1; i >= 0; i--) {
        const weekDate = new Date();
        weekDate.setDate(weekDate.getDate() - (i * 7));
        const weekNumber = Math.ceil(weekDate.getDate() / 7);
        const monthAbbr = weekDate.toLocaleDateString('en-US', { month: 'short' });
        const weekLabel = `${monthAbbr} W${weekNumber}`;
        
        const monthIndex = weekDate.getMonth();
        const monthData = totalData[monthIndex] || totalData[totalData.length - 1];
        const weeklyNew = monthData ? Math.round(monthData.new / 4.33) : 0;
        const weeklyReturning = monthData ? Math.round(monthData.returning / 4.33) : 0;
        
        weeks.push({
          month: weekLabel,
          new: weeklyNew,
          returning: weeklyReturning
        });
      }
      return weeks;
    }
    
    return analyticsData.userTypeData;
  }, [analyticsData.userTypeData, timeFilter]);

  const filteredGrowthRateData = useMemo(() => {
    if (!analyticsData.growthRateData.length) return [];
    
    if (timeFilter === 'yearly') {
      const yearlyMap = new Map<string, number[]>();
      analyticsData.growthRateData.forEach(item => {
        const year = new Date().getFullYear().toString();
        const existing = yearlyMap.get(year) || [];
        existing.push(item.rate);
        yearlyMap.set(year, existing);
      });
      return Array.from(yearlyMap.entries()).map(([year, rates]) => ({
        month: year,
        rate: rates.reduce((sum, r) => sum + r, 0) / rates.length
      }));
    }
    
    if (timeFilter === 'weekly') {
      const weeks = [];
      const totalWeeks = 12;
      const totalData = analyticsData.growthRateData;
      
      for (let i = totalWeeks - 1; i >= 0; i--) {
        const weekDate = new Date();
        weekDate.setDate(weekDate.getDate() - (i * 7));
        const weekNumber = Math.ceil(weekDate.getDate() / 7);
        const monthAbbr = weekDate.toLocaleDateString('en-US', { month: 'short' });
        const weekLabel = `${monthAbbr} W${weekNumber}`;
        
        const monthIndex = weekDate.getMonth();
        const monthData = totalData[monthIndex] || totalData[totalData.length - 1];
        
        weeks.push({
          month: weekLabel,
          rate: monthData ? monthData.rate : 0
        });
      }
      return weeks;
    }
    
    return analyticsData.growthRateData;
  }, [analyticsData.growthRateData, timeFilter]);

  // Transform active users data for mixed bar chart
  const currentActiveUsersData = useMemo((): CurrentActiveUserData[] => {
    if (!analyticsData.activeUsersData.length) return [];
    
    // Get the latest/current entry
    const currentData = analyticsData.activeUsersData[analyticsData.activeUsersData.length - 1];
    
    if (!currentData) return [];
    
    return [
      {
        name: 'Daily',
        value: currentData.daily || 0,
        fill: '#60A5FA',
      },
      {
        name: 'Weekly',
        value: currentData.weekly || 0,
        fill: '#3B82F6',
      },
      {
        name: 'Monthly',
        value: currentData.monthly || 0,
        fill: '#1E40AF',
      },
    ];
  }, [analyticsData.activeUsersData]);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">User Analytics</h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Detailed analysis of user behavior and patterns.</p>
          </div>
          <div className="flex gap-2 flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setTimeFilter('weekly')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 shadow-lg ${
                timeFilter === 'weekly'
                  ? 'bg-[#590178] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeFilter('monthly')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 shadow-lg ${
                timeFilter === 'monthly'
                  ? 'bg-[#590178] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setTimeFilter('yearly')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 shadow-lg ${
                timeFilter === 'yearly'
                  ? 'bg-[#590178] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Total Users Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Total Users</h2>
          </div>
          <div className="h-[250px] sm:h-[280px] lg:h-[300px] w-full">
            <ChartContainer config={totalUsersChartConfig} className="h-full w-full">
              <LineChart data={filteredTotalUsersData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#3B82F6", strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </div>
        </div>

        {/* New vs Returning Users Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
              <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">New vs Returning Users</h2>
          </div>
          <div className="h-[250px] sm:h-[280px] lg:h-[300px] w-full">
            <ChartContainer config={userTypeChartConfig} className="h-full w-full">
              <BarChart accessibilityLayer data={filteredUserTypeData}>
                <CartesianGrid vertical={false} stroke="#E5E7EB" strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => timeFilter === 'monthly' ? value.slice(0, 3) : value}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12 }}
                />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={{ fill: '#F3F4F6' }} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="new"
                  stackId="a"
                  fill="#60A5FA"
                  radius={[0, 0, 4, 4]}
                  barSize={32}
                />
                <Bar
                  dataKey="returning"
                  stackId="a"
                  fill="#1E40AF"
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        {/* Active Users Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Active Users (DAU, WAU, MAU)</h2>
          </div>
          <ChartContainer config={activeUsersChartConfig} className="h-[250px] sm:h-[260px] lg:h-[280px] w-full">
            <PieChart>
              <Pie
                data={currentActiveUsersData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
              >
                {currentActiveUsersData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent nameKey="name" />} />
            </PieChart>
          </ChartContainer>
        </div>

        {/* Growth Rate Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
            <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">User Growth Rate (%)</h2>
          </div>
          <ChartContainer config={growthRateChartConfig} className="h-[250px] sm:h-[280px] lg:h-[300px] w-full">
            <AreaChart data={filteredGrowthRateData} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value: number | string) => [`${Number(value).toFixed(2)}%`, 'Growth Rate']}
                cursor={{ stroke: '#3B82F6', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.3}
                strokeWidth={3}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
