import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import "./i18n/config";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/auth.context";
import { SnackbarProvider } from "notistack";
import { ReactQueryDevtools } from "react-query/devtools";
import SettingsProvider from "./context/settings.context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SettingsProvider>
          <AuthProvider>
            <SnackbarProvider
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              variant="error"
              autoHideDuration={2000}
              maxSnack={1}
            >
              <App />
            </SnackbarProvider>
          </AuthProvider>
        </SettingsProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
