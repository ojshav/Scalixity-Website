"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  CircularProgress,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Download, Visibility, CalendarToday, Person, CheckCircle, Cancel, AccessTime, Warning, Close } from "@mui/icons-material";
import { useParams } from "next/navigation";
import CustomSelect from '@/src/app/components/common/CustomSelect';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

interface Submission {
  id: number;
  campaignId: number;
  visitorId: string;
  answers: Record<string, string | boolean | string[]>;
  status: 'SUBMITTED' | 'REVIEWED' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
}

interface Campaign {
  id: number;
  name: string;
  description?: string;
}

interface CampaignQuestion {
  id: number;
  campaign_id: number;
  question_order: number;
  label: string;
  type: string;
  options: string[];
}

const STATUS_COLORS = {
  SUBMITTED: { bg: '#e3f2fd', color: '#1976d2' },
  REVIEWED: { bg: '#fff3e0', color: '#f57c00' },
  APPROVED: { bg: '#e8f5e9', color: '#2e7d32' },
  REJECTED: { bg: '#ffebee', color: '#d32f2f' },
};

const STATUS_ICONS = {
  SUBMITTED: AccessTime,
  REVIEWED: Visibility,
  APPROVED: CheckCircle,
  REJECTED: Cancel,
};

export default function CampaignResponses() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { id } = useParams();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [questions, setQuestions] = useState<CampaignQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch campaign details
      const campaignRes = await fetch(`${baseURL}/api/campaigns/${id}`);
      if (campaignRes.ok) {
        const campaignData = await campaignRes.json();
        setCampaign(campaignData);
      }

      // Fetch questions
      const questionsRes = await fetch(`${baseURL}/api/campaigns/${id}/questions`);
      if (questionsRes.ok) {
        const questionsData = await questionsRes.json();
        setQuestions(questionsData);
      }

      // Fetch submissions
      const submissionsRes = await fetch(`${baseURL}/api/campaigns/${id}/submissions`);
      if (submissionsRes.ok) {
        const submissionsData = await submissionsRes.json();
        console.log('Fetched submissions:', submissionsData);
        setSubmissions(submissionsData);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching data");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id, fetchData]);

  const updateSubmissionStatus = async (submissionId: number, newStatus: string) => {
    try {
      const response = await fetch(`${baseURL}/api/campaigns/submissions/${submissionId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        // Update local state
        setSubmissions(submissions.map(sub => 
          sub.id === submissionId ? { ...sub, status: newStatus as Submission['status'] } : sub
        ));
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const exportToCSV = () => {
    if (!submissions.length) return;

    const headers = ["Submission ID", "Visitor ID", "Status", "Submitted At", ...questions.map(q => q.label)];
    const csvData = submissions.map(sub => [
      sub.id,
      sub.visitorId,
      sub.status,
      new Date(sub.createdAt).toLocaleString(),
      ...questions.map(q => sub.answers[`question_${q.id}`] || "")
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `campaign-${id}-responses.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredSubmissions = submissions.filter(sub => 
    statusFilter === "all" || sub.status === statusFilter
  );

  const getQuestionLabel = (questionId: string) => {
    const question = questions.find(q => `question_${q.id}` === questionId);
    return question ? question.label : questionId;
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 1, sm: 2, md: 0 }, py: { xs: 2, sm: 3, md: 0 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: { xs: '300px', md: '400px' }, gap: 2 }}>
          <CircularProgress size={60} sx={{ color: '#590178' }} />
          <Typography variant="body1" sx={{ color: '#666', fontWeight: 500, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            Loading responses...
          </Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 1, sm: 2, md: 0 }, py: { xs: 2, sm: 3, md: 0 } }}>
        <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
          <Typography variant="body1" sx={{ color: '#d32f2f', fontWeight: 500, fontSize: { xs: '0.875rem', md: '1rem' } }}>
            {error}
          </Typography>
        </Box>
      </Box>
    );
  }

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
              {campaign?.name || "Campaign"} Responses
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              {submissions.length} total submissions
            </Typography>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1.5, sm: 2 },
            width: { xs: '100%', sm: 'auto' }
          }}>
            <CustomSelect
              label="Status"
              value={statusFilter}
              onChange={setStatusFilter}
              options={[
                { value: 'all', label: 'All Status' },
                { value: 'SUBMITTED', label: 'Submitted' },
                { value: 'REVIEWED', label: 'Reviewed' },
                { value: 'APPROVED', label: 'Approved' },
                { value: 'REJECTED', label: 'Rejected' },
              ]}
              minWidth={{ xs: '100%', md: '180px' }}
            />
            <Button 
              onClick={exportToCSV}
              variant="contained"
              startIcon={<Download />}
              sx={{
                backgroundColor: '#590178',
                color: '#fff',
                px: { xs: 2, md: 3 },
                py: { xs: 1.25, md: 1.5 },
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  backgroundColor: '#4a0166',
                }
              }}
            >
              Export CSV
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Grid container spacing={{ xs: 1.5, md: 2 }} sx={{ mb: { xs: 3, md: 4 } }}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#fff',
              borderRadius: { xs: '12px', md: '16px' },
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
              p: { xs: 1.5, md: 2 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ p: { xs: 1, md: 1.5 }, backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
                <AccessTime sx={{ color: '#1976d2', fontSize: { xs: 20, md: 24 } }} />
              </Box>
              <Box sx={{ ml: { xs: 1.5, md: 2 } }}>
                <Typography variant="body2" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.75rem', md: '0.875rem' }
                }}>
                  Submitted
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  color: '#1a1a1a',
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}>
                  {submissions.filter(s => s.status === 'SUBMITTED').length}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#fff',
              borderRadius: { xs: '12px', md: '16px' },
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
              p: { xs: 1.5, md: 2 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ p: { xs: 1, md: 1.5 }, backgroundColor: '#fff3e0', borderRadius: '8px' }}>
                <Visibility sx={{ color: '#f57c00', fontSize: { xs: 20, md: 24 } }} />
              </Box>
              <Box sx={{ ml: { xs: 1.5, md: 2 } }}>
                <Typography variant="body2" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.75rem', md: '0.875rem' }
                }}>
                  Reviewed
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  color: '#1a1a1a',
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}>
                  {submissions.filter(s => s.status === 'REVIEWED').length}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#fff',
              borderRadius: { xs: '12px', md: '16px' },
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
              p: { xs: 1.5, md: 2 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ p: { xs: 1, md: 1.5 }, backgroundColor: '#e8f5e9', borderRadius: '8px' }}>
                <CheckCircle sx={{ color: '#2e7d32', fontSize: { xs: 20, md: 24 } }} />
              </Box>
              <Box sx={{ ml: { xs: 1.5, md: 2 } }}>
                <Typography variant="body2" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.75rem', md: '0.875rem' }
                }}>
                  Approved
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  color: '#1a1a1a',
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}>
                  {submissions.filter(s => s.status === 'APPROVED').length}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#fff',
              borderRadius: { xs: '12px', md: '16px' },
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
              p: { xs: 1.5, md: 2 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ p: { xs: 1, md: 1.5 }, backgroundColor: '#ffebee', borderRadius: '8px' }}>
                <Cancel sx={{ color: '#d32f2f', fontSize: { xs: 20, md: 24 } }} />
              </Box>
              <Box sx={{ ml: { xs: 1.5, md: 2 } }}>
                <Typography variant="body2" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.75rem', md: '0.875rem' }
                }}>
                  Rejected
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  color: '#1a1a1a',
                  fontSize: { xs: '1.25rem', md: '1.5rem' }
                }}>
                  {submissions.filter(s => s.status === 'REJECTED').length}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Submissions List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredSubmissions.length === 0 ? (
          <Paper
            elevation={0}
            sx={{
              backgroundColor: '#fff',
              borderRadius: { xs: '12px', md: '16px' },
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
              p: { xs: 4, md: 8 },
              textAlign: 'center',
            }}
          >
            <Warning sx={{ fontSize: { xs: 36, md: 48 }, color: '#999', mb: 2 }} />
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              No submissions found
            </Typography>
          </Paper>
        ) : (
          filteredSubmissions.map((submission) => {
            const StatusIcon = STATUS_ICONS[submission.status];
            const statusColor = STATUS_COLORS[submission.status];
            return (
              <Paper
                key={submission.id}
                elevation={0}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: { xs: '12px', md: '16px' },
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
                  p: { xs: 2, md: 3 },
                  transition: 'box-shadow 0.2s',
                  '&:hover': {
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
                  }
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-between', 
                  alignItems: { xs: 'flex-start', md: 'flex-start' }, 
                  mb: 2,
                  gap: { xs: 2, md: 0 }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2 }, flex: 1 }}>
                    <Box sx={{ p: { xs: 1, md: 1.5 }, backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                      <Person sx={{ color: '#666', fontSize: { xs: 20, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ 
                        fontWeight: 600, 
                        color: '#1a1a1a',
                        fontSize: { xs: '1rem', md: '1.25rem' }
                      }}>
                        Submission #{submission.id}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        gap: { xs: 0.5, sm: 2 }, 
                        mt: 0.5 
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <CalendarToday sx={{ fontSize: { xs: 14, md: 16 }, color: '#666' }} />
                          <Typography variant="body2" sx={{ 
                            color: '#666',
                            fontSize: { xs: '0.75rem', md: '0.875rem' }
                          }}>
                            {new Date(submission.createdAt).toLocaleDateString()}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          fontSize: { xs: '0.75rem', md: '0.875rem' }
                        }}>
                          ID: {submission.visitorId}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'stretch', sm: 'center' },
                    gap: { xs: 1.5, sm: 2 },
                    width: { xs: '100%', md: 'auto' }
                  }}>
                    <Chip
                      icon={<StatusIcon sx={{ fontSize: { xs: 14, md: 16 } }} />}
                      label={submission.status}
                      sx={{
                        backgroundColor: statusColor.bg,
                        color: statusColor.color,
                        fontWeight: 500,
                        fontSize: { xs: '0.7rem', md: '0.75rem' },
                        height: { xs: '22px', md: '24px' }
                      }}
                    />
                    <CustomSelect
                      label=""
                      value={submission.status}
                      onChange={(value) => updateSubmissionStatus(submission.id, value)}
                      options={[
                        { value: 'SUBMITTED', label: 'Submitted' },
                        { value: 'REVIEWED', label: 'Reviewed' },
                        { value: 'APPROVED', label: 'Approved' },
                        { value: 'REJECTED', label: 'Rejected' },
                      ]}
                      minWidth={{ xs: '100%', md: '120px' }}
                    />
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<Visibility />}
                      onClick={() => {
                        console.log('Selected submission:', submission);
                        console.log('Submission answers:', submission.answers);
                        setSelectedSubmission(submission);
                      }}
                      sx={{
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 500,
                        backgroundColor: '#590178',
                        color: '#fff',
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                        py: { xs: 0.75, md: 0.5 },
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                          backgroundColor: '#4a0166',
                        }
                      }}
                    >
                      View
                    </Button>
                  </Box>
                </Box>
                <Grid container spacing={{ xs: 1.5, md: 2 }}>
                  {Object.entries(submission.answers).slice(0, 6).map(([key, value]) => (
                    <Grid item xs={12} sm={6} md={4} key={key}>
                      <Box>
                        <Typography variant="body2" sx={{ 
                          fontWeight: 500, 
                          color: '#1a1a1a', 
                          mb: 0.5,
                          fontSize: { xs: '0.75rem', md: '0.875rem' }
                        }}>
                          {getQuestionLabel(key)}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                          color: '#666',
                          fontSize: { xs: '0.75rem', md: '0.875rem' }
                        }}>
                          {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                  {Object.keys(submission.answers).length > 6 && (
                    <Grid item xs={12}>
                      <Typography variant="body2" sx={{ 
                        color: '#999',
                        fontSize: { xs: '0.75rem', md: '0.875rem' }
                      }}>
                        +{Object.keys(submission.answers).length - 6} more answers
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Paper>
            );
          })
        )}
      </Box>

      {/* Detailed View Modal */}
      <Dialog
        open={!!selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
        maxWidth="md"
        fullWidth
        scroll="paper"
        PaperProps={{
          sx: {
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            maxHeight: '90vh',
            m: { xs: 1, md: 2 }
          }
        }}
      >
        {selectedSubmission && (
          <>
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
              Submission #{selectedSubmission.id}
              <IconButton
                onClick={() => setSelectedSubmission(null)}
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
            <DialogContent 
              data-lenis-prevent
              sx={{ 
                overflowY: 'auto',
                overflowX: 'hidden',
                maxHeight: { xs: 'calc(90vh - 120px)', md: 'calc(90vh - 150px)' },
                px: { xs: 2, md: 3 },
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: '#f1f1f1',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#590178',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#4a0166',
                  }
                },
                scrollbarWidth: 'thin',
                scrollbarColor: '#590178 #f1f1f1',
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
                <Grid container spacing={{ xs: 1.5, md: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ 
                      fontWeight: 500, 
                      color: '#1a1a1a', 
                      mb: 0.5,
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      Visitor ID
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      {selectedSubmission.visitorId}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" sx={{ 
                      fontWeight: 500, 
                      color: '#1a1a1a', 
                      mb: 0.5,
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      Submitted
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      {new Date(selectedSubmission.createdAt).toLocaleString()}
                    </Typography>
                  </Grid>
                </Grid>
                
                <Box sx={{ borderTop: '1px solid #e0e0e0', pt: { xs: 2, md: 3 } }}>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    color: '#1a1a1a', 
                    mb: { xs: 1.5, md: 2 },
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}>
                    Answers
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>
                    {Object.entries(selectedSubmission.answers).length > 0 ? (
                      Object.entries(selectedSubmission.answers).map(([key, value]) => (
                        <Box key={key}>
                          <Typography variant="body2" sx={{ 
                            fontWeight: 500, 
                            color: '#1a1a1a', 
                            mb: 0.5,
                            fontSize: { xs: '0.75rem', md: '0.875rem' }
                          }}>
                            {getQuestionLabel(key)}
                          </Typography>
                          <Box sx={{ backgroundColor: '#f8f9fa', p: { xs: 1, md: 1.5 }, borderRadius: '8px' }}>
                            <Typography variant="body2" sx={{ 
                              color: '#666',
                              fontSize: { xs: '0.75rem', md: '0.875rem' }
                            }}>
                              {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                            </Typography>
                          </Box>
                        </Box>
                      ))
                    ) : (
                      <Box sx={{ backgroundColor: '#f8f9fa', p: { xs: 1.5, md: 2 }, borderRadius: '8px' }}>
                        <Typography variant="body2" sx={{ 
                          color: '#999',
                          fontSize: { xs: '0.75rem', md: '0.875rem' }
                        }}>
                          No answers found. This might be due to a data format issue.
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ 
              px: { xs: 2, md: 3 }, 
              pb: { xs: 2, md: 3 },
              pt: { xs: 1, md: 0 }
            }}>
              <Button
                onClick={() => setSelectedSubmission(null)}
                variant="contained"
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
                  }
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
} 