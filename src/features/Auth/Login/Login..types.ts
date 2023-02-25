import { LoginRequestDto } from "../../../api/model";
import { Control, SubmitHandler } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import { UseFormHandleSubmit } from "react-hook-form/dist/types/form";

export interface ILogin {
  control: Control<LoginRequestDto, any>;
  errors: FieldErrors<LoginRequestDto>;
  handleSubmit: UseFormHandleSubmit<LoginRequestDto>;
  onLogin: SubmitHandler<LoginRequestDto>;
}
