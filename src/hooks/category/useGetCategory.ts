import { useGetCategories as _useGetCategories } from "../../api/channel-controller/channel-controller";

export const useGetCategories = () => {
  return _useGetCategories({
    query: {
      onError: (error) => {
        console.log(error);
      },
    },
  });
};
