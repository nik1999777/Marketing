import * as React from "react";

export interface ITableHeader {
  setOpenSearchLink: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearchAdminChannel: React.Dispatch<React.SetStateAction<boolean>>;
  handleRequestSort(event: React.MouseEvent<unknown>, property: string): void;
  activeSort: "desc" | "asc";
  createSortHandler: (
    property: string
  ) => (event: React.MouseEvent<unknown>) => void;
}

export interface ITableHeaderContainer {
  setOpenSearchLink: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSearchAdminChannel: React.Dispatch<React.SetStateAction<boolean>>;
  handleRequestSort(event: React.MouseEvent<unknown>, property: string): void;
}
