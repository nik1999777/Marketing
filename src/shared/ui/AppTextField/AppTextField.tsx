import { styled, TextField, TextFieldProps } from "@mui/material";
import React, { FC } from "react";
import { StyledTextField } from "./AppTextField.styles";

const AppTextField: FC<TextFieldProps> = (props) => {
  return <StyledTextField {...props} />;
};

export default AppTextField;
