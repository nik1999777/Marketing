import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import styles from "./GetTelegramChats.module.scss";

const createData = (
  chat: any,
  subject: any,
  users: any,
  mau: any,
  wau: any,
  dau: any,
  sex: any,
  admin: any,
  status: any,
  price: any,
  crm: any,
  estimate: any,
  date: any,
  page: any,
  url_tags: any,
  url_short: any,
  note: any
) => {
  return {
    chat,
    subject,
    users,
    mau,
    wau,
    dau,
    sex,
    admin,
    status,
    price,
    crm,
    estimate,
    date,
    page,
    url_tags,
    url_short,
    note,
  };
};

const rows = [
  createData(
    "Канал",
    "SOS",
    1,
    "ASD",
    1,
    "ASD",
    "SD",
    1,
    2,
    3,
    "S",
    "S",
    "S",
    1,
    2,
    3,
    1
  ),
];

const GetTelegramChats = () => {
  return (
    <>
      <Typography variant="h5" component="h5">
        Телеграм-чаты
      </Typography>
      <TableContainer className={styles.table} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Чат</TableCell>
              <TableCell align="center">Тематика</TableCell>
              <TableCell align="center">Users</TableCell>
              <TableCell align="center">MAU</TableCell>
              <TableCell align="center">WAU</TableCell>
              <TableCell align="center">DAU</TableCell>
              <TableCell align="center">Пол М/Ж</TableCell>
              <TableCell align="center">Админ</TableCell>
              <TableCell align="center">Статус</TableCell>
              <TableCell align="center">Цена</TableCell>
              <TableCell align="center">Ожидаемый CPM</TableCell>
              <TableCell align="center">Предварительная оценка</TableCell>
              <TableCell align="center">Дата запуска</TableCell>
              <TableCell align="center">Посадочная страница</TableCell>
              <TableCell align="center">URL c метками</TableCell>
              <TableCell align="center">Short URL</TableCell>
              <TableCell align="center">Прмечание</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.chat}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.chat}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.subject}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.users}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.mau}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.wau}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.dau}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.sex}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.admin}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.status}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.price}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.crm}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.estimate}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.page}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.url_tags}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.url_short}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.note}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GetTelegramChats;
