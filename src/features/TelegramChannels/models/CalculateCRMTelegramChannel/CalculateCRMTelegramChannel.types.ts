import { ChannelDto } from "../../../../api/model";
import { ChangeEvent } from "react";
import { UseFormHandleSubmit } from "react-hook-form/dist/types/form";

export interface ICalculateCrmTelegramChannel {
  onChangePersonPrice: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: UseFormHandleSubmit<ChannelDto>;
  onCalculate: (data: ChannelDto) => void;
}

export interface ICalculateCrmTelegramChannelContainer {
  channel: ChannelDto;
}
