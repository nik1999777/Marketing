import React from "react";
import { IconButton, Link } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { ITableBodyView } from "./TableBodyView.types";
import CalculateCRMTelegramChannel from "../../models/CalculateCRMTelegramChannel";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import EstimateTelegramChannel from "../../models/EstimateTelegramChannel";
import Tooltip from "@mui/material/Tooltip";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Typography from "@mui/material/Typography";
import AppCheckBox from "../../../../shared/ui/AppCheckBox/AppCheckBox";
import { BodyTableCell, BodyTableRow } from "./TableBodyView.styled";

const TableBodyView: React.FC<ITableBodyView> = ({
  handleClick,
  isSelected,
  data,
  dense,
}) => {
  return (
    <TableBody>
      {data?.map((channel) => {
        const isItemSelected = isSelected(channel.id);

        let sanctions;
        if (channel.redLabel === true) {
          sanctions = <SentimentVeryDissatisfiedIcon color="error" />;
        } else if (channel.greenLabel === true) {
          sanctions = <SentimentSatisfiedAltIcon color="success" />;
        }

        return (
          <BodyTableRow hover key={channel.link}>
            <BodyTableCell
              onClick={(event) => handleClick(event, channel.id)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              padding="checkbox"
            >
              <AppCheckBox color="primary" checked={isItemSelected} />
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              <Link
                underline="hover"
                href={
                  channel.link.substring(0, 5) === "https"
                    ? channel.link
                    : `https://t.me/${channel.link.substring(1)}`
                }
              >
                {channel.link.substring(0, 5) === "https"
                  ? channel.link
                  : `https://t.me/${channel.link.substring(1)}`}
              </Link>
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {channel.category.name}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {channel.participantsCount}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {channel.irr}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {channel.ic}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              <Link underline="hover" href={channel.channelUser.username}>
                {channel.channelUser.username}
              </Link>
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {sanctions}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              <CalculateCRMTelegramChannel channel={channel} />
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {channel.personPrice}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              <EstimateTelegramChannel channel={channel} />
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {channel.startedDate}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              <Link underline="hover" href={channel.utmUrl}>
                <Typography
                  sx={{ width: "250px" }}
                  variant="subtitle2"
                  noWrap={true}
                >
                  {channel.utmUrl}
                </Typography>
              </Link>
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              <Link underline="hover" href={channel.utmUrl}>
                {channel.shortUrl}
              </Link>
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              {channel.solution}
            </BodyTableCell>
            <BodyTableCell align="center" component="th" scope="row">
              <Tooltip title={channel.comment}>
                <IconButton sx={{ m: 1 }}>
                  <BookmarkBorderIcon />
                </IconButton>
              </Tooltip>
            </BodyTableCell>
          </BodyTableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyView;
