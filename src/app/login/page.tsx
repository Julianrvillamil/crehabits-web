import { Box, Container } from "@mui/material";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
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
        <LoginForm />
      </Box>
    </Container>
  );
}
