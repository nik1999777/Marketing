import { ChannelDto, ChannelDtoSolution, PageDto } from "../../../../api/model";
import {
  UseFormHandleSubmit,
  UseFormSetValue,
} from "react-hook-form/dist/types/form";
import { Control } from "react-hook-form";

export interface IEstimateTelegramChannel {
  estimated: number;
  solution: ChannelDtoSolution;
  modChanelInfoText: string;
  handleSubmit: UseFormHandleSubmit<ChannelDto>;
  onStartModal: (data: ChannelDto) => void;
  data: PageDto;
  onPersonPriceCount: () => number;
  channel: ChannelDto;
  control: Control<ChannelDto, any>;
  handleClose: () => void;
  open: boolean;
  setValue: UseFormSetValue<ChannelDto>;
}

export interface IEstimateTelegramChannelContainer {
  channel: ChannelDto;
}
