import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import LogInForm from "../Components/LogIn/LogInForm";
import MADALogo from "../Components/LogIn/MADALogo";

const LoginContainer = () => {
  return (
    <div className="login-container">
      <Container maxWidth="md">
        <Stack spacing={10}>
          <Typography
            className="login-title"
            align="center"
            sx={{
              fontWeight: "700",
              color: "#666666",
              fontFamily: "Poppins",
              fontSize: "24px",
              lineHeight: "36px",
              fontStyle: "Bold",
              fill: "solid",
              pt: 10,
            }}
          >
            {" "}
            MADA Meals À Partager
          </Typography>
          <LogInForm />
        </Stack>
      </Container>
    </div>
  );
};

export default LoginContainer;