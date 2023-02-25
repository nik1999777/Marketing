import React, { useEffect, useState } from "react";
import { IEstimateTelegramChannelContainer } from "./EstimateTelegramChannel.types";
import EstimateTelegramChannel from "./EstimateTelegramChannel";
import { ChannelDto, ModChanelInfoDto } from "../../../../api/model";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateChannel } from "../../../../hooks/channel/useUpdateChannel";
import { useGetChannels } from "../../../../hooks/channel/useGetChannels";
import { useQueryClient } from "react-query";
import Spinner from "../../../../shared/ui/Spinner";

const EstimateTelegramChannelContainer: React.FC<
  IEstimateTelegramChannelContainer
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
    price,
    personPrice,
    modChanelInfo,
    estimated,
    comment,
    startedDate,
    solution,
  } = channel;

  const onEstimate = (
    greenLabel: boolean | undefined,
    redLabel: boolean | undefined,
    modChanelInfo: ModChanelInfoDto | undefined,
    ic: number | undefined,
    personPrice: number | undefined
  ) => {
    if (redLabel) {
      return 1;
    } else if (greenLabel) {
      if (
        ic! > modChanelInfo?.ic! / 2 &&
        personPrice! > modChanelInfo?.personPrice! / 2
      ) {
        return 5;
      } else if (
        ic! < modChanelInfo?.ic! / 2 &&
        personPrice! > modChanelInfo?.personPrice! / 2
      ) {
        return 4;
      } else if (
        ic! > modChanelInfo?.ic! / 2 &&
        personPrice! < modChanelInfo?.personPrice! / 2
      ) {
        return 3;
      } else if (
        ic! < modChanelInfo?.ic! / 2 &&
        personPrice! < modChanelInfo?.personPrice! / 2
      ) {
        return 2;
      }
    }
  };

  const { handleSubmit, control, setValue, reset } = useForm<ChannelDto>();
  const [open, setOpen] = useState(false);
  const { mutateAsync, isLoading } = useUpdateChannel();
  const { data } = useGetChannels({});
  const query = useQueryClient();
  const modChanelInfoText = ` Мода: ИЦ = ${modChanelInfo?.ic}, CRM = ${modChanelInfo?.personPrice}`;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    reset({
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
      personPrice: personPrice,
      modChanelInfo: {
        ic: modChanelInfo?.ic,
        personPrice: modChanelInfo?.personPrice,
      },
      estimated: onEstimate(
        greenLabel,
        redLabel,
        modChanelInfo,
        ic,
        personPrice
      ),
      comment: "",
      startedDate: "",
    });
  }, [channel]);

  const onStartModal: SubmitHandler<ChannelDto> = (data) => {
    mutateAsync({ data: data }).then(() => {
      query.refetchQueries("getChannels");
      handleOpen();
    });
  };

  const onPersonPriceCount = () => {
    let countPersonPrice: number = 0;
    data?.items?.forEach((channel) => {
      if (channel.personPrice !== null) {
        countPersonPrice += 1;
      }
    });
    return countPersonPrice;
  };

  if (isLoading && !data) return <Spinner />;

  return (
    <EstimateTelegramChannel
      estimated={estimated!}
      solution={solution!}
      modChanelInfoText={modChanelInfoText}
      handleSubmit={handleSubmit}
      onStartModal={onStartModal}
      data={data!}
      onPersonPriceCount={onPersonPriceCount}
      channel={channel}
      control={control}
      handleClose={handleClose}
      open={open}
      setValue={setValue}
    />
  );
};

export default EstimateTelegramChannelContainer;
