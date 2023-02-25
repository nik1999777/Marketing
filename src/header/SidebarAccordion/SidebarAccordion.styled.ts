import { alpha, Box, ButtonBase, styled } from "@mui/material";
import ChevronRight from "../../icons/ChevronRight";
import { Span } from "../../shared/ui/Typography/Typography";
import { CollapseCompact } from "./SidebarAccordion.types";

export const NavExpandRoot = styled(Box)(() => ({
  "& .subMenu": { padding: 0 },
  "& .expansion-panel": {
    "& .expansion-panel": { paddingLeft: 8 },
    overflow: "hidden",
    transition: "max-height 0.3s cubic-bezier(0, 0, 0.2, 1)",
  },
}));

export const NavItemButton = styled(ButtonBase)<{ active: any }>(
  ({ theme, active }) => ({
    height: 48,
    width: "100%",
    padding: "0 12px",
    borderRadius: 8,
    marginBottom: 5,
    justifyContent: "space-between",
    backgroundColor: active
      ? alpha(theme.palette.primary.main, 0.06)
      : "transparent",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  })
);

export const BulletIcon = styled(Box)<{ active: any }>(({ theme, active }) => ({
  width: 4,
  height: 4,
  marginLeft: "10px",
  marginRight: "8px",
  overflow: "hidden",
  borderRadius: "50%",
  background: active ? theme.palette.primary.main : theme.palette.text.disabled,
  boxShadow: active ? `0px 0px 0px 3px ${theme.palette.primary[200]}` : "none",
}));

export const ChevronRightStyled = styled(ChevronRight)<CollapseCompact>(
  ({ collapsed, compact }) => ({
    fontSize: 18,
    transition: "transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms",
    transform: collapsed ? "rotate(90deg)" : "rotate(0deg)",
    ...(compact && { opacity: 0, width: 0 }),
  })
);

export const ItemText = styled(Span)<{ compact: any; active: any }>(
  ({ theme, compact, active }) => ({
    whiteSpace: "nowrap",
    paddingLeft: "0.8rem",
    fontSize: "13px",
    fontWeight: 500,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
    verticalAlign: "middle",
    transition: "all 0.15s ease",
    ...(compact && { opacity: 0, width: 0, paddingLeft: 0 }),
  })
);

export const BadgeValue = styled(Box)<{ sidebarCompact: any }>(
  ({ sidebarCompact, theme }) => ({
    fontSize: "12px",
    fontWeight: 500,
    color: "white",
    padding: "1px 6px",
    overflow: "hidden",
    borderRadius: "300px",
    transition: "all 0.15s ease",
    backgroundColor: theme.palette.primary.main,
    ...(sidebarCompact && { opacity: 0, width: 0 }),
  })
);
