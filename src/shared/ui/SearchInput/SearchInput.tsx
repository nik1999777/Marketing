import { InputBaseProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { FC } from "react";
import { StyledInputBase } from "./SearchInput.styled";
import { SearchInputProps } from "./SearchInput.types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SearchInput: FC<SearchInputProps & InputBaseProps> = (props) => {
  const { icon_style = {}, disable_border = false, onClick } = props;
  return (
    <StyledInputBase
      disable_border={disable_border ? 1 : 0}
      startAdornment={
        <SearchIcon
          sx={{
            fontSize: 18,
            marginRight: 1,
            color: "text.disabled",
            ...icon_style,
          }}
        />
      }
      endAdornment={
        <IconButton onClick={onClick}>
          <CloseIcon />
        </IconButton>
      }
      {...props}
    />
  );
};

export default SearchInput;
