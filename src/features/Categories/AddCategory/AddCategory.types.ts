import { ChannelCategoryDto } from "../../../api/model";
import { Control, SubmitHandler } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import { UseFormHandleSubmit } from "react-hook-form/dist/types/form";

export interface IAddCategory {
  control: Control<ChannelCategoryDto, any>;
  errors: FieldErrors<ChannelCategoryDto>;
  handleSubmit: UseFormHandleSubmit<ChannelCategoryDto>;
  onAddCategory: SubmitHandler<ChannelCategoryDto>;
}
