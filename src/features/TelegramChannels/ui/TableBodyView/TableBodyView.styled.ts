import { styled } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const BodyTableRow = styled(TableRow)<{ select_row?: boolean }>(
  ({ theme, select_row }) => ({
    transition: "background-color 0.3s",
    backgroundColor: select_row
      ? theme.palette.primary[400]
      : theme.palette.background.paper,
    "& td:first-of-type": {
      borderTopLeftRadius: "4px",
      borderBottomLeftRadius: "4px",
    },
    "& td:last-of-type": {
      textAlign: "center",
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    "& td": { color: select_row ? "white" : "inherit" },
  })
);

export const BodyTableCell = styled(TableCell)(() => ({
  fontSize: 13,
  fontWeight: 500,
  borderBottom: 0,
  transition: "color 0.3s",
  "&:first-of-type": { paddingLeft: 24 },
  "&:last-of-type": { textAlign: "center" },
}));
