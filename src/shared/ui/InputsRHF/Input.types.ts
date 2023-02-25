import { Control } from "react-hook-form";
import { OverridableStringUnion } from "@mui/types";
import { TextFieldPropsSizeOverrides } from "@mui/material/TextField/TextField";
import { FieldErrors } from "react-hook-form/dist/types/errors";

export interface IFormInputProps {
  control: Control<any, any>;
  content?: any;
  name: string;
  label?: string;
  multiline?: boolean;
  size?: "small" | "medium" | undefined;
}
