import { Box, Button, FormControl, Stack } from "@mui/material";
import React from "react";
import AutomaticInputTelegramChannel from "../AutomaticInputTelegramChannel";
import { H3 } from "../../../../shared/ui/Typography/Typography";
import { IAddTelegramChannel } from "./AddTelegramChannel.types";
import RHF from "../../../../shared/ui/InputsRHF";
import FormHelperText from "@mui/material/FormHelperText";

const AddTelegramChannel: React.FC<IAddTelegramChannel> = (props) => {
  const {
    control,
    errors,
    handleSubmit,
    setValue,
    onAddTelegramChannel,
    data,
  } = props;

  return (
    <>
      <H3 marginBottom="5px">Добавление telegram-канала</H3>
      <form>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1.5 }}
        >
          <FormControl fullWidth>
            <RHF.InputTextField
              label="Ссылка на канал"
              name="link"
              control={control}
              size="small"
            />
            {errors?.link && (
              <FormHelperText error>{errors?.link.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth>
            <RHF.InputTextField
              label="Ссылка на админа"
              name="channelUser.username"
              control={control}
              size="small"
            />
            {errors?.channelUser?.username && (
              <FormHelperText error>
                {errors?.channelUser?.username.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl size="small" fullWidth>
            <RHF.InputSelect
              control={control}
              name="category.name"
              label="Тематика"
              content={data?.map((item) => item.name)}
            />
            {errors?.category?.name && (
              <FormHelperText error>
                {errors?.category?.name.message}
              </FormHelperText>
            )}
          </FormControl>
        </Stack>
        <Stack mt={1} alignItems="center">
          <AutomaticInputTelegramChannel
            setValue={setValue}
            handleSubmit={handleSubmit}
          />
        </Stack>
        <Stack
          mt={2}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1.5 }}
        >
          <FormControl fullWidth>
            <RHF.InputTextField
              label="Кол-во подписчиков"
              name="participantsCount"
              control={control}
              size="small"
            />
          </FormControl>
          <FormControl fullWidth>
            <RHF.InputTextField
              label="ERR"
              name="irr"
              control={control}
              size="small"
            />
          </FormControl>
          <FormControl fullWidth>
            <RHF.InputTextField
              label="ИЦ"
              name="ic"
              control={control}
              size="small"
            />
          </FormControl>
        </Stack>
        <Box maxWidth="400px" margin="0 auto" mt={2}>
          <Button
            onClick={handleSubmit(onAddTelegramChannel)}
            variant="contained"
            fullWidth
          >
            Сохранить
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddTelegramChannel;
