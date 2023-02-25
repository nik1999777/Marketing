import React, { ChangeEvent } from "react";
import CalculateCrmTelegramChannel from "./CalculateCRMTelegramChannel";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChannelDto } from "../../../../api/model";
import { useUpdateChannel } from "../../../../hooks/channel/useUpdateChannel";
import { useQueryClient } from "react-query";
import Spinner from "../../../../shared/ui/Spinner";
import { ICalculateCrmTelegramChannelContainer } from "./CalculateCRMTelegramChannel.types";

const CalculateCrmTelegramChannelContainer: React.FC<
  ICalculateCrmTelegramChannelContainer
> = ({ channel }) => {
  const {
    id,
    link,
    participantsCount,
    irr,
    ic,
    category,
    channelUser,
    greenLabel,
    blackLabel,
    redLabel,
    modChanelInfo,
  } = channel;

  const { handleSubmit, setValue } = useForm<ChannelDto>({
    defaultValues: {
      id: id,
      link: link,
      category: {
        name: category?.name,
      },
      participantsCount: participantsCount,
      irr: irr,
      ic: ic,
      channelUser: {
        username: channelUser?.username,
      },
      greenLabel: greenLabel,
      redLabel: redLabel,
      modChanelInfo: {
        ic: modChanelInfo?.ic,
        personPrice: modChanelInfo?.personPrice,
      },
    },
  });
  const { mutateAsync, isLoading } = useUpdateChannel();
  const query = useQueryClient();

  const onCalculate: SubmitHandler<ChannelDto> = (data) => {
    mutateAsync({ data: data }).then(() => {
      query.refetchQueries("getChannels");
    });
  };

  const onChangePersonPrice = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue("price", +e.target.value);
    setValue("personPrice", Math.floor(participantsCount! / +e.target.value));
  };

  if (isLoading) return <Spinner />;

  return (
    <CalculateCrmTelegramChannel
      onChangePersonPrice={onChangePersonPrice}
      handleSubmit={handleSubmit}
      onCalculate={onCalculate}
    />
  );
};

export default CalculateCrmTelegramChannelContainer;
