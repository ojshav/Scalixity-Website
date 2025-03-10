import {ThemeOptions} from "@mui/material";

const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#9FA8DA', // Light purple/indigo from WhatWeOffer section
            contrastText: '#000000'
        },
        secondary: {
            main: '#2C2C2C', // Dark gray from Hero section
        },
        background: {
            default: '#F3F1EB', // Light beige/cream from Hero section
            paper: '#FFFFFF',  // White background for content areas
        },
        text: {
            primary: '#2C2C2C', // Dark gray text from Hero
            secondary: '#666666',
        },
        action: {
            active: '#9FA8DA',
            hover: '#f4f4f4', // Light gray hover from WhatWeOffer
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
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12, // Rounded cards like in WhatWeOffer section
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(128, 128, 128, 0.2)',
                }
            }
        }
    }
}

export default lightTheme;