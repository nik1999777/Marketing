import React from "react";
import AddCategory from "./AddCategory";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChannelCategoryDto } from "../../../api/model";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { useAddCategory } from "../../../hooks/category/useAddCategory";
import { useQueryClient } from "react-query";
import { getGetCategoriesQueryKey } from "../../../api/channel-controller/channel-controller";
import Spinner from "../../../shared/ui/Spinner";

const AddCategoryContainer: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChannelCategoryDto>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required("Тематика is required"),
      })
    ),
  });
  const { mutateAsync, isLoading } = useAddCategory();
  const queryClient = useQueryClient();

  const onAddCategory: SubmitHandler<ChannelCategoryDto> = (data) => {
    mutateAsync({ data: data }).then(() => {
      queryClient.refetchQueries(getGetCategoriesQueryKey());
    });
  };

  if (isLoading) return <Spinner />;

  return (
    <AddCategory
      control={control}
      errors={errors}
      handleSubmit={handleSubmit}
      onAddCategory={onAddCategory}
    />
  );
};

export default AddCategoryContainer;
