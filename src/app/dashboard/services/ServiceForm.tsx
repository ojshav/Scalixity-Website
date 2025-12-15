'use client'
import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Alert,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Close, Upload, Add, Delete, Save } from '@mui/icons-material';
import Image from 'next/image';

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

interface ServiceFormData {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  technologies: Array<{
    name: string;
    iconUrl?: string;
    iconFile?: File;
  }>;
  benefits: string[];
  keywords: string[];
  pricing: {
    starting: string;
    description: string;
  } | null;
  pricingPlans: {
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
}

interface ServiceFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  service?: Service | null;
  mode: 'create' | 'edit';
}

export default function ServiceForm({ isOpen, onClose, onSuccess, service, mode }: ServiceFormProps) {
  const [formData, setFormData] = useState<ServiceFormData>({
    slug: '',
    title: '',
    description: '',
    shortDescription: '',
    features: [''],
    technologies: [{ name: '', iconUrl: '', iconFile: undefined }],
    benefits: [''],
    keywords: [''],
    pricing: null,
    pricingPlans: null
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [heroImageFile, setHeroImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Array<{ field: string; message: string }>>([]);
  const [hasPricing, setHasPricing] = useState(false);
  const [hasPricingPlans, setHasPricingPlans] = useState(false);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const heroImageInputRef = useRef<HTMLInputElement>(null);

  // Reset and populate form when service changes or mode changes
  useEffect(() => {
    if (mode === 'edit' && service) {
      setFormData({
        slug: service.slug,
        title: service.title,
        description: service.description,
        shortDescription: service.shortDescription,
        features: service.features.length > 0 ? service.features.map(f => f.feature) : [''],
        technologies: service.technologies.length > 0 ? service.technologies.map(t => ({
          name: t.technology,
          iconUrl: t.iconUrl || '',
          iconFile: undefined
        })) : [{ name: '', iconUrl: '', iconFile: undefined }],
        benefits: service.benefits.length > 0 ? service.benefits.map(b => b.benefit) : [''],
        keywords: service.keywords && service.keywords.length > 0 ? service.keywords.map(k => k.keyword) : [''],
        pricing: service.pricing ? {
          starting: service.pricing.starting,
          description: service.pricing.description
        } : null,
        pricingPlans: service.pricingPlans || null
      });
      setImagePreview(service.imageUrl);
      setHeroImagePreview(service.heroImageUrl);
      setHasPricing(service.pricing ? true : false);
      setHasPricingPlans(service.pricingPlans ? true : false);
    } else if (mode === 'create') {
      // Reset form for create mode
      setFormData({
        slug: '',
        title: '',
        description: '',
        shortDescription: '',
        features: [''],
        technologies: [{ name: '', iconUrl: '', iconFile: undefined }],
        benefits: [''],
        keywords: [''],
        pricing: null,
        pricingPlans: null
      });
      setImagePreview(null);
      setHeroImagePreview(null);
      setHasPricing(false);
      setHasPricingPlans(false);
      setImageFile(null);
      setHeroImageFile(null);
    }
    setError(null);
    setFieldErrors([]);
  }, [service, mode, isOpen]);

  const handleInputChange = (field: keyof ServiceFormData, value: string | number | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field: 'features' | 'benefits' | 'keywords', index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleTechnologyChange = (index: number, field: 'name' | 'iconUrl', value: string) => {
    const newTechnologies = [...formData.technologies];
    newTechnologies[index] = { ...newTechnologies[index], [field]: value };
    setFormData(prev => ({ ...prev, technologies: newTechnologies }));
  };

  const handleTechnologyIconChange = (index: number, file: File | null) => {
    const newTechnologies = [...formData.technologies];
    newTechnologies[index] = { ...newTechnologies[index], iconFile: file || undefined };
    setFormData(prev => ({ ...prev, technologies: newTechnologies }));
  };

  const handlePricingPlanChange = (plan: 'beginner' | 'professional' | 'pro', field: 'priceRange' | 'description', value: string) => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          [field]: value
        }
      }
    }));
  };

  const handlePricingPlanBulletChange = (plan: 'beginner' | 'professional' | 'pro', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          bulletPoints: prev.pricingPlans![plan].bulletPoints.map((bullet, i) => i === index ? value : bullet)
        }
      }
    }));
  };

  const addPricingPlanBullet = (plan: 'beginner' | 'professional' | 'pro') => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          bulletPoints: [...prev.pricingPlans![plan].bulletPoints, '']
        }
      }
    }));
  };

  const removePricingPlanBullet = (plan: 'beginner' | 'professional' | 'pro', index: number) => {
    setFormData(prev => ({
      ...prev,
      pricingPlans: {
        ...prev.pricingPlans!,
        [plan]: {
          ...prev.pricingPlans![plan],
          bulletPoints: prev.pricingPlans![plan].bulletPoints.filter((_, i) => i !== index)
        }
      }
    }));
  };

  const addArrayItem = (field: 'features' | 'benefits' | 'keywords') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const addTechnology = () => {
    setFormData(prev => ({
      ...prev,
      technologies: [...prev.technologies, { name: '', iconUrl: '', iconFile: undefined }]
    }));
  };

  const removeArrayItem = (field: 'features' | 'benefits' | 'keywords', index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const removeTechnology = (index: number) => {
    const newTechnologies = formData.technologies.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, technologies: newTechnologies }));
  };

  const handleImageChange = (file: File | null, type: 'image' | 'heroImage') => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === 'image') {
          setImageFile(file);
          setImagePreview(result);
        } else {
          setHeroImageFile(file);
          setHeroImagePreview(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: mode === 'create' ? generateSlug(title) : prev.slug
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors([]);

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        throw new Error('No authentication token found');
      }

      // Create FormData for file upload
      const formDataObj = new FormData();
      
      // Add text fields
      formDataObj.append('slug', formData.slug);
      formDataObj.append('title', formData.title);
      formDataObj.append('description', formData.description);
      formDataObj.append('shortDescription', formData.shortDescription);
      
      // Add arrays as JSON strings
      formDataObj.append('features', JSON.stringify(formData.features.filter(f => f.trim())));
      formDataObj.append('technologies', JSON.stringify(formData.technologies
        .filter(t => t.name.trim())
        .map(t => ({ 
          name: t.name, 
          iconUrl: t.iconUrl && t.iconUrl.trim() ? t.iconUrl : null 
        }))
      ));
      formDataObj.append('benefits', JSON.stringify(formData.benefits.filter(b => b.trim())));
      formDataObj.append('keywords', JSON.stringify(formData.keywords.filter(k => k.trim())));
      
      // Add pricing if enabled
      if (hasPricing && formData.pricing) {
        formDataObj.append('pricing', JSON.stringify(formData.pricing));
      }

      // Add pricing plans if enabled
      if (hasPricingPlans && formData.pricingPlans) {
        formDataObj.append('pricingPlans', JSON.stringify(formData.pricingPlans));
      }
      
      // Add image files
      if (imageFile) {
        formDataObj.append('image', imageFile);
      }
      if (heroImageFile) {
        formDataObj.append('heroImage', heroImageFile);
      }

      // Add technology icon files
      formData.technologies.forEach((tech, index) => {
        if (tech.iconFile) {
          formDataObj.append(`techIcon-${index}`, tech.iconFile);
        }
      });
      
      const url = mode === 'create' 
        ? `${baseURL}/api/admin/services`
        : `${baseURL}/api/admin/services/${service?.id}`;
      
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataObj,
      });

      const responseData = await response.json();

      if (!response.ok) {
        // Check if there are detailed validation errors
        if (responseData.errors && Array.isArray(responseData.errors)) {
          setFieldErrors(responseData.errors);
          setError(responseData.message || 'Validation error. Please check the fields below.');
        } else {
          setError(responseData.message || `HTTP error! status: ${response.status}`);
        }
        return;
      }

      if (responseData.success) {
        onSuccess();
        onClose();
      } else {
        setError(responseData.message || 'Operation failed');
      }
    } catch (error: unknown) {
      console.error(`Error ${mode === 'create' ? 'creating' : 'updating'} service:`, error);
      setError(error instanceof Error ? error.message : `Failed to ${mode === 'create' ? 'create' : 'update'} service`);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get error message for a specific field
  const getFieldError = (fieldName: string): string | undefined => {
    const error = fieldErrors.find(err => 
      err.field.toLowerCase() === fieldName.toLowerCase() || 
      err.field.toLowerCase().includes(fieldName.toLowerCase())
    );
    return error?.message;
  };

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        'data-lenis-prevent': true,
        sx: {
          borderRadius: '16px',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
          maxHeight: '90vh',
        }
      }}
    >
      <DialogTitle sx={{ 
        fontWeight: 700, 
        color: '#1a1a1a',
        pb: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pr: 1
      }}>
        {mode === 'create' ? 'Create New Service' : 'Edit Service'}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: '#666',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              color: '#1a1a1a',
            }
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <Box component="form" onSubmit={handleSubmit}>
        <DialogContent 
          data-lenis-prevent
          sx={{ 
            overflowY: 'auto',
            maxHeight: 'calc(90vh - 200px)',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            pr: 3,
          }}
        >
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: fieldErrors.length > 0 ? 1 : 0 }}>
                {error}
              </Typography>
              {fieldErrors.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" sx={{ fontWeight: 600, textTransform: 'uppercase', display: 'block', mb: 1 }}>
                    Field Errors:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {fieldErrors.map((err, index) => (
                      <Box component="li" key={index} sx={{ mb: 0.5 }}>
                        <Typography variant="body2">
                          <Box component="span" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                            {err.field.replace(/\./g, ' → ')}:
                          </Box>{' '}
                          {err.message}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Alert>
          )}

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Basic Information */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
              <TextField
                label="Service Title"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                fullWidth
                error={!!getFieldError('title')}
                helperText={getFieldError('title')}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              <TextField
                label="Slug"
                value={formData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                required
                fullWidth
                error={!!getFieldError('slug')}
                helperText={getFieldError('slug')}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
            </Box>

            {/* Short Description */}
            <TextField
              label="Short Description"
              value={formData.shortDescription}
              onChange={(e) => handleInputChange('shortDescription', e.target.value)}
              placeholder="Brief one-line description"
              required
              fullWidth
              error={!!getFieldError('shortDescription')}
              helperText={getFieldError('shortDescription')}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />

            {/* Description */}
            <TextField
              label="Full Description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Detailed description of the service"
              required
              fullWidth
              multiline
              rows={4}
              error={!!getFieldError('description')}
              helperText={getFieldError('description')}
              variant="outlined"
              data-lenis-prevent
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />

            {/* Images */}
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
              <Box>
                <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 500 }}>
                  Service Image
                </Typography>
                <Box
                  sx={{
                    border: '2px dashed #e0e0e0',
                    borderRadius: '8px',
                    p: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: '#590178',
                    }
                  }}
                  onClick={() => imageInputRef.current?.click()}
                >
                  {imagePreview ? (
                    <Box sx={{ position: 'relative' }}>
                      <Image
                        src={imagePreview}
                        alt="Service preview"
                        width={200}
                        height={120}
                        style={{ width: '100%', height: '128px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          setImageFile(null);
                          setImagePreview(null);
                          if (imageInputRef.current) imageInputRef.current.value = '';
                        }}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: '#d32f2f',
                          color: '#fff',
                          '&:hover': {
                            bgcolor: '#c62828',
                          }
                        }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </Box>
                  ) : (
                    <Box sx={{ textAlign: 'center', py: 2 }}>
                      <Upload sx={{ fontSize: 32, color: '#999', mb: 1 }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        Click to upload image
                      </Typography>
                    </Box>
                  )}
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e.target.files?.[0] || null, 'image')}
                    style={{ display: 'none' }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 500 }}>
                  Hero Image
                </Typography>
                <Box
                  sx={{
                    border: '2px dashed #e0e0e0',
                    borderRadius: '8px',
                    p: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: '#590178',
                    }
                  }}
                  onClick={() => heroImageInputRef.current?.click()}
                >
                  {heroImagePreview ? (
                    <Box sx={{ position: 'relative' }}>
                      <Image
                        src={heroImagePreview}
                        alt="Hero preview"
                        width={200}
                        height={120}
                        style={{ width: '100%', height: '128px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          setHeroImageFile(null);
                          setHeroImagePreview(null);
                          if (heroImageInputRef.current) heroImageInputRef.current.value = '';
                        }}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: '#d32f2f',
                          color: '#fff',
                          '&:hover': {
                            bgcolor: '#c62828',
                          }
                        }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </Box>
                  ) : (
                    <Box sx={{ textAlign: 'center', py: 2 }}>
                      <Upload sx={{ fontSize: 32, color: '#999', mb: 1 }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        Click to upload hero image
                      </Typography>
                    </Box>
                  )}
                  <input
                    ref={heroImageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e.target.files?.[0] || null, 'heroImage')}
                    style={{ display: 'none' }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Features */}
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 500 }}>
                Features
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {formData.features.map((feature, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      value={feature}
                      onChange={(e) => handleArrayChange('features', index, e.target.value)}
                      placeholder="Enter feature"
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                    <IconButton
                      onClick={() => removeArrayItem('features', index)}
                      sx={{
                        color: '#d32f2f',
                        '&:hover': {
                          backgroundColor: '#ffebee',
                        }
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
                <Button
                  type="button"
                  onClick={() => addArrayItem('features')}
                  variant="contained"
                  startIcon={<Add />}
                  sx={{
                    alignSelf: 'flex-start',
                    borderRadius: '8px',
                    textTransform: 'none',
                    backgroundColor: '#590178',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#4a0166',
                    }
                  }}
                >
                  Add Feature
                </Button>
              </Box>
            </Box>

            {/* Technologies */}
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 500 }}>
                Technologies
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {formData.technologies.map((tech, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1, p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                    <Box sx={{ flex: 1 }}>
                      <TextField
                        value={tech.name}
                        onChange={(e) => handleTechnologyChange(index, 'name', e.target.value)}
                        placeholder="Enter technology name"
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '8px',
                          }
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          border: '2px dashed #e0e0e0',
                          borderRadius: '8px',
                          p: 1,
                          cursor: 'pointer',
                          '&:hover': {
                            borderColor: '#590178',
                          }
                        }}
                        onClick={() => {
                          const input = document.createElement('input');
                          input.type = 'file';
                          input.accept = 'image/*';
                          input.onchange = (e) => {
                            const file = (e.target as HTMLInputElement).files?.[0];
                            handleTechnologyIconChange(index, file || null);
                          };
                          input.click();
                        }}
                      >
                        {tech.iconUrl || tech.iconFile ? (
                          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <Image
                              src={tech.iconFile ? URL.createObjectURL(tech.iconFile) : tech.iconUrl || ''}
                              alt="Technology icon"
                              width={40}
                              height={40}
                              style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px' }}
                            />
                            <IconButton
                              size="small"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTechnologyIconChange(index, null);
                              }}
                              sx={{
                                position: 'absolute',
                                top: -4,
                                right: -4,
                                bgcolor: '#d32f2f',
                                color: '#fff',
                                '&:hover': {
                                  bgcolor: '#c62828',
                                }
                              }}
                            >
                              <Close fontSize="small" />
                            </IconButton>
                          </Box>
                        ) : (
                          <Box sx={{ textAlign: 'center' }}>
                            <Upload sx={{ fontSize: 24, color: '#999', mb: 0.5 }} />
                            <Typography variant="caption" sx={{ color: '#666', display: 'block' }}>
                              Click to upload icon
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <IconButton
                      type="button"
                      onClick={() => removeTechnology(index)}
                      sx={{
                        color: '#d32f2f',
                        '&:hover': {
                          backgroundColor: '#ffebee',
                        }
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
                <Button
                  type="button"
                  onClick={addTechnology}
                  variant="contained"
                  startIcon={<Add />}
                  sx={{
                    alignSelf: 'flex-start',
                    borderRadius: '8px',
                    textTransform: 'none',
                    backgroundColor: '#590178',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#4a0166',
                    }
                  }}
                >
                  Add Technology
                </Button>
              </Box>
            </Box>

            {/* Benefits */}
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 500 }}>
                Benefits
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {formData.benefits.map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      value={benefit}
                      onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                      placeholder="Enter benefit"
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                    <IconButton
                      onClick={() => removeArrayItem('benefits', index)}
                      sx={{
                        color: '#d32f2f',
                        '&:hover': {
                          backgroundColor: '#ffebee',
                        }
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
                <Button
                  type="button"
                  onClick={() => addArrayItem('benefits')}
                  variant="contained"
                  startIcon={<Add />}
                  sx={{
                    alignSelf: 'flex-start',
                    borderRadius: '8px',
                    textTransform: 'none',
                    backgroundColor: '#590178',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#4a0166',
                    }
                  }}
                >
                  Add Benefit
                </Button>
              </Box>
            </Box>

            {/* Keywords */}
            <Box>
              <Typography variant="body2" sx={{ color: '#666', mb: 2, fontWeight: 500 }}>
                Keywords (Optional)
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {formData.keywords.map((keyword, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                    <TextField
                      value={keyword}
                      onChange={(e) => handleArrayChange('keywords', index, e.target.value)}
                      placeholder="Enter keyword"
                      fullWidth
                      variant="outlined"
                      size="small"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        }
                      }}
                    />
                    <IconButton
                      onClick={() => removeArrayItem('keywords', index)}
                      sx={{
                        color: '#d32f2f',
                        '&:hover': {
                          backgroundColor: '#ffebee',
                        }
                      }}
                    >
                      <Delete fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
                <Button
                  type="button"
                  onClick={() => addArrayItem('keywords')}
                  variant="contained"
                  startIcon={<Add />}
                  sx={{
                    alignSelf: 'flex-start',
                    borderRadius: '8px',
                    textTransform: 'none',
                    backgroundColor: '#590178',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#4a0166',
                    }
                  }}
                >
                  Add Keyword
                </Button>
              </Box>
            </Box>

            {/* Pricing Plans */}
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasPricingPlans}
                    onChange={(e) => {
                      setHasPricingPlans(e.target.checked);
                      if (e.target.checked && !formData.pricingPlans) {
                        setFormData(prev => ({
                          ...prev,
                          pricingPlans: {
                            beginner: { priceRange: '', description: '', bulletPoints: [''] },
                            professional: { priceRange: '', description: '', bulletPoints: [''] },
                            pro: { priceRange: '', description: '', bulletPoints: [''] }
                          }
                        }));
                      }
                    }}
                    sx={{
                      color: '#590178',
                      '&.Mui-checked': {
                        color: '#590178',
                      }
                    }}
                  />
                }
                label="Add dynamic pricing plans (Beginner, Professional, Pro)"
                sx={{ mb: 2 }}
              />
            {hasPricingPlans && formData.pricingPlans && (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {(['beginner', 'professional', 'pro'] as const).map((plan) => (
                  <Box key={plan} sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', p: 2 }}>
                    <h4 className="text-lg font-medium text-gray-900 mb-4 capitalize">{plan} Plan</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Price Range
                        </label>
                        <input
                          type="text"
                          value={formData.pricingPlans![plan].priceRange}
                          onChange={(e) => handlePricingPlanChange(plan, 'priceRange', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., $25k - $50k"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <input
                          type="text"
                          value={formData.pricingPlans![plan].description}
                          onChange={(e) => handlePricingPlanChange(plan, 'description', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., Perfect for startups and small projects"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bullet Points
                      </label>
                      <div className="space-y-2">
                        {formData.pricingPlans![plan].bulletPoints.map((bullet, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={bullet}
                              onChange={(e) => handlePricingPlanBulletChange(plan, index, e.target.value)}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter bullet point"
                            />
                            <IconButton
                              type="button"
                              onClick={() => removePricingPlanBullet(plan, index)}
                              sx={{
                                color: '#d32f2f',
                                '&:hover': {
                                  backgroundColor: '#ffebee',
                                }
                              }}
                            >
                              <Delete fontSize="small" />
                            </IconButton>
                          </div>
                        ))}
                        <Button
                          type="button"
                          onClick={() => addPricingPlanBullet(plan)}
                          variant="contained"
                          startIcon={<Add />}
                          sx={{
                            alignSelf: 'flex-start',
                            borderRadius: '8px',
                            textTransform: 'none',
                            backgroundColor: '#590178',
                            color: '#fff',
                            '&:hover': {
                              backgroundColor: '#4a0166',
                            }
                          }}
                        >
                          Add Bullet Point
                        </Button>
                      </div>
                    </div>
                  </Box>
                ))}
              </Box>
            )}
            </Box>

            {/* Legacy Pricing */}
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasPricing}
                    onChange={(e) => setHasPricing(e.target.checked)}
                    sx={{
                      color: '#590178',
                      '&.Mui-checked': {
                        color: '#590178',
                      }
                    }}
                  />
                }
                label="Add pricing information"
                sx={{ mb: 2 }}
              />
            {hasPricing && (
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Starting Price
                  </label>
                  <input
                    type="text"
                    value={formData.pricing?.starting || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      pricing: {
                        starting: e.target.value,
                        description: prev.pricing?.description || ''
                      }
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., £5,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pricing Description
                  </label>
                  <input
                    type="text"
                    value={formData.pricing?.description || ''}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      pricing: {
                        starting: prev.pricing?.starting || '',
                        description: e.target.value
                      }
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Starting from £5,000"
                  />
                </div>
              </Box>
            )}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3, justifyContent: 'flex-end' }}>
          <Button 
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: '#590178',
              color: '#fff',
              px: 3,
              py: 1,
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#4a0166',
              },
              '&:disabled': {
                backgroundColor: '#ccc',
              }
            }}
            startIcon={loading ? <CircularProgress size={16} sx={{ color: '#fff' }} /> : <Save />}
          >
            {loading ? (mode === 'create' ? 'Creating...' : 'Updating...') : (mode === 'create' ? 'Create Service' : 'Update Service')}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}