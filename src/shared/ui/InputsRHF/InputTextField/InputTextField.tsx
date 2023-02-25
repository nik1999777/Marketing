import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";
import React from "react";
import AppTextField from "../../AppTextField/AppTextField";

const InputTextField: React.FC<IFormInputProps> = ({
  control,
  name,
  label,
  size,
  multiline,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <AppTextField
          multiline={!!multiline}
          size={size}
          value={value}
          onChange={onChange}
          label={label}
        />
      )}
    />
  );
};

export default InputTextField;
