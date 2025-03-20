'use client'
import '@/src/app/globals.css';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = ["Blog"];

interface HeaderProps {
    isDarkMode: boolean;
    onThemeToggle: () => void;
    onMenuToggle: () => void;
    isMobileMenuOpen: boolean;
}

const Header = ({ isDarkMode, onThemeToggle, onMenuToggle }: HeaderProps) => {
    const [adminUsername, setAdminUsername] = useState<string | null>(null);
    const [, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    useEffect(() => {
        const storedUsername = localStorage.getItem("adminUsername");
        if (storedUsername) {
            setAdminUsername(storedUsername);
        } else {
            router.push("/login");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("adminUsername");
        localStorage.removeItem("adminToken");
        router.push("/login");
    };

  
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ flexWrap: 'wrap' }}>
                        {/* Mobile menu toggle */}
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, mr: 2 }}>
                            <IconButton
                                size="large"
                                aria-label="toggle side menu"
                                onClick={onMenuToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        {/* Logo - desktop */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SCALIXITY
                        </Typography>

                        {/* Logo - mobile */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            SCALIXITY
                        </Typography>

                        {/* Desktop menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* Theme toggle */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton 
                                onClick={onThemeToggle} 
                                color="inherit"
                                size={isMobile ? "small" : "medium"}
                                sx={{ mr: isMobile ? 1 : 2 }}
                            >
                                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Box>

                        {/* Welcome message */}
                        <Box 
                            sx={{ 
                                display: { xs: 'none', sm: 'flex' }, 
                                mr: 2,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: isTablet ? '120px' : '200px'
                            }}
                        >
                            <Typography noWrap>
                                Welcome, {adminUsername || "admin"}!
                            </Typography>
                        </Box>

                        {/* User menu */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open profile settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar 
                                        alt={adminUsername || "admin"} 
                                        src="/default-avatar.png" 
                                        sx={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40 }}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={() => {
                                    handleCloseUserMenu();
                                    router.push("/profile");
                                }}>
                                    <AccountCircleIcon sx={{ mr: 1 }} />
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    <LogoutIcon sx={{ mr: 1 }} />
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};

export default Header;