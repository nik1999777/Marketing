import { Box, Chip, ListItem } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { IGetCategories } from "./GetCategories.types";

const GetCategories: React.FC<IGetCategories> = (props) => {
  const { data, onDeleteCategory } = props;

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: "15px",
        margin: 0,
      }}
      component="ul"
    >
      {data?.map((category) => {
        return (
          <Box key={category.id} sx={{ display: "flex" }}>
            <ListItem>
              <Chip
                label={category.name}
                onDelete={() => onDeleteCategory(category.id!)}
              />
            </ListItem>
          </Box>
        );
      })}
    </Paper>
  );
};

export default GetCategories;
