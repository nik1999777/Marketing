import { alpha, styled } from "@mui/material";
import SimpleBar from "simplebar-react";

export const StyledScrollBar = styled(SimpleBar)(({ theme }) => ({
  maxHeight: "100vh",
  "& .simplebar-scrollbar": {
    "&:before": { backgroundColor: alpha(theme.palette.grey[400], 0.6) },
    "&.simplebar-visible:before": { opacity: 1 },
  },
  "& .simplebar-track.simplebar-vertical": { width: 9 },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": { height: 6 },
  "& .simplebar-mask": { zIndex: "inherit" },
}));
