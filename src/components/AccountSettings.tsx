import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

const AccountSettings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <Box sx={{ width: "100%", px: 3, p: 3 }}>
      {/* Primera fila: Correo y Usuario */}
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(3, 1fr)" }}>
        <TextField
          disabled
          label="Correo electrónico"
          defaultValue="example@uniandes.edu.co"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          disabled
          label="Nombre o alias de usuario"
          defaultValue="example23"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Segunda fila: Contraseñas */}
      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr 1fr", mt: 2 }}>
        <TextField
          disabled
          label="Contraseña actual"
          type="password"
          defaultValue="********"
          variant="outlined"
        />
        <TextField
          disabled
          label="Nueva contraseña"
          placeholder="Ingresa una nueva contraseña"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          disabled
          label="Confirmar nueva contraseña"
          placeholder="Confirma la nueva contraseña"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Botones de acción */}
      <Box sx={{ maxWidth: 600, display: "flex", gap: 2, mt: 3 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#a1d8b9",
            color: "black",
            flex: 1,
            borderRadius: "20px",
            textTransform: "none",
          }}
          startIcon={<EditIcon />}
        >
          Cambiar contraseña
        </Button>
        <Button
          variant="contained"
          disabled
          sx={{
            backgroundColor: "#e0e0e0",
            color: "gray",
            flex: 1,
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Guardar Cambios
        </Button>
      </Box>

      {/* Switches */}
      <Box sx={{ borderTop: "1px solid #ddd", display: "flex", gap: 4, mt: 3, alignItems: "center", pt: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              color="warning"
            />
          }
          label="Activar notificaciones"
          labelPlacement="start"
        />
        <FormControlLabel
          control={
            <Switch
              checked={vibration}
              onChange={() => setVibration(!vibration)}
              color="warning"
            />
          }
          label="Vibración"
          labelPlacement="start"
        />
      </Box>

      {/* Zona de riesgo */}
      <Box sx={{ borderTop: "1px solid #ddd", mt: 3, pt: 3 }}>
        <Typography color="error" fontWeight="bold">
          Zona de riesgo
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            color="error"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#f44336",
              "&:hover": { backgroundColor: "#d32f2f" },
            }}
          >
            Cerrar Sesión
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: "bold",
              backgroundColor: "#f44336",
              "&:hover": { backgroundColor: "#d32f2f" },
            }}
          >
            Eliminar cuenta
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountSettings;
