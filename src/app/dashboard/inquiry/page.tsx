'use client'
import '@/src/app/globals.css';
import React, { useEffect, useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/src/app/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/src/app/components/ui/card';
import { Badge } from '@/src/app/components/ui/badge';
import { Button } from '@/src/app/components/ui/button';
import { Input } from '@/src/app/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/src/app/components/ui/select';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/src/app/components/ui/dropdown-menu';
import { 
  MoreHorizontal, 
  Search, 
  RefreshCcw, 
  Filter 
} from 'lucide-react';

interface ServiceInquiry {
  id: number;
  companyName: string;
  email: string;
  industryName: string;
  serviceName: string;
  status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED' | 'new' | 'in_progress' | 'resolved';
  createdAt: string;
  updatedAt: string;
}
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

const InquiriesDashboard: React.FC = () => {
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [totalInquiries, setTotalInquiries] = useState<number>(0);
  const [newInquiries, setNewInquiries] = useState<number>(0);
  const [inProgressInquiries, setInProgressInquiries] = useState<number>(0);
  const [resolvedInquiries, setResolvedInquiries] = useState<number>(0);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/inquiries`);
      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }
      const data = await response.json();
      // Ensure data is always an array
      const inquiriesArray = Array.isArray(data) ? data : [];
      setInquiries(inquiriesArray);
      
      // Calculate statistics
      setTotalInquiries(inquiriesArray.length);
      setNewInquiries(inquiriesArray.filter((item: { status: string; }) => item.status.toLowerCase() === 'new').length);
      setInProgressInquiries(inquiriesArray.filter((item: { status: string; }) => item.status.toLowerCase() === 'in_progress' || item.status.toLowerCase() === 'in progress').length);
      setResolvedInquiries(inquiriesArray.filter((item: { status: string; }) => item.status.toLowerCase() === 'resolved').length);
      
      setError(null);
    } catch (err) {
      setError('Error fetching inquiries. Please try again.');
      console.error('Error fetching inquiries:', err);
      // Set empty array on error to prevent map error
      setInquiries([]);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`${baseURL}/api/inquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update inquiry status');
      }
      
      // Refresh the inquiries list
      fetchInquiries();
    } catch (err) {
      setError('Error updating inquiry status. Please try again.');
      console.error('Error updating inquiry status:', err);
    }
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      (inquiry.companyName?.toLowerCase().includes(searchLower) ?? false) ||
      (inquiry.email?.toLowerCase().includes(searchLower) ?? false) ||
      (inquiry.industryName?.toLowerCase().includes(searchLower) ?? false) ||
      (inquiry.serviceName?.toLowerCase().includes(searchLower) ?? false);
    
    const normalizedStatus = inquiry.status.toLowerCase();
    const matchesStatus = statusFilter === 'all' || normalizedStatus === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid Date';
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }) + ' ' + date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
      return 'Invalid Date';
    }
  };

  const getStatusBadge = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'in_progress':
      case 'in progress':
        return <Badge className="bg-yellow-500">In Progress</Badge>;
      case 'resolved':
        return <Badge className="bg-green-500">Resolved</Badge>;
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>;
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Service Inquiries Dashboard</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalInquiries}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">New</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-500">{newInquiries}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-yellow-500">{inProgressInquiries}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Resolved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-500">{resolvedInquiries}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search by company, email, industry or service..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex space-x-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Filter size={16} />
                <SelectValue placeholder="Filter by status" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={fetchInquiries}>
            <RefreshCcw size={16} className="mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Service Inquiries</CardTitle>
          <CardDescription>
            Showing {filteredInquiries.length} out of {totalInquiries} total inquiries
          </CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 p-4">{error}</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Industry</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInquiries.length > 0 ? (
                  filteredInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell>{inquiry.id}</TableCell>
                      <TableCell className="font-medium">{inquiry.companyName || 'N/A'}</TableCell>
                      <TableCell>{inquiry.email || 'N/A'}</TableCell>
                      <TableCell>{inquiry.industryName || 'N/A'}</TableCell>
                      <TableCell>{inquiry.serviceName || 'N/A'}</TableCell>
                      <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                      <TableCell>{formatDate(inquiry.createdAt)}</TableCell>
                      <TableCell>{formatDate(inquiry.updatedAt)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem 
                              onClick={() => updateInquiryStatus(inquiry.id, 'NEW')}
                              disabled={inquiry.status.toLowerCase() === 'new'}
                            >
                              Mark as New
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => updateInquiryStatus(inquiry.id, 'IN_PROGRESS')}
                              disabled={inquiry.status.toLowerCase() === 'in_progress' || inquiry.status.toLowerCase() === 'in progress'}
                            >
                              Mark as In Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => updateInquiryStatus(inquiry.id, 'RESOLVED')}
                              disabled={inquiry.status.toLowerCase() === 'resolved'}
                            >
                              Mark as Resolved
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-10">
                      No inquiries found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InquiriesDashboard;