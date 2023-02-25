import { createTheme, responsiveFontSizes } from "@mui/material";
import merge from "lodash/merge";
import { THEMES } from "../constans";
import components from "./components";
import { shadows } from "./shadows";
import themesOptions from "./themeOptions";

const baseOptions = {
  direction: "ltr",
  typography: { fontFamily: "'Montserrat', sans-serif" },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export type themeSettingsTypes = {
  activeLayout?: string;
  theme: string;
  direction: "ltr" | "rtl";
  responsiveFontSizes?: boolean;
};

export const createCustomTheme = (settings: themeSettingsTypes) => {
  let themeOptions: any = themesOptions[settings.theme];

  if (!themeOptions) {
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  const mergedThemeOptions = merge({}, baseOptions, themeOptions, {
    direction: settings.direction,
  });

  let theme = createTheme(mergedThemeOptions);

  theme.shadows = shadows(theme);
  theme.components = components(theme);
  if (settings.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
