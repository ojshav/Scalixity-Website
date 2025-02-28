'use client'

import * as React from 'react';
import { Box } from '@mui/material';
import SideMenu from '@/src/app/components/SideMenu';
import Dashboard from '@/src/app/dashboard';
import Head from "next/head";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Scalixity - Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
        <SideMenu />
        <Box sx={{ flex: 1, p: 3, overflow: 'auto'}}>
          <Dashboard />
        </Box>
    
    </>
  );
}
