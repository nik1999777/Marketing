import {
  logoutUser,
  useLogoutUser as _useLogoutUser,
} from "../../api/auth-controller/auth-controller";
import { QueryKey, UseQueryOptions, UseQueryResult } from "react-query";

export const useLogoutUser = <
  TData = Awaited<ReturnType<typeof logoutUser>>,
  TError = unknown
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof logoutUser>>,
    TError,
    TData
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  return _useLogoutUser({
    query: {
      onError: (error) => {
        console.log(error);
      },
      ...options,
    },
  });
};
