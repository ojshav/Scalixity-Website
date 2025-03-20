'use client'
import * as React from 'react';
import Header from '@/src/app/components/Header/Header';
import SideMenu from '@/src/app/components/SideMenu';
import { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import darkTheme from '@/src/app/Themes/darktheme';
import lightTheme from '@/src/app/Themes/lighttheme';
import Head from "next/head";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    setIsDarkMode(savedTheme === 'dark');
  }, []);
  
  const theme = React.useMemo(
    () => createTheme(isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const handleThemeToggle = () => {
    const newThemeMode = !isDarkMode;
    setIsDarkMode(newThemeMode);
    localStorage.setItem('themeMode', newThemeMode ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Scalixity - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Layout Container */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        bgcolor: theme.palette.background.default
      }}>
        <Header 
          isDarkMode={isDarkMode} 
          onThemeToggle={handleThemeToggle} 
          onMenuToggle={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        
        {/* Main Content */}
        <Box sx={{ 
          display: 'flex', 
          flex: 1, 
          overflow: 'hidden',
          flexDirection: { xs: 'column', sm: 'row' }
        }}>
          {/* Side Menu */}
          <SideMenu 
            isMobile={isMobile} 
            isTablet={isTablet} 
            isMobileMenuOpen={isMobileMenuOpen}
            onMenuClose={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Content Area */}
          <Box sx={{ 
            flexGrow: 1, 
            p: { xs: 2, sm: 3 },
            overflowY: 'auto',
            bgcolor: theme.palette.background.paper,
            width: { xs: '100%', sm: 'calc(100% - 64px)' },
            ml: { xs: 0, sm: '64px' },
            transition: 'all 0.3s ease'
          }}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}