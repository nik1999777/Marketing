import React, { ChangeEvent } from "react";
import { ISearchOnLinkTelegramChannelsContainer } from "./SearchOnLinkTelegramChannels.types";
import SearchOnLinkTelegramChannels from "./SearchOnLinkTelegramChannels";

const SearchOnLinkTelegramChannelsContainer: React.FC<
  ISearchOnLinkTelegramChannelsContainer
> = (props) => {
  const { setSearchLink, setOpenSearchLink, openSearchLink } = props;

  const onSearchChannelLink = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchLink(e.target.value);
  };

  const onCloseSearchChannelLink = () => {
    setSearchLink("");
    setOpenSearchLink(false);
  };

  return (
    <SearchOnLinkTelegramChannels
      openSearchLink={openSearchLink}
      onSearchChannelLink={onSearchChannelLink}
      onCloseSearchChannelLink={onCloseSearchChannelLink}
    />
  );
};

export default SearchOnLinkTelegramChannelsContainer;
