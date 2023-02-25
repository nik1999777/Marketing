import { Box, styled } from "@mui/material";

export const NavWrapper = styled(Box)<{ compact: any }>(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  height: "100%",
}));

export const StyledLogo = styled(Box)(() => ({
  paddingLeft: 8,
  fontWeight: 700,
  fontSize: 20,
}));
