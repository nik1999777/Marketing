import { createContext, ReactNode } from "react";
import { themeSettingsTypes } from "../theme";
import { THEMES } from "../constans";
import useLocalStorage from "../hooks/useLocalStorage";

const initialSettings: themeSettingsTypes = {
  activeLayout: "layout3",
  direction: "ltr",
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (arg: themeSettingsTypes) => {},
});

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const { data: settings, storeData: setStoreSettings } = useLocalStorage(
    "settings",
    initialSettings
  );

  const saveSettings = (updateSettings: themeSettingsTypes) => {
    setStoreSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
