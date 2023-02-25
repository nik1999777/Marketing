import React from "react";
import AutomaticInputTelegramChannel from "./AutomaticInputTelegramChannel";
import { SubmitHandler } from "react-hook-form";
import { ChannelInputDto } from "../../../../api/model";
import {
  getChannelInfo,
  getChannelStat,
} from "../../../../api/channel-controller/channel-controller";
import { IAutomaticInputTelegramChannelContainer } from "./AutomaticInputTelegramChannel.types";

const AutomaticInputTelegramChannelContainer: React.FC<
  IAutomaticInputTelegramChannelContainer
> = (props) => {
  const { setValue, handleSubmit } = props;

  const onAutomaticInput: SubmitHandler<ChannelInputDto> = ({ link }) => {
    if (link) {
      getChannelStat({ link: link }).then((response) => {
        setValue("participantsCount", response.response?.participantsCount);
        setValue("irr", response.response?.errPercent);
        setValue("ic", response.response?.ciIndex);
      });
      getChannelInfo({ link: link }).then(
        ({ response: { tgstatRestrictions } }: any) => {
          if (tgstatRestrictions.length === 0) {
            setValue("greenLabel", true);
          } else if (
            tgstatRestrictions.red_label ||
            tgstatRestrictions.black_label
          ) {
            setValue("redLabel", true);
          }
        }
      );
    }
  };

  return (
    <AutomaticInputTelegramChannel
      handleSubmit={handleSubmit}
      onAutomaticInput={onAutomaticInput}
    />
  );
};

export default AutomaticInputTelegramChannelContainer;
