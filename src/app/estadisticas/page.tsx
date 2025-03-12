"use client";

import { Box, Typography, Divider, Container } from "@mui/material";

export default function AlarmasPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, textAlign: "left" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Mis Reportes de Alarma
        </Typography>

        <Divider sx={{ borderColor: "#000", mb: 3 }} />
      </Box>

      <Box>
        <Typography variant="body1" color="textSecondary">
          Aquí aparecerán tus estadisticas de acuerdo a como utilizas tus alarmas.
        </Typography>
      </Box>
    </Container>
  );
}
