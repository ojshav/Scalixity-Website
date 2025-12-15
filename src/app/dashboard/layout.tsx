'use client'
import * as React from 'react';
import Header from '@/src/app/components/Header/Header';
import SideMenu from '@/src/app/components/SideMenu';
import { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import lightTheme from '@/src/app/Themes/lighttheme';
import Head from "next/head";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const theme = React.useMemo(
    () => createTheme(lightTheme),
    []
  );
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
        bgcolor: '#FFF2D5',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw'
      }}>
        {/* Sticky Header */}
        <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
          <Header 
            onMenuToggle={toggleMobileMenu}
            isMobile={isMobile}
          />
        </Box>
        
        {/* Main Content */}
        <Box sx={{ 
          display: 'flex', 
          flex: 1,
          overflow: 'hidden',
          overflowX: 'hidden',
          width: '100%',
          maxWidth: '100%',
          position: 'relative'
        }}>
          {/* Side Menu */}
          <SideMenu 
            isMobile={isMobile} 
            isTablet={isTablet} 
            isMobileMenuOpen={isMobileMenuOpen}
            onMenuClose={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Content Area - Only this scrolls */}
          <Box 
            data-lenis-prevent
            className="hide-scrollbar-desktop"
            sx={{ 
              flexGrow: 1, 
              p: { xs: 2, sm: 3, md: 6 },
              bgcolor: '#FFF2D5',
              overflowY: 'auto',
              overflowX: 'hidden',
              height: '100%',
              width: '100%',
              maxWidth: '100%',
              transition: 'all 0.3s ease',
              // Adjust margin for tablet when sidebar is present
              ml: { xs: 0, sm: 0, md: 0 },
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}