import React from "react";
import { Box, Typography, Switch, Button, Avatar } from "@mui/material";

const AlarmCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f8f8f8",
        overflow: "hidden",
        mt: 2,
      }}
    >
      {/* Encabezado con categoría */}
      <Box sx={{ display: "flex", alignItems: "center", p: 2, borderBottom: "1px solid #ccc" }}>
        <Avatar sx={{ bgcolor: "#6FCF97", width: 24, height: 24, mr: 2 }} />
        <Typography fontWeight="bold">Nombre categoría</Typography>
      </Box>

      {/* Contenido de la alarma */}
      <Box sx={{ml: 8, display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
        {/* Hora y nombre de la alarma */}
        <Box>
          <Typography variant="h5" fontWeight="bold">
            7:00 p.m
          </Typography>
          <Typography variant="body2">Nombre alarma</Typography>
        </Box>

        {/* Días de repetición */}
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {["L", "M", "M", "J", "V", "S", "D"].map((day, index) => (
            <Box
              key={index}
              sx={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: index === 3 ? "#D3D3D3" : "#F2994A",
                color: "white",
                fontSize: 12,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {day}
            </Box>
          ))}
        </Box>

        {/* Switch y botón eliminar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Switch color="warning" />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F2994A",
              color: "white",
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#E68A38" },
              mr: 8,
            }}
          >
            Eliminar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AlarmCard;
