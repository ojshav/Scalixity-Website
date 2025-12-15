'use client'
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Button,
  IconButton,
  Chip,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Close, OpenInNew, Language } from '@mui/icons-material';
import Image from 'next/image';

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

interface ServiceViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceViewModal({ isOpen, onClose, service }: ServiceViewModalProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  if (!isOpen || !service) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
          borderRadius: { xs: '12px', md: '16px' },
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
          maxHeight: { xs: '90vh', md: '90vh' },
          m: { xs: 2, md: 2 },
          width: { xs: 'calc(100% - 32px)', md: 'auto' }
        }
      }}
    >
      <DialogTitle sx={{ 
        fontWeight: 700, 
        color: '#1a1a1a',
        pb: 1,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        pr: { xs: 1, md: 1 },
        pt: { xs: 2, md: 3 },
        px: { xs: 2, md: 3 },
        borderBottom: '1px solid #e0e0e0',
        gap: { xs: 2, md: 0 },
        fontSize: { xs: '1.125rem', md: '1.25rem' }
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 1, sm: 2 },
          flex: 1,
          minWidth: 0
        }}>
          <Typography variant="h6" sx={{ 
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.25rem' },
            wordBreak: 'break-word'
          }}>
            {service.title}
          </Typography>
          <Chip 
            label={`/${service.slug}`}
            size="small"
            sx={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              height: { xs: '20px', md: '24px' }
            }}
          />
        </Box>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          alignSelf: { xs: 'flex-end', md: 'auto' }
        }}>
          {!isMobile && (
          <Button
            onClick={() => window.open(`http://localhost:3000/services/${service.slug}`, '_blank')}
            variant="contained"
            size="small"
            startIcon={<Language />}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              backgroundColor: '#590178',
              color: '#fff',
                fontSize: { xs: '0.75rem', md: '0.875rem' },
              '&:hover': {
                backgroundColor: '#4a0166',
              }
            }}
          >
            View Live
          </Button>
          )}
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
        </Box>
      </DialogTitle>

      <DialogContent 
        data-lenis-prevent
        sx={{ 
          overflowY: 'auto',
          maxHeight: { xs: '60vh', md: 'calc(90vh - 200px)' },
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          pr: { xs: 2, md: 3 },
          px: { xs: 2, md: 3 }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
          {/* Images Section */}
          {(service.imageUrl || service.heroImageUrl) && (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 1.5, md: 2 } }}>
              {service.imageUrl && (
                <Box>
                  <Typography variant="body2" sx={{ 
                    color: '#666', 
                    mb: 1, 
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '0.875rem' }
                  }}>
                    Service Image
                  </Typography>
                  <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image
                      src={service.imageUrl}
                      alt={`${service.title} image`}
                      width={300}
                      height={200}
                      style={{ width: '100%', height: isMobile ? '150px' : '192px', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
              )}
              {service.heroImageUrl && (
                <Box>
                  <Typography variant="body2" sx={{ 
                    color: '#666', 
                    mb: 1, 
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '0.875rem' }
                  }}>
                    Hero Image
                  </Typography>
                  <Box sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
                    <Image
                      src={service.heroImageUrl}
                      alt={`${service.title} hero`}
                      width={300}
                      height={200}
                      style={{ width: '100%', height: isMobile ? '150px' : '192px', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
          )}

          {/* Description Section */}
          <Box>
            <Typography variant="body2" sx={{ 
              color: '#666', 
              mb: 1, 
              fontWeight: 500,
              fontSize: { xs: '0.875rem', md: '0.875rem' }
            }}>
              Short Description
            </Typography>
            <Paper elevation={0} sx={{ bgcolor: '#f5f5f5', p: { xs: 1.5, md: 2 }, borderRadius: '8px' }}>
              <Typography variant="body2" sx={{ 
                color: '#1a1a1a',
                fontSize: { xs: '0.875rem', md: '0.875rem' },
                wordBreak: 'break-word'
              }}>
                {service.shortDescription}
              </Typography>
            </Paper>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ 
              color: '#666', 
              mb: 1, 
              fontWeight: 500,
              fontSize: { xs: '0.875rem', md: '0.875rem' }
            }}>
              Full Description
            </Typography>
            <Paper elevation={0} sx={{ bgcolor: '#f5f5f5', p: { xs: 1.5, md: 2 }, borderRadius: '8px' }}>
              <Typography variant="body2" sx={{ 
                color: '#1a1a1a', 
                whiteSpace: 'pre-wrap',
                fontSize: { xs: '0.875rem', md: '0.875rem' },
                wordBreak: 'break-word'
              }}>
                {service.description}
              </Typography>
            </Paper>
          </Box>

          {/* Features Section */}
          {service.features.length > 0 && (
            <Box>
              <Typography variant="body2" sx={{ 
                color: '#666', 
                mb: 2, 
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '0.875rem' }
              }}>
                Features ({service.features.length})
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 1 }}>
                {service.features
                  .sort((a, b) => a.order - b.order)
                  .map((feature, index) => (
                    <Box key={feature.id} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: { xs: 20, md: 24 },
                          height: { xs: 20, md: 24 },
                          bgcolor: '#e3f2fd',
                          color: '#1976d2',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                          fontWeight: 600
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="body2" sx={{ 
                        color: '#1a1a1a',
                        fontSize: { xs: '0.875rem', md: '0.875rem' },
                        wordBreak: 'break-word'
                      }}>
                        {feature.feature}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}

          {/* Technologies Section */}
          {service.technologies.length > 0 && (
            <Box>
              <Typography variant="body2" sx={{ 
                color: '#666', 
                mb: 2, 
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '0.875rem' }
              }}>
                Technologies ({service.technologies.length})
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }, gap: { xs: 1, md: 1.5 } }}>
                {service.technologies
                  .sort((a, b) => a.order - b.order)
                  .map((tech) => (
                    <Box
                      key={tech.id}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 0.5, md: 1 },
                        bgcolor: '#e3f2fd',
                        borderRadius: '8px',
                        p: { xs: 1, md: 1.5 },
                        border: '1px solid #bbdefb'
                      }}
                    >
                      {tech.iconUrl && (
                        <Image
                          src={tech.iconUrl}
                          alt={tech.technology}
                          width={24}
                          height={24}
                          style={{ width: isMobile ? '20px' : '24px', height: isMobile ? '20px' : '24px', objectFit: 'contain', flexShrink: 0 }}
                        />
                      )}
                      <Typography variant="body2" sx={{ 
                        fontWeight: 500, 
                        color: '#1565c0', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '0.75rem', md: '0.875rem' }
                      }}>
                        {tech.technology}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}

          {/* Benefits Section */}
          {service.benefits.length > 0 && (
            <Box>
              <Typography variant="body2" sx={{ 
                color: '#666', 
                mb: 2, 
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '0.875rem' }
              }}>
                Benefits ({service.benefits.length})
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 1 }}>
                {service.benefits
                  .sort((a, b) => a.order - b.order)
                  .map((benefit) => (
                    <Box key={benefit.id} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: { xs: 20, md: 24 },
                          height: { xs: 20, md: 24 },
                          bgcolor: '#e8f5e9',
                          color: '#2e7d32',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: { xs: '0.7rem', md: '0.75rem' },
                          fontWeight: 600
                        }}
                      >
                        ✓
                      </Box>
                      <Typography variant="body2" sx={{ 
                        color: '#1a1a1a',
                        fontSize: { xs: '0.875rem', md: '0.875rem' },
                        wordBreak: 'break-word'
                      }}>
                        {benefit.benefit}
                      </Typography>
                    </Box>
                  ))}
              </Box>
            </Box>
          )}

          {/* Keywords Section */}
          {service.keywords && service.keywords.length > 0 && (
            <Box>
              <Typography variant="body2" sx={{ 
                color: '#666', 
                mb: 2, 
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '0.875rem' }
              }}>
                Keywords ({service.keywords.length})
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, md: 1 } }}>
                {service.keywords
                  .sort((a, b) => a.order - b.order)
                  .map((keyword) => (
                    <Chip
                      key={keyword.id}
                      label={keyword.keyword}
                      size="small"
                      sx={{
                        backgroundColor: '#f5f5f5',
                        color: '#666',
                        fontWeight: 500,
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        height: { xs: '20px', md: '24px' }
                      }}
                    />
                  ))}
              </Box>
            </Box>
          )}

          {/* Pricing Plans Section */}
          {service.pricingPlans && (
            <Box>
              <Typography variant="body2" sx={{ 
                color: '#666', 
                mb: 2, 
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '0.875rem' }
              }}>
                Pricing Plans
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 1.5, md: 2 } }}>
                {(['beginner', 'professional', 'pro'] as const).map((plan) => {
                  const planData = service.pricingPlans![plan];
                  const planColors = {
                    beginner: { bg: '#e8f5e9', border: '#c8e6c9', text: '#1b5e20' },
                    professional: { bg: '#e3f2fd', border: '#90caf9', text: '#0d47a1' },
                    pro: { bg: '#f3e5f5', border: '#ce93d8', text: '#4a148c' }
                  };
                  const colors = planColors[plan];
                  
                  return (
                    <Paper
                      key={plan}
                      elevation={0}
                      sx={{
                        border: `1px solid ${colors.border}`,
                        borderRadius: '8px',
                        p: { xs: 1.5, md: 2 },
                        bgcolor: colors.bg
                      }}
                    >
                      <Typography variant="h6" sx={{ 
                        fontWeight: 600, 
                        mb: 1, 
                        textTransform: 'capitalize', 
                        color: colors.text,
                        fontSize: { xs: '1rem', md: '1.25rem' }
                      }}>
                        {plan}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 500, 
                        mb: 1, 
                        color: colors.text,
                        fontSize: { xs: '0.875rem', md: '0.875rem' }
                      }}>
                        {planData.priceRange}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        mb: 2, 
                        color: colors.text,
                        fontSize: { xs: '0.875rem', md: '0.875rem' },
                        wordBreak: 'break-word'
                      }}>
                        {planData.description}
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2, listStyle: 'none' }}>
                        {planData.bulletPoints.map((bullet, bulletIndex) => (
                          <Box component="li" key={bulletIndex} sx={{ display: 'flex', alignItems: 'start', gap: 1, mb: 0.5 }}>
                            <Box
                              sx={{
                                flexShrink: 0,
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                bgcolor: colors.text,
                                opacity: 0.3,
                                mt: 0.5
                              }}
                            />
                            <Typography variant="body2" sx={{ 
                              color: colors.text,
                              fontSize: { xs: '0.875rem', md: '0.875rem' },
                              wordBreak: 'break-word'
                            }}>
                              {bullet}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </Box>
          )}

          {/* Legacy Pricing Section */}
          {service.pricing && (
            <Box>
              <Typography variant="body2" sx={{ 
                color: '#666', 
                mb: 2, 
                fontWeight: 500,
                fontSize: { xs: '0.875rem', md: '0.875rem' }
              }}>
                Pricing Information
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: '#e8f5e9',
                  border: '1px solid #c8e6c9',
                  borderRadius: '8px',
                  p: { xs: 1.5, md: 2 }
                }}
              >
                <Typography variant="h6" sx={{ 
                  fontWeight: 600, 
                  mb: 0.5, 
                  color: '#1b5e20',
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}>
                  {service.pricing.starting}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#2e7d32',
                  fontSize: { xs: '0.875rem', md: '0.875rem' },
                  wordBreak: 'break-word'
                }}>
                  {service.pricing.description}
                </Typography>
              </Paper>
            </Box>
          )}

          {/* Metadata Section */}
          <Box sx={{ borderTop: '1px solid #e0e0e0', pt: 2 }}>
            <Typography variant="body2" sx={{ 
              color: '#666', 
              mb: 2, 
              fontWeight: 500,
              fontSize: { xs: '0.875rem', md: '0.875rem' }
            }}>
              Metadata
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 1.5, md: 2 } }}>
              <Box>
                <Typography variant="body2" component="span" sx={{ 
                  fontWeight: 500, 
                  color: '#666',
                  fontSize: { xs: '0.875rem', md: '0.875rem' }
                }}>
                  Service ID:{' '}
                </Typography>
                <Typography variant="body2" component="span" sx={{ 
                  color: '#1a1a1a', 
                  fontFamily: 'monospace',
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  wordBreak: 'break-all'
                }}>
                  {service.id}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" component="span" sx={{ 
                  fontWeight: 500, 
                  color: '#666',
                  fontSize: { xs: '0.875rem', md: '0.875rem' }
                }}>
                  Slug:{' '}
                </Typography>
                <Typography variant="body2" component="span" sx={{ 
                  color: '#1a1a1a',
                  fontSize: { xs: '0.875rem', md: '0.875rem' },
                  wordBreak: 'break-word'
                }}>
                  /{service.slug}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" component="span" sx={{ 
                  fontWeight: 500, 
                  color: '#666',
                  fontSize: { xs: '0.875rem', md: '0.875rem' }
                }}>
                  Created:{' '}
                </Typography>
                <Typography variant="body2" component="span" sx={{ 
                  color: '#1a1a1a',
                  fontSize: { xs: '0.875rem', md: '0.875rem' }
                }}>
                  {formatDate(service.createdAt)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" component="span" sx={{ 
                  fontWeight: 500, 
                  color: '#666',
                  fontSize: { xs: '0.875rem', md: '0.875rem' }
                }}>
                  Last Updated:{' '}
                </Typography>
                <Typography variant="body2" component="span" sx={{ 
                  color: '#1a1a1a',
                  fontSize: { xs: '0.875rem', md: '0.875rem' }
                }}>
                  {formatDate(service.updatedAt)}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ 
        px: { xs: 2, md: 3 }, 
        pb: { xs: 2, md: 3 },
        pt: { xs: 1, md: 0 },
        justifyContent: 'flex-end', 
        borderTop: '1px solid #e0e0e0', 
        bgcolor: '#f5f5f5',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1, sm: 1 }
      }}>
        <Button
          onClick={() => window.open(`http://localhost:3000/services/${service.slug}`, '_blank')}
          variant="contained"
          startIcon={<OpenInNew />}
          fullWidth={isMobile}
          sx={{
            borderRadius: '8px',
            textTransform: 'none',
            backgroundColor: '#590178',
            color: '#fff',
            fontSize: { xs: '0.875rem', md: '0.95rem' },
            px: { xs: 2, md: 3 },
            py: { xs: 1, md: 1 },
            '&:hover': {
              backgroundColor: '#4a0166',
            }
          }}
        >
          View on Website
        </Button>
        <Button
          onClick={onClose}
          variant="contained"
          fullWidth={isMobile}
          sx={{
            backgroundColor: '#590178',
            color: '#fff',
            px: { xs: 2, md: 3 },
            py: { xs: 1, md: 1 },
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: { xs: '0.875rem', md: '0.95rem' },
            '&:hover': {
              backgroundColor: '#4a0166',
            }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}