'use client';
import '@/src/app/globals.css';
import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

export default function UserAnalytics() {
  interface ActiveUserData {
    month: string;
    daily: number;
    weekly: number;
    monthly: number;
  }

  interface UserTypeData {
    month: string;
    new: number;
    returning: number;
  }

  const [analyticsData, setAnalyticsData] = useState({
    totalUsersData: [] as { month: string; users: number }[],
    userTypeData: [] as UserTypeData[],
    activeUsersData: [] as ActiveUserData[],
    growthRateData: [] as { month: string; rate: number }[],
    currentUserBreakdownData: [] as { name: string; value: number }[],
  });

  useEffect(() => {
    Promise.all([
      fetch('http://kea.mywire.org:5000/api/total-users').then((res) => res.json()),
      fetch('http://kea.mywire.org:5000/api/new-vs-returning').then((res) => res.json()),
      fetch('http://kea.mywire.org:5000/api/active-users').then((res) => res.json()),
      fetch('http://kea.mywire.org:5000/api/user-breakdown').then((res) => res.json()),
      fetch('http://kea.mywire.org:5000/api/growth-rate').then((res) => res.json()),
    ])
      .then(([totalUsers, newVsReturning, activeUsers, userBreakdown, growthRate]) => {
        // Fix active users data structure - flatten the nested array
        const formattedActiveUsers = Array.isArray(activeUsers[0]) ? activeUsers[0] : activeUsers;
        
        // Fix growth rate data structure
        const formattedGrowthRate = growthRate.map((item: { month: string; rate: string | null; }) => ({
          month: item.month,
          rate: item.rate === null ? 0 : parseFloat(item.rate)
        }));

        setAnalyticsData({
          totalUsersData: totalUsers || [],
          userTypeData: newVsReturning || [],
          activeUsersData: formattedActiveUsers,
          growthRateData: formattedGrowthRate,
          currentUserBreakdownData: userBreakdown || [],
        });

        console.log('Formatted Active Users:', formattedActiveUsers);
        console.log('Formatted Growth Rate:', formattedGrowthRate);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">User Analytics</h1>
      <p className="text-gray-600">Detailed analysis of user behavior and patterns.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analyticsData.totalUsersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">New vs Returning Users</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={analyticsData.userTypeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="new" fill="#0088FE" />
              <Bar dataKey="returning" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={120}>
            <PieChart>
              <Pie
                data={analyticsData.currentUserBreakdownData}
                cx="50%" cy="50%" outerRadius={60} fill="#8884d8"
                dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {analyticsData.currentUserBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Active Users (DAU, WAU, MAU)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.activeUsersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="daily" stroke="#8884d8" name="Daily Active Users" />
              <Line type="monotone" dataKey="weekly" stroke="#82ca9d" name="Weekly Active Users" />
              <Line type="monotone" dataKey="monthly" stroke="#ffc658" name="Monthly Active Users" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Growth Rate (%)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.growthRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${Number(value).toFixed(2)}%`, 'Growth Rate']} />
              <Bar dataKey="rate" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}