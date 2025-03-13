import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Typography } from '@mui/material';

const StatsPieChart = () => {
  const data = [
    { id: 0, value: 82, label: 'Tomar agua' },
    { id: 1, value: 46, label: 'Salud' },
    { id: 2, value: 10, label: 'Pastillas' },
  ];

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Categorías
      </Typography>
      <PieChart series={[{ data }]} width={500} height={250} />
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        138 Alarmas
      </Typography>
    </Box>
  );
};

export default StatsPieChart;
