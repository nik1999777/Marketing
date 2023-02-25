import { PageDtoItemsItem } from "../../../../api/model";
import React from "react";

export interface ITableBodyView {
  data: PageDtoItemsItem[] | undefined;
  handleClick(event: React.MouseEvent<unknown>, name: string): void;
  isSelected(name: string): boolean;
  dense: boolean;
}
