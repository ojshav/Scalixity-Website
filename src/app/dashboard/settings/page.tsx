'use client'
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { Dashboard } from "@mui/icons-material";

const Settings = () => {
  const [showRevenue, setShowRevenue] = React.useState(true);
  const [showProfit, setShowProfit] = React.useState(true);
  const [showOrders, setShowOrders] = React.useState(true);
  const [showCustomers, setShowCustomers] = React.useState(true);

  const handleShowRevenueChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setShowRevenue(event.target.checked);
  };

  const handleShowProfitChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setShowProfit(event.target.checked);
  };

  const handleShowOrdersChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setShowOrders(event.target.checked);
  };

  const handleShowCustomersChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setShowCustomers(event.target.checked);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // TODO: handle form submission
    console.log('Settings saved:', {
      showRevenue,
      showProfit,
      showOrders,
      showCustomers,
    });
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5' }}>
      {/* Header */}
      <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 1,
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' }
            }}>
              Settings
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666',
              fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' }
            }}>
              Manage your dashboard preferences and configurations
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Settings Form */}
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Dashboard Features Card */}
          <Paper 
            elevation={0}
            sx={{
              backgroundColor: '#fff',
              borderRadius: { xs: '12px', md: '16px' },
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -4px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              p: { xs: 2, sm: 3, md: 4 }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 3 } }}>
              <Box sx={{ 
                p: { xs: 1, sm: 1.25, md: 1.5 },
                backgroundColor: '#f0e6f5', 
                borderRadius: { xs: '8px', md: '12px' },
                mr: { xs: 1.5, md: 2 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Dashboard sx={{ color: '#590178', fontSize: { xs: 24, sm: 26, md: 28 } }} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ 
                  fontWeight: 600, 
                  color: '#1a1a1a', 
                  mb: 0.5,
                  fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }
                }}>
                  Dashboard Features
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#666',
                  fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' }
                }}>
                  Choose which metrics to display on your dashboard
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: { xs: 2, md: 3 } }} />

            <FormControl component="fieldset" fullWidth>
              <FormGroup sx={{ gap: { xs: 1, sm: 1.5, md: 2 } }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showRevenue}
                      onChange={handleShowRevenueChange}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#590178',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#590178',
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ 
                        fontWeight: 500, 
                        color: '#1a1a1a',
                        fontSize: { xs: '0.9375rem', md: '1rem' }
                      }}>
                        Revenue
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: '#666', 
                        fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' }
                      }}>
                        Display revenue metrics and trends
                      </Typography>
                    </Box>
                  }
                  sx={{ 
                    ml: 0,
                    p: { xs: 1.5, md: 2 },
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#f8f9fa',
                    }
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showProfit}
                      onChange={handleShowProfitChange}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#590178',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#590178',
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ 
                        fontWeight: 500, 
                        color: '#1a1a1a',
                        fontSize: { xs: '0.9375rem', md: '1rem' }
                      }}>
                        Profit
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: '#666', 
                        fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' }
                      }}>
                        Display profit margins and analysis
                      </Typography>
                    </Box>
                  }
                  sx={{ 
                    ml: 0,
                    p: { xs: 1.5, md: 2 },
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#f8f9fa',
                    }
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showOrders}
                      onChange={handleShowOrdersChange}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#590178',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#590178',
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ 
                        fontWeight: 500, 
                        color: '#1a1a1a',
                        fontSize: { xs: '0.9375rem', md: '1rem' }
                      }}>
                        Orders
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: '#666', 
                        fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' }
                      }}>
                        Display order statistics and history
                      </Typography>
                    </Box>
                  }
                  sx={{ 
                    ml: 0,
                    p: { xs: 1.5, md: 2 },
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#f8f9fa',
                    }
                  }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={showCustomers}
                      onChange={handleShowCustomersChange}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#590178',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#590178',
                        },
                      }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="body1" sx={{ 
                        fontWeight: 500, 
                        color: '#1a1a1a',
                        fontSize: { xs: '0.9375rem', md: '1rem' }
                      }}>
                        Customers
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: '#666', 
                        fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '0.875rem' }
                      }}>
                        Display customer insights and demographics
                      </Typography>
                    </Box>
                  }
                  sx={{ 
                    ml: 0,
                    p: { xs: 1.5, md: 2 },
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#f8f9fa',
                    }
                  }}
                />
              </FormGroup>
            </FormControl>
          </Paper>

          {/* Save Button */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: { xs: 'stretch', md: 'flex-end' }, 
            mt: { xs: 1, md: 2 } 
          }}>
            <Button 
              type="submit"
              variant="contained"
              fullWidth={true}
              sx={{
                backgroundColor: '#590178',
                color: '#fff',
                px: { xs: 3, md: 4 },
                py: { xs: 1.25, md: 1.5 },
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: { xs: '0.9375rem', md: '1rem' },
                fontWeight: 600,
                boxShadow: '0 4px 6px -1px rgba(89, 1, 120, 0.3)',
                maxWidth: { xs: '100%', md: 'fit-content' },
                '&:hover': {
                  backgroundColor: '#4a0166',
                  boxShadow: '0 6px 8px -1px rgba(89, 1, 120, 0.4)',
                }
              }}
            >
              Save Settings
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;