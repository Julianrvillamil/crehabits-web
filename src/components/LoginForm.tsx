"use client";
import { Button, Typography, TextField, Box, Divider } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Iniciar Sesión:", form);
    router.push("/alarmas"); // Redirige tras iniciar sesión
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        textAlign: "center",
        mt: 1, // 🔹 Espaciado superior
      }}
    >
      {/* 🔹 Título */}
      <Typography variant="h2" sx={{ mb: 3, fontWeight: 600, fontSize: "2.8rem", color: "#000000" }}>
        Cre <span style={{ color: "#FF9800" }}>Habits</span>
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Correo electrónico"
          name="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          margin="dense"
          required
        />
        <TextField
          fullWidth
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          variant="outlined"
          margin="dense"
          required
        />

        {/* 🔹 Botón de Iniciar Sesión */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 3,
            borderRadius: "20px",
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            backgroundColor: "#FF9800",
            "&:hover": { backgroundColor: "#e68900" },
          }}
        >
          Iniciar Sesión
        </Button>
      </form>
      <Divider sx={{ my: 4 }} />
      {/* 🔹 Texto para registrarse */}
      <Typography variant="body1" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
        ¿No te has registrado?
      </Typography>

      {/* 🔹 Botón de Registro */}
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={() => router.push("/registrarse")}
        sx={{
          borderRadius: "20px",
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          backgroundColor: "#FBC02D",
          "&:hover": { backgroundColor: "#e6af1a" },
        }}
      >
        Registrarse
      </Button>
    </Box>
  );
}
