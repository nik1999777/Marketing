import React from "react";
import { Box, Button } from "@mui/material";
import { IAutomaticInputTelegramChannel } from "./AutomaticInputTelegramChannel.types";
import { Paragraph } from "../../../../shared/ui/Typography/Typography";

const AutomaticInputTelegramChannel: React.FC<
  IAutomaticInputTelegramChannel
> = (props) => {
  const { handleSubmit, onAutomaticInput } = props;

  return (
    <Box>
      <Paragraph>
        Стоимость автоматического заполнения - 1 рубль за канал.
      </Paragraph>
      <Button
        onClick={handleSubmit(onAutomaticInput)}
        fullWidth
        variant="contained"
      >
        Заполнить автоматически
      </Button>
    </Box>
  );
};

export default AutomaticInputTelegramChannel;
