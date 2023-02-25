import { Props } from "simplebar-react";
import { StyledScrollBar } from "./ScrollBar.styled";
import { ScrollbarProps } from "./ScrollBar.types";

const Scrollbar = ({ children, sx, ...props }: ScrollbarProps & Props) => {
  return (
    <StyledScrollBar sx={sx} {...props}>
      {children}
    </StyledScrollBar>
  );
};

export default Scrollbar;
