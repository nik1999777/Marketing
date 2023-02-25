import React from "react";
import { PageDto } from "../../../../api/model";

export interface IGetTelegramChannels {
  selected: string[];
  openSearchLink: boolean;
  openSearchAdminChannel: boolean;
  setSearchLink: React.Dispatch<React.SetStateAction<string>>;
  setOpenSearchLink: React.Dispatch<React.SetStateAction<boolean>>;
  setAdminChannel: React.Dispatch<React.SetStateAction<string>>;
  setOpenSearchAdminChannel: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  dense: boolean;
  handleRequestSort: (
    event: React.MouseEvent<unknown>,
    property: string
  ) => void;
  data: PageDto;
  handleClick: (event: React.MouseEvent<unknown>, name: string) => void;
  isSelected: (name: string) => boolean;
  page: number;
  rowsPerPage: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
