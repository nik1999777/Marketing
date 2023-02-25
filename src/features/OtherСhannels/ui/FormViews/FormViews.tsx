import { Box } from "@mui/material";
import React from "react";
import RHF from "../../../../shared/ui/InputsRHF";
import styles from "./FormViews.module.scss";
import { IFormViews } from "./FormViews.types";

const FormViews: React.FC<IFormViews> = ({ control }) => {
  return (
    <Box className={styles.wrapper}>
      <RHF.InputSelect
        control={control}
        name="subject"
        label="Тематика"
        content={["JAVA", "PYTHON", "JAVA", "PYTHON"]}
      />
      <RHF.InputTextField
        label="Ссылка на админа"
        name="link_admin"
        control={control}
      />
      <RHF.InputTextField label="Ссылка" name="link" control={control} />
      <RHF.InputTextField
        label="Название канала"
        name="name_channel"
        control={control}
      />
      <RHF.InputTextField
        label="Кол-во подписчиков"
        name="count"
        control={control}
      />
    </Box>
  );
};

export default FormViews;
