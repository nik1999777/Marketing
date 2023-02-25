import * as React from "react";
import { ChangeEvent } from "react";

export interface ISearchOnLinkTelegramChannels {
  openSearchLink: boolean;
  onSearchChannelLink: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onCloseSearchChannelLink: () => void;
}

export interface ISearchOnLinkTelegramChannelsContainer {
  openSearchLink: boolean;
  setOpenSearchLink: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchLink: React.Dispatch<React.SetStateAction<string>>;
}
