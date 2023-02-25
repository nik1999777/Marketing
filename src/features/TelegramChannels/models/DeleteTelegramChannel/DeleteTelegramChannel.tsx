import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import { IDeleteChannel } from "./DeleteTelegramChannel.types";

const DeleteTelegramChannel: React.FC<IDeleteChannel> = (props) => {
  const { numSelected, onDeleteChannel } = props;

  return (
    <>
      {numSelected.length > 0 ? (
        <>
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected.length} selected
          </Typography>
          <Tooltip title="Delete">
            <IconButton onClick={onDeleteChannel}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ) : null}
    </>
  );
};

export default DeleteTelegramChannel;
