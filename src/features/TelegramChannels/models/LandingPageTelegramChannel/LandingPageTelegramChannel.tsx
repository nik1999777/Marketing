import React from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RHF from "../../../../shared/ui/InputsRHF";
import Rating from "@mui/material/Rating";
import { ILandingPageTelegramChannel } from "./ILandingPageTelegramChannel.types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LandingPageTelegramChannel: React.FC<ILandingPageTelegramChannel> = (
  props
) => {
  const {
    handleSubmit,
    open,
    onStart,
    recommendations,
    estimated,
    handleChange,
    control,
    handleClickPlacement,
    handleClickRejection,
  } = props;

  return (
    <Modal z-index={10000} open={open}>
      <Box sx={style}>
        <form onSubmit={handleSubmit(onStart)}>
          <Stack spacing={1.5}>
            <Box>
              <Typography align="center" variant="h6" component="div">
                {recommendations}
              </Typography>
              <Rating
                sx={{ display: "flex", justifyContent: "center" }}
                name="read-only"
                value={estimated}
                readOnly
              />
            </Box>
            <TextField size="small" name="utmUrl" onChange={handleChange} />
            <RHF.InputDate
              control={control}
              name="startedDate"
              label="Дата запуска"
              size="small"
            />
            <RHF.InputTextField
              size="small"
              control={control}
              name="comment"
              label="Примечание"
              multiline
            />
            <Button
              type="submit"
              variant="contained"
              onFocus={handleClickPlacement}
            >
              Запуск
            </Button>
            <Button
              type="submit"
              onFocus={handleClickRejection}
              variant="outlined"
            >
              Отказ
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default LandingPageTelegramChannel;
