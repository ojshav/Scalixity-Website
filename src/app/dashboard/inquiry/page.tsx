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
  company_name: string;
  email: string;
  industry_name: string;
  service_name: string;
  status: 'new' | 'in_progress' | 'resolved';
  created_at: string;
  updated_at: string;
}
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
      setInquiries(data);
      
      // Calculate statistics
      setTotalInquiries(data.length);
      setNewInquiries(data.filter((item: { status: string; }) => item.status === 'new').length);
      setInProgressInquiries(data.filter((item: { status: string; }) => item.status === 'in_progress').length);
      setResolvedInquiries(data.filter((item: { status: string; }) => item.status === 'resolved').length);
      
      setError(null);
    } catch (err) {
      setError('Error fetching inquiries. Please try again.');
      console.error('Error fetching inquiries:', err);
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
    const matchesSearch = 
      inquiry.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.industry_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.service_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || inquiry.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }) + ' ' + date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'in_progress':
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
                      <TableCell className="font-medium">{inquiry.company_name}</TableCell>
                      <TableCell>{inquiry.email}</TableCell>
                      <TableCell>{inquiry.industry_name}</TableCell>
                      <TableCell>{inquiry.service_name}</TableCell>
                      <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                      <TableCell>{formatDate(inquiry.created_at)}</TableCell>
                      <TableCell>{formatDate(inquiry.updated_at)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem 
                              onClick={() => updateInquiryStatus(inquiry.id, 'new')}
                              disabled={inquiry.status === 'new'}
                            >
                              Mark as New
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => updateInquiryStatus(inquiry.id, 'in_progress')}
                              disabled={inquiry.status === 'in_progress'}
                            >
                              Mark as In Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              onClick={() => updateInquiryStatus(inquiry.id, 'resolved')}
                              disabled={inquiry.status === 'resolved'}
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