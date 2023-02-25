import { FC, Fragment } from "react";
import { InnerWrapper, Wrapper } from "./LayoutBodyWrapper.styled";
import { LayoutBodyWrapperProps } from "./LayoutBodyWrapper.types";

const LayoutBodyWrapper: FC<LayoutBodyWrapperProps> = ({ children, sx }) => {
  return (
    <Fragment>
      <Wrapper sx={sx}>
        <InnerWrapper>{children}</InnerWrapper>
      </Wrapper>
    </Fragment>
  );
};

export default LayoutBodyWrapper;
