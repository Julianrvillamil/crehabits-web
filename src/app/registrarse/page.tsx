import { Box, Container } from "@mui/material";
import { RegisterForm } from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RegisterForm />
      </Box>
    </Container>
  );
}