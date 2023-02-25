import React from "react";
import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";
import { InputLabel, MenuItem, Select } from "@mui/material";

const InputSelect: React.FC<IFormInputProps> = ({
  control,
  label,
  name,
  content,
}) => {
  const generateMenuItem = () => {
    return content?.map((option: string, index: number) => (
      <MenuItem key={index} value={option}>
        {option}
      </MenuItem>
    ));
  };

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            label={label}
            sx={{
              borderRadius: "8px",
            }}
            onChange={onChange}
            value={value}
          >
            {generateMenuItem()}
          </Select>
        )}
      />
    </>
  );
};

export default InputSelect;
