import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../pages/Main/Main";
import Layout from "../layout/Layout";
import SettingMarketing from "../pages/SettingMarketing/SettingMarketing";
import TelegramChannels from "../pages/TelegramChannels/TelegramChannels";
import TelegramChats from "../pages/TelegramChats/TelegramChats";
import OtherChannels from "../pages/OtherChannels/OtherChannels";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="telegram-channels" element={<TelegramChannels />} />
        <Route path="telegram-chats" element={<TelegramChats />} />
        <Route path="other-channels" element={<OtherChannels />} />
        <Route path="settings-marketing" element={<SettingMarketing />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
