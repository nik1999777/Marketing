import React from "react";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import AddTelegramChannel from "../../features/TelegramChannels/models/AddTelegramChannel";
import GetTelegramChannels from "../../features/TelegramChannels/models/GetTelegramChannels";

const TelegramChannels: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Box p={0.5}>
        <AddTelegramChannel />
      </Box>
      <GetTelegramChannels />
    </Stack>
  );
};

export default TelegramChannels;
