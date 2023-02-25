import { useGetUser as _useGetUser } from "../../api/user-controller/user-controller";

export const useGetUser = () => {
  return _useGetUser({
    query: {
      onError: (error) => {
        console.log(error);
      },
    },
  });
};
