import { Box, IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": { backgroundColor: theme.palette.action.hover },
}));

export const ToggleIcon = styled(Box)<{ width?: number }>(
  ({ theme, width }) => ({
    height: 3,
    margin: "5px",
    marginLeft: 0,
    width: width || 25,
    borderRadius: "10px",
    transition: "width 0.3s",
    backgroundColor: theme.palette.primary.main,
  })
);
