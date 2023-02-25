import React, { useState } from "react";
import { useGetCategories } from "../../../hooks/category/useGetCategory";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import {
  deleteCategory,
  getGetCategoriesQueryKey,
} from "../../../api/channel-controller/channel-controller";
import Spinner from "../../../shared/ui/Spinner";
import GetCategories from "./GetCategories";

const GetCategoriesContainer: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { data, isLoading } = useGetCategories();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const onDeleteCategory = (id: string) => {
    if (id) setLoading(true);
    deleteCategory(id)
      .then(() => {
        queryClient.refetchQueries(getGetCategoriesQueryKey());
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 409) {
          enqueueSnackbar(
            "Нельзя удалить данную тему - так как она используется в таблице"
          );
        }
      });
  };

  if ((isLoading || loading) && !data) return <Spinner />;

  return <GetCategories data={data!} onDeleteCategory={onDeleteCategory} />;
};

export default GetCategoriesContainer;
