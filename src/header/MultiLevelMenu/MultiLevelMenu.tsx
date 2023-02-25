import { Box } from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarAccordion from "../SidebarAccordion/SidebarAccordion";
import {
  BadgeValue,
  BulletIcon,
  ExternalLink,
  iconStyle,
  ListLabel,
  NavItemButton,
  StyledText,
} from "./MultiLevelMenu.styled";
import { MultiLevelMenuProps } from "./MultiLevelMenu.types";
import PersonCircleCheck from "../../icons/PersonCircleCheck";
import BadgeDollar from "../../icons/BadgeDollar";
import Accounts from "../../icons/Accounts";

const MultiLevelMenu: FC<MultiLevelMenuProps> = (props) => {
  const navigations = [
    { name: "Main", path: "/", icon: BadgeDollar },

    { type: "label", label: "Marketing" },
    {
      name: "Crops",
      icon: PersonCircleCheck,
      children: [
        { name: "Telegram Channels", path: "/telegram-channels" },
        { name: "Telegram Chats", path: "/telegram-chats" },
        { name: "Other Channels", path: "/other-channels" },
      ],
    },

    { type: "label", label: "Settings" },
    {
      name: "Marketing",
      path: "/settings-marketing",
      icon: Accounts,
    },
  ];

  const { sidebarCompact } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const activeRoute = (path: string) => (pathname === path ? 1 : 0);
  const handleNavigation = (path: string) => navigate(path);

  const renderLevels = (data: any) => {
    return data.map((item: any, index: any) => {
      if (item.type === "label")
        return (
          <ListLabel key={index} compact={sidebarCompact}>
            {item.label}
          </ListLabel>
        );

      if (item.children) {
        return (
          <SidebarAccordion
            key={index}
            item={item}
            sidebarCompact={sidebarCompact}
          >
            {renderLevels(item.children)}
          </SidebarAccordion>
        );
      } else if (item.type === "extLink") {
        return (
          <ExternalLink
            key={index}
            href={item.path}
            rel="noopener noreferrer"
            target="_blank"
          >
            <NavItemButton key={item.name} name="child" active={0}>
              {(() => {
                if (item.icon) {
                  return <item.icon sx={iconStyle(0)} />;
                } else {
                  return (
                    <span className="item-icon icon-text">{item.iconText}</span>
                  );
                }
              })()}

              <StyledText
                compact={sidebarCompact}
                active={activeRoute(item.path)}
              >
                {item.name}
              </StyledText>

              <Box mx="auto" />

              {item.badge && (
                <BadgeValue compact={sidebarCompact}>
                  {item.badge.value}
                </BadgeValue>
              )}
            </NavItemButton>
          </ExternalLink>
        );
      } else {
        return (
          <Box key={index}>
            <NavItemButton
              key={item.name}
              className="navItem"
              active={activeRoute(item.path)}
              onClick={() => handleNavigation(item.path)}
            >
              {item?.icon ? (
                <item.icon sx={iconStyle(activeRoute(item.path))} />
              ) : (
                <BulletIcon active={activeRoute(item.path)} />
              )}

              <StyledText
                compact={sidebarCompact}
                active={activeRoute(item.path)}
              >
                {item.name}
              </StyledText>

              <Box mx="auto" />

              {item.badge && (
                <BadgeValue compact={sidebarCompact}>
                  {item.badge.value}
                </BadgeValue>
              )}
            </NavItemButton>
          </Box>
        );
      }
    });
  };

  return <>{renderLevels(navigations)}</>;
};

export default MultiLevelMenu;
