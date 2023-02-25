import { createContext, ReactNode, useContext, useState } from "react";
import { getGetUserQueryKey } from "../api/user-controller/user-controller";
import { useAuthenticateUser } from "../hooks/auth/useAuthenticateUser";
import { useQueryClient } from "react-query";
import { useLogoutUser } from "../api/auth-controller/auth-controller";
import { useGetUser } from "../hooks/user/useGetUser";

type Dispatch = (Auth: boolean) => void;

const AuthContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch | null;
  login: ((userName: string, password: string) => void) | null;
  logout: (() => void) | null;
  getUser: (() => boolean) | null;
  isLoadingLogin: boolean;
  isLoadingGetUser: boolean;
  isLoadingLogout: boolean;
}>({
  isLoggedIn: false,
  setIsLoggedIn: null,
  login: null,
  logout: null,
  getUser: null,
  isLoadingLogin: false,
  isLoadingGetUser: false,
  isLoadingLogout: false,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading: isLoadingLogin } = useAuthenticateUser();
  const { isSuccess, isLoading: isLoadingGetUser } = useGetUser();
  const { refetch, isLoading: isLoadingLogout } = useLogoutUser({
    query: {
      enabled: false,
    },
  });

  const login = (userName: string, password: string) => {
    mutateAsync({ data: { userName, password } }).then(() => {
      setIsLoggedIn(true);
      queryClient.refetchQueries(getGetUserQueryKey());
    });
  };

  const logout = async () => {
    await refetch();
    setIsLoggedIn(false);
    queryClient.refetchQueries(getGetUserQueryKey());
  };

  const getUser = () => {
    if (isSuccess) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setIsLoggedIn,
        isLoggedIn,
        login,
        logout,
        getUser,
        isLoadingLogin,
        isLoadingGetUser,
        isLoadingLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth, AuthContext };
