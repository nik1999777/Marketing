import React, { useState } from "react";
import { ITableHeaderContainer } from "./TableHeader.types";
import TableHeader from "./TableHeader";

const TableHeaderContainer: React.FC<ITableHeaderContainer> = (props) => {
  const { handleRequestSort, setOpenSearchAdminChannel, setOpenSearchLink } =
    props;

  const [activeSort, setActiveSort] = useState<"desc" | "asc" | undefined>(
    "desc"
  );

  const onClickDirection = () => {
    if (activeSort === "asc") {
      setActiveSort("desc");
    } else if (activeSort === "desc") {
      setActiveSort("asc");
    }
  };

  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
      onClickDirection();
    };

  return (
    <TableHeader
      handleRequestSort={handleRequestSort}
      setOpenSearchAdminChannel={setOpenSearchAdminChannel}
      setOpenSearchLink={setOpenSearchLink}
      activeSort={activeSort!}
      createSortHandler={createSortHandler}
    />
  );
};

export default TableHeaderContainer;
