import { useAuthenticateUser as _useAuthenticateUser } from "../../api/auth-controller/auth-controller";

export const useAuthenticateUser = () => {
  return _useAuthenticateUser({
    mutation: {
      onError: (error) => {
        console.log(error);
      },
    },
  });
};
