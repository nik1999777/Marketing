import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./AddOtherChannel.module.scss";
import FormViews from "../../ui/FormViews/FormViews";

const AddOtherChannel: React.FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      subject: "",
      link_admin: "",
      name_channel: "",
      link: "",
      count: "",
    },
  });

  return (
    <Box>
      <Typography variant="h5" component="h5">
        Добавление канала для посева
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

export default AddOtherChannel;
