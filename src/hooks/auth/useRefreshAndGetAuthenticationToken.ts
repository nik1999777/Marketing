import { useRefreshAndGetAuthenticationToken as _useRefreshAndGetAuthenticationToken } from "../../api/auth-controller/auth-controller";

export const useRefreshAndGetAuthenticationToken = () => {
  return _useRefreshAndGetAuthenticationToken({
    query: {
      onError: (error) => {
        console.log(error);
      },
    },
  });
};
