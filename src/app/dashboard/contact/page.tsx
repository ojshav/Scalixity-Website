'use client'
import '@/src/app/globals.css';
import { useState, useEffect } from 'react'
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
  InputAdornment,
  IconButton,
  Chip,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import { Download, Search, ChevronLeft, ChevronRight, UnfoldMore, ArrowUpward, ArrowDownward, Person, Email, Phone, Message, CalendarToday } from '@mui/icons-material'
import ExcelJS from 'exceljs'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminContactDashboard() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<keyof ContactSubmission>('createdAt')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  
  const itemsPerPage = 10

  useEffect(() => {
    const fetchSubmissions = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`${baseURL}/api/contact`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('adminToken')
          }
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch submissions')
        }
        
        const responseData = await response.json()
        setSubmissions(responseData.data || [])
      } catch (error) {
        console.error('Error fetching contact submissions:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch submissions')
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchSubmissions()
  }, [])
  
  const handleSort = (field: keyof ContactSubmission) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }
  
  const sortedSubmissions = [...submissions].sort((a, b) => {
    const aValue = a[sortField] ?? '';
    const bValue = b[sortField] ?? '';
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })
  
  const filteredSubmissions = sortedSubmissions.filter(submission => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (submission.name?.toLowerCase().includes(searchLower) ?? false) ||
      (submission.email?.toLowerCase().includes(searchLower) ?? false) ||
      (submission.phone?.includes(searchTerm) ?? false) ||
      (submission.message?.toLowerCase().includes(searchLower) ?? false)
    );
  });
  
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedSubmissions = filteredSubmissions.slice(startIndex, startIndex + itemsPerPage)
  
  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Contacts');

    worksheet.columns = [
      { header: 'Name', key: 'name' },
      { header: 'Email', key: 'email' },
      { header: 'Phone', key: 'phone' },
      { header: 'Message', key: 'message' },
      { header: 'Status', key: 'status' },
      { header: 'Submission Date', key: 'submissionDate' }
    ];

    filteredSubmissions.forEach(s => {
      worksheet.addRow({
        name: s.name,
        email: s.email,
        phone: s.phone,
        message: s.message,
        status: s.status,
        submissionDate: s.createdAt
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'contact-submissions.xlsx';
    anchor.click();
    window.URL.revokeObjectURL(url);
  }
  
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Invalid Date';
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  }

  const getSortIcon = (field: keyof ContactSubmission) => {
    if (sortField !== field) return <UnfoldMore sx={{ fontSize: '1rem', opacity: 0.3 }} />;
    return sortDirection === 'asc' 
      ? <ArrowUpward sx={{ fontSize: '1rem' }} />
      : <ArrowDownward sx={{ fontSize: '1rem' }} />;
  }
  
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 2, sm: 3, md: 0 }, py: { xs: 2, sm: 3, md: 0 } }}>
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
              Contact Form Submissions
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              View and manage all contact form submissions from your website
            </Typography>
          </Box>
          <Button 
            onClick={handleDownloadExcel}
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
            startIcon={<Download />}
          >
            Export to Excel
          </Button>
        </Box>
      </Box>

      {/* Search */}
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <TextField
          placeholder="Search by name, email, phone or message..."
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
          }}
        />
      </Box>

      {/* Submissions Table */}
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
            All Submissions ({filteredSubmissions.length})
          </Typography>
          
          {isLoading ? (
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
                Loading submissions...
              </Typography>
            </Box>
          ) : error ? (
            <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
              <Typography variant="body1" sx={{ 
                color: '#d32f2f', 
                fontWeight: 500, 
                mb: 2,
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                {error}
              </Typography>
              <Button
                onClick={() => window.location.reload()}
                variant="contained"
                sx={{
                  backgroundColor: '#590178',
                  color: '#fff',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  px: { xs: 2, md: 3 },
                  py: { xs: 1, md: 1.5 },
                  '&:hover': {
                    backgroundColor: '#4a0166',
                  }
                }}
              >
                Try Again
              </Button>
            </Box>
          ) : filteredSubmissions.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
              <Typography variant="body1" sx={{ 
                color: '#666', 
                mb: 2,
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                {searchTerm ? 'No submissions found matching your search' : 'No contact submissions yet.'}
              </Typography>
            </Box>
          ) : (
            <>
              {/* Mobile Card View */}
              {isMobile ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {/* Sort Options for Mobile */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    flexWrap: 'wrap',
                    mb: 1
                  }}>
                    <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                      Sort by:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {(['name', 'email', 'phone', 'createdAt'] as const).map((field) => (
                        <Button
                          key={field}
                          onClick={() => handleSort(field)}
                          size="small"
                          variant={sortField === field ? 'contained' : 'outlined'}
                          sx={{
                            minWidth: 'auto',
                            px: 1.5,
                            py: 0.5,
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            backgroundColor: sortField === field ? '#590178' : 'transparent',
                            color: sortField === field ? '#fff' : '#666',
                            borderColor: sortField === field ? '#590178' : '#e0e0e0',
                            '&:hover': {
                              backgroundColor: sortField === field ? '#4a0166' : '#f5f5f5',
                              borderColor: sortField === field ? '#4a0166' : '#d0d0d0',
                            }
                          }}
                          endIcon={getSortIcon(field)}
                        >
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </Button>
                      ))}
                    </Box>
                  </Box>

                  {/* Cards */}
                  {paginatedSubmissions.map((submission) => (
                    <Paper
                      key={submission.id}
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
                            <Person sx={{ fontSize: '1rem', color: '#590178' }} />
                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>
                              {submission.name}
                            </Typography>
                          </Box>
                          <Chip
                            label={submission.status || 'New'}
                            size="small"
                            sx={{
                              backgroundColor: submission.status === 'Read' ? '#e8f5e9' : '#e3f2fd',
                              color: submission.status === 'Read' ? '#2e7d32' : '#1976d2',
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              height: '22px'
                            }}
                          />
                        </Box>
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
                              {submission.email}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Phone sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Phone
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {submission.phone || 'N/A'}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Message sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Message
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem', wordBreak: 'break-word' }}>
                              {submission.message || 'N/A'}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CalendarToday sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Date
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {formatDate(submission.createdAt)}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  ))}
                </Box>
              ) : (
                /* Desktop Table View */
                <Box sx={{ overflowX: 'auto', width: '100%' }}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow sx={{ backgroundColor: '#590178' }}>
                          <TableCell 
                            sx={{ 
                              fontWeight: 600, 
                              color: 'white', 
                              fontSize: '0.875rem', 
                              borderTopLeftRadius: '8px',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              px: 2,
                              py: 1.5,
                              '&:hover': { backgroundColor: '#6a0188' }
                            }}
                            onClick={() => handleSort('name')}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              Name
                              {getSortIcon('name')}
                            </Box>
                          </TableCell>
                          <TableCell 
                            sx={{ 
                              fontWeight: 600, 
                              color: 'white', 
                              fontSize: '0.875rem',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              px: 2,
                              py: 1.5,
                              '&:hover': { backgroundColor: '#6a0188' }
                            }}
                            onClick={() => handleSort('email')}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              Email
                              {getSortIcon('email')}
                            </Box>
                          </TableCell>
                          <TableCell 
                            sx={{ 
                              fontWeight: 600, 
                              color: 'white', 
                              fontSize: '0.875rem',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              px: 2,
                              py: 1.5,
                              '&:hover': { backgroundColor: '#6a0188' }
                            }}
                            onClick={() => handleSort('phone')}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              Phone
                              {getSortIcon('phone')}
                            </Box>
                          </TableCell>
                          <TableCell sx={{ 
                            fontWeight: 600, 
                            color: 'white', 
                            fontSize: '0.875rem',
                            whiteSpace: 'nowrap',
                            px: 2,
                            py: 1.5
                          }}>
                            Message
                          </TableCell>
                          <TableCell 
                            sx={{ 
                              fontWeight: 600, 
                              color: 'white', 
                              fontSize: '0.875rem',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              px: 2,
                              py: 1.5,
                              '&:hover': { backgroundColor: '#6a0188' }
                            }}
                            onClick={() => handleSort('createdAt')}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              Date
                              {getSortIcon('createdAt')}
                            </Box>
                          </TableCell>
                          <TableCell sx={{ 
                            fontWeight: 600, 
                            color: 'white', 
                            fontSize: '0.875rem', 
                            borderTopRightRadius: '8px',
                            whiteSpace: 'nowrap',
                            px: 2,
                            py: 1.5
                          }}>
                            Status
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paginatedSubmissions.map((submission) => (
                          <TableRow 
                            key={submission.id}
                            sx={{
                              '&:hover': {
                                backgroundColor: '#f8f9fa',
                              }
                            }}
                          >
                            <TableCell sx={{ px: 2, py: 1.5 }}>
                              <Typography variant="body2" sx={{ 
                                fontWeight: 500, 
                                color: '#1a1a1a',
                                fontSize: '0.875rem'
                              }}>
                                {submission.name}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ px: 2, py: 1.5 }}>
                              <Typography variant="body2" sx={{ 
                                color: '#1a1a1a',
                                fontSize: '0.875rem'
                              }}>
                                {submission.email}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ px: 2, py: 1.5 }}>
                              <Typography variant="body2" sx={{ 
                                color: '#666',
                                fontSize: '0.875rem'
                              }}>
                                {submission.phone || 'N/A'}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ 
                              maxWidth: '300px',
                              px: 2,
                              py: 1.5
                            }}>
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  color: '#1a1a1a',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                  fontSize: '0.875rem'
                                }}
                                title={submission.message || 'N/A'}
                              >
                                {submission.message || 'N/A'}
                              </Typography>
                            </TableCell>
                            <TableCell sx={{ 
                              color: '#666', 
                              fontSize: '0.875rem',
                              px: 2,
                              py: 1.5,
                              whiteSpace: 'nowrap'
                            }}>
                              {formatDate(submission.createdAt)}
                            </TableCell>
                            <TableCell sx={{ px: 2, py: 1.5 }}>
                              <Chip
                                label={submission.status || 'New'}
                                size="small"
                                sx={{
                                  backgroundColor: submission.status === 'Read' ? '#e8f5e9' : '#e3f2fd',
                                  color: submission.status === 'Read' ? '#2e7d32' : '#1976d2',
                                  fontWeight: 500,
                                  fontSize: '0.75rem',
                                  height: '24px'
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
              
              {filteredSubmissions.length > 0 && (
                <Box sx={{ 
                  px: { xs: 2, md: 3 }, 
                  py: { xs: 2, md: 3 }, 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'center' }, 
                  justifyContent: { xs: 'center', md: 'space-between' }, 
                  borderTop: '1px solid #e0e0e0',
                  mt: 2,
                  gap: { xs: 2, md: 0 }
                }}>
                  <Typography variant="body2" sx={{ 
                    color: '#666',
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    textAlign: { xs: 'center', md: 'left' }
                  }}>
                    Showing <Box component="span" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                      {startIndex + 1}
                    </Box> to <Box component="span" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                      {Math.min(startIndex + itemsPerPage, filteredSubmissions.length)}
                    </Box> of <Box component="span" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
                      {filteredSubmissions.length}
                    </Box> results
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <IconButton
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        color: '#1a1a1a',
                        width: { xs: '36px', md: '40px' },
                        height: { xs: '36px', md: '40px' },
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                        '&:disabled': {
                          opacity: 0.5,
                          cursor: 'not-allowed'
                        }
                      }}
                    >
                      <ChevronLeft sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                    </IconButton>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      px: { xs: 1.5, md: 2 },
                      color: '#666',
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      Page {currentPage} of {totalPages}
                    </Box>
                    
                    <IconButton
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        color: '#1a1a1a',
                        width: { xs: '36px', md: '40px' },
                        height: { xs: '36px', md: '40px' },
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                        '&:disabled': {
                          opacity: 0.5,
                          cursor: 'not-allowed'
                        }
                      }}
                    >
                      <ChevronRight sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                    </IconButton>
                  </Box>
                </Box>
              )}
            </>
          )}
        </Box>
      </Paper>
    </Box>
  )
}