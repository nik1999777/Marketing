import React from "react";
import Login from "../../features/Auth/Login";
import { Box, Typography } from "@mui/material";

const Auth: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        margin: "0 auto",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography margin={"20px"} align="center" variant="h4">
        Авторизация
      </Typography>
      <Login />
    </Box>
  );
};

export default Auth;
