import { Box, Button, Typography } from "@mui/material";
import RHF from "../../../../shared/ui/InputsRHF";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./AddTelegramChat.module.scss";
import FormViews from "../../ui/FormViews/FormViews";

const AddTelegramChat: React.FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      subject: "",
      link_admin: "",
      link_chat: "",
      mau: "",
      wau: "",
      dau: "",
    },
  });

  return (
    <Box>
      <Typography variant="h5" component="h5">
        Добавление telegram-чата
      </Typography>
      <form className={styles.form}>
        <FormViews control={control} />
        <Box className={styles.box}>
          <Button fullWidth variant="contained">
            Сохранить
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddTelegramChat;
