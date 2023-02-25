import { InputBase, styled } from "@mui/material";

export const StyledInputBase = styled(InputBase)<{ disable_border: any }>(
  ({ theme, disable_border }) => ({
    height: 45,
    fontSize: 12,
    width: "100%",
    maxWidth: 350,
    fontWeight: 600,
    padding: "0 1rem",
    borderRadius: "8px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    border: disable_border
      ? "none"
      : `1px solid ${theme.palette.action.disabled}`,
    [theme.breakpoints.down(500)]: { maxWidth: "100%" },
    "::placeholder": { color: theme.palette.text.disabled },
  })
);
