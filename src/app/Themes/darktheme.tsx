import {ThemeOptions} from "@mui/material";

const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#590178', // Purple from new color theme
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#2C2C2C', // Dark gray from Hero section
        },
        background: {
            default: '#1E1E1E', // Dark background
            paper: '#2D2D2D', // Slightly lighter for content areas
        },
        text: {
            primary: '#FFFFFF', // White for main text
            secondary: '#E0E0E0', // Light gray for descriptions and secondary text
        },
        action: {
            active: '#590178',
            hover: '#6a0189', // Lighter version of purple
        },
        success: {
            main: '#4CAF50',
        },
        error: {
            main: '#F44336',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 300,
            fontFamily: '"serif", serif',
            color: '#FFFFFF', // White headings
        },
        h2: {
            fontWeight: 700,
            color: '#FFFFFF', // White headings
        },
        h3: {
            fontWeight: 700,
            color: '#FFFFFF', // White headings
        },
        h4: {
            fontWeight: 600,
            color: '#FFFFFF', // White headings
        },
        h5: {
            fontWeight: 600,
            color: '#FFFFFF', // White headings
        },
        h6: {
            fontWeight: 600,
            color: '#FFFFFF', // White headings
        },
        body1: {
            color: '#E0E0E0', // Light gray for descriptions
        },
        body2: {
            color: '#CCCCCC', // Slightly darker for secondary text
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 24, // Full rounded buttons like in your Hero section
                    textTransform: 'none',
                    backgroundColor: '#590178',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: '#6a0189',
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12, // Rounded cards like in WhatWeOffer section
                    boxShadow: '0px 4px 20px rgba(89, 1, 120, 0.3)',
                    backgroundColor: '#2D2D2D',
                    border: '1px solid rgba(89, 1, 120, 0.2)',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#590178',
                    color: '#FFFFFF',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6': {
                        color: '#FFFFFF',
                    },
                    '&.MuiTypography-body1, &.MuiTypography-body2': {
                        color: '#E0E0E0',
                    },
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#E0E0E0',
                    '&.Mui-focused': {
                        color: '#590178',
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#590178',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#590178',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'rgba(89, 1, 120, 0.1)',
                    }
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#590178',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#590178',
                    },
                    '&.Mui-focused': {
                        backgroundColor: 'rgba(89, 1, 120, 0.1)',
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: 'rgba(89, 1, 120, 0.2)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(89, 1, 120, 0.3)',
                        '&:hover': {
                            backgroundColor: 'rgba(89, 1, 120, 0.4)',
                        }
                    }
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#2D2D2D',
                    borderRight: '1px solid rgba(89, 1, 120, 0.2)',
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: '#E0E0E0',
                    '&:hover': {
                        backgroundColor: 'rgba(89, 1, 120, 0.2)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(89, 1, 120, 0.3)',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: 'rgba(89, 1, 120, 0.4)',
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: '#E0E0E0',
                    '&.Mui-selected': {
                        color: '#FFFFFF',
                    }
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: '#E0E0E0',
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#2D2D2D',
                    border: '1px solid rgba(89, 1, 120, 0.2)',
                }
            }
        }
    }
}

export default darkTheme;