import {
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form/dist/types/form";
import { ChannelDto } from "../../../../api/model";
import { Control } from "react-hook-form";
import { ChangeEvent } from "react";

export interface ILandingPageTelegramChannel {
  open: boolean;
  control: Control<ChannelDto, any>;
  handleSubmit: UseFormHandleSubmit<ChannelDto>;
  onStart: (data: ChannelDto) => void;
  recommendations: JSX.Element;
  estimated: number;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleClickPlacement: () => void;
  handleClickRejection: () => void;
}

export interface ILandingPageTelegramChannelContainer {
  handleClose: () => void;
  setValue: UseFormSetValue<ChannelDto>;
  channel: ChannelDto;
  handleSubmit: UseFormHandleSubmit<ChannelDto>;
  open: boolean;
  control: Control<ChannelDto, any>;
}
