import React from "react";
import { ISearchOnAdminChannel } from "./SearchOnAdminChannel.types";
import SearchInput from "../../../../shared/ui/SearchInput/SearchInput";

const SearchOnAdminChannel: React.FC<ISearchOnAdminChannel> = (props) => {
  const {
    openSearchAdminChannel,
    onSearchAdminChannel,
    onCloseSearchAdminChannel,
  } = props;

  return (
    <>
      {openSearchAdminChannel ? (
        <SearchInput
          onChange={onSearchAdminChannel}
          placeholder="Search Admin Link"
          onClick={onCloseSearchAdminChannel}
        />
      ) : null}
    </>
  );
};

export default SearchOnAdminChannel;
