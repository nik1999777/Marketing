import { useAddCategory as _useAddCategory } from "../../api/channel-controller/channel-controller";
import { useSnackbar } from "notistack";

export const useAddCategory = () => {
  const { enqueueSnackbar } = useSnackbar();

  return _useAddCategory({
    mutation: {
      onError: (error: any) => {
        console.log(error);
        if (error.response.status === 409) {
          enqueueSnackbar("Такая тема существует");
        } else if (error.response.status === 400) {
          enqueueSnackbar("Поле не должно быть пустым");
        }
      },
    },
  });
};
