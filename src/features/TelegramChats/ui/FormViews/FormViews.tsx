import { Box, Typography } from "@mui/material";
import React from "react";
import RHF from "../../../../shared/ui/InputsRHF";
import styles from "./FormViews.module.scss";
import { IFormViews } from "./FormViews.types";

const FormViews: React.FC<IFormViews> = ({ control }) => {
  return (
    <Box className={styles.wrapper}>
      <RHF.InputTextField
        label="Ссылка на чат"
        name="link_chat"
        control={control}
      />
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
      <RHF.InputTextField label="MAU" name="mau" control={control} />
      <RHF.InputTextField label="WAU" name="wau" control={control} />
      <RHF.InputTextField label="DAU" name="dau" control={control} />
    </Box>
  );
};

export default FormViews;
