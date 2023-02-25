import { Controller } from "react-hook-form";
import { IFormInputProps } from "../Input.types";
import React from "react";
import { FormControl, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

const InputDate: React.FC<IFormInputProps> = ({ control, name, label }) => {
  // const [value, setValue] = React.useState<Dayjs | null>(
  //   dayjs("2014-08-18T21:11:54")
  // );

  // const handleChange = (newValue: Dayjs | null) => {
  //   setValue(newValue);
  // };

  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              onChange={onChange}
              value={value}
              label={label}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
          </LocalizationProvider>
        )}
      />
    </FormControl>
  );
};

export default InputDate;
