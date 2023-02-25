import React from "react";
import { ISearchOnLinkTelegramChannels } from "./SearchOnLinkTelegramChannels.types";
import SearchInput from "../../../../shared/ui/SearchInput/SearchInput";

const SearchOnLinkTelegramChannels: React.FC<ISearchOnLinkTelegramChannels> = (
  props
) => {
  const { openSearchLink, onSearchChannelLink, onCloseSearchChannelLink } =
    props;

  return (
    <>
      {openSearchLink ? (
        <SearchInput
          onChange={onSearchChannelLink}
          placeholder="Search Link Channel"
          onClick={onCloseSearchChannelLink}
        />
      ) : null}
    </>
  );
};

export default SearchOnLinkTelegramChannels;
