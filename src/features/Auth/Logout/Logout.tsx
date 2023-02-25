import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { ILogout } from "./Logout.types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Logout: React.FC<ILogout> = (props) => {
  const { handleOpen, handleClose, open, onLogout } = props;

  return (
    <>
      <IconButton onClick={handleOpen}>
        <ExitToAppIcon fontSize="large" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography align="center" variant="h6" component="h2">
            Вы уверены, что хотите выйти?
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
            <Button variant="contained" onClick={onLogout}>
              Да
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Нет
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Logout;
