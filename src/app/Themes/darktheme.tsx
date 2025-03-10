import {ThemeOptions} from "@mui/material";

const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#9FA8DA', // Light purple/indigo from WhatWeOffer section
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
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
        },
        action: {
            active: '#9FA8DA',
            hover: '#B0BAE6', // Lighter version of primary
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
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12, // Rounded cards like in WhatWeOffer section
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                }
            }
        }
    }
}

export default darkTheme;