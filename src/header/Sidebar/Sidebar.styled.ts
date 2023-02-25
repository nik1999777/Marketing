import { Box, IconButton, styled } from "@mui/material";
import ArrowLeftToLine from "../../icons/ArrowLeftToLine";

export const SidebarWrapper = styled(Box)<{ compact: any }>(
  ({ theme, compact }) => ({
    height: "100vh",
    position: "fixed",
    width: compact ? 86 : 280,
    transition: "all .2s ease",
    zIndex: theme.zIndex.drawer,
    backgroundColor: theme.palette.background.paper,
    "&:hover": compact && { width: 280 },
  })
);

export const NavWrapper = styled(Box)(() => ({
  paddingLeft: 16,
  paddingRight: 16,
  height: "100%",
}));

export const StyledLogo = styled(Box)(() => ({
  paddingBottom: 12,
  paddingTop: 16,
  fontWeight: 700,
  fontSize: 20,
}));

export const StyledArrow = styled(ArrowLeftToLine)(() => ({
  display: "block",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));
