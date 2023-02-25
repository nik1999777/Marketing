import { Box, Button, FormControl } from "@mui/material";
import React from "react";
import RHF from "../../../shared/ui/InputsRHF";
import FormHelperText from "@mui/material/FormHelperText";
import { IAddCategory } from "./AddCategory.types";

const AddCategory: React.FC<IAddCategory> = (props) => {
  const { control, errors, handleSubmit, onAddCategory } = props;

  return (
    <form>
      <Box sx={{ display: "grid", gridGap: "15px" }}>
        <FormControl fullWidth>
          <RHF.InputTextField
            control={control}
            name="name"
            label="Уникальное имя категории"
          />
          {errors?.name && (
            <FormHelperText error>{errors?.name.message}</FormHelperText>
          )}
        </FormControl>
        <Button variant="contained" onClick={handleSubmit(onAddCategory)}>
          Добавить новую тематику
        </Button>
      </Box>
    </form>
  );
};

export default AddCategory;
