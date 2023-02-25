import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import {
  Box,
  CircularProgress,
  FormControlLabel,
  Switch,
  TablePagination,
} from "@mui/material";
import TableHeader from "../../ui/TableHeader";
import TableBodyView from "../../ui/TableBodyView";
import TableToolbar from "../../ui/TableToolbar";
import { H3 } from "../../../../shared/ui/Typography/Typography";
import { IGetTelegramChannels } from "./GetTelegramChannels.types";

const GetTelegramChannels: React.FC<IGetTelegramChannels> = (props) => {
  const {
    selected,
    openSearchLink,
    openSearchAdminChannel,
    setSearchLink,
    setOpenSearchLink,
    setAdminChannel,
    setOpenSearchAdminChannel,
    isLoading,
    dense,
    handleRequestSort,
    data,
    handleClick,
    isSelected,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    handleChangeDense,
  } = props;

  return (
    <>
      <H3>Telegram-каналы</H3>
      <TableContainer>
        {(selected.length || openSearchLink || openSearchAdminChannel) > 0 && (
          <TableToolbar
            setSearchLink={setSearchLink}
            openSearchLink={openSearchLink}
            numSelected={selected}
            setOpenSearchLink={setOpenSearchLink}
            setAdminChannel={setAdminChannel}
            setOpenSearchAdminChannel={setOpenSearchAdminChannel}
            openSearchAdminChannel={openSearchAdminChannel}
          />
        )}
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="40vh"
          >
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <Table
            sx={{
              minWidth: 900,
              borderSpacing: "0 10px",
              borderCollapse: "separate",
            }}
            size={dense ? "small" : "medium"}
          >
            <TableHeader
              setOpenSearchLink={setOpenSearchLink}
              setOpenSearchAdminChannel={setOpenSearchAdminChannel}
              handleRequestSort={handleRequestSort}
            />
            <TableBodyView
              data={data?.items}
              handleClick={handleClick}
              isSelected={isSelected}
              dense={dense}
            />
          </Table>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={data?.totalElements! || 0}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </>
  );
};

export default GetTelegramChannels;
