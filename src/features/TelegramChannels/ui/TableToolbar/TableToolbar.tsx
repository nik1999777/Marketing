import React from "react";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { ITableToolbar } from "./TableToolbar.types";
import SearchOnLinkTelegramChannels from "../../models/SearchOnLinkTelegramChannels";
import DeleteTelegramChannel from "../../models/DeleteTelegramChannel";
import SearchOnAdminChannel from "../../models/SearchOnAdminChannel";

const TableToolbar: React.FC<ITableToolbar> = ({
  numSelected,
  openSearchLink,
  setOpenSearchLink,
  setSearchLink,
  setAdminChannel,
  setOpenSearchAdminChannel,
  openSearchAdminChannel,
}) => {
  if (numSelected.length > 0) {
    setOpenSearchLink(false);
    setOpenSearchAdminChannel(false);
  }

  return (
    <Toolbar
      sx={{
        minWidth: "100%",
        width: "max-content",
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected.length > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <DeleteTelegramChannel numSelected={numSelected} />

      <SearchOnLinkTelegramChannels
        setSearchLink={setSearchLink}
        openSearchLink={openSearchLink}
        setOpenSearchLink={setOpenSearchLink}
      />

      <SearchOnAdminChannel
        setAdminChannel={setAdminChannel}
        setOpenSearchAdminChannel={setOpenSearchAdminChannel}
        openSearchAdminChannel={openSearchAdminChannel}
      />
    </Toolbar>
  );
};

export default TableToolbar;
