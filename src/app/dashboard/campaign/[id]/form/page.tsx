"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  CircularProgress,
  IconButton,
  Alert,
  Divider,
} from "@mui/material";
import { Add, Delete, ArrowUpward, ArrowDownward, Close } from "@mui/icons-material";
import { useParams } from "next/navigation";
import DeleteConfirmationDialog from "@/src/app/components/dashboard/DeleteConfirmationDialog";
import CustomSelect from '@/src/app/components/common/CustomSelect';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

const QUESTION_TYPES = [
  { value: "short", label: "Short Answer" },
  { value: "paragraph", label: "Paragraph" },
  { value: "multiple", label: "Multiple Choice" },
  { value: "checkbox", label: "Checkboxes" },
];

interface Question {
  id: string;
  label: string;
  type: string;
  options?: string[];
}

interface BackendQuestion {
  id?: number;
  campaign_id?: number;
  question_order?: number;
  label: string;
  type: string;
  options?: string[];
}

export default function CampaignFormBuilder() {
  const { id } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState<string | null>(null);

  // Fetch questions on mount
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`${baseURL}/api/campaigns/${id}/questions`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch questions");
        return res.json();
      })
      .then((data: BackendQuestion[]) => {
        console.log('Fetched questions from backend:', data); // Debug log
        // Assign a random id to each question for UI tracking if not present
        setQuestions(
          data.map((q: BackendQuestion) => ({
            id: Math.random().toString(36).substr(2, 9),
            label: q.label,
            type: q.type,
            options: q.options || [],
          }))
        );
      })
      .catch((err) => setError(err.message || "Error fetching questions"))
      .finally(() => setLoading(false));
  }, [id]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Math.random().toString(36).substr(2, 9),
        label: "",
        type: "short",
        options: [],
      },
    ]);
  };

  const openDeleteConfirmDialog = (qid: string) => {
    setQuestionToDelete(qid);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    if (questionToDelete) {
      setQuestions(questions.filter((q) => q.id !== questionToDelete));
      setOpenDeleteDialog(false);
      setQuestionToDelete(null);
    }
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
    setQuestionToDelete(null);
  };

  const moveQuestion = (qid: string, dir: "up" | "down") => {
    const idx = questions.findIndex((q) => q.id === qid);
    if (dir === "up" && idx > 0) {
      const newQs = [...questions];
      [newQs[idx - 1], newQs[idx]] = [newQs[idx], newQs[idx - 1]];
      setQuestions(newQs);
    } else if (dir === "down" && idx < questions.length - 1) {
      const newQs = [...questions];
      [newQs[idx + 1], newQs[idx]] = [newQs[idx], newQs[idx + 1]];
      setQuestions(newQs);
    }
  };

  const updateQuestion = (qid: string, field: string, value: string | string[]) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === qid) {
          const updatedQuestion = { ...q, [field]: value };
          // If type is changing to multiple/checkbox and options don't exist, initialize them
          if (field === 'type' && (value === 'multiple' || value === 'checkbox') && !updatedQuestion.options?.length) {
            updatedQuestion.options = [''];
          }
          return updatedQuestion;
        }
        return q;
      })
    );
  };

  const updateOption = (qid: string, idx: number, value: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === qid
          ? {
              ...q,
              options: q.options?.map((opt, i) => (i === idx ? value : opt)),
            }
          : q
      )
    );
  };

  const addOption = (qid: string) => {
    setQuestions(
      questions.map((q) =>
        q.id === qid
          ? { ...q, options: [...(q.options || []), ""] }
          : q
      )
    );
  };

  const removeOption = (qid: string, idx: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === qid
          ? { ...q, options: q.options?.filter((_, i) => i !== idx) }
          : q
      )
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      // Prepare questions for backend (remove UI-only id and filter empty options)
      const payload = questions.map((q) => ({
        label: q.label,
        type: q.type,
        options: (q.type === 'multiple' || q.type === 'checkbox') 
          ? (q.options || []).filter(opt => opt.trim() !== '') 
          : [],
      }));
      
      console.log('Saving questions payload:', payload); // Debug log
      
      const response = await fetch(`${baseURL}/api/campaigns/${id}/questions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questions: payload }),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to save questions");
      }
      setSuccess("Form saved successfully!");
      
      // Refresh questions to get the saved data
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error saving questions");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 1, sm: 2, md: 0 }, py: { xs: 2, sm: 3, md: 0 } }}>
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 700, 
          color: '#1a1a1a', 
          mb: 1,
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
        }}>
          Edit Campaign Form
        </Typography>
        <Typography variant="body1" sx={{ 
          color: '#666',
          fontSize: { xs: '0.875rem', md: '1rem' }
        }}>
          Build and customize your campaign form questions
        </Typography>
      </Box>

      {loading ? (
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: { xs: '300px', md: '400px' }, 
          gap: 2 
        }}>
          <CircularProgress size={60} sx={{ color: '#590178' }} />
          <Typography variant="body1" sx={{ 
            color: '#666', 
            fontWeight: 500,
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}>
            Loading form...
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
      ) : (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 }, mb: { xs: 3, md: 4 } }}>
            {questions.map((q, idx) => (
              <Paper
                key={q.id}
                elevation={0}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: { xs: '12px', md: '16px' },
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
                  p: { xs: 2, md: 3 },
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'stretch', md: 'flex-end' }, 
                  gap: { xs: 2, md: 2 }, 
                  mb: 2 
                }}>
                  <Box sx={{ flex: 1, width: { xs: '100%', md: 'auto' } }}>
                    <Typography variant="body2" sx={{ 
                      color: '#666', 
                      mb: 1, 
                      fontWeight: 500,
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      Question {idx + 1}
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Enter question text"
                      value={q.label}
                      onChange={(e) => updateQuestion(q.id, "label", e.target.value)}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '8px',
                        },
                        '& .MuiInputBase-input': {
                          fontSize: { xs: '0.875rem', md: '1rem' },
                        }
                      }}
                    />
                  </Box>
                  <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
                    <Typography variant="body2" sx={{ 
                      color: '#666', 
                      mb: 1, 
                      fontWeight: 500, 
                      visibility: { xs: 'visible', md: 'hidden' },
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      Type
                    </Typography>
                    <CustomSelect
                      label=""
                      value={q.type}
                      onChange={(value) => updateQuestion(q.id, "type", value)}
                      options={QUESTION_TYPES}
                      minWidth={{ xs: '100%', md: '180px' }}
                    />
                  </Box>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: { xs: 1, md: 0 },
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-end', md: 'flex-start' }
                  }}>
                    <IconButton
                      onClick={() => moveQuestion(q.id, "up")}
                      disabled={idx === 0}
                      sx={{
                        color: '#590178',
                        width: { xs: '40px', md: '48px' },
                        height: { xs: '40px', md: '48px' },
                        '&:hover': { backgroundColor: '#f0e6f5' },
                        '&:disabled': { color: '#ccc' }
                      }}
                    >
                      <ArrowUpward sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                    </IconButton>
                    <IconButton
                      onClick={() => moveQuestion(q.id, "down")}
                      disabled={idx === questions.length - 1}
                      sx={{
                        color: '#590178',
                        width: { xs: '40px', md: '48px' },
                        height: { xs: '40px', md: '48px' },
                        '&:hover': { backgroundColor: '#f0e6f5' },
                        '&:disabled': { color: '#ccc' }
                      }}
                    >
                      <ArrowDownward sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                    </IconButton>
                    <IconButton
                      onClick={() => openDeleteConfirmDialog(q.id)}
                      sx={{
                        color: '#d32f2f',
                        width: { xs: '40px', md: '48px' },
                        height: { xs: '40px', md: '48px' },
                        '&:hover': { backgroundColor: '#ffebee' }
                      }}
                    >
                      <Delete sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
                    </IconButton>
                  </Box>
                </Box>
                {/* Options for multiple/checkbox */}
                {(q.type === "multiple" || q.type === "checkbox") && (
                  <Box sx={{ mt: { xs: 1.5, md: 2 } }}>
                    <Typography variant="body2" sx={{ 
                      color: '#666', 
                      mb: 1, 
                      fontWeight: 500,
                      fontSize: { xs: '0.75rem', md: '0.875rem' }
                    }}>
                      Options
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {(q.options && q.options.length > 0 ? q.options : ['']).map((opt, i) => (
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TextField
                            fullWidth
                            placeholder={`Option ${i + 1}`}
                            value={opt}
                            onChange={(e) => updateOption(q.id, i, e.target.value)}
                            variant="outlined"
                            size="small"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                              },
                              '& .MuiInputBase-input': {
                                fontSize: { xs: '0.875rem', md: '1rem' },
                              }
                            }}
                          />
                          <IconButton
                            onClick={() => removeOption(q.id, i)}
                            disabled={q.options?.length === 1}
                            sx={{
                              color: '#d32f2f',
                              width: { xs: '36px', md: '40px' },
                              height: { xs: '36px', md: '40px' },
                              '&:hover': { backgroundColor: '#ffebee' },
                              '&:disabled': { color: '#ccc' }
                            }}
                          >
                            <Close sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} />
                          </IconButton>
                        </Box>
                      ))}
                    </Box>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<Add />}
                      onClick={() => addOption(q.id)}
                      sx={{
                        mt: 1,
                        borderRadius: '8px',
                        textTransform: 'none',
                        backgroundColor: '#590178',
                        color: '#fff',
                        fontSize: { xs: '0.75rem', md: '0.875rem' },
                        py: { xs: 0.5, md: 0.5 },
                        px: { xs: 1.5, md: 2 },
                        '&:hover': {
                          backgroundColor: '#4a0166',
                        }
                      }}
                    >
                      Add Option
                    </Button>
                  </Box>
                )}
              </Paper>
            ))}
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between', 
            alignItems: { xs: 'stretch', sm: 'center' }, 
            gap: { xs: 2, sm: 0 },
            mb: { xs: 3, md: 4 } 
          }}>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={addQuestion}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                backgroundColor: '#590178',
                color: '#fff',
                px: { xs: 2, md: 3 },
                py: { xs: 1.25, md: 1 },
                fontWeight: 600,
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  backgroundColor: '#4a0166',
                }
              }}
            >
              Add Question
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={saving}
              sx={{
                backgroundColor: '#590178',
                color: '#fff',
                px: { xs: 2, md: 3 },
                py: { xs: 1.25, md: 1 },
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  backgroundColor: '#4a0166',
                },
                '&:disabled': {
                  backgroundColor: '#ccc',
                }
              }}
            >
              {saving ? 'Saving...' : 'Save Form'}
            </Button>
          </Box>

          {success && (
            <Alert severity="success" sx={{ 
              mb: { xs: 2, md: 3 }, 
              borderRadius: '8px',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              {success}
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ 
              mb: { xs: 2, md: 3 }, 
              borderRadius: '8px',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              {error}
            </Alert>
          )}
          
          {/* Live Preview */}
          <Divider sx={{ my: { xs: 4, md: 6 } }} />
          <Box>
            <Typography variant="h5" sx={{ 
              fontWeight: 600, 
              color: '#1a1a1a', 
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '1.25rem', md: '1.5rem' }
            }}>
              Live Preview
            </Typography>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: { xs: '12px', md: '16px' },
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
                p: { xs: 2, md: 4 },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
                {questions.length === 0 ? (
                  <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
                    <Typography variant="body1" sx={{ 
                      color: '#666',
                      fontSize: { xs: '0.875rem', md: '1rem' }
                    }}>
                      No questions added yet. Add some questions to see the preview.
                    </Typography>
                  </Box>
                ) : (
                  questions.map((q, idx) => (
                    <Paper
                      key={q.id}
                      elevation={0}
                      sx={{
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        border: '1px solid #e0e0e0',
                        p: { xs: 2, md: 3 },
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2 } }}>
                        <Typography variant="body1" sx={{ 
                          fontWeight: 500, 
                          color: '#1a1a1a',
                          fontSize: { xs: '0.875rem', md: '1rem' }
                        }}>
                          {q.label || `Question ${idx + 1}`}
                        </Typography>
                        
                        {q.type === "short" && (
                          <TextField
                            placeholder="Short answer text will appear here..."
                            disabled
                            fullWidth
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: '#f5f5f5',
                                borderRadius: '8px',
                              }
                            }}
                          />
                        )}
                        
                        {q.type === "paragraph" && (
                          <TextField
                            placeholder="Long form text will appear here..."
                            disabled
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: '#f5f5f5',
                                borderRadius: '8px',
                              }
                            }}
                          />
                        )}
                        
                        {q.type === "multiple" && (
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {q.options && q.options.length > 0 && q.options.some(opt => opt.trim() !== '') ? (
                              q.options
                                .filter(opt => opt.trim() !== '')
                                .map((opt, i) => (
                                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, borderRadius: '4px', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                    <input type="radio" name={`preview_${q.id}`} disabled style={{ color: '#590178' }} />
                                    <Typography variant="body2" sx={{ color: '#666' }}>{opt}</Typography>
                                  </Box>
                                ))
                            ) : (
                              <Typography variant="body2" sx={{ color: '#999', fontStyle: 'italic', p: 1 }}>
                                Add options to see them in the preview
                              </Typography>
                            )}
                          </Box>
                        )}
                        
                        {q.type === "checkbox" && (
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {q.options && q.options.length > 0 && q.options.some(opt => opt.trim() !== '') ? (
                              q.options
                                .filter(opt => opt.trim() !== '')
                                .map((opt, i) => (
                                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, borderRadius: '4px', '&:hover': { backgroundColor: '#f5f5f5' } }}>
                                    <input type="checkbox" disabled style={{ color: '#590178' }} />
                                    <Typography variant="body2" sx={{ color: '#666' }}>{opt}</Typography>
                                  </Box>
                                ))
                            ) : (
                              <Typography variant="body2" sx={{ color: '#999', fontStyle: 'italic', p: 1 }}>
                                Add options to see them in the preview
                              </Typography>
                            )}
                          </Box>
                        )}
                      </Box>
                    </Paper>
                  ))
                )}
              </Box>
            </Paper>
          </Box>

          {/* Delete Confirmation Dialog */}
          <DeleteConfirmationDialog
            open={openDeleteDialog}
            onClose={handleDeleteCancel}
            onConfirm={handleDeleteConfirm}
            title="Delete Question"
            itemName={questionToDelete ? questions.find(q => q.id === questionToDelete)?.label || `Question ${questions.findIndex(q => q.id === questionToDelete) + 1}` : undefined}
            loading={false}
          />
        </>
      )}
    </Box>
  );
}