"use client";

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { text: "Alarmas", icon: <DashboardIcon />, path: "/alarmas" },
  { text: "Estadísticas", icon: <BarChartIcon />, path: "/estadisticas" },
  { text: "Configuración", icon: <SettingsIcon />, path: "/configuracion-cuenta" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#FAFAFA", // Color de fondo del Sidebar
        },
      }}
    >
      <Box sx={{ p: 2, fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
      <Typography variant="h2" sx={{ mb: 0, fontWeight: 600, fontSize: "1.5rem", color: "#000000" }}>
        Cre <span style={{ color: "#FF9800" }}>Habits</span>
      </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => {
          const isActive = pathname === item.path; // Verifica si la ruta es la actual
          
          return (
            <ListItemButton
              key={index}
              onClick={() => router.push(item.path)}
              sx={{
                mb: 1,
                borderRadius: "25px",
                backgroundColor: isActive ? "#FEE9A8" : "#F5F5F5", // Activo vs Inactivo
                "&:hover": {
                  backgroundColor: "#FFD700",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px", color: isActive ? "#000" : "#666" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  fontWeight: "bold",
                  color: isActive ? "#000" : "#666",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}
