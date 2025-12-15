'use client'
import React, { Suspense } from "react";
import Dashboard from "@/src/app/dashboard/Dashboard";
import { Box, CircularProgress } from "@mui/material";

const DashboardContent = () => {
  return <Dashboard />;
};

const Home = () => {
  return (
    <Suspense fallback={
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
        }}
      >
        <CircularProgress sx={{ color: '#590178' }} />
      </Box>
    }>
      <DashboardContent />
    </Suspense>
  );
};

export default Home;
