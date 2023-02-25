import { Box, Button, FormControl } from "@mui/material";
import React from "react";
import RHF from "../../../shared/ui/InputsRHF";
import FormHelperText from "@mui/material/FormHelperText";
import { ILogin } from "./Login..types";

const Login: React.FC<ILogin> = (props) => {
  const { control, errors, handleSubmit, onLogin } = props;

  return (
    <Box sx={{ display: "grid", gridGap: "20px" }}>
      <FormControl fullWidth>
        <RHF.InputTextField
          label="username"
          name="userName"
          control={control}
        />
        {errors?.userName && (
          <FormHelperText error>{errors?.userName.message}</FormHelperText>
        )}
      </FormControl>
      <FormControl fullWidth>
        <RHF.InputTextField
          label="password"
          name="password"
          control={control}
        />
        {errors?.password && (
          <FormHelperText error>{errors?.password.message}</FormHelperText>
        )}
      </FormControl>
      <Button onClick={handleSubmit(onLogin)} variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default Login;
