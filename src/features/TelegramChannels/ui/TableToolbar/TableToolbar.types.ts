import * as React from "react";

export interface ITableToolbar {
  numSelected: string[];
  openSearchLink: boolean;
  setOpenSearchLink: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchLink: React.Dispatch<React.SetStateAction<string>>;
  setAdminChannel: React.Dispatch<React.SetStateAction<string>>;
  setOpenSearchAdminChannel: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchAdminChannel: boolean;
}
