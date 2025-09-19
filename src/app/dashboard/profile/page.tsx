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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Chip,
  SelectChangeEvent
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
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
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">
          Admin Users Management
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<AddIcon />}
          onClick={() => setIsAddDialogOpen(true)}
        >
          Add New Admin
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Last Login</TableCell>
              <TableCell>Email Notifications</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  {user.first_name} {user.last_name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip 
                    label={user.role === 'super_admin' ? 'Super Admin' : 'Admin'} 
                    color={user.role === 'super_admin' ? 'secondary' : 'primary'} 
                    size="small" 
                  />
                </TableCell>
                <TableCell>{formatDate(user.last_login)}</TableCell>
                <TableCell>
                  {user.receive_emails ? 'Enabled' : 'Disabled'}
                </TableCell>
                <TableCell>
                  <IconButton 
                    color="error" 
                    onClick={() => handleOpenDeleteDialog(user.id)}
                    disabled={user.role === 'super_admin'} // Prevent deleting super admins
                    title={user.role === 'super_admin' ? "Super admins can't be deleted" : "Delete user"}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add User Dialog */}
      <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Admin User</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={newUser.username}
              onChange={handleNewUserChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={newUser.email}
              onChange={handleNewUserChange}
            />
            <Box display="flex" gap={2}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="firstName"
                label="First Name"
                id="firstName"
                value={newUser.firstName}
                onChange={handleNewUserChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                id="lastName"
                value={newUser.lastName}
                onChange={handleNewUserChange}
              />
            </Box>
            <Box display="flex" gap={2}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={newUser.password}
                onChange={handleNewUserChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={newUser.confirmPassword}
                onChange={handleNewUserChange}
              />
            </Box>
            <FormControl fullWidth margin="normal">
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={newUser.role}
                label="Role"
                onChange={handleNewUserChange}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="super_admin">Super Admin</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="receiveEmails"
                  checked={newUser.receiveEmails}
                  onChange={handleNewUserChange}
                  color="primary"
                />
              }
              label="Receive sales analytics emails"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddDialogOpen(false)} disabled={submitting}>
            Cancel
          </Button>
          <Button 
            onClick={handleAddUser} 
            variant="contained" 
            color="primary" 
            disabled={submitting}
          >
            {submitting ? <CircularProgress size={24} /> : 'Add User'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this admin user? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)} disabled={submitting}>
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteUser} 
            color="error" 
            variant="contained"
            disabled={submitting}
          >
            {submitting ? <CircularProgress size={24} /> : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification */}
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity} 
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminUsers;