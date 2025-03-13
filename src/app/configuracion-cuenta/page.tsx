"use client";

import { Box, Typography, Divider, Container } from "@mui/material";
import AccountSettings from '../../components/AccountSettings';

export default function AlarmasPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, textAlign: "left" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Configuración de cuenta
        </Typography>

        <Divider sx={{ borderColor: "#000", mb: 3 }} />
      </Box>

      <Box>
        <Typography variant="body1" color="textSecondary">
          Aquí esta la configuracion que necesitas realizar para tu cuenta.
        </Typography>
      </Box>

      <AccountSettings />
    </Container>
  );
}
