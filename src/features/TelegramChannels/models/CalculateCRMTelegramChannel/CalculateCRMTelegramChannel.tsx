import React from "react";
import { Button, Stack } from "@mui/material";
import { ICalculateCrmTelegramChannel } from "./CalculateCRMTelegramChannel.types";
import AppTextField from "../../../../shared/ui/AppTextField/AppTextField";

const CalculateCrmTelegramChannel: React.FC<ICalculateCrmTelegramChannel> = (
  props
) => {
  const { onChangePersonPrice, handleSubmit, onCalculate } = props;

  return (
    <Stack>
      <AppTextField
        size="small"
        fullWidth
        name="price"
        onChange={(e) => onChangePersonPrice(e)}
      />

      <Button
        onClick={handleSubmit(onCalculate)}
        sx={{ marginTop: "5px", height: "30px" }}
        variant="contained"
      >
        Расчет
      </Button>
    </Stack>
  );
};

export default CalculateCrmTelegramChannel;
