"use client";

import AlarmCard from "@/components/alarma-card/Alarma-card";
import { Box, Typography, Divider, Container } from "@mui/material";

export default function AlarmasPage() {
  return (
    <Container maxWidth="lg">
      {/* Contenedor Principal */}
      <Box sx={{ mt: 4, textAlign: "left" }}>
        {/* Título */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Mis Alarmas
        </Typography>

        {/* Divider */}
        <Divider sx={{ borderColor: "#000", mb: 3 }} />
      </Box>

      {/* Aquí irán las alarmas más adelante */}
      <Box>
        <Typography variant="body1" color="textSecondary">
          Aquí aparecerán tus alarmas configuradas.
        </Typography>
      </Box>
      <AlarmCard />
    </Container>
  );
}
