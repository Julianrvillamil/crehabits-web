import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';

const StatsBarChart: React.FC = () => {
  const data = [60, 70, 80, 85, 75, 30]; // Datos por día de la semana
  const labels = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Mi Semana
      </Typography>
      <BarChart
        series={[{ data }]}
        xAxis={[{ data: labels, scaleType: 'band' }]}
        height={250}
      />
    </Box>
  );
};

export default StatsBarChart;
