import { alpha, Box, ButtonBase, styled } from "@mui/material";
import { Paragraph, Span } from "../../shared/ui/Typography/Typography";

export const NavItemButton = styled(ButtonBase)<{ active: any }>(
  ({ theme, active }) => ({
    height: 44,
    width: "100%",
    borderRadius: 8,
    marginBottom: 4,
    padding: "0 18px",
    justifyContent: "flex-start",
    transition: "all 0.15s ease",
    ...(active && {
      color: theme.palette.primary.main,
      backgroundColor: alpha(theme.palette.primary.main, 0.06),
    }),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  })
);

export const ListLabel = styled(Paragraph)<{ compact: any }>(
  ({ theme, compact }) => ({
    fontWeight: 700,
    fontSize: "12px",
    marginTop: "20px",
    marginLeft: "15px",
    marginBottom: "10px",
    textTransform: "uppercase",
    transition: "all 0.15s ease",
    color: theme.palette.text.secondary,
    ...(compact && { opacity: 0, width: 0 }),
  })
);

export const ExternalLink = styled("a")(({ theme }) => ({
  overflow: "hidden",
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

export const StyledText = styled(Span)<{ compact: any; active: any }>(
  ({ theme, compact, active }) => ({
    whiteSpace: "nowrap",
    paddingLeft: "0.8rem",
    transition: "all 0.15s ease",
    fontSize: "13px",
    fontWeight: 500,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
    ...(compact && { opacity: 0, width: 0 }),
  })
);

export const BulletIcon = styled("div")<{ active: any }>(
  ({ theme, active }) => ({
    width: 4,
    height: 4,
    marginLeft: "10px",
    marginRight: "8px",
    overflow: "hidden",
    borderRadius: "50%",
    background: active
      ? theme.palette.primary.main
      : theme.palette.text.disabled,
    boxShadow: active
      ? `0px 0px 0px 3px ${theme.palette.primary[200]}`
      : "none",
  })
);

export const BadgeValue = styled(Box)<{ compact: any }>(
  ({ compact, theme }) => ({
    color: "white",
    fontSize: "12px",
    fontWeight: 500,
    padding: "1px 6px",
    overflow: "hidden",
    borderRadius: "300px",
    backgroundColor: theme.palette.primary.main,
    display: compact ? "none" : "unset",
  })
);

export const iconStyle = (active: any) => ({
  fontSize: 18,
  marginRight: "4px",
  color: active ? "primary.main" : "text.secondary",
});
