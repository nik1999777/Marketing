import React, { Suspense, useEffect } from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { createCustomTheme } from "../theme";
import AppRoutes from "../routes/AppRoutes";
import AuthRoutes from "../routes/AuthRoutes";
import { useAuth } from "../context/auth.context";
import Spinner from "../shared/ui/Spinner";
import useSettings from "../hooks/useSettings";

const App: React.FC = () => {
  const { isLoggedIn, setIsLoggedIn, getUser, isLoadingGetUser } = useAuth();
  const { settings } = useSettings();

  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  useEffect(() => {
    getUser?.() ? setIsLoggedIn?.(true) : setIsLoggedIn?.(false);
  }, [getUser]);

  if (isLoadingGetUser) {
    return <Spinner />;
  }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Spinner />}>
          {isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
        </Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
