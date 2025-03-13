import React from "react";
import { Dayjs } from "dayjs";
import {
  Box,
  Grid,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SelectChangeEvent } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StatsBarChart from "./StatsBarChart";
import StatsPieChart from "./StatsPieChart";

const StatsDashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Filtros */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 2, mb: 8 }}>
        <DatePicker
          label="Rango de tiempo"
          value={selectedDate}
          onChange={handleDateChange}
          slotProps={{ textField: { variant: "outlined" } }}
        />
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>Categoría</InputLabel>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            label="Categoría"
          >
            <MenuItem value="Tomar agua">Tomar agua</MenuItem>
            <MenuItem value="Salud">Salud</MenuItem>
            <MenuItem value="Pastillas">Pastillas</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f5d491",
            color: "black",
            boxShadow: 3,
            height: "56px",
            ml: 16,
            "&:hover": {
              backgroundColor: "#f5d491",
            },
          }}
          startIcon={<SearchIcon />}
        >
          Aplicar filtros
        </Button>
      </Box>

      {/* Gráficos */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StatsBarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <StatsPieChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsDashboard;
