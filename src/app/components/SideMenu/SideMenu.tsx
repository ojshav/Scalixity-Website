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
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NextLink from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
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
  Collapse,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeInOut,
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
  "/dashboard/services",
  "/dashboard/contact",
  "/dashboard/inquiry",
  "/dashboard/campaign",
];

const menuListTranslations = [
  "Home",
  "Profile",
  "Settings",
  "Work", 
  "Services",
  "Contact",
  "Inquiry",
  "Campaigns",
];

const menuListIcons = [
  <HomeIcon key="home" />,
  <Person2Icon key="person" />,
  <SettingsIcon key="settings" />,
  <WorkIcon key="work" />,
  <MiscellaneousServicesIcon key="services" />,
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
  const [homeMenuOpen, setHomeMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentView = searchParams.get('view') || 'userAnalytics';

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleHomeMenuToggle = () => {
    setHomeMenuOpen(!homeMenuOpen);
  };

  // Dashboard submenu options
  const dashboardOptions = [
    { value: 'userAnalytics', label: 'User Analytics' },
    { value: 'engagementMetrics', label: 'Engagement Metrics' },
    { value: 'technicalMetrics', label: 'Technical Metrics' },
    { value: 'demographics', label: 'Demographics' },
  ];

  // Auto-expand home menu when navigating to home page (but allow manual toggle)
  const prevPathnameRef = React.useRef(pathname);
  React.useEffect(() => {
    const isHomeActive = pathname === '/dashboard/home';
    const wasOnHome = prevPathnameRef.current === '/dashboard/home';
    const navigatedToHome = isHomeActive && !wasOnHome;
    
    if (navigatedToHome) {
      setHomeMenuOpen(true);
    }
    
    prevPathnameRef.current = pathname;
  }, [pathname]);

  const DrawerContent = () => (
    <>
      {!isMobile && !isTablet && (
        <>
          <div className={scss.drawerHeader}>
            <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ 
                color: 'white',
                transition: (theme) => theme.transitions.create('transform', {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.short,
                }),
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        </>
      )}
      {(isMobile || isTablet) && (
        <Box sx={{ py: 1 }} />
      )}
      <List>
        {menuListTranslations.map((text, index) => {
          const isActive = pathname === menuRouteList[index];
          const isHome = index === 0;
          const isHomeActive = pathname === '/dashboard/home';
          
          if (isHome) {
            return (
              <React.Fragment key={text}>
                <ListItem disablePadding sx={{ display: "block" }}>
                  <NextLink 
                    className={scss.link} 
                    href="/dashboard/home?view=userAnalytics"
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItemButton
                      onClick={(e) => {
                        if (isHomeActive) {
                          e.preventDefault();
                          handleHomeMenuToggle();
                        }
                        if (isMobile || isTablet) {
                          // Don't close menu on mobile/tablet when expanding submenu
                        }
                      }}
                      title={text}
                      aria-label={text}
                      sx={{
                        minHeight: 48,
                        justifyContent: (isMobile || isTablet) ? "flex-start" : open ? "initial" : "center",
                        px: 2.5,
                        mx: 1,
                        my: 0.5,
                        borderRadius: isHomeActive ? '24px' : '8px',
                        color: isHomeActive ? '#590178' : 'white',
                        backgroundColor: isHomeActive ? '#FFF2D5' : 'transparent',
                        transition: (theme) => theme.transitions.create(['background-color', 'border-radius', 'transform'], {
                          easing: theme.transitions.easing.easeInOut,
                          duration: theme.transitions.duration.short,
                        }),
                        '&:hover': {
                          backgroundColor: isHomeActive ? '#FFF2D5' : 'rgba(255, 242, 213, 0.15)',
                          borderRadius: '24px',
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: (isMobile || isTablet || open) ? 3 : "auto",
                          justifyContent: "center",
                          color: isHomeActive ? '#590178' : 'white',
                          transition: (theme) => theme.transitions.create('margin-right', {
                            easing: theme.transitions.easing.easeInOut,
                            duration: theme.transitions.duration.standard,
                          }),
                        }}
                      >
                        {menuListIcons[index]}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{
                          opacity: (isMobile || isTablet || open) ? 1 : 0,
                          color: isHomeActive ? '#590178' : 'white',
                          transition: (theme) => theme.transitions.create('opacity', {
                            easing: theme.transitions.easing.easeInOut,
                            duration: theme.transitions.duration.standard,
                          }),
                          '& .MuiTypography-root': {
                            fontWeight: isHomeActive ? 600 : 400,
                          }
                        }}
                      />
                      {(isMobile || isTablet || open) && (
                        homeMenuOpen ? <ExpandLess sx={{ color: isHomeActive ? '#590178' : 'white' }} /> : <ExpandMore sx={{ color: isHomeActive ? '#590178' : 'white' }} />
                      )}
                    </ListItemButton>
                  </NextLink>
                </ListItem>
                <Collapse in={homeMenuOpen && (isMobile || isTablet || open)} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {dashboardOptions.map((option) => {
                      const isOptionActive = isHomeActive && currentView === option.value;
                      return (
                        <ListItem key={option.value} disablePadding sx={{ display: "block" }}>
                          <NextLink 
                            className={scss.link} 
                            href={`/dashboard/home?view=${option.value}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <ListItemButton
                              onClick={() => (isMobile || isTablet) && onMenuClose()}
                              sx={{
                                pl: (isMobile || isTablet || open) ? 6 : 2.5,
                                pr: 2.5,
                                minHeight: 40,
                                mx: 1,
                                my: 0.25,
                                borderRadius: isOptionActive ? '16px' : '8px',
                                color: isOptionActive ? '#590178' : 'rgba(255, 255, 255, 0.85)',
                                backgroundColor: isOptionActive ? '#FFF2D5' : 'transparent',
                                transition: (theme) => theme.transitions.create(['background-color', 'border-radius', 'transform'], {
                                  easing: theme.transitions.easing.easeInOut,
                                  duration: theme.transitions.duration.short,
                                }),
                                '&:hover': {
                                  backgroundColor: isOptionActive ? '#FFF2D5' : 'rgba(255, 242, 213, 0.15)',
                                  borderRadius: '16px',
                                  transform: 'translateX(4px)',
                                },
                              }}
                            >
                              <ListItemText
                                primary={option.label}
                                sx={{
                                  opacity: (isMobile || isTablet || open) ? 1 : 0,
                                  '& .MuiTypography-root': {
                                    fontSize: '0.9rem',
                                    fontWeight: isOptionActive ? 600 : 400,
                                    color: isOptionActive ? '#590178' : 'rgba(255, 255, 255, 0.85)',
                                  }
                                }}
                              />
                            </ListItemButton>
                          </NextLink>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }
          
          return (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <NextLink className={scss.link} href={menuRouteList[index]}>
                <ListItemButton
                  onClick={() => (isMobile || isTablet) && onMenuClose()}
                  title={text}
                  aria-label={text}
                  sx={{
                    minHeight: 48,
                    justifyContent: (isMobile || isTablet) ? "flex-start" : open ? "initial" : "center",
                    px: 2.5,
                    mx: 1,
                    my: 0.5,
                    borderRadius: isActive ? '24px' : '8px',
                    color: isActive ? '#590178' : 'white',
                    backgroundColor: isActive ? '#FFF2D5' : 'transparent',
                    transition: (theme) => theme.transitions.create(['background-color', 'border-radius', 'transform'], {
                      easing: theme.transitions.easing.easeInOut,
                      duration: theme.transitions.duration.short,
                    }),
                    '&:hover': {
                      backgroundColor: isActive ? '#FFF2D5' : 'rgba(255, 242, 213, 0.15)',
                      borderRadius: '24px',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: (isMobile || isTablet || open) ? 3 : "auto",
                      justifyContent: "center",
                      color: isActive ? '#590178' : 'white',
                      transition: (theme) => theme.transitions.create('margin-right', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.standard,
                      }),
                    }}
                  >
                    {menuListIcons[index]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: (isMobile || isTablet || open) ? 1 : 0,
                      color: isActive ? '#590178' : 'white',
                      transition: (theme) => theme.transitions.create('opacity', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.standard,
                      }),
                      '& .MuiTypography-root': {
                        fontWeight: isActive ? 600 : 400,
                      }
                    }}
                  />
                </ListItemButton>
              </NextLink>
            </ListItem>
          );
        })}
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
          onClose={onMenuClose}
          ModalProps={{
            keepMounted: true,
          }}
          transitionDuration={{
            enter: 300,
            exit: 250,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            zIndex: 1099,
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: '#590178',
              color: 'white',
              transition: (theme) => theme.transitions.create('transform', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginTop: '56px',
              height: 'calc(100vh - 56px)',
              zIndex: 1099,
            },
            '& .MuiBackdrop-root': {
              transition: (theme) => theme.transitions.create('opacity', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginTop: '56px',
              zIndex: 1098,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      )}

      {/* Tablet Drawer */}
      {isTablet && (
        <Drawer
          variant="temporary"
          open={isMobileMenuOpen}
          onClose={onMenuClose}
          ModalProps={{
            keepMounted: true,
          }}
          transitionDuration={{
            enter: 300,
            exit: 250,
          }}
          sx={{
            display: { xs: 'none', sm: 'block', md: 'none' },
            zIndex: 1099,
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: '#590178',
              color: 'white',
              transition: (theme) => theme.transitions.create('transform', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginTop: '64px',
              height: 'calc(100vh - 64px)',
              zIndex: 1099,
            },
            '& .MuiBackdrop-root': {
              transition: (theme) => theme.transitions.create('opacity', {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
              marginTop: '64px',
              zIndex: 1098,
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      )}

      {/* Desktop Drawer */}
      {!isMobile && !isTablet && (
        <Drawer
          variant="permanent"
          open={open}
          className={scss.sideMenu}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            width: open ? drawerWidth : 64,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              position: 'fixed',
              width: open ? drawerWidth : 64,
              backgroundColor: '#590178',
              color: 'white',
              border: 'none',
              height: 'calc(100vh - 80px)',
              top: '80px',
              left: 0,
              overflowX: 'hidden',
              overflowY: 'auto',
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