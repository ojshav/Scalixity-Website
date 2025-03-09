'use client'

import * as React from 'react';
import Header from '@/src/app/components/Header/Header';
import SideMenu from '@/src/app/components/SideMenu';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import darkTheme from '@/src/app/Themes/darktheme';
import lightTheme from '@/src/app/Themes/lighttheme';
import Head from "next/head";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode');
    setIsDarkMode(savedTheme === 'dark');
  }, []);
  
  const theme = React.useMemo(
    () => createTheme(isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );
  
  const handleThemeToggle = () => {
    const newThemeMode = !isDarkMode;
    setIsDarkMode(newThemeMode);
    localStorage.setItem('themeMode', newThemeMode ? 'dark' : 'light');
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
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header isDarkMode={isDarkMode} onThemeToggle={handleThemeToggle} />
        
        {/* Main Content */}
        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <SideMenu />
          
          {/* Content Area */}
          <Box sx={{ flexGrow: 1, p: 3, overflowY: 'auto' }}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
