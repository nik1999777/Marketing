import React, { useState } from "react";
import GetTelegramChannels from "./GetTelegramChannels";
import { useDebounce } from "use-debounce";
import { ChannelPageSettingsDirection } from "../../../../api/model";
import { useGetChannels } from "../../../../hooks/channel/useGetChannels";

const GetTelegramChannelsContainer: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [dense, setDense] = React.useState(false);
  const [openSearchLink, setOpenSearchLink] = useState<boolean>(false);
  const [openSearchAdminChannel, setOpenSearchAdminChannel] =
    useState<boolean>(false);
  const [searchLink, setSearchLink] = useState<string>("");
  const [adminChannel, setAdminChannel] = useState<string>("");
  const [debouncedSearchLink] = useDebounce<string>(searchLink, 500);
  const [debouncedAdminChannel] = useDebounce<string>(adminChannel, 500);
  const [order, setOrder] =
    React.useState<ChannelPageSettingsDirection>("DESC");
  const [orderBy, setOrderBy] = React.useState<string>("participantsCount");

  const { data, isLoading } = useGetChannels({
    page: page,
    size: rowsPerPage,
    link: debouncedSearchLink,
    channelUser: debouncedAdminChannel,
    key: orderBy,
    direction: order,
  });

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "ASC";
    setOrder(isAsc ? "DESC" : "ASC");
    setOrderBy(property);
  };

  return (
    <GetTelegramChannels
      selected={selected}
      openSearchLink={openSearchLink}
      openSearchAdminChannel={openSearchAdminChannel}
      setSearchLink={setSearchLink}
      setOpenSearchLink={setOpenSearchLink}
      setAdminChannel={setAdminChannel}
      setOpenSearchAdminChannel={setOpenSearchAdminChannel}
      isLoading={isLoading}
      dense={dense}
      handleRequestSort={handleRequestSort}
      data={data!}
      handleClick={handleClick}
      isSelected={isSelected}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleChangeDense={handleChangeDense}
    />
  );
};

export default GetTelegramChannelsContainer;
