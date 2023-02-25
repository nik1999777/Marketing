import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  transition: "all 0.3s",
  [theme.breakpoints.down(1200)]: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));

export const InnerWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: { maxWidth: 1920, margin: "auto" },
}));
