import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SearchIcon from "@mui/icons-material/Search";
import { TableSortLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ITableHeader } from "./TableHeader.types";
import { HeadTableCell } from "./TableHeader.styled";

const TableHeader: React.FC<ITableHeader> = (props) => {
  const {
    handleRequestSort,
    setOpenSearchAdminChannel,
    setOpenSearchLink,
    activeSort,
    createSortHandler,
  } = props;

  return (
    <TableHead>
      <TableRow>
        <HeadTableCell padding="checkbox"></HeadTableCell>
        <HeadTableCell align="center">
          Канал
          <IconButton
            onClick={() => {
              setOpenSearchAdminChannel(false);
              setOpenSearchLink(true);
            }}
          >
            <SearchIcon />
          </IconButton>
        </HeadTableCell>
        <HeadTableCell align="center">
          <TableSortLabel
            direction={activeSort}
            onClick={createSortHandler("category.name")}
          >
            Тематика
          </TableSortLabel>
        </HeadTableCell>
        <HeadTableCell align="center">
          <TableSortLabel
            direction={activeSort}
            onClick={createSortHandler("participantsCount")}
          >
            Кол-во подписчиков
          </TableSortLabel>
        </HeadTableCell>
        <HeadTableCell align="center">
          <TableSortLabel
            direction={activeSort}
            onClick={createSortHandler("irr")}
          >
            ERR
          </TableSortLabel>
        </HeadTableCell>
        <HeadTableCell align="center">
          <TableSortLabel
            direction={activeSort}
            onClick={createSortHandler("ic")}
          >
            ИЦ
          </TableSortLabel>
        </HeadTableCell>
        <HeadTableCell align="center">
          Ссылка на админа
          <IconButton
            onClick={() => {
              setOpenSearchLink(false);
              setOpenSearchAdminChannel(true);
            }}
          >
            <SearchIcon />
          </IconButton>
        </HeadTableCell>
        <HeadTableCell align="center">Санкции</HeadTableCell>
        <HeadTableCell align="center">Цена</HeadTableCell>
        <HeadTableCell align="center">Ожидаемый CRM</HeadTableCell>
        <HeadTableCell align="center">Предварительная оценка</HeadTableCell>
        <HeadTableCell align="center">
          <TableSortLabel
            direction={activeSort}
            onClick={createSortHandler("startedDate")}
          >
            Дата запуска
          </TableSortLabel>
        </HeadTableCell>
        <HeadTableCell align="center">URL с метками</HeadTableCell>
        <HeadTableCell align="center">Short URL</HeadTableCell>
        <HeadTableCell align="center">
          <TableSortLabel
            direction={activeSort}
            onClick={createSortHandler("solution")}
          >
            Ответ админа
          </TableSortLabel>
        </HeadTableCell>
        <HeadTableCell align="center">Примечание</HeadTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
