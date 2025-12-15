"use client";
import React, { useState, useEffect } from "react";
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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  Chip,
  useMediaQuery,
  useTheme,
  Divider
} from "@mui/material";
import { Edit, Delete, Description, Assessment, Close, Campaign, CalendarToday, Update, Info } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import DeleteConfirmationDialog from "@/src/app/components/dashboard/DeleteConfirmationDialog";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

const campaignTypes = [
  { value: "Competition", label: "Competition" },
  { value: "Promotion", label: "Promotion" },
  { value: "Awareness", label: "Awareness" },
  { value: "Other", label: "Other" },
];

interface Campaign {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
  startDate: string;
  endDate: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

function formatISTDateTime(dateString: string) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function DashboardCampaignPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [campaignToDelete, setCampaignToDelete] = useState<Campaign | null>(null);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image_url: "",
    startDate: "",
    startTime: "00:00",
    endDate: "",
    endTime: "12:00",
    type: "Competition",
  });
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/api/campaigns`);
      if (!response.ok) throw new Error("Failed to fetch campaigns");
      const data = await response.json();
      // Ensure data is always an array
      setCampaigns(Array.isArray(data) ? data : []);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error fetching campaigns");
      // Set empty array on error to prevent map error
      setCampaigns([]);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTypeChange = (value: string) => {
    setForm({ ...form, type: value });
  };

  const openAddModal = () => {
    setEditingCampaign(null);
    setForm({ name: "", description: "", image_url: "", startDate: "", startTime: "00:00", endDate: "", endTime: "12:00", type: "Competition" });
    setOpen(true);
  };

  const openEditModal = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    const startDate = campaign.startDate ? campaign.startDate.split('T')[0] : "";
    const endDate = campaign.endDate ? campaign.endDate.split('T')[0] : "";
    setForm({
      name: campaign.name,
      description: campaign.description || "",
      image_url: campaign.imageUrl || "",
      startDate,
      startTime: "00:00",
      endDate,
      endTime: "12:00",
      type: campaign.type,
    });
    setOpen(true);
  };

  const openDeleteConfirmDialog = (campaign: Campaign) => {
    setCampaignToDelete(campaign);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    if (!campaignToDelete) return;
    
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseURL}/api/campaigns/${campaignToDelete.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to delete campaign");
      }
      fetchCampaigns();
      setOpenDeleteDialog(false);
      setCampaignToDelete(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error deleting campaign");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
    setCampaignToDelete(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Validate required fields
      if (!form.name || !form.startDate || !form.endDate || !form.type) {
        setError("Name, start date, end date, and type are required.");
        setLoading(false);
        return;
      }

      // Format dates as YYYY-MM-DD for database
      const start = form.startDate;
      const end = form.endDate;
      
      const method = editingCampaign ? "PUT" : "POST";
      const url = editingCampaign 
        ? `${baseURL}/api/campaigns/${editingCampaign.id}` 
        : `${baseURL}/api/campaigns`;
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          description: form.description || null,
          image_url: form.image_url || null,
          start_date: start,
          end_date: end,
          type: form.type,
        }),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || `Failed to ${editingCampaign ? 'update' : 'create'} campaign`);
      }
      fetchCampaigns();
      setOpen(false);
      setEditingCampaign(null);
      setForm({ name: "", description: "", image_url: "", startDate: "", startTime: "00:00", endDate: "", endTime: "12:00", type: "Competition" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : `Error ${editingCampaign ? 'updating' : 'creating'} campaign`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 1, sm: 2, md: 0 }, py: { xs: 2, sm: 3, md: 0 } }}>
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
              Campaigns
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              Manage and track your marketing campaigns
            </Typography>
          </Box>
          <Button 
            onClick={openAddModal}
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
          >
            Add Campaign
          </Button>
        </Box>
      </Box>

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
            All Campaigns
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
                Loading campaigns...
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
          ) : campaigns.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
              <Typography variant="body1" sx={{ 
                color: '#666',
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                No campaigns yet. Click &quot;Add Campaign&quot; to create one.
              </Typography>
            </Box>
          ) : (
            <>
              {/* Mobile Card View */}
              {isMobile ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {campaigns.map((c) => (
                    <Paper
                      key={c.id}
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
                            <Campaign sx={{ fontSize: '1rem', color: '#590178' }} />
                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem' }}>
                              {c.name}
                            </Typography>
                          </Box>
                          <Chip 
                            label={c.type} 
                            size="small"
                            sx={{
                              backgroundColor: '#f0e6f5',
                              color: '#590178',
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              height: '22px'
                            }}
                          />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                          <IconButton 
                            size="small"
                            onClick={() => openEditModal(c)}
                            sx={{
                              color: '#590178',
                              width: '32px',
                              height: '32px',
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
                            onClick={() => openDeleteConfirmDialog(c)}
                            sx={{
                              color: '#d32f2f',
                              width: '32px',
                              height: '32px',
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

                      <Divider sx={{ my: 1.5 }} />

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Info sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Description
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem', wordBreak: 'break-word' }}>
                              {c.description || "No description"}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CalendarToday sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Start Date
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {formatISTDateTime(c.startDate)}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CalendarToday sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              End Date
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                              {formatISTDateTime(c.endDate)}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Update sx={{ fontSize: '1rem', color: '#666', mt: 0.25, flexShrink: 0 }} />
                          <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="caption" sx={{ color: '#999', fontSize: '0.7rem', display: 'block', mb: 0.25 }}>
                              Created
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#999', fontSize: '0.875rem' }}>
                              {new Date(c.createdAt).toLocaleDateString()}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => router.push(`/dashboard/campaign/${c.id}/form`)}
                            startIcon={<Description />}
                            sx={{
                              fontSize: '0.75rem',
                              py: 0.5,
                              px: 1.5,
                              textTransform: 'none',
                              backgroundColor: '#1976d2',
                              color: '#fff',
                              '&:hover': {
                                backgroundColor: '#1565c0',
                              }
                            }}
                          >
                            Form
                          </Button>
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => router.push(`/dashboard/campaign/${c.id}/responses`)}
                            startIcon={<Assessment />}
                            sx={{
                              fontSize: '0.75rem',
                              py: 0.5,
                              px: 1.5,
                              textTransform: 'none',
                              backgroundColor: '#2e7d32',
                              color: '#fff',
                              '&:hover': {
                                backgroundColor: '#1b5e20',
                              }
                            }}
                          >
                            Responses
                          </Button>
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
                        <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopLeftRadius: '8px' }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Description</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Type</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Start Date</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>End Date</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>Created</TableCell>
                        <TableCell sx={{ fontWeight: 600, color: 'white', fontSize: '0.875rem', borderTopRightRadius: '8px' }}>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {campaigns.map((c) => (
                        <TableRow 
                          key={c.id}
                          sx={{
                            '&:hover': {
                              backgroundColor: '#f8f9fa',
                            }
                          }}
                        >
                          <TableCell sx={{ fontWeight: 500, color: '#1a1a1a' }}>{c.name}</TableCell>
                          <TableCell sx={{ color: '#666', maxWidth: '300px' }}>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {c.description || "No description"}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={c.type} 
                              size="small"
                              sx={{
                                backgroundColor: '#f0e6f5',
                                color: '#590178',
                                fontWeight: 500,
                                fontSize: '0.75rem'
                              }}
                            />
                          </TableCell>
                          <TableCell sx={{ color: '#666', fontSize: '0.875rem' }}>{formatISTDateTime(c.startDate)}</TableCell>
                          <TableCell sx={{ color: '#666', fontSize: '0.875rem' }}>{formatISTDateTime(c.endDate)}</TableCell>
                          <TableCell sx={{ color: '#999', fontSize: '0.875rem' }}>
                            {new Date(c.createdAt).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              <IconButton 
                                size="small"
                                onClick={() => openEditModal(c)}
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
                                onClick={() => openDeleteConfirmDialog(c)}
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
                              <IconButton 
                                size="small"
                                onClick={() => router.push(`/dashboard/campaign/${c.id}/form`)}
                                sx={{
                                  color: '#1976d2',
                                  '&:hover': {
                                    backgroundColor: '#e3f2fd',
                                  }
                                }}
                                title="Edit Form"
                              >
                                <Description fontSize="small" />
                              </IconButton>
                              <IconButton 
                                size="small"
                                onClick={() => router.push(`/dashboard/campaign/${c.id}/responses`)}
                                sx={{
                                  color: '#2e7d32',
                                  '&:hover': {
                                    backgroundColor: '#e8f5e9',
                                  }
                                }}
                                title="Responses"
                              >
                                <Assessment fontSize="small" />
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

      {/* Add Campaign Modal */}
      <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            m: { xs: 1, md: 2 }
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
          pr: { xs: 0.5, md: 1 },
          px: { xs: 2, md: 3 },
          pt: { xs: 2, md: 3 },
          fontSize: { xs: '1.125rem', md: '1.25rem' }
        }}>
          {editingCampaign ? "Edit Campaign" : "Add Campaign"}
          <IconButton
            onClick={() => setOpen(false)}
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
            maxHeight: { xs: 'calc(100vh - 150px)', md: 'calc(100vh - 200px)' },
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            pr: { xs: 2, md: 3 },
            px: { xs: 2, md: 3 },
          }}>
            <Typography variant="body2" sx={{ 
              color: '#666', 
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '0.875rem', md: '0.875rem' }
            }}>
              {editingCampaign ? "Update campaign details below." : "Enter campaign details below."}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
              <TextField
                id="name"
                name="name"
                label="Campaign Name"
                placeholder="Campaign Name"
                value={form.name}
                onChange={handleChange}
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
                placeholder="Enter campaign description..." 
                value={form.description} 
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              <TextField
                id="image_url"
                name="image_url"
                label="Image URL"
                placeholder="https://example.com/image.jpg"
                value={form.image_url}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  }
                }}
              />
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                <TextField
                  id="startDate"
                  name="startDate"
                  label="Start Date"
                  type="date"
                  value={form.startDate}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
                <TextField
                  id="startTime"
                  name="startTime"
                  label="Start Time"
                  type="time"
                  value={form.startTime}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
                <TextField
                  id="endDate"
                  name="endDate"
                  label="End Date"
                  type="date"
                  value={form.endDate}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
                <TextField
                  id="endTime"
                  name="endTime"
                  label="End Time"
                  type="time"
                  value={form.endTime}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    }
                  }}
                />
              </Box>
              <FormControl fullWidth>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  value={form.type}
                  label="Type"
                  onChange={(e) => handleTypeChange(e.target.value)}
                  sx={{
                    borderRadius: '8px',
                  }}
                >
                  {campaignTypes.map((t) => (
                    <MenuItem key={t.value} value={t.value}>{t.label}</MenuItem>
                  ))}
              </Select>
              </FormControl>
              {error && (
                <Typography variant="body2" sx={{ color: '#d32f2f', mt: -2 }}>
                  {error}
                </Typography>
              )}
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
              disabled={loading}
              fullWidth={isMobile}
              sx={{
                backgroundColor: '#590178',
                color: '#fff',
                px: { xs: 2, md: 3 },
                py: { xs: 1.25, md: 1 },
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
              {loading ? 'Processing...' : editingCampaign ? 'Update Campaign' : 'Create Campaign'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={openDeleteDialog}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Campaign"
        itemName={campaignToDelete?.name}
        loading={loading}
      />
    </Box>
  );
}
