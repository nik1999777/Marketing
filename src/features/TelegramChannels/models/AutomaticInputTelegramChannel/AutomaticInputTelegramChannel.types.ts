import { ChannelInputDto } from "../../../../api/model";
import {
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form/dist/types/form";
import { SubmitHandler } from "react-hook-form";

export interface IAutomaticInputTelegramChannelContainer {
  setValue: UseFormSetValue<ChannelInputDto>;
  handleSubmit: UseFormHandleSubmit<ChannelInputDto>;
}

export interface IAutomaticInputTelegramChannel {
  handleSubmit: UseFormHandleSubmit<ChannelInputDto>;
  onAutomaticInput: SubmitHandler<ChannelInputDto>;
}
