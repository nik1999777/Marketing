import React, { useContext } from "react";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Theme,
  useMediaQuery,
} from "@mui/material";
import LocalSelector from "../../shared/ui/LocaleSelector";
import Logout from "../../features/Auth/Logout";
import ThemeIcon from "../../icons/ThemeIcon";
import { SettingsContext } from "../../context/settings.context";
import { themeSettingsTypes } from "../../theme";
import { StyledIconButton, ToggleIcon } from "./Header.styled";
import { IHeader } from "./Header.types";

const Header: React.FC<IHeader> = ({ setShowMobileSideBar }) => {
  const { settings, saveSettings } = useContext(SettingsContext);
  const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down(1200));

  const handleChangeTheme = (value: "light" | "dark") => {
    saveSettings({ ...settings, theme: value } as themeSettingsTypes);
  };

  return (
    <header>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ padding: "10px" }}>
          {downMd && (
            <Box sx={{ cursor: "pointer" }} onClick={setShowMobileSideBar}>
              <ToggleIcon />
              <ToggleIcon width={18} />
              <ToggleIcon width={9} />
            </Box>
          )}
        </Box>
        <Box sx={{ display: "flex" }}>
          {settings.theme === "light" ? (
            <StyledIconButton onClick={() => handleChangeTheme("dark")}>
              <ThemeIcon />
            </StyledIconButton>
          ) : (
            <StyledIconButton onClick={() => handleChangeTheme("light")}>
              <ThemeIcon />
            </StyledIconButton>
          )}
          <LocalSelector />
          <IconButton>
            <Avatar alt="" src="" />
          </IconButton>
          <Logout />
        </Box>
      </Stack>
    </header>
  );
};

export default Header;
