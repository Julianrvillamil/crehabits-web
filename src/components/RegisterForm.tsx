"use client";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.termsAccepted) {
      alert("Debes aceptar los términos para continuar.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    console.log("Registro exitoso:", form);
    router.push("/alarmas"); // Redirige tras registrarse
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        mx: "auto",
        textAlign: "center",
        mt: 1,
      }}
    >
      <Typography variant="h4" sx={{ mb: 0, fontWeight: 600, fontSize: "1.1rem" }}>
        <span style={{ color: "#000000" }}>Registrate con</span>
      </Typography>
      <Typography variant="h1" sx={{ mb: 3, fontWeight: 700, fontSize: "2.8rem" }}>
        <span style={{ color: "#000000" }}>Cre</span> <span style={{ color: "#FF9800" }}>Habits</span>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Correo electrónico"
          name="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
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
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Confirmación de contraseña"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
        />
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, textAlign: "left" }}>
          <Checkbox
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleChange}
            sx={{ color: "#FF9800", mr: 1 }} // 🔹 Ajustar espaciado del checkbox
          />
          <Typography variant="body2">
            Al registrarte, autorizas a CreHabits a usar tus datos personales para brindarte nuestros servicios y cimplir con obligaciones legales. Puedes consultar, actualizar o eliminar tu iformación en cualquier momento. Al continuar aceptas estos terminos.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => router.push("/login")}
            sx={{ borderRadius: "20px", px: 4, minWidth: "150px" }}
          >
            Volver
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", px: 4, minWidth: "120px" }}
          >
            Registrarse
          </Button>
        </Box>
      </form>
    </Box>
  );
};

