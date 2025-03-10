'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/app/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/app/components/ui/tabs';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Clock, Laptop,  LineChart as LineChartIcon } from 'lucide-react';

export default function TechnicalMetrics() {
  const [activeTab, setActiveTab] = useState('performance');

  // Mock data for load time performance
  const performanceData = [
    { name: 'Jan', homepage: 2.3, dashboard: 3.4, checkout: 2.8 },
    { name: 'Feb', homepage: 2.1, dashboard: 3.2, checkout: 2.6 },
    { name: 'Mar', homepage: 1.9, dashboard: 3.0, checkout: 2.4 },
    { name: 'Apr', homepage: 1.8, dashboard: 2.8, checkout: 2.3 },
    { name: 'May', homepage: 1.6, dashboard: 2.6, checkout: 2.1 },
    { name: 'Jun', homepage: 1.5, dashboard: 2.5, checkout: 2.0 },
    { name: 'Jul', homepage: 1.4, dashboard: 2.4, checkout: 1.9 },
  ];

  // Mock data for device breakdown
  const deviceData = [
    { name: 'Mobile', value: 65 },
    { name: 'Desktop', value: 30 },
    { name: 'Tablet', value: 5 },
  ];

  // Mock data for browser breakdown
  const browserData = [
    { name: 'Chrome', value: 58 },
    { name: 'Safari', value: 20 },
    { name: 'Firefox', value: 12 },
    { name: 'Edge', value: 8 },
    { name: 'Other', value: 2 },
  ];

  // Mock data for error tracking
  const errorData = [
    { name: '404', value: 35 },
    { name: '500', value: 12 },
    { name: '403', value: 8 },
    { name: '400', value: 15 },
    { name: 'Other', value: 5 },
  ];

  // Error logs mock data
  const errorLogs = [
    { id: 1, path: '/products/123', errorCode: 404, count: 12, lastOccurrence: '2025-02-26T14:23:00' },
    { id: 2, path: '/api/users', errorCode: 500, count: 8, lastOccurrence: '2025-02-26T16:45:00' },
    { id: 3, path: '/checkout', errorCode: 400, count: 5, lastOccurrence: '2025-02-26T10:12:00' },
    { id: 4, path: '/admin/settings', errorCode: 403, count: 4, lastOccurrence: '2025-02-25T22:30:00' },
    { id: 5, path: '/search?q=test', errorCode: 404, count: 7, lastOccurrence: '2025-02-26T09:15:00' },
  ];

  // Performance by hour mock data
  const hourlyPerformance = [
    { hour: '00:00', loadTime: 1.2, users: 120 },
    { hour: '02:00', loadTime: 1.1, users: 80 },
    { hour: '04:00', loadTime: 1.0, users: 60 },
    { hour: '06:00', loadTime: 1.2, users: 90 },
    { hour: '08:00', loadTime: 1.8, users: 220 },
    { hour: '10:00', loadTime: 2.1, users: 380 },
    { hour: '12:00', loadTime: 2.3, users: 420 },
    { hour: '14:00', loadTime: 2.4, users: 450 },
    { hour: '16:00', loadTime: 2.2, users: 400 },
    { hour: '18:00', loadTime: 2.0, users: 350 },
    { hour: '20:00', loadTime: 1.8, users: 300 },
    { hour: '22:00', loadTime: 1.5, users: 200 },
  ];

  // Colors for the charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Technical Metrics</h1>
          <p className="text-lg text-gray-500 mb-6">System performance and technical analytics.</p>
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
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="homepage" stroke="#0088FE" strokeWidth={2} />
                        <Line type="monotone" dataKey="dashboard" stroke="#00C49F" strokeWidth={2} />
                        <Line type="monotone" dataKey="checkout" stroke="#FFBB28" strokeWidth={2} />
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
                        <Tooltip />
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
                      <p className="text-3xl font-bold">1.8s</p>
                      <p className="text-sm text-green-600">↓ 12% from last month</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600">Time to Interactive</p>
                      <p className="text-3xl font-bold">2.4s</p>
                      <p className="text-sm text-green-600">↓ 8% from last month</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-600">First Contentful Paint</p>
                      <p className="text-3xl font-bold">0.9s</p>
                      <p className="text-sm text-green-600">↓ 15% from last month</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600">Largest Contentful Paint</p>
                      <p className="text-3xl font-bold">1.5s</p>
                      <p className="text-sm text-green-600">↓ 10% from last month</p>
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
                          data={errorData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {errorData.map((entry, index) => (
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
                        {errorLogs.map((log) => (
                          <tr key={log.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{log.path}</td>
                            <td className="py-3 px-4">
                              <span className={`inline-block px-2 py-1 rounded text-xs ${
                                log.errorCode === 404 ? 'bg-orange-100 text-orange-800' :
                                log.errorCode === 500 ? 'bg-red-100 text-red-800' :
                                log.errorCode === 403 ? 'bg-yellow-100 text-yellow-800' :
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