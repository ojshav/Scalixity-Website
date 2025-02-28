'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/app/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/app/components/ui/tabs';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, MousePointer, Filter } from 'lucide-react';

export default function AcquisitionMatrix() {
  const [period, setPeriod] = useState('30days');

  // Mock data for traffic sources
  const trafficSourceData = [
    { name: 'Organic Search', value: 35 },
    { name: 'Direct', value: 20 },
    { name: 'Referral', value: 15 },
    { name: 'Social Media', value: 18 },
    { name: 'Paid Ads', value: 12 },
  ];

  // Mock data for traffic over time
  const trafficOverTimeData = [
    { date: '1/21', organic: 1200, direct: 800, referral: 600, social: 750, paid: 500 },
    { date: '1/28', organic: 1300, direct: 830, referral: 590, social: 820, paid: 520 },
    { date: '2/4', organic: 1400, direct: 810, referral: 620, social: 800, paid: 550 },
    { date: '2/11', organic: 1350, direct: 790, referral: 640, social: 810, paid: 580 },
    { date: '2/18', organic: 1500, direct: 850, referral: 660, social: 790, paid: 600 },
    { date: '2/25', organic: 1600, direct: 900, referral: 680, social: 850, paid: 620 },
  ];

  // Mock data for conversion rates
  const conversionData = [
    { source: 'Organic Search', rate: 2.8 },
    { source: 'Direct', rate: 4.2 },
    { source: 'Referral', rate: 5.7 },
    { source: 'Social Media', rate: 3.1 },
    { source: 'Paid Ads', rate: 6.4 },
  ];

  // Mock data for conversion over time
  const conversionOverTimeData = [
    { date: '1/21', rate: 3.2 },
    { date: '1/28', rate: 3.4 },
    { date: '2/4', rate: 3.6 },
    { date: '2/11', rate: 3.5 },
    { date: '2/18', rate: 3.8 },
    { date: '2/25', rate: 4.1 },
  ];

  // Mock data for CTR by campaign
  const ctrByCampaignData = [
    { campaign: 'Summer Sale', ctr: 4.8 },
    { campaign: 'New Product', ctr: 5.2 },
    { campaign: 'Holiday Special', ctr: 6.7 },
    { campaign: 'Loyalty Program', ctr: 3.9 },
    { campaign: 'Email Newsletter', ctr: 4.3 },
  ];

  // Mock data for CTR over time
  const ctrOverTimeData = [
    { date: '1/21', email: 4.2, social: 3.1, display: 2.1, search: 5.4 },
    { date: '1/28', email: 4.3, social: 3.3, display: 2.0, search: 5.6 },
    { date: '2/4', email: 4.5, social: 3.4, display: 2.2, search: 5.5 },
    { date: '2/11', email: 4.4, social: 3.2, display: 2.3, search: 5.3 },
    { date: '2/18', email: 4.6, social: 3.5, display: 2.4, search: 5.7 },
    { date: '2/25', email: 4.8, social: 3.7, display: 2.5, search: 5.9 },
  ];

  // Mock data for detailed acquisition stats
  const acquisitionDetails = [
    { id: 1, source: 'Google (Organic)', visitors: 15238, conversions: 427, conversionRate: 2.8, ctr: 5.3 },
    { id: 2, source: 'Direct Traffic', visitors: 8742, conversions: 367, conversionRate: 4.2, ctr: 6.1 },
    { id: 3, source: 'Facebook', visitors: 4213, conversions: 131, conversionRate: 3.1, ctr: 3.8 },
    { id: 4, source: 'Twitter', visitors: 2145, conversions: 60, conversionRate: 2.8, ctr: 3.2 },
    { id: 5, source: 'Instagram', visitors: 3824, conversions: 118, conversionRate: 3.1, ctr: 3.7 },
    { id: 6, source: 'Email Campaigns', visitors: 3250, conversions: 182, conversionRate: 5.6, ctr: 4.5 },
    { id: 7, source: 'LinkedIn', visitors: 1628, conversions: 57, conversionRate: 3.5, ctr: 3.4 },
    { id: 8, source: 'Bing (Organic)', visitors: 982, conversions: 24, conversionRate: 2.4, ctr: 4.1 },
    { id: 9, source: 'Google Ads', visitors: 5320, conversions: 340, conversionRate: 6.4, ctr: 7.2 },
    { id: 10, source: 'Referral Sites', visitors: 6450, conversions: 368, conversionRate: 5.7, ctr: 6.3 },
  ];

  // Colors for the charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Acquisition Matrix</h1>
            <p className="text-lg text-gray-500">User acquisition and conversion metrics.</p>
          </div>
          <div className="flex gap-2">
            <div className="inline-flex items-center rounded-md border border-gray-200 p-1">
              <button 
                className={`px-3 py-1 text-sm rounded-sm ${period === '7days' ? 'bg-blue-100 text-blue-800' : 'text-gray-600'}`}
                onClick={() => setPeriod('7days')}
              >
                7 Days
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-sm ${period === '30days' ? 'bg-blue-100 text-blue-800' : 'text-gray-600'}`}
                onClick={() => setPeriod('30days')}
              >
                30 Days
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-sm ${period === '90days' ? 'bg-blue-100 text-blue-800' : 'text-gray-600'}`}
                onClick={() => setPeriod('90days')}
              >
                90 Days
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Visitors</CardTitle>
              <CardDescription className="text-2xl font-bold">52,841</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp size={12} className="mr-1" /> 12.3% increase from last period
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Conversion Rate</CardTitle>
              <CardDescription className="text-2xl font-bold">4.2%</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp size={12} className="mr-1" /> 0.5% increase from last period
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Click-Through Rate</CardTitle>
              <CardDescription className="text-2xl font-bold">5.7%</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-green-600 flex items-center">
                <TrendingUp size={12} className="mr-1" /> 0.8% increase from last period
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="traffic" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="traffic" className="flex items-center gap-2">
              <Users size={16} /> Traffic Sources
            </TabsTrigger>
            <TabsTrigger value="conversion" className="flex items-center gap-2">
              <TrendingUp size={16} /> Conversion Rates
            </TabsTrigger>
            <TabsTrigger value="ctr" className="flex items-center gap-2">
              <MousePointer size={16} /> Click-Through Rates
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="traffic" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={trafficSourceData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {trafficSourceData.map((entry, index) => (
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
                  <CardTitle>Traffic Sources by Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trafficOverTimeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="organic" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="direct" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="referral" stackId="1" stroke="#ffc658" fill="#ffc658" />
                        <Area type="monotone" dataKey="social" stackId="1" stroke="#ff8042" fill="#ff8042" />
                        <Area type="monotone" dataKey="paid" stackId="1" stroke="#a28dff" fill="#a28dff" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="conversion" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate by Source</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={conversionData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 'dataMax + 1']} unit="%" />
                        <YAxis type="category" dataKey="source" />
                        <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                        <Bar dataKey="rate" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Rate Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={conversionOverTimeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 'dataMax + 1']} unit="%" />
                        <Tooltip formatter={(value) => [`${value}%`, 'Conversion Rate']} />
                        <Line type="monotone" dataKey="rate" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="ctr" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>CTR by Campaign</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={ctrByCampaignData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 'dataMax + 1']} unit="%" />
                        <YAxis type="category" dataKey="campaign" />
                        <Tooltip formatter={(value) => [`${value}%`, 'CTR']} />
                        <Bar dataKey="ctr" fill="#82ca9d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>CTR Over Time by Channel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={ctrOverTimeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[0, 'dataMax + 1']} unit="%" />
                        <Tooltip formatter={(value) => [`${value}%`, 'CTR']} />
                        <Legend />
                        <Line type="monotone" dataKey="email" stroke="#8884d8" strokeWidth={2} />
                        <Line type="monotone" dataKey="social" stroke="#82ca9d" strokeWidth={2} />
                        <Line type="monotone" dataKey="display" stroke="#ffc658" strokeWidth={2} />
                        <Line type="monotone" dataKey="search" stroke="#ff8042" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Detailed Acquisition Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Source</th>
                    <th className="text-right py-3 px-4">Visitors</th>
                    <th className="text-right py-3 px-4">Conversions</th>
                    <th className="text-right py-3 px-4">Conv. Rate</th>
                    <th className="text-right py-3 px-4">CTR</th>
                  </tr>
                </thead>
                <tbody>
                  {acquisitionDetails.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">{item.source}</td>
                      <td className="py-3 px-4 text-right">{item.visitors.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right">{item.conversions.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right">
                        <span className={`inline-block px-2 py-1 rounded text-xs ${
                          item.conversionRate > 5 ? 'bg-green-100 text-green-800' :
                          item.conversionRate > 3 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.conversionRate}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className={`inline-block px-2 py-1 rounded text-xs ${
                          item.ctr > 5 ? 'bg-green-100 text-green-800' :
                          item.ctr > 3 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.ctr}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}