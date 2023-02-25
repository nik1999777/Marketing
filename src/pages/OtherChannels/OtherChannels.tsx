import React from "react";
import { Paper, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import AddOtherChannel from "../../features/OtherСhannels/models/AddOtherChannel/AddOtherChannel";
import GetOtherChannels from "../../features/OtherСhannels/models/GetOtherChannels/GetOtherChannels";

const OtherChannels: React.FC = () => {
  return (
    <Stack spacing={2}>
      <Paper>
        <Box p={2}>
          <AddOtherChannel />
        </Box>
      </Paper>
      <Paper>
        <Box p={2}>
          <GetOtherChannels />
        </Box>
      </Paper>
    </Stack>
  );
};

export default OtherChannels;
