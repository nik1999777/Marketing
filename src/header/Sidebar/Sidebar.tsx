import { Box, Theme, useMediaQuery } from "@mui/material";
import FlexBetween from "../../shared/ui/FlexBetween";
import FlexBox from "../../shared/ui/FlexBox";
import { FC, useState } from "react";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import {
  NavWrapper,
  SidebarWrapper,
  StyledArrow,
  StyledIconButton,
  StyledLogo,
} from "./Sidebar.styled";
import { DashboardSidebarProps } from "./Sidebar.types";
import Scrollbar from "../../shared/ui/ScrollBar/ScrollBar";
import MultiLevelMenu from "../MultiLevelMenu/MultiLevelMenu";
import Logo from "../../icons/LOGO.svg";

const TOP_HEADER_AREA = 70;

const Sidebar: FC<DashboardSidebarProps> = (props) => {
  const {
    sidebarCompact,
    showMobileSideBar,
    setShowMobileSideBar,
    setSidebarCompact,
  } = props;

  const [onHover, setOnHover] = useState(false);
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const COMPACT = sidebarCompact && !onHover ? 1 : 0;

  if (downLg) {
    return (
      <MobileSidebar
        sidebarCompact={!!COMPACT}
        showMobileSideBar={showMobileSideBar}
        setShowMobileSideBar={setShowMobileSideBar}
      />
    );
  }

  return (
    <SidebarWrapper
      compact={sidebarCompact}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => sidebarCompact && setOnHover(false)}
    >
      <FlexBetween pt={3} pr={2} pl={4} pb={1} height={TOP_HEADER_AREA}>
        <FlexBox>
          {!COMPACT && (
            <StyledLogo>
              <img src={Logo} alt="logo" width={150} />
            </StyledLogo>
          )}
        </FlexBox>
        <Box mx={"auto"}></Box>

        <StyledIconButton
          onClick={setSidebarCompact}
          sx={{
            display: COMPACT ? "none" : "block",
          }}
        >
          <StyledArrow />
        </StyledIconButton>
      </FlexBetween>

      <Scrollbar
        autoHide
        clickOnTrack={false}
        sx={{
          overflowX: "hidden",
          maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
        }}
      >
        <NavWrapper>
          <MultiLevelMenu sidebarCompact={!!COMPACT} />
        </NavWrapper>
      </Scrollbar>
    </SidebarWrapper>
  );
};

export default Sidebar;
