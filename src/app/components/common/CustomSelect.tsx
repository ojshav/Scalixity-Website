'use client'
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  minWidth?: string | { xs?: string; md?: string };
  fullWidth?: boolean;
  id?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  value,
  onChange,
  options,
  minWidth = { xs: '100%', md: 180 },
  fullWidth = false,
  id,
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value);
  };

  const labelId = id || `${label.toLowerCase().replace(/\s+/g, '-')}-label`;

  return (
    <FormControl sx={{ minWidth, ...(fullWidth && { width: '100%' }) }}>
      <InputLabel id={labelId} sx={{ color: 'black', fontWeight: 500 }}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        value={value}
        label={label}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              marginTop: '8px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              '& .MuiMenuItem-root': {
                borderRadius: '8px',
                margin: '4px 8px',
                padding: '10px 16px',
                fontSize: '0.875rem',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(89, 1, 120, 0.08)',
                  transform: 'translateX(4px)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(89, 1, 120, 0.12)',
                  color: '#590178',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: 'rgba(89, 1, 120, 0.16)',
                  },
                },
              },
            },
          },
        }}
        sx={{
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.2s ease',
          height: '56px',
          '& .MuiOutlinedInput-root': {
            height: '56px',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: '1px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.15)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.2) !important',
            borderWidth: '1px !important',
            outline: 'none !important',
          },
          '&.Mui-focused': {
            outline: 'none !important',
            boxShadow: '0 6px 8px -1px rgba(0, 0, 0, 0.15), 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important',
          },
          '& .MuiSelect-select': {
            color: 'black',
            padding: '16.5px 14px',
            fontWeight: 500,
            height: '56px',
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiSelect-icon': {
            color: '#666',
            transition: 'transform 0.2s ease',
          },
          '&.Mui-focused .MuiSelect-icon': {
            transform: 'rotate(180deg)',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ fontWeight: value === option.value ? 600 : 400 }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;

