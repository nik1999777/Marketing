import * as React from "react";
import { ChangeEvent } from "react";

export interface ISearchOnAdminChannel {
  openSearchAdminChannel: boolean;
  onSearchAdminChannel: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onCloseSearchAdminChannel: () => void;
}

export interface ISearchOnAdminChannelContainer {
  setAdminChannel: React.Dispatch<React.SetStateAction<string>>;
  setOpenSearchAdminChannel: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchAdminChannel: boolean;
}
