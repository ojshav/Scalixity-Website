import { CSSObject } from "@mui/system";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work"; 
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NextLink from "next/link";
import scss from "@/styles/SideMenu.module.scss";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
 
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = [
  "/dashboard/home",
  "/dashboard/profile",
  "/dashboard/settings",
  "/dashboard/work", 
  "/dashboard/contact",
  "/dashboard/inquiry",
  "/dashboard/campaign",
];

const menuListTranslations = [
  "Home",
  "Profile",
  "Settings",
  "Work", 
  "Contact",
  "Inquiry",
  "Campaigns",
];

const menuListIcons = [
  <HomeIcon key="home" />,
  <Person2Icon key="person" />,
  <SettingsIcon key="settings" />,
  <WorkIcon key="work" />,
  <ContactPageIcon key="contact" />,
  <SupportAgentIcon key="inquiry" />,
  <WorkIcon key="campaigns" />,
];

interface SideMenuProps {
  isMobile: boolean;
  isTablet: boolean;
  isMobileMenuOpen: boolean;
  onMenuClose: () => void;
}

const SideMenu = ({ isMobile, isTablet, isMobileMenuOpen, onMenuClose }: SideMenuProps) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    if (isMobile) {
      onMenuClose();
    } else {
      setOpen(!open);
    }
  };

  const DrawerContent = () => (
    <>
      {!isMobile && (
        <div className={scss.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
      )}
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink className={scss.link} href={menuRouteList[index]}>
              <ListItemButton
                onClick={() => (isMobile || isTablet) && onMenuClose()}
                title={text}
                aria-label={text}
                sx={{
                  minHeight: 48,
                  justifyContent: isMobile ? "flex-start" : open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isMobile || open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: isMobile || open ? 1 : 0,
                  }}
                />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={isMobileMenuOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              top: 56,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      )}

      {/* Desktop/Tablet Drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          open={open}
          className={scss.sideMenu}
          sx={{
            display: { xs: 'none', sm: 'block' },
            width: open ? drawerWidth : 64,
            '& .MuiDrawer-paper': {
              top: 64,
              width: open ? drawerWidth : 64,
              ...(open ? openedMixin : closedMixin),
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      )}
    </>
  );
};

export default SideMenu;