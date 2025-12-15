'use client'
import '@/src/app/globals.css';
import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  IconButton,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Edit, Delete, Add, Close, Upload } from '@mui/icons-material';
import Image from 'next/image';
import DeleteConfirmationDialog from '@/src/app/components/dashboard/DeleteConfirmationDialog';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string | null;
}

export default function AdminWorkPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobileOrTablet = isMobile || isTablet;
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    description: '',
    image: '',
    liveUrl: ''
  });
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  // Prevent Lenis from intercepting scroll in dialog
  useEffect(() => {
    if (isFormOpen) {
      // Find the Dialog's Paper element and DialogContent, add data-lenis-prevent
      const timer = setTimeout(() => {
        const dialogPaper = document.querySelector('[role="dialog"]')?.parentElement?.querySelector('.MuiPaper-root');
        const dialogContent = document.querySelector('[role="dialog"]')?.querySelector('.MuiDialogContent-root');
        
        if (dialogPaper) {
          (dialogPaper as HTMLElement).setAttribute('data-lenis-prevent', 'true');
        }
        if (dialogContent) {
          (dialogContent as HTMLElement).setAttribute('data-lenis-prevent', 'true');
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isFormOpen]);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/api/work/projects`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Ensure data is always an array
      setProjects(Array.isArray(data) ? data : []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error fetching projects');
      console.error('Error fetching projects:', err);
      // Set empty array on error to prevent map error
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedImage(file);
      
      // Create a preview URL
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(filePreviewUrl);
    }
  };

  const uploadImageToCloudinary = async () => {
    if (!uploadedImage) {
      // If no new file was selected, return the existing image URL
      return formData.image;
    }
    
    setIsUploading(true);
    
    try {
      // Convert the file to a base64 string for Cloudinary
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(uploadedImage);
        reader.onload = () => {
          // The result is a base64 string that can be sent to the server
          const base64Image = reader.result as string;
          resolve(base64Image);
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });
    } catch (error) {
      console.error('Error preparing image for upload:', error);
      setIsUploading(false);
      return null;
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const openAddForm = () => {
    setFormData({
      id: 0,
      title: '',
      description: '',
      image: '',
      liveUrl: ''
    });
    setUploadedImage(null);
    setPreviewUrl('');
    setIsEditing(false);
    setIsFormOpen(true);
  };

  const openEditForm = (project: Project) => {
    setFormData({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      liveUrl: project.liveUrl || ''
    });
    setUploadedImage(null);
    setPreviewUrl(project.image);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    // Clean up preview URL to prevent memory leaks
    if (previewUrl && !previewUrl.startsWith('http')) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl('');
    setIsUploading(false);
  };

  const openDeleteConfirmDialog = (project: Project) => {
    setProjectToDelete(project);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return;
    
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/api/work/projects/${projectToDelete.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to delete project');
      }
      fetchProjects();
      setOpenDeleteDialog(false);
      setProjectToDelete(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error deleting project');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
    setProjectToDelete(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // First upload the image if there is one
      const base64Image = uploadedImage ? await uploadImageToCloudinary() : formData.image;
      
      if (!base64Image) {
        setError("Please provide an image for the project");
        setLoading(false);
        return;
      }
      
      const url = isEditing 
        ? `${baseURL}/api/work/projects/${formData.id}`
        : `${baseURL}/api/work/projects`;
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          image: base64Image,
          live_url: formData.liveUrl || null
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to ${isEditing ? 'update' : 'create'} project`);
      }
      
      fetchProjects();
      closeForm();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : `Error ${isEditing ? 'updating' : 'creating'} project`);
    } finally {
      setLoading(false);
      setIsUploading(false);
    }
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
              Projects
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              Manage and track your portfolio projects
            </Typography>
          </Box>
          <Button 
            onClick={openAddForm}
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
            Add New Project
          </Button>
        </Box>
      </Box>

      {/* Table Container */}
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
            All Projects
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
                Loading projects...
              </Typography>
            </Box>
          ) : error ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="body1" sx={{ color: '#d32f2f', fontWeight: 500 }}>
                {error}
              </Typography>
            </Box>
          ) : projects.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="body1" sx={{ color: '#666' }}>
                No projects yet. Click &quot;Add New Project&quot; to create one.
              </Typography>
            </Box>
          ) : isMobileOrTablet ? (
            // Mobile/Tablet Card View
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {projects.map((project) => (
                <Card
                  key={project.id}
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
                      {/* Image and Title Row */}
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <Box sx={{ position: 'relative', width: 80, height: 80, flexShrink: 0 }}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                          />
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 600, 
                              color: '#1a1a1a',
                              fontSize: '1rem',
                              mb: 0.5,
                              wordBreak: 'break-word'
                            }}
                          >
                            {project.title}
                          </Typography>
                        </Box>
                      </Box>
                      
                      {/* Description */}
                      <Box>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#666',
                            fontSize: '0.875rem',
                            lineHeight: 1.5,
                            wordBreak: 'break-word'
                          }}
                        >
                          {project.description}
                        </Typography>
                      </Box>
                      
                      {/* Live URL */}
                      <Box>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: '#999',
                            fontSize: '0.75rem',
                            display: 'block',
                            mb: 0.5
                          }}
                        >
                          Live URL:
                        </Typography>
                        {project.liveUrl ? (
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: '#1976d2',
                              fontSize: '0.875rem',
                              wordBreak: 'break-all',
                              overflowWrap: 'break-word'
                            }}
                          >
                            {project.liveUrl}
                          </Typography>
                        ) : (
                          <Typography variant="body2" sx={{ color: '#999', fontSize: '0.875rem' }}>
                            No URL
                          </Typography>
                        )}
                      </Box>
                      
                      {/* Actions */}
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 1, borderTop: '1px solid #f0f0f0' }}>
                        <IconButton 
                          size="small"
                          onClick={() => openEditForm(project)}
                          sx={{
                            color: '#590178',
                            '&:hover': {
                              backgroundColor: '#f0e6f5',
                            }
                          }}
                          title="Edit"
                        >
                          <Edit fontSize="small" />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => openDeleteConfirmDialog(project)}
                          sx={{
                            color: '#d32f2f',
                            '&:hover': {
                              backgroundColor: '#ffebee',
                            }
                          }}
                          title="Delete"
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
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopLeftRadius: '8px' }}>Image</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Description</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Live URL</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopRightRadius: '8px' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow 
                      key={project.id}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#f8f9fa',
                        }
                      }}
                    >
                      <TableCell>
                        <Box sx={{ position: 'relative', width: 64, height: 64 }}>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                          />
                        </Box>
                      </TableCell>
                      <TableCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>{project.title}</TableCell>
                      <TableCell sx={{ color: '#666', maxWidth: '300px' }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {project.description}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: '#666', fontSize: '0.875rem' }}>
                        {project.liveUrl ? (
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: '#1976d2',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              maxWidth: '200px'
                            }}
                          >
                            {project.liveUrl}
                          </Typography>
                        ) : (
                          <Typography variant="body2" sx={{ color: '#999' }}>
                            No URL
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton 
                            size="small"
                            onClick={() => openEditForm(project)}
                            sx={{
                              color: '#590178',
                              '&:hover': {
                                backgroundColor: '#f0e6f5',
                              }
                            }}
                            title="Edit"
                          >
                            <Edit fontSize="small" />
                          </IconButton>
                          <IconButton 
                            size="small"
                            onClick={() => openDeleteConfirmDialog(project)}
                            sx={{
                              color: '#d32f2f',
                              '&:hover': {
                                backgroundColor: '#ffebee',
                              }
                            }}
                            title="Delete"
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

      {/* Add/Edit Project Dialog */}
      <Dialog 
        open={isFormOpen} 
        onClose={closeForm}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            m: { xs: 2, md: 2 },
            maxHeight: { xs: '90vh', md: '90vh' },
            width: { xs: 'calc(100% - 32px)', md: 'auto' }
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
          pr: { xs: 1, md: 1 },
          pt: { xs: 2, md: 3 },
          px: { xs: 2, md: 3 },
          fontSize: { xs: '1.125rem', md: '1.25rem' }
        }}>
          {isEditing ? 'Edit Project' : 'Add New Project'}
          <IconButton
            onClick={closeForm}
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
          <DialogContent sx={{ 
            overflowY: 'auto',
            maxHeight: { xs: '60vh', md: 'calc(100vh - 200px)' },
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            pr: { xs: 2, md: 3 },
            px: { xs: 2, md: 3 }
          }}>
            <Box data-lenis-prevent sx={{ height: '100%' }}>
            <Typography variant="body2" sx={{ 
              color: '#666', 
              mb: 3,
              fontSize: { xs: '0.875rem', md: '0.875rem' }
            }}>
              {isEditing ? 'Update project details below.' : 'Enter project details below.'}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
              <TextField
                id="title"
                name="title"
                label="Project Title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleInputChange}
                required
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              <TextField
                id="description" 
                name="description" 
                label="Description"
                placeholder="Enter project description..." 
                value={formData.description} 
                onChange={handleInputChange}
                multiline
                rows={3}
                required
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              <Box>
                <Typography variant="body2" sx={{ 
                  color: '#666', 
                  mb: 2, 
                  fontWeight: 500,
                  fontSize: { xs: '0.875rem', md: '0.875rem' }
                }}>
                  Project Image
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'stretch', sm: 'center' },
                  gap: 2, 
                  mb: 2 
                }}>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  <Button
                    variant="contained"
                    onClick={triggerFileInput}
                    disabled={isUploading}
                    startIcon={<Upload />}
                    sx={{
                      borderRadius: '8px',
                      textTransform: 'none',
                      backgroundColor: '#590178',
                      color: '#fff',
                      width: { xs: '100%', sm: 'auto' },
                      '&:hover': {
                        backgroundColor: '#4a0166',
                      },
                      '&:disabled': {
                        backgroundColor: '#ccc',
                      }
                    }}
                  >
                    {isUploading ? 'Processing...' : 'Upload Image'}
                  </Button>
                  {!uploadedImage && formData.image && (
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      {isEditing ? 'Current image will be used unless you upload a new one' : ''}
                    </Typography>
                  )}
                  {uploadedImage && (
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.75rem', md: '0.875rem' },
                      wordBreak: 'break-word'
                    }}>
                      Selected: {uploadedImage.name}
                    </Typography>
                  )}
                </Box>
                {previewUrl && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ 
                      color: '#666', 
                      mb: 1, 
                      fontWeight: 500,
                      fontSize: { xs: '0.875rem', md: '0.875rem' }
                    }}>
                      Preview:
                    </Typography>
                    <Box sx={{ 
                      position: 'relative', 
                      width: { xs: '100%', sm: 128 }, 
                      height: { xs: 200, sm: 128 }, 
                      border: '1px solid #e0e0e0', 
                      borderRadius: '8px', 
                      overflow: 'hidden' 
                    }}>
                      <Image 
                        src={previewUrl}
                        alt="Preview"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                  </Box>
                )}
                <Typography variant="caption" sx={{ 
                  color: '#666', 
                  mt: 1, 
                  display: 'block',
                  fontSize: { xs: '0.7rem', md: '0.75rem' }
                }}>
                  Upload an image to be stored in Cloudinary. The image will be uploaded when you save the project.
                </Typography>
              </Box>
              <TextField
                id="liveUrl"
                name="liveUrl"
                label="Live URL (Optional)"
                placeholder="https://example.com/project"
                value={formData.liveUrl}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              {error && (
                <Typography variant="body2" sx={{ 
                  color: '#d32f2f', 
                  mt: -2,
                  fontSize: { xs: '0.875rem', md: '0.875rem' },
                  wordBreak: 'break-word'
                }}>
                  {error}
                </Typography>
              )}
            </Box>
            </Box>
          </DialogContent>
          <DialogActions sx={{ 
            px: { xs: 2, md: 3 }, 
            pb: { xs: 2, md: 3 },
            pt: { xs: 1, md: 0 },
            justifyContent: 'flex-end' 
          }}>
            <Button 
              type="submit"
              variant="contained"
              disabled={loading || isUploading}
              fullWidth={isMobile}
              sx={{
                backgroundColor: '#590178',
                color: '#fff',
                px: { xs: 2, md: 3 },
                py: { xs: 1.5, md: 1 },
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                '&:hover': {
                  backgroundColor: '#4a0166',
                },
                '&:disabled': {
                  backgroundColor: '#ccc',
                }
              }}
            >
              {loading || isUploading ? 'Processing...' : (isEditing ? 'Update Project' : 'Save Project')}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Project"
        itemName={projectToDelete?.title}
        loading={loading}
      />
    </Box>
  );
}