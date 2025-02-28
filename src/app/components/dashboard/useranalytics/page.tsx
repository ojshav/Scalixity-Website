'use client'

import React from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

export default function UserAnalytics() {
  // Dummy data for Total Users over time
  const totalUsersData = [
    { month: 'Jan', users: 4000 },
    { month: 'Feb', users: 4200 },
    { month: 'Mar', users: 4500 },
    { month: 'Apr', users: 4800 },
    { month: 'May', users: 5200 },
    { month: 'Jun', users: 5800 },
    { month: 'Jul', users: 6500 },
    { month: 'Aug', users: 7200 },
  ];

  // Dummy data for New vs Returning Users
  const userTypeData = [
    { month: 'Jan', new: 2500, returning: 1500 },
    { month: 'Feb', new: 2300, returning: 1900 },
    { month: 'Mar', new: 2400, returning: 2100 },
    { month: 'Apr', new: 2600, returning: 2200 },
    { month: 'May', new: 2800, returning: 2400 },
    { month: 'Jun', new: 3200, returning: 2600 },
    { month: 'Jul', new: 3500, returning: 3000 },
    { month: 'Aug', new: 3800, returning: 3400 },
  ];

  // Dummy data for Active Users (DAU, WAU, MAU)
  const activeUsersData = [
    { month: 'Jan', daily: 1200, weekly: 2800, monthly: 4000 },
    { month: 'Feb', daily: 1300, weekly: 3000, monthly: 4200 },
    { month: 'Mar', daily: 1400, weekly: 3200, monthly: 4500 },
    { month: 'Apr', daily: 1500, weekly: 3500, monthly: 4800 },
    { month: 'May', daily: 1600, weekly: 3800, monthly: 5200 },
    { month: 'Jun', daily: 1800, weekly: 4200, monthly: 5800 },
    { month: 'Jul', daily: 2000, weekly: 4800, monthly: 6500 },
    { month: 'Aug', daily: 2200, weekly: 5500, monthly: 7200 },
  ];

  // Dummy data for User Growth Rate (%)
  const growthRateData = [
    { month: 'Jan', rate: 0 },
    { month: 'Feb', rate: 5 },
    { month: 'Mar', rate: 7.1 },
    { month: 'Apr', rate: 6.7 },
    { month: 'May', rate: 8.3 },
    { month: 'Jun', rate: 11.5 },
    { month: 'Jul', rate: 12.1 },
    { month: 'Aug', rate: 10.8 },
  ];

  // Pie chart data for current user breakdown
  const currentUserBreakdownData = [
    { name: 'New Users', value: 3800 },
    { name: 'Returning Users', value: 3400 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">User Analytics</h1>
        <p className="text-gray-600">Detailed analysis of user behavior and patterns.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Users Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Total Users</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={totalUsersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* New vs Returning Users Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">New vs Returning Users</h2>
          <div className="flex flex-col h-full">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={userTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="new" fill="#0088FE" />
                <Bar dataKey="returning" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4">
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={currentUserBreakdownData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {currentUserBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Active Users Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Active Users (DAU, WAU, MAU)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activeUsersData}>
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

        {/* User Growth Rate Chart */}
        <div className="bg-card p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Growth Rate (%)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={growthRateData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, 'Growth Rate']} />
              <Bar dataKey="rate" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}