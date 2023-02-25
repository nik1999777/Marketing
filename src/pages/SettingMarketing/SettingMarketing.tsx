import React from "react";
import AddCategory from "../../features/Categories/AddCategory";
import GetCategories from "../../features/Categories/GetCategories";
import { Box } from "@mui/material";
import { H2 } from "../../shared/ui/Typography/Typography";

const SettingMarketing: React.FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridGap: "15px",
        maxWidth: "920px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "7%",
      }}
    >
      <H2 sx={{ textAlign: "center" }}>Тематики для теста</H2>
      <GetCategories />
      <AddCategory />
    </Box>
  );
};

export default SettingMarketing;
