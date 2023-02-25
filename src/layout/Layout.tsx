import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header/Header";
import Sidebar from "../header/Sidebar/Sidebar";
import { CSSProperties } from "@mui/styled-engine";
import LayoutBodyWrapper from "../shared/ui/LayoutBodyWrapper/LayoutBodyWrapper";

const Layout: React.FC = () => {
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const handleCompactToggle = () => setSidebarCompact(!sidebarCompact);

  const handleMobileDrawerToggle = () =>
    setShowMobileSideBar((state) => !state);

  const customStyle: CSSProperties = {
    width: `calc(100% - ${sidebarCompact ? "86px" : "280px"})`,
    marginLeft: sidebarCompact ? "86px" : "280px",
  };

  return (
    <>
      <Sidebar
        sidebarCompact={sidebarCompact}
        showMobileSideBar={showMobileSideBar}
        setSidebarCompact={handleCompactToggle}
        setShowMobileSideBar={handleMobileDrawerToggle}
      />

      <LayoutBodyWrapper sx={customStyle}>
        <Header
          setShowSideBar={handleCompactToggle}
          setShowMobileSideBar={handleMobileDrawerToggle}
        />
        <main>
          <Outlet />
        </main>
      </LayoutBodyWrapper>
    </>
  );
};

export default Layout;
