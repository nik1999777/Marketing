import React from "react";
import Rating from "@mui/material/Rating";
import { Box, Button, Stack } from "@mui/material";
import { IEstimateTelegramChannel } from "./EstimateTelegramChannel.types";
import Tooltip from "@mui/material/Tooltip";
import LandingPageTelegramChannel from "../LandingPageTelegramChannel";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const EstimateTelegramChannel: React.FC<IEstimateTelegramChannel> = (props) => {
  const {
    estimated,
    solution,
    modChanelInfoText,
    handleSubmit,
    onStartModal,
    data,
    onPersonPriceCount,
    channel,
    control,
    handleClose,
    open,
    setValue,
  } = props;

  return (
    <Stack>
      <Rating name="read-only" value={estimated} readOnly />
      {solution ? (
        <Box>
          <BorderColorIcon />
        </Box>
      ) : (
        <Tooltip title={modChanelInfoText}>
          <span>
            <Button
              onClick={handleSubmit(onStartModal)}
              sx={{ marginTop: "5px", height: "30px" }}
              variant="contained"
              // disabled={
              //   !(data?.totalElements! >= 10 && onPersonPriceCount() >= 10)
              // }
            >
              Запуск
            </Button>
          </span>
        </Tooltip>
      )}
      <LandingPageTelegramChannel
        channel={channel}
        control={control}
        handleClose={handleClose}
        open={open}
        handleSubmit={handleSubmit}
        setValue={setValue}
      />
    </Stack>
  );
};

export default EstimateTelegramChannel;
