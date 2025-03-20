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
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useTheme,
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
  "/dashboard/inqury",
];

const menuListTranslations = [
  "Home",
  "Profile",
  "Settings",
  "Work", 
  "Contact",
  "Inquiry"
];

const menuListIcons = [
  <HomeIcon key="home" />,
  <Person2Icon key="person" />,
  <SettingsIcon key="settings" />,
  <WorkIcon key="work" />,
  <ContactPageIcon key="contact" />,
  <SupportAgentIcon key="inquiry" />,
];

interface SideMenuProps {
  isMobile: boolean;
  isTablet: boolean;
  isMobileMenuOpen: boolean;
  onMenuClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ 
  isMobile, 
  isTablet, 
  isMobileMenuOpen, 
  onMenuClose 
}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    if (isMobile) {
      onMenuClose();
    } else {
      setOpen(!open);
    }
  };

  const handleListItemButtonClick = () => {
    if (isMobile) {
      onMenuClose();
    } else if (isTablet) {
      setOpen(false);
    }
  };

  // Drawer content component to avoid repetition
  const DrawerContent = () => (
    <>
      {!isMobile && (
        <div className={scss.drawerHeader}>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
      )}
      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <NextLink className={scss.link} href={menuRouteList[index]}>
              <ListItemButton
                onClick={handleListItemButtonClick}
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
                    color: theme.palette.text.primary,
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

  // For mobile, we want to render the drawer conditionally based on isMobileMenuOpen
  if (isMobile) {
    return (
      <Box sx={{ width: '100%' }}>
        <Drawer
          variant="temporary"
          open={isMobileMenuOpen}
          onClose={onMenuClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: '100%',
              position: 'relative',
              height: 'auto'
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      </Box>
    );
  }

  // For tablet and desktop
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      className={scss.sideMenu}
      sx={{
        width: open ? drawerWidth : `calc(${theme.spacing(8)} + 1px)`,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          position: 'relative',
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <DrawerContent />
    </Drawer>
  );
};

export default SideMenu;