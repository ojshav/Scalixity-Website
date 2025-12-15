'use client'
import '@/src/app/globals.css';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  MenuItem,
  IconButton,
  Chip,
  InputAdornment,
  Menu,
  useMediaQuery,
  useTheme,
  Divider
} from '@mui/material';
import { 
  MoreVert, 
  Search, 
  Refresh, 
  CheckCircle,
  Pending,
  NewReleases,
  Business,
  Email,
  Category,
  Build,
  CalendarToday,
  Update
} from '@mui/icons-material';
import CustomSelect from '@/src/app/components/common/CustomSelect';

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [totalInquiries, setTotalInquiries] = useState<number>(0);
  const [newInquiries, setNewInquiries] = useState<number>(0);
  const [inProgressInquiries, setInProgressInquiries] = useState<number>(0);
  const [resolvedInquiries, setResolvedInquiries] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<ServiceInquiry | null>(null);

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
      
      // Close menu
      handleMenuClose();
      
      // Refresh the inquiries list
      fetchInquiries();
    } catch (err) {
      setError('Error updating inquiry status. Please try again.');
      console.error('Error updating inquiry status:', err);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, inquiry: ServiceInquiry) => {
    setAnchorEl(event.currentTarget);
    setSelectedInquiry(inquiry);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedInquiry(null);
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

  const getStatusChip = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    switch (normalizedStatus) {
      case 'new':
        return (
          <Chip 
            icon={<NewReleases sx={{ fontSize: { xs: '14px !important', md: '16px !important' } }} />}
            label="New" 
            size="small"
            sx={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              height: { xs: '20px', md: '24px' }
            }}
          />
        );
      case 'in_progress':
      case 'in progress':
        return (
          <Chip 
            icon={<Pending sx={{ fontSize: { xs: '14px !important', md: '16px !important' } }} />}
            label="In Progress" 
            size="small"
            sx={{
              backgroundColor: '#fff3e0',
              color: '#f57c00',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              height: { xs: '20px', md: '24px' }
            }}
          />
        );
      case 'resolved':
        return (
          <Chip 
            icon={<CheckCircle sx={{ fontSize: { xs: '14px !important', md: '16px !important' } }} />}
            label="Resolved" 
            size="small"
            sx={{
              backgroundColor: '#e8f5e9',
              color: '#2e7d32',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              height: { xs: '20px', md: '24px' }
            }}
          />
        );
      default:
        return (
          <Chip 
            label="Unknown" 
            size="small"
            sx={{
              backgroundColor: '#f5f5f5',
              color: '#666',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              height: { xs: '20px', md: '24px' }
            }}
          />
        );
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 1, sm: 2, md: 0 }, py: { xs: 2, sm: 3, md: 0 } }}>
      {/* Header */}
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' }, 
          justifyContent: 'space-between', 
          mb: 2,
          gap: { xs: 2, md: 0 }
        }}>
          <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 1,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
            }}>
              Service Inquiries
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              Manage and track service inquiries from clients
            </Typography>
          </Box>
          <Button 
            onClick={fetchInquiries}
            variant="contained"
            sx={{
              backgroundColor: '#590178',
              color: '#fff',
              px: { xs: 2, md: 3 },
              py: { xs: 1, md: 1.5 },
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: { xs: '0.875rem', md: '0.95rem' },
              fontWeight: 600,
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#4a0166',
              }
            }}
            startIcon={<Refresh />}
          >
            Refresh
          </Button>
        </Box>
      </Box>

      {/* Statistics Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: 2, md: 3 }, mb: { xs: 3, md: 4 } }}>
        <Paper 
          elevation={0}
          sx={{
            backgroundColor: '#fff',
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
            p: { xs: 2, md: 3 }
          }}
        >
          <Typography variant="body2" sx={{ 
            color: '#666', 
            mb: 1, 
            fontWeight: 500,
            fontSize: { xs: '0.75rem', md: '0.875rem' }
          }}>
            Total Inquiries
          </Typography>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: '#1a1a1a',
            fontSize: { xs: '1.5rem', md: '2.125rem' }
          }}>
            {totalInquiries}
          </Typography>
        </Paper>
        <Paper 
          elevation={0}
          sx={{
            backgroundColor: '#fff',
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
            p: { xs: 2, md: 3 }
          }}
        >
          <Typography variant="body2" sx={{ 
            color: '#666', 
            mb: 1, 
            fontWeight: 500,
            fontSize: { xs: '0.75rem', md: '0.875rem' }
          }}>
            New
          </Typography>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: '#1976d2',
            fontSize: { xs: '1.5rem', md: '2.125rem' }
          }}>
            {newInquiries}
          </Typography>
        </Paper>
        <Paper 
          elevation={0}
          sx={{
            backgroundColor: '#fff',
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
            p: { xs: 2, md: 3 }
          }}
        >
          <Typography variant="body2" sx={{ 
            color: '#666', 
            mb: 1, 
            fontWeight: 500,
            fontSize: { xs: '0.75rem', md: '0.875rem' }
          }}>
            In Progress
          </Typography>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: '#f57c00',
            fontSize: { xs: '1.5rem', md: '2.125rem' }
          }}>
            {inProgressInquiries}
          </Typography>
        </Paper>
        <Paper 
          elevation={0}
          sx={{
            backgroundColor: '#fff',
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
            p: { xs: 2, md: 3 }
          }}
        >
          <Typography variant="body2" sx={{ 
            color: '#666', 
            mb: 1, 
            fontWeight: 500,
            fontSize: { xs: '0.75rem', md: '0.875rem' }
          }}>
            Resolved
          </Typography>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            color: '#2e7d32',
            fontSize: { xs: '1.5rem', md: '2.125rem' }
          }}>
            {resolvedInquiries}
          </Typography>
        </Paper>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: { xs: 3, md: 4 } }}>
        <TextField
          placeholder="Search by company, email, industry or service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#666', fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              height: { xs: '48px', md: '56px' },
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white !important',
                outline: 'none !important',
              },
              '&.Mui-focused': {
                outline: 'none !important',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1) !important',
              },
              '& .MuiInputBase-input': {
                padding: { xs: '12px 14px', md: '16.5px 14px' },
                fontSize: { xs: '0.875rem', md: '1rem' },
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'rgba(0, 0, 0, 0.4)',
                opacity: 1,
                fontSize: { xs: '0.875rem', md: '1rem' },
              },
            },
            '& .MuiOutlinedInput-root.Mui-focused': {
              '& fieldset': {
                borderColor: 'white !important',
                borderWidth: '1px !important',
              },
            }
          }}
        />
        <CustomSelect
          label="Status"
          value={statusFilter}
          onChange={setStatusFilter}
          options={[
            { value: 'all', label: 'All Statuses' },
            { value: 'new', label: 'New' },
            { value: 'in_progress', label: 'In Progress' },
            { value: 'resolved', label: 'Resolved' },
          ]}
        />
      </Box>

      {/* Table */}
      <Paper 
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          borderRadius: { xs: '12px', md: '16px' },
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 600, 
            color: '#1a1a1a', 
            mb: { xs: 2, md: 3 },
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
          }}>
            All Inquiries
          </Typography>
          <Typography variant="body2" sx={{ 
            color: '#666', 
            mb: { xs: 2, md: 3 },
            fontSize: { xs: '0.75rem', md: '0.875rem' }
          }}>
            Showing {filteredInquiries.length} out of {totalInquiries} total inquiries
          </Typography>
          
          {loading ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: '300px', md: '400px' },
                gap: 2
              }}
            >
              <CircularProgress
                size={60}
                sx={{
                  color: '#590178',
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: '#666',
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Loading inquiries...
              </Typography>
            </Box>
          ) : error ? (
            <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
              <Typography variant="body1" sx={{ 
                color: '#d32f2f', 
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                {error}
              </Typography>
            </Box>
          ) : filteredInquiries.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
              <Typography variant="body1" sx={{ 
                color: '#666',
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                No inquiries found matching your criteria
              </Typography>
            </Box>
          ) : (
            <>
              {/* Mobile Card View */}
              {isMobile ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {filteredInquiries.map((inquiry) => (
                    <Paper
                      key={inquiry.id}
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: '12px',
                        border: '1px solid #e0e0e0',
                        backgroundColor: '#fff',
                        '&:hover': {
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Business sx={{ fontSize: '1rem', color: '#590178' }} />
                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>
                              {inquiry.companyName || 'N/A'}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem' }}>
                              ID: {inquiry.id}
                            </Typography>
                            {getStatusChip(inquiry.status)}
                          </Box>
                        </Box>
                        <IconButton
                          size="small"
                          onClick={(e) => handleMenuOpen(e, inquiry)}
                          sx={{
                            color: '#590178',
                            '&:hover': {
                              backgroundColor: '#f0e6f5',
                            }
                          }}
                        >
                          <MoreVert fontSize="small" />
                        </IconButton>
                      </Box>

                      <Divider sx={{ my: 1.5 }} />

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Email sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Email
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem', wordBreak: 'break-all' }}>
                              {inquiry.email || 'N/A'}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Category sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Industry
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {inquiry.industryName || 'N/A'}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Build sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Service
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {inquiry.serviceName || 'N/A'}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CalendarToday sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Created
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {formatDate(inquiry.createdAt)}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Update sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Updated
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {formatDate(inquiry.updatedAt)}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              ) : (
                /* Desktop Table View */
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#590178' }}>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopLeftRadius: '8px' }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Company</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Industry</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Service</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Created</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Updated</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopRightRadius: '8px' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                      {filteredInquiries.map((inquiry) => (
                      <TableRow 
                        key={inquiry.id}
                        sx={{
                          '&:hover': {
                            backgroundColor: '#f8f9fa',
                          }
                        }}
                      >
                        <TableCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>{inquiry.id}</TableCell>
                        <TableCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>{inquiry.companyName || 'N/A'}</TableCell>
                        <TableCell sx={{ color: '#666' }}>{inquiry.email || 'N/A'}</TableCell>
                        <TableCell sx={{ color: '#666' }}>{inquiry.industryName || 'N/A'}</TableCell>
                        <TableCell sx={{ color: '#666' }}>{inquiry.serviceName || 'N/A'}</TableCell>
                        <TableCell>{getStatusChip(inquiry.status)}</TableCell>
                        <TableCell sx={{ color: '#666', fontSize: '0.875rem' }}>{formatDate(inquiry.createdAt)}</TableCell>
                        <TableCell sx={{ color: '#666', fontSize: '0.875rem' }}>{formatDate(inquiry.updatedAt)}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                              size="small"
                              onClick={(e) => handleMenuOpen(e, inquiry)}
                              sx={{
                                color: '#590178',
                                '&:hover': {
                                  backgroundColor: '#f0e6f5',
                                }
                              }}
                            >
                              <MoreVert fontSize="small" />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
              )}
            </>
          )}
        </Box>
      </Paper>

      {/* Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
            minWidth: 180,
            mt: 1
          }
        }}
      >
        <MenuItem 
          onClick={() => selectedInquiry && updateInquiryStatus(selectedInquiry.id, 'NEW')}
          disabled={selectedInquiry?.status.toLowerCase() === 'new'}
          sx={{
            '&:hover': {
              backgroundColor: '#f0e6f5',
            },
            '&.Mui-disabled': {
              opacity: 0.5
            }
          }}
        >
          Mark as New
        </MenuItem>
        <MenuItem 
          onClick={() => selectedInquiry && updateInquiryStatus(selectedInquiry.id, 'IN_PROGRESS')}
          disabled={selectedInquiry?.status.toLowerCase() === 'in_progress' || selectedInquiry?.status.toLowerCase() === 'in progress'}
          sx={{
            '&:hover': {
              backgroundColor: '#f0e6f5',
            },
            '&.Mui-disabled': {
              opacity: 0.5
            }
          }}
        >
          Mark as In Progress
        </MenuItem>
        <MenuItem 
          onClick={() => selectedInquiry && updateInquiryStatus(selectedInquiry.id, 'RESOLVED')}
          disabled={selectedInquiry?.status.toLowerCase() === 'resolved'}
          sx={{
            '&:hover': {
              backgroundColor: '#f0e6f5',
            },
            '&.Mui-disabled': {
              opacity: 0.5
            }
          }}
        >
          Mark as Resolved
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default InquiriesDashboard;