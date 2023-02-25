import { ChannelCategoryDto, ChannelInputDto } from "../../../../api/model";
import { Control, SubmitHandler } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import {
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form/dist/types/form";

export interface IAddTelegramChannel {
  control: Control<ChannelInputDto, any>;
  errors: FieldErrors<ChannelInputDto>;
  handleSubmit: UseFormHandleSubmit<ChannelInputDto>;
  setValue: UseFormSetValue<ChannelInputDto>;
  onAddTelegramChannel: SubmitHandler<ChannelInputDto>;
  data: ChannelCategoryDto[];
}
