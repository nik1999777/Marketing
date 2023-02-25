import { Box, SvgIcon } from "@mui/material";
import FlexBox from "../../shared/ui/FlexBox";
import Scrollbar from "../../shared/ui/ScrollBar/ScrollBar";
import LayoutDrawer from "../../shared/ui/LayoutDrawer/LayoutDrawer";
import { FC } from "react";
import MultiLevelMenu from "../MultiLevelMenu/MultiLevelMenu";
import { NavWrapper, StyledLogo } from "./MobileSidebar.styles";
import { MobileSidebarProps } from "./MobileSidebar.types";
import Logo from "../../icons/LOGO.svg";

const TOP_HEADER_AREA = 70;

const MobileSidebar: FC<MobileSidebarProps> = (props) => {
  const { sidebarCompact, showMobileSideBar, setShowMobileSideBar } = props;

  return (
    <LayoutDrawer open={showMobileSideBar} onClose={setShowMobileSideBar}>
      <Box pl={2} pr={2} maxHeight={TOP_HEADER_AREA}>
        <FlexBox ml={1.5}>
          <img src={Logo} alt="logo" width={150} />
        </FlexBox>
      </Box>

      <Scrollbar
        autoHide
        clickOnTrack={false}
        sx={{
          overflowX: "hidden",
          maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
        }}
      >
        <NavWrapper compact={sidebarCompact}>
          <MultiLevelMenu sidebarCompact={false} />
        </NavWrapper>
      </Scrollbar>
    </LayoutDrawer>
  );
};

export default MobileSidebar;
