import React from "react";
import AddTelegramChannel from "./AddTelegramChannel";
import { useGetCategories } from "../../../../hooks/category/useGetCategory";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChannelInputDto } from "../../../../api/model";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { useAddChannel } from "../../../../hooks/channel/useAddChannel";
import { useQueryClient } from "react-query";
import Spinner from "../../../../shared/ui/Spinner";

const AddTelegramChannelContainer: React.FC = () => {
  const { data } = useGetCategories();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ChannelInputDto>({
    defaultValues: {
      link: "",
      channelUser: {
        username: "",
      },
      category: {
        name: "",
      },
      irr: 0,
      ic: 0,
      participantsCount: 0,
    },
    resolver: yupResolver(
      yup.object().shape({
        link: yup.string().required("Ссылка на канал is required"),
        channelUser: yup.object().shape({
          username: yup.string().required("Ссылка на админа is required"),
        }),
        category: yup.object().shape({
          name: yup.string().required("Тематика is required"),
        }),
      })
    ),
  });
  const { mutateAsync, isLoading } = useAddChannel();
  const query = useQueryClient();

  const onAddTelegramChannel: SubmitHandler<ChannelInputDto> = (data) => {
    mutateAsync({ data: data }).then((response) => {
      query.refetchQueries("getChannels");
    });
  };

  if (isLoading && !data) return <Spinner />;

  return (
    <AddTelegramChannel
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      setValue={setValue}
      onAddTelegramChannel={onAddTelegramChannel}
      data={data!}
    />
  );
};

export default AddTelegramChannelContainer;
