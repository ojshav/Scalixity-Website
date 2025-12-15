
'use client'
import '@/src/app/globals.css';
import React, { useState, useEffect } from 'react';
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
  IconButton,
  InputAdornment,
  Chip,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Edit, Delete, Add, Search, Visibility } from '@mui/icons-material';
import Image from 'next/image';
import ServiceForm from './ServiceForm';
import ServiceViewModal from './ServiceViewModal';
import DeleteConfirmationDialog from '@/src/app/components/dashboard/DeleteConfirmationDialog';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string | null;
  heroImageUrl: string | null;
  features: Array<{
    id: string;
    feature: string;
    order: number;
  }>;
  technologies: Array<{
    id: string;
    technology: string;
    iconUrl?: string | null;
    order: number;
  }>;
  benefits: Array<{
    id: string;
    benefit: string;
    order: number;
  }>;
  keywords?: Array<{
    id: string;
    keyword: string;
    order: number;
  }>;
  pricing?: {
    id: string;
    starting: string;
    description: string;
  };
  pricingPlans?: {
    beginner: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
    professional: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
    pro: {
      priceRange: string;
      description: string;
      bulletPoints: string[];
    };
  } | null;
  createdAt: string;
  updatedAt: string;
}

export default function AdminServicesPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobileOrTablet = isMobile || isTablet;
  
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<Service | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('No authentication token found');
        setLoading(false);
        return;
      }

      const response = await fetch(`${baseURL}/api/admin/services`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setServices(data.data);
      } else {
        throw new Error(data.message || 'Failed to fetch services');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch services');
      console.error('Error fetching services:', err);
    } finally {
      setLoading(false);
    }
  };

  const openDeleteConfirmDialog = (service: Service) => {
    setServiceToDelete(service);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!serviceToDelete) return;
    
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('No authentication token found');
        setLoading(false);
        return;
      }

      const response = await fetch(`${baseURL}/api/admin/services/${serviceToDelete.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to delete service');
      }

      const data = await response.json();
      if (data.success) {
        fetchServices();
        setOpenDeleteDialog(false);
        setServiceToDelete(null);
      } else {
        throw new Error(data.message || 'Failed to delete service');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error deleting service');
      console.error('Error deleting service:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
    setServiceToDelete(null);
  };

  const filteredServices = services.filter(service => {
    const searchLower = searchTerm.toLowerCase();
    return (
      (service.title?.toLowerCase().includes(searchLower) ?? false) ||
      (service.slug?.toLowerCase().includes(searchLower) ?? false) ||
      (service.shortDescription?.toLowerCase().includes(searchLower) ?? false)
    );
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#FFF2D5',
      px: { xs: 0, md: 0 },
      pb: { xs: 2, md: 0 }
    }}>
      {/* Header */}
      <Box sx={{ mb: { xs: 3, md: 4 }, px: { xs: 1, sm: 0 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' }, 
          justifyContent: 'space-between', 
          mb: 2,
          gap: { xs: 2, md: 0 }
        }}>
          <Box>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 1,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
            }}>
              Services
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              Manage your service offerings, descriptions, and pricing
            </Typography>
          </Box>
          <Button 
            onClick={() => setIsCreateModalOpen(true)}
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
              width: { xs: '100%', md: 'auto' },
              '&:hover': {
                backgroundColor: '#4a0166',
              }
            }}
            startIcon={<Add />}
          >
            Add New Service
          </Button>
        </Box>
      </Box>

      {/* Search */}
      <Box sx={{ mb: { xs: 3, md: 4 }, px: { xs: 1, sm: 0 } }}>
        <TextField
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#666' }} />
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
      </Box>

      {/* Services Table */}
      <Paper 
        elevation={0}
        sx={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          mx: { xs: 1, sm: 0 }
        }}
      >
        <Box sx={{ p: { xs: 1.5, md: 3 } }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 600, 
            color: '#1a1a1a', 
            mb: 3,
            fontSize: { xs: '1.125rem', md: '1.25rem' }
          }}>
            All Services
          </Typography>
          
          {loading ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
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
                }}
              >
                Loading services...
              </Typography>
            </Box>
          ) : error ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="body1" sx={{ color: '#d32f2f', fontWeight: 500, mb: 2 }}>
                {error}
              </Typography>
              <Button
                onClick={fetchServices}
                variant="contained"
                sx={{
                  backgroundColor: '#590178',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#4a0166',
                  }
                }}
              >
                Try Again
              </Button>
            </Box>
          ) : filteredServices.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
                {searchTerm ? 'No services found matching your search' : 'No services yet. Click "Add New Service" to create one.'}
              </Typography>
              {!searchTerm && (
                <Button
                  onClick={() => setIsCreateModalOpen(true)}
                  variant="contained"
                  sx={{
                    backgroundColor: '#590178',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#4a0166',
                    }
                  }}
                  startIcon={<Add />}
                >
                  Add Your First Service
                </Button>
              )}
            </Box>
          ) : isMobileOrTablet ? (
            // Mobile/Tablet Card View
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {filteredServices.map((service) => (
                <Card
                  key={service.id}
                  sx={{
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {/* Service Header with Image and Title */}
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box sx={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
                          {service.imageUrl ? (
                            <Image
                              src={service.imageUrl}
                              alt={service.title}
                              fill
                              style={{ objectFit: 'cover', borderRadius: '8px' }}
                            />
                          ) : (
                            <Box sx={{ 
                              width: 64, 
                              height: 64, 
                              borderRadius: '8px', 
                              bgcolor: '#f5f5f5', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center' 
                            }}>
                              <Typography variant="body2" sx={{ color: '#999', fontSize: '0.75rem' }}>No Image</Typography>
                            </Box>
                          )}
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography variant="h6" sx={{ 
                            fontWeight: 600, 
                            color: '#1a1a1a',
                            fontSize: '1rem',
                            mb: 0.5,
                            wordBreak: 'break-word'
                          }}>
                            {service.title}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem' }}>
                            /{service.slug}
                          </Typography>
                        </Box>
                      </Box>
                      
                      {/* Description */}
                      <Box>
                        <Typography variant="body2" sx={{ 
                          color: '#1a1a1a',
                          fontSize: '0.875rem',
                          lineHeight: 1.5,
                          mb: 0.5,
                          wordBreak: 'break-word'
                        }}>
                          {service.shortDescription}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem' }}>
                          {service.features.length} features
                        </Typography>
                      </Box>
                      
                      {/* Technologies */}
                      <Box>
                        <Typography variant="caption" sx={{ 
                          color: '#999',
                          fontSize: '0.75rem',
                          display: 'block',
                          mb: 0.5
                        }}>
                          Technologies:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {service.technologies.slice(0, 3).map((tech) => (
                            <Chip
                              key={tech.id}
                              label={tech.technology}
                              size="small"
                              sx={{
                                backgroundColor: '#e3f2fd',
                                color: '#1976d2',
                                fontWeight: 500,
                                fontSize: '0.7rem',
                                height: '22px'
                              }}
                            />
                          ))}
                          {service.technologies.length > 3 && (
                            <Chip
                              label={`+${service.technologies.length - 3} more`}
                              size="small"
                              sx={{
                                backgroundColor: '#f5f5f5',
                                color: '#666',
                                fontWeight: 500,
                                fontSize: '0.7rem',
                                height: '22px'
                              }}
                            />
                          )}
                        </Box>
                      </Box>
                      
                      {/* Pricing */}
                      <Box>
                        <Typography variant="caption" sx={{ 
                          color: '#999',
                          fontSize: '0.75rem',
                          display: 'block',
                          mb: 0.5
                        }}>
                          Pricing:
                        </Typography>
                        {service.pricingPlans ? (
                          <Box>
                            <Typography variant="body2" sx={{ 
                              fontWeight: 500, 
                              color: '#1a1a1a',
                              fontSize: '0.875rem'
                            }}>
                              3 Plan Tiers
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem' }}>
                              {service.pricingPlans.beginner.priceRange} - {service.pricingPlans.pro.priceRange}
                            </Typography>
                          </Box>
                        ) : service.pricing ? (
                          <Box>
                            <Typography variant="body2" sx={{ 
                              fontWeight: 500, 
                              color: '#1a1a1a',
                              fontSize: '0.875rem'
                            }}>
                              {service.pricing.starting}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem' }}>
                              {service.pricing.description}
                            </Typography>
                          </Box>
                        ) : (
                          <Typography variant="body2" sx={{ color: '#999', fontSize: '0.875rem' }}>
                            No pricing set
                          </Typography>
                        )}
                      </Box>
                      
                      {/* Updated Date */}
                      <Box>
                        <Typography variant="caption" sx={{ 
                          color: '#999',
                          fontSize: '0.75rem',
                          display: 'block',
                          mb: 0.5
                        }}>
                          Updated:
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                          {formatDate(service.updatedAt)}
                        </Typography>
                      </Box>
                      
                      {/* Actions */}
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 1, borderTop: '1px solid #f0f0f0' }}>
                        <IconButton 
                          size="small"
                          onClick={() => {
                            setSelectedService(service);
                            setIsViewModalOpen(true);
                          }}
                          sx={{
                            color: '#1976d2',
                            '&:hover': {
                              backgroundColor: '#e3f2fd',
                            }
                          }}
                          title="View service details"
                        >
                          <Visibility fontSize="small" />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => {
                            setSelectedService(service);
                            setIsEditModalOpen(true);
                          }}
                          sx={{
                            color: '#590178',
                            '&:hover': {
                              backgroundColor: '#f0e6f5',
                            }
                          }}
                          title="Edit service"
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => openDeleteConfirmDialog(service)}
                          sx={{
                            color: '#d32f2f',
                            '&:hover': {
                              backgroundColor: '#ffebee',
                            }
                          }}
                          title="Delete service"
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            // Desktop Table View
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#590178' }}>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopLeftRadius: '8px' }}>Service</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Description</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Technologies</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Pricing</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Updated</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopRightRadius: '8px' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredServices.map((service) => (
                    <TableRow 
                      key={service.id}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#f8f9fa',
                        }
                      }}
                    >
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
                            {service.imageUrl ? (
                              <Image
                                src={service.imageUrl}
                                alt={service.title}
                                fill
                                style={{ objectFit: 'cover', borderRadius: '8px' }}
                              />
                            ) : (
                              <Box sx={{ 
                                width: 48, 
                                height: 48, 
                                borderRadius: '8px', 
                                bgcolor: '#f5f5f5', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center' 
                              }}>
                                <Typography variant="body2" sx={{ color: '#999' }}>No Image</Typography>
                              </Box>
                            )}
                          </Box>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                              {service.title}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666' }}>
                              /{service.slug}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ maxWidth: '300px' }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#1a1a1a',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            mb: 0.5
                          }}
                        >
                          {service.shortDescription}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#666' }}>
                          {service.features.length} features
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {service.technologies.slice(0, 3).map((tech) => (
                            <Chip
                              key={tech.id}
                              label={tech.technology}
                              size="small"
                              sx={{
                                backgroundColor: '#e3f2fd',
                                color: '#1976d2',
                                fontWeight: 500,
                                fontSize: '0.75rem',
                                height: '24px'
                              }}
                            />
                          ))}
                          {service.technologies.length > 3 && (
                            <Chip
                              label={`+${service.technologies.length - 3} more`}
                              size="small"
                              sx={{
                                backgroundColor: '#f5f5f5',
                                color: '#666',
                                fontWeight: 500,
                                fontSize: '0.75rem',
                                height: '24px'
                              }}
                            />
                          )}
                        </Box>
                      </TableCell>
                      <TableCell>
                        {service.pricingPlans ? (
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                              3 Plan Tiers
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666' }}>
                              {service.pricingPlans.beginner.priceRange} - {service.pricingPlans.pro.priceRange}
                            </Typography>
                          </Box>
                        ) : service.pricing ? (
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                              {service.pricing.starting}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666' }}>
                              {service.pricing.description}
                            </Typography>
                          </Box>
                        ) : (
                          <Typography variant="body2" sx={{ color: '#999' }}>
                            No pricing set
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell sx={{ color: '#666', fontSize: '0.875rem' }}>
                        {formatDate(service.updatedAt)}
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                          <IconButton 
                            size="small"
                            onClick={() => {
                              setSelectedService(service);
                              setIsViewModalOpen(true);
                            }}
                            sx={{
                              color: '#1976d2',
                              '&:hover': {
                                backgroundColor: '#e3f2fd',
                              }
                            }}
                            title="View service details"
                          >
                            <Visibility fontSize="small" />
                          </IconButton>
                          <IconButton 
                            size="small"
                            onClick={() => {
                              setSelectedService(service);
                              setIsEditModalOpen(true);
                            }}
                            sx={{
                              color: '#590178',
                              '&:hover': {
                                backgroundColor: '#f0e6f5',
                              }
                            }}
                            title="Edit service"
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton 
                            size="small"
                            onClick={() => openDeleteConfirmDialog(service)}
                            sx={{
                              color: '#d32f2f',
                              '&:hover': {
                                backgroundColor: '#ffebee',
                              }
                            }}
                            title="Delete service"
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Service"
        itemName={serviceToDelete?.title}
        loading={loading}
      />

      {/* Service Form Modals */}
      <ServiceForm
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={fetchServices}
        mode="create"
      />

      <ServiceForm
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedService(null);
        }}
        onSuccess={fetchServices}
        service={selectedService}
        mode="edit"
      />

      {/* Service View Modal */}
      <ServiceViewModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedService(null);
        }}
        service={selectedService}
      />
    </Box>
  );
}