import React, { useState, useEffect, Suspense } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useSearchParams } from "next/navigation";
import UserAnalytics from "../components/dashboard/useranalytics/page";
import TechnicalMetrics from "../components/dashboard/technicalmetric/page";
import Demographics from "../components/dashboard/demographic/page";
import EngagementMetrics from "../components/dashboard/engagementmetrices/page";
// import AcquisitionMatrix from "../components/dashboard/AcquistionMatrix/page";

const DashboardContent = () => {
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

const Dashboard = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: '100vh',
            backgroundColor: '#FFF2D5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
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
            Loading dashboard...
          </Typography>
        </Box>
      }
    >
      <DashboardContent />
    </Suspense>
  );
};

export default Dashboard;