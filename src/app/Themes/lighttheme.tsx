import {ThemeOptions} from "@mui/material";

const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#590178', // Purple from new color theme
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#2C2C2C', // Dark gray from Hero section
        },
        background: {
            default: '#FFF2D5', // Cream from new color theme
            paper: '#FFFFFF',  // White background for content areas
        },
        text: {
            primary: '#590178', // Purple text from new color theme
            secondary: '#666666',
        },
        action: {
            active: '#590178',
            hover: '#FFF2D5', // Cream hover
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
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 700,
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
                        backgroundColor: '#4a0166',
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12, // Rounded cards like in WhatWeOffer section
                    boxShadow: '0px 4px 20px rgba(89, 1, 120, 0.1)',
                    border: '1px solid rgba(89, 1, 120, 0.2)',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#590178',
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: '#000000',
                    },
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: '#000000',
                    },
                }
            }
        }
    }
}

export default lightTheme;