import { styled } from "@mui/material";
import { BodyTableCell } from "../TableBodyView/TableBodyView.styled";

export const HeadTableCell = styled(BodyTableCell)(({ theme }) => ({
  color: theme.palette.text.disabled,
}));
