'use client'
import '@/src/app/globals.css';
import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Chip,
  SelectChangeEvent,
  Card,
  CardContent,
  Divider,
  Stack
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CustomSelect from '@/src/app/components/common/CustomSelect';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';
const AdminUsers = () => {
  interface User {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    last_login: string;
    receive_emails: boolean;
  }
  
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    severity: 'error' | 'warning' | 'info' | 'success';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    role: 'admin',
    receiveEmails: false
  });

  const fetchAdminUsers = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${baseURL}/api/admin/users`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setUsers(data.data);
        } else {
          showNotification(data.message || 'Failed to load users', 'error');
        }
      } else {
        const errorData = await response.json();
        if (errorData.expired) {
          // Session expired, redirect to login
          localStorage.removeItem('adminToken');
          window.location.href = '/login';
        } else {
          showNotification(errorData.message || 'Failed to load users', 'error');
        }
      }
    } catch (error) {
      console.error('Error fetching admin users:', error);
      showNotification('Network error while loading users', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdminUsers();
  }, [fetchAdminUsers]);

  const handleAddUser = async () => {
    // Validate form
    if (!newUser.username || !newUser.email || !newUser.password) {
      showNotification('Username, email, and password are required', 'error');
      return;
    }

    if (newUser.password !== newUser.confirmPassword) {
      showNotification("Passwords don't match", 'error');
      return;
    }

    setSubmitting(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${baseURL}/api/admin/users`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: newUser.username,
          email: newUser.email,
          password: newUser.password,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          role: newUser.role,
          receiveEmails: newUser.receiveEmails
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        showNotification('Admin user created successfully', 'success');
        setIsAddDialogOpen(false);
        // Reset form
        setNewUser({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          role: 'admin',
          receiveEmails: false
        });
        // Refresh user list
        fetchAdminUsers();
      } else if (data.expired) {
        // Session expired, redirect to login
        localStorage.removeItem('adminToken');
        window.location.href = '/login';
      } else {
        showNotification(data.message || 'Failed to create user', 'error');
      }
    } catch (error) {
      console.error('Error creating admin user:', error);
      showNotification('Network error while creating user', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!selectedUserId) return;

    setSubmitting(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${baseURL}/api/admin/users/${selectedUserId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok && data.success) {
        showNotification('Admin user deleted successfully', 'success');
        setIsDeleteDialogOpen(false);
        // Refresh user list
        fetchAdminUsers();
      } else if (data.expired) {
        // Session expired, redirect to login
        localStorage.removeItem('adminToken');
        window.location.href = '/login';
      } else {
        showNotification(data.message || 'Failed to delete user', 'error');
      }
    } catch (error) {
      console.error('Error deleting admin user:', error);
      showNotification('Network error while deleting user', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenDeleteDialog = (userId: string) => {
    setSelectedUserId(userId);
    setIsDeleteDialogOpen(true);
  };

  const handleNewUserChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    const type = (event.target as HTMLInputElement).type;
    const checked = type === 'checkbox' ? (event.target as HTMLInputElement).checked : undefined;
    setNewUser(prev => ({
      ...prev,
      [name]: checked !== undefined ? checked : value
    }));
  };

  const handleRoleChange = (value: string) => {
    setNewUser(prev => ({
      ...prev,
      role: value
    }));
  };

  const showNotification = (message: string, severity: 'error' | 'warning' | 'info' | 'success' = 'success') => {
    setNotification({
      open: true,
      message,
      severity
    });
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({
      ...prev,
      open: false
    }));
  };

  const formatDate = (dateString: string | number | Date) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 1.5, sm: 2.5, md: 0 } }}>
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
            sx={{
              color: '#590178',
              width: { xs: '50px !important', md: '60px !important' },
              height: { xs: '50px !important', md: '60px !important' }
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
            Loading users...
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5', px: { xs: 1.5, sm: 2, md: 0 } }}>
      {/* Header */}
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' }, 
          justifyContent: 'space-between', 
          gap: { xs: 2, md: 0 },
          mb: 2 
        }}>
          <Box>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 1,
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
            }}>
              Admin Users Management
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}>
              Manage and track admin users and their permissions
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            onClick={() => setIsAddDialogOpen(true)}
            sx={{
              backgroundColor: '#590178',
              color: '#fff',
              px: { xs: 2, md: 3 },
              py: { xs: 1.25, md: 1.5 },
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
            Add New Admin
          </Button>
        </Box>
      </Box>

      {/* Mobile Card View - Hidden on tablet and above */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 600, 
          color: '#1a1a1a', 
          mb: 2,
          fontSize: '1rem'
        }}>
          All Admin Users
        </Typography>
        
        {users.length === 0 ? (
          <Paper 
            elevation={0}
            sx={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
              p: 4,
              textAlign: 'center'
            }}
          >
            <Typography variant="body1" sx={{ color: '#666', fontSize: '0.875rem' }}>
              No admin users yet. Click &quot;Add New Admin&quot; to create one.
            </Typography>
          </Paper>
        ) : (
          <Stack spacing={2}>
            {users.map((user) => (
              <Card 
                key={user.id}
                elevation={0}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
                  overflow: 'hidden'
                }}
              >
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>                  {/* Header with Username and Delete Button */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1a1a1a', fontSize: '1rem', mb: 0.5 }}>
                        {user.username}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', fontSize: '0.875rem' }}>
                        {user.first_name} {user.last_name}
                      </Typography>
                    </Box>
                    <IconButton 
                      onClick={() => handleOpenDeleteDialog(user.id)}
                      disabled={user.role === 'super_admin'}
                      title={user.role === 'super_admin' ? "Super admins can't be deleted" : "Delete user"}
                      size="small"
                      sx={{
                        color: '#d32f2f',
                        '&:hover': {
                          backgroundColor: '#ffebee',
                        },
                        '&:disabled': {
                          opacity: 0.5
                        }
                      }}
                    >
                      <DeleteIcon sx={{ fontSize: '1.25rem' }} />
                    </IconButton>
                  </Box>

                  <Divider sx={{ my: 1.5 }} />

                  {/* User Details */}
                  <Stack spacing={1.5}>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#999', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem', mt: 0.5 }}>
                        {user.email}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Role
                        </Typography>
                        <Box sx={{ mt: 0.5 }}>
                          <Chip 
                            label={user.role === 'super_admin' ? 'Super Admin' : 'Admin'} 
                            size="small"
                            sx={{
                              backgroundColor: user.role === 'super_admin' ? '#f0e6f5' : '#e3f2fd',
                              color: user.role === 'super_admin' ? '#590178' : '#1976d2',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              height: '24px'
                            }}
                          />
                        </Box>
                      </Box>

                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="caption" sx={{ color: '#999', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Notifications
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#1a1a1a', fontSize: '0.875rem', mt: 0.5 }}>
                          {user.receive_emails ? 'Enabled' : 'Disabled'}
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <Typography variant="caption" sx={{ color: '#999', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Last Login
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', fontSize: '0.8rem', mt: 0.5 }}>
                        {formatDate(user.last_login)}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Box>

      {/* Desktop Table View - Hidden on mobile */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Paper 
          elevation={0}
          sx={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ 
              fontWeight: 600, 
              color: '#1a1a1a', 
              mb: 3,
              fontSize: '1.25rem'
            }}>
              All Admin Users
            </Typography>
            
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#590178' }}>
                    <TableCell sx={{ 
                      fontWeight: 600, 
                      color: 'white', 
                      fontSize: '0.875rem', 
                      borderTopLeftRadius: '8px',
                      py: 2,
                      px: 2
                    }}>Username</TableCell>
                    <TableCell sx={{ 
                      fontWeight: 600, 
                      color: 'white', 
                      fontSize: '0.875rem',
                      py: 2,
                      px: 2
                    }}>Name</TableCell>
                    <TableCell sx={{ 
                      fontWeight: 600, 
                      color: 'white', 
                      fontSize: '0.875rem',
                      py: 2,
                      px: 2
                    }}>Email</TableCell>
                    <TableCell sx={{ 
                      fontWeight: 600, 
                      color: 'white', 
                      fontSize: '0.875rem',
                      py: 2,
                      px: 2
                    }}>Role</TableCell>
                    <TableCell sx={{ 
                      fontWeight: 600, 
                      color: 'white', 
                      fontSize: '0.875rem',
                      py: 2,
                      px: 2
                    }}>Last Login</TableCell>
                    <TableCell sx={{ 
                      fontWeight: 600, 
                      color: 'white', 
                      fontSize: '0.875rem',
                      py: 2,
                      px: 2
                    }}>Email Notifications</TableCell>
                    <TableCell sx={{ 
                      fontWeight: 600, 
                      color: 'white', 
                      fontSize: '0.875rem', 
                      borderTopRightRadius: '8px',
                      py: 2,
                      px: 2
                    }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} sx={{ 
                        textAlign: 'center', 
                        py: 8
                      }}>
                        <Typography variant="body1" sx={{ 
                          color: '#666',
                          fontSize: '1rem'
                        }}>
                          No admin users yet. Click &quot;Add New Admin&quot; to create one.
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    users.map((user) => (
                      <TableRow 
                        key={user.id}
                        sx={{
                          '&:hover': {
                            backgroundColor: '#f8f9fa',
                          }
                        }}
                      >
                        <TableCell sx={{ 
                          fontWeight: 500, 
                          color: '#1a1a1a',
                          fontSize: '0.875rem',
                          py: 2,
                          px: 2
                        }}>{user.username}</TableCell>
                        <TableCell sx={{ 
                          fontWeight: 500, 
                          color: '#1a1a1a',
                          fontSize: '0.875rem',
                          py: 2,
                          px: 2
                        }}>
                          {user.first_name} {user.last_name}
                        </TableCell>
                        <TableCell sx={{ 
                          color: '#666',
                          fontSize: '0.875rem',
                          py: 2,
                          px: 2
                        }}>{user.email}</TableCell>
                        <TableCell sx={{ 
                          py: 2,
                          px: 2
                        }}>
                          <Chip 
                            label={user.role === 'super_admin' ? 'Super Admin' : 'Admin'} 
                            size="small"
                            sx={{
                              backgroundColor: user.role === 'super_admin' ? '#f0e6f5' : '#e3f2fd',
                              color: user.role === 'super_admin' ? '#590178' : '#1976d2',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              height: '24px'
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ 
                          color: '#666', 
                          fontSize: '0.875rem',
                          py: 2,
                          px: 2
                        }}>{formatDate(user.last_login)}</TableCell>
                        <TableCell sx={{ 
                          color: '#666', 
                          fontSize: '0.875rem',
                          py: 2,
                          px: 2
                        }}>
                          {user.receive_emails ? 'Enabled' : 'Disabled'}
                        </TableCell>
                        <TableCell sx={{ 
                          py: 2,
                          px: 2
                        }}>
                          <IconButton 
                            onClick={() => handleOpenDeleteDialog(user.id)}
                            disabled={user.role === 'super_admin'}
                            title={user.role === 'super_admin' ? "Super admins can't be deleted" : "Delete user"}
                            size="medium"
                            sx={{
                              color: '#d32f2f',
                              '&:hover': {
                                backgroundColor: '#ffebee',
                              },
                              '&:disabled': {
                                opacity: 0.5
                              }
                            }}
                          >
                            <DeleteIcon sx={{ fontSize: '1.5rem' }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
      </Box>

      {/* Add User Dialog */}
      <Dialog 
        open={isAddDialogOpen} 
        onClose={() => setIsAddDialogOpen(false)} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: '12px', sm: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            m: { xs: 2, sm: 2 },
            maxHeight: { xs: 'calc(100vh - 32px)', sm: 'calc(100vh - 64px)' },
            width: { xs: 'calc(100% - 32px)', sm: 'auto' },
            maxWidth: { xs: 'calc(100% - 32px)', sm: '600px' }
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
          pr: 1,
          fontSize: { xs: '1.25rem', md: '1.5rem' },
          px: { xs: 1.5, sm: 3 },
          pt: { xs: 1.5, sm: 3 }
        }}>
          Add New Admin User
          <IconButton
            onClick={() => setIsAddDialogOpen(false)}
            size="small"
            sx={{
              color: '#666',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                color: '#1a1a1a',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ 
          overflowY: 'auto',
          maxHeight: { xs: 'calc(100vh - 250px)', sm: 'calc(100vh - 200px)' },
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          px: { xs: 1.5, sm: 3 },
          pr: { xs: 1.5, sm: 3 },
        }}>
          <Typography variant="body2" sx={{ 
            color: '#666', 
            mb: 3,
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}>
            Enter admin user details below.
          </Typography>
          <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2.5, md: 3 } }}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={newUser.username}
              onChange={handleNewUserChange}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={newUser.email}
              onChange={handleNewUserChange}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
            />
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2 
            }}>
              <TextField
                required
                fullWidth
                name="firstName"
                label="First Name"
                id="firstName"
                value={newUser.firstName}
                onChange={handleNewUserChange}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
              />
              <TextField
                required
                fullWidth
                name="lastName"
                label="Last Name"
                id="lastName"
                value={newUser.lastName}
                onChange={handleNewUserChange}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
              />
            </Box>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2 
            }}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={newUser.password}
                onChange={handleNewUserChange}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
              />
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={newUser.confirmPassword}
                onChange={handleNewUserChange}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                }
              }}
              />
            </Box>
            <CustomSelect
              label="Role"
              value={newUser.role}
              onChange={handleRoleChange}
              options={[
                { value: 'admin', label: 'Admin' },
                { value: 'super_admin', label: 'Super Admin' }
              ]}
              fullWidth={true}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="receiveEmails"
                  checked={newUser.receiveEmails}
                  onChange={handleNewUserChange}
                  sx={{
                    color: '#590178',
                    '&.Mui-checked': {
                      color: '#590178',
                    }
                  }}
                />
              }
              label="Receive sales analytics emails"
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ 
          px: { xs: 1.5, sm: 3 }, 
          pb: { xs: 1.5, sm: 3 }, 
          justifyContent: 'flex-end',
          gap: { xs: 1, sm: 0 }
        }}>
          <Button 
            onClick={handleAddUser} 
            variant="contained" 
            disabled={submitting}
            sx={{
              backgroundColor: '#590178',
              color: '#fff',
              px: { xs: 2.5, md: 3 },
              py: { xs: 1, md: 1 },
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '0.875rem', md: '1rem' },
              '&:hover': {
                backgroundColor: '#4a0166',
              },
              '&:disabled': {
                backgroundColor: '#ccc',
              }
            }}
          >
            {submitting ? 'Processing...' : 'Add User'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog 
        open={isDeleteDialogOpen} 
        onClose={() => setIsDeleteDialogOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: { xs: '12px', md: '16px' },
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            m: { xs: 2, sm: 4 },
            width: { xs: 'calc(100% - 32px)', sm: 'auto' },
            maxWidth: { xs: 'calc(100% - 32px)', sm: '400px' }
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
          pr: 1,
          fontSize: { xs: '1.125rem', md: '1.25rem' },
          px: { xs: 1.5, sm: 3 },
          pt: { xs: 1.5, sm: 3 }
        }}>
          Confirm Delete
          <IconButton
            onClick={() => setIsDeleteDialogOpen(false)}
            size="small"
            sx={{
              color: '#666',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                color: '#1a1a1a',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ 
          px: { xs: 1.5, sm: 3 },
          pr: { xs: 1.5, sm: 3 }
        }}>
          <Typography sx={{ 
            color: '#666',
            fontSize: { xs: '0.875rem', md: '1rem' }
          }}>
            Are you sure you want to delete this admin user? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ 
          px: { xs: 1.5, sm: 3 }, 
          pb: { xs: 1.5, sm: 3 }, 
          justifyContent: 'flex-end',
          gap: { xs: 1, sm: 0 }
        }}>
          <Button 
            onClick={handleDeleteUser} 
            variant="contained"
            disabled={submitting}
            sx={{
              backgroundColor: '#d32f2f',
              color: '#fff',
              px: { xs: 2.5, md: 3 },
              py: { xs: 1, md: 1 },
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '0.875rem', md: '1rem' },
              '&:hover': {
                backgroundColor: '#c62828',
              },
              '&:disabled': {
                backgroundColor: '#ccc',
              }
            }}
          >
            {submitting ? 'Processing...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification */}
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          bottom: { xs: 16, sm: 24 },
          left: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 }
        }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity} 
          sx={{ 
            width: '100%',
            fontSize: { xs: '0.875rem', md: '1rem' },
            '& .MuiAlert-icon': {
              fontSize: { xs: '1.25rem', md: '1.5rem' }
            }
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminUsers;