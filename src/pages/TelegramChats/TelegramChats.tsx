import React from "react";
import { Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import AddTelegramChat from "../../features/TelegramChats/models/AddTelegramChat/AddTelegramChat";
import GetTelegramChats from "../../features/TelegramChats/models/GetTelegramChats/GetTelegramChats";

const TelegramChats: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Paper>
        <Box p={2}>
          <AddTelegramChat />
        </Box>
      </Paper>
      <Paper>
        <Box p={2}>
          <GetTelegramChats />
        </Box>
      </Paper>
    </Stack>
  );
};

export default TelegramChats;
