import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import UserAnalytics from "../components/dashboard/useranalytics/page";
import TechnicalMetrics from "../components/dashboard/technicalmetric/page";
import Demographics from "../components/dashboard/demographic/page";
import EngagementMetrics from "../components/dashboard/engagementmetrices/page";
// import AcquisitionMatrix from "../components/dashboard/AcquistionMatrix/page";

const Dashboard = () => {
  // State to track which component is selected
  const [selectedComponent, setSelectedComponent] = useState("userAnalytics");

  // Handle dropdown change
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedComponent(event.target.value);
  };

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
    <Box>
      {/* Dropdown menu */}
      <FormControl fullWidth sx={{ mb: 3, mt: 2 }}>
        <InputLabel id="dashboard-component-select-label">Dashboard Component</InputLabel>
        <Select
          labelId="dashboard-component-select-label"
          id="dashboard-component-select"
          value={selectedComponent}
          label="Dashboard Component"
          onChange={handleChange}
        >
          <MenuItem value="userAnalytics">User Analytics</MenuItem>
          {/* <MenuItem value="acquisitionMatrix">Acquisition Matrix</MenuItem> */}
          <MenuItem value="engagementMetrics">Engagement Metrics</MenuItem>
          <MenuItem value="technicalMetrics">Technical Metrics</MenuItem>
          <MenuItem value="demographics">Demographics</MenuItem>
        </Select>
      </FormControl>

      {/* Render the selected component */}
      {renderComponent()}
    </Box>
  );
};

export default Dashboard;