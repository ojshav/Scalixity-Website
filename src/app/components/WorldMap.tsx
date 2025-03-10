'use client';

import React from 'react';
import { Map, Marker } from 'pigeon-maps';

interface CountryData {
  id: string;
  country: string;
  users: number; // Ensure this is always a number in your data
  value: number;
}

const WorldMap = ({ data }: { data: CountryData[] }) => {
  const maxUsers = Math.max(...data.map(country => country.users || 0)); // Handle potential undefined

  // Function to get color intensity based on user count
  const getColorIntensity = (users: number) => {
    const normalizedValue = users / maxUsers;
    return `rgba(53, 111, 183, ${0.2 + normalizedValue * 0.8})`; // Blue with varying opacity
  };

  // Simplified coordinates for country centroids
  const countryCoordinates: { [key: string]: [number, number] } = {
    'US': [37.0902, -95.7129],
    'IN': [20.5937, 78.9629],
    'GB': [55.3781, -3.4360],
    'DE': [51.1657, 10.4515],
    'CA': [56.1304, -106.3468],
    'AU': [-25.2744, 133.7751],
    'FR': [46.6031, 1.8883],
    'BR': [-14.2350, -51.9253],
    'JP': [36.2048, 138.2529],
    'MX': [23.6345, -102.5528],
    'IT': [41.8719, 12.5674],
    'ES': [40.4637, -3.7492],
    'KR': [35.9078, 127.7669],
    'NL': [52.1326, 5.2913],
    'RU': [61.5240, 105.3188],
    'Other': [0, 0],
  };

  return (
    <div className="relative">
      <Map
        height={400}
        defaultCenter={[0, 0]}
        defaultZoom={2}
        provider={(x, y, z) => `https://tile.openstreetmap.org/${z}/${x}/${y}.png`}
      >
        {data.map((country) => {
          const coords = countryCoordinates[country.id];
          if (!coords || country.id === 'Other') return null;
          return (
            <Marker
              key={country.id}
              anchor={coords}
              width={Math.min(50, 20 + (country.users / maxUsers) * 30)}
              color={getColorIntensity(country.users)}
            />
          );
        })}
      </Map>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
        <text className="text-sm font-semibold text-gray-500" fill="#333">Top Visitor Locations</text>
        {data.slice(0, 5).map((country, index) => (
          <div key={index} className="flex items-center mt-2  text-gray-500">
            <div
              style={{ backgroundColor: getColorIntensity(country.users) }}
              className="w-4 h-4 mr-2"
            />
            {/* Add type guard or fallback for users */}
            <span className="text-xs">
              {country.country} ({typeof country.users === 'number' ? country.users.toLocaleString() : 'N/A'})
            </span>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="absolute bottom-0 right-0 text-xs text-gray-500 p-1">
        
      </div>
    </div>
  );
};

export default WorldMap;