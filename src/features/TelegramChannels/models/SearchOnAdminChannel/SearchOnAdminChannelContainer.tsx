import React, { ChangeEvent } from "react";
import { ISearchOnAdminChannelContainer } from "./SearchOnAdminChannel.types";
import SearchOnAdminChannel from "./SearchOnAdminChannel";

const SearchOnAdminChannelContainer: React.FC<
  ISearchOnAdminChannelContainer
> = (props) => {
  const { setAdminChannel, setOpenSearchAdminChannel, openSearchAdminChannel } =
    props;

  const onSearchAdminChannel = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAdminChannel(e.target.value);
  };

  const onCloseSearchAdminChannel = () => {
    setAdminChannel("");
    setOpenSearchAdminChannel(false);
  };

  return (
    <SearchOnAdminChannel
      openSearchAdminChannel={openSearchAdminChannel}
      onSearchAdminChannel={onSearchAdminChannel}
      onCloseSearchAdminChannel={onCloseSearchAdminChannel}
    />
  );
};

export default SearchOnAdminChannelContainer;
