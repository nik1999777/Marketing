import { Box } from "@mui/material";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  BadgeValue,
  BulletIcon,
  ChevronRightStyled,
  ItemText,
  NavExpandRoot,
  NavItemButton,
} from "./SidebarAccordion.styled";
import { SidebarAccordionProps } from "./SidebarAccordion.types";

const SidebarAccordion: FC<SidebarAccordionProps> = (props) => {
  const { item, children, sidebarCompact } = props;

  const elementRef = useRef<any>(null);
  const componentHeight = useRef(0);
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [hasActive, setHasActive] = useState(false);

  const { name, icon, iconText, badge } = item;

  const handleClick = () => {
    componentHeight.current = 0;
    calcaulateHeight(elementRef.current);
    setCollapsed(!collapsed);
  };

  const calcaulateHeight = useCallback((node: any) => {
    if (node.name !== "child") {
      for (let child of node.children) {
        calcaulateHeight(child);
      }
    }

    if (node.name === "child") componentHeight.current += node.scrollHeight;
    else componentHeight.current += 44;
    return;
  }, []);

  useEffect(() => {
    if (!elementRef) return;
    calcaulateHeight(elementRef.current);

    for (let child of item.children) {
      if (child.path === pathname) {
        setCollapsed(true);
        setHasActive(true);
      }
    }

    return () => {
      setHasActive(false);
    };
  }, [calcaulateHeight, pathname]);

  return (
    <NavExpandRoot className="subMenu">
      <NavItemButton onClick={handleClick} active={hasActive ? 1 : 0}>
        <Box pl="7px" display="flex" alignItems="center">
          {icon && (
            <item.icon
              sx={{
                fontSize: 18,
                color: hasActive ? "primary.main" : "text.secondary",
                mr: "4px",
              }}
            />
          )}
          {iconText && <BulletIcon active={hasActive ? 1 : 0} />}
          <ItemText compact={sidebarCompact} active={hasActive ? 1 : 0}>
            {name}
          </ItemText>
        </Box>

        {badge && (
          <BadgeValue sidebarCompact={sidebarCompact} className="itemIcon">
            {badge.value}
          </BadgeValue>
        )}

        <ChevronRightStyled
          color="disabled"
          compact={sidebarCompact ? 1 : 0}
          className="accordionArrow"
          collapsed={collapsed ? 1 : 0}
        />
      </NavItemButton>

      <div
        ref={elementRef}
        className="expansion-panel"
        style={{
          maxHeight:
            !collapsed || sidebarCompact
              ? "0px"
              : componentHeight.current + "px",
        }}
      >
        {children}
      </div>
    </NavExpandRoot>
  );
};

export default SidebarAccordion;
