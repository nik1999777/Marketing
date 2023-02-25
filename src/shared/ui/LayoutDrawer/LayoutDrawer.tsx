import { Drawer } from "@mui/material";
import React, { FC } from "react";
import { Wrapper } from "./LayoutDrawer.styled";
import { LayoutDrawerProps } from "./LayoutDrawer.types";

const LayoutDrawer: FC<LayoutDrawerProps> = (props) => {
  const { children, open, onClose, drawerWidth = 280 } = props;

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: drawerWidth } }}
    >
      <Wrapper>{children}</Wrapper>
    </Drawer>
  );
};

export default LayoutDrawer;
