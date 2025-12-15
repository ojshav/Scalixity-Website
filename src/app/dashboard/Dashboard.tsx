import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useSearchParams } from "next/navigation";
import UserAnalytics from "../components/dashboard/useranalytics/page";
import TechnicalMetrics from "../components/dashboard/technicalmetric/page";
import Demographics from "../components/dashboard/demographic/page";
import EngagementMetrics from "../components/dashboard/engagementmetrices/page";
// import AcquisitionMatrix from "../components/dashboard/AcquistionMatrix/page";

const Dashboard = () => {
  const searchParams = useSearchParams();
  const viewParam = searchParams.get('view');
  const selectedComponent = viewParam || "userAnalytics";
  const [isLoading, setIsLoading] = useState(true);

  // Initial load and when view changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedComponent]);

  // Render the selected component
  const renderComponent = () => {
    switch (selectedComponent) {
      case "userAnalytics":
        return <UserAnalytics />;
      // case "acquisitionMatrix":
      //   return <AcquisitionMatrix />;
      case "engagementMetrics":
        return <EngagementMetrics />;
      case "technicalMetrics":
        return <TechnicalMetrics />;
      case "demographics":
        return <Demographics />;
      default:
        return <UserAnalytics />;
    }
  };

  // Get display name for current view
  const getViewName = () => {
    switch (selectedComponent) {
      case "userAnalytics":
        return "User Analytics";
      case "engagementMetrics":
        return "Engagement Metrics";
      case "technicalMetrics":
        return "Technical Metrics";
      case "demographics":
        return "Demographics";
      default:
        return "User Analytics";
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#FFF2D5' }}>
      
      {/* Render the selected component */}
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            gap: 2
          }}
        >
          <CircularProgress
            size={60}
            sx={{
              color: '#590178',
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontWeight: 500,
            }}
          >
            Loading dashboard data...
          </Typography>
        </Box>
      ) : (
        renderComponent()
      )}
    </Box>
  );
};

export default Dashboard;