'use client'
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
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages: string[] = [];

interface HeaderProps {
    onMenuToggle: () => void;
    isMobile?: boolean;
}

const Header = ({ onMenuToggle, isMobile: isMobileProp }: HeaderProps) => {
    const [adminUsername, setAdminUsername] = useState<string | null>(null);
    const [, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const router = useRouter();
    const theme = useTheme();
    const isMobileQuery = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobile = isMobileProp !== undefined ? isMobileProp : isMobileQuery;

    useEffect(() => {
        const storedUsername = localStorage.getItem("adminUsername");
        if (storedUsername) {
            setAdminUsername(storedUsername);
        } else {
            router.push("/login");
        }
    }, [router]);

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
            <AppBar position="sticky" sx={{ 
                bgcolor: '#590178',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                zIndex: 1100
            }}>
                <Container maxWidth={false} sx={{ 
                    px: { xs: 1.5, sm: 3, md: 6 },
                    maxWidth: '100% !important'
                }}>
                    <Toolbar disableGutters sx={{ 
                        flexWrap: 'nowrap',
                        py: { xs: 1.5, sm: 2, md: 3 },
                        minHeight: { xs: '56px', sm: '64px', md: '80px' }
                    }}>
                        {/* Mobile & Tablet menu toggle */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: { xs: 1, sm: 2 } }}>
                            <IconButton
                                size={isMobile ? "medium" : "large"}
                                aria-label="toggle side menu"
                                onClick={onMenuToggle}
                                sx={{ 
                                    color: '#FFFFFF',
                                    p: { xs: 1, sm: 1.5 }
                                }}
                            >
                                <MenuIcon sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' } }} />
                            </IconButton>
                        </Box>

                        {/* Logo - desktop */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: '#FFFFFF',
                                textDecoration: 'none',
                            }}
                        >
                            SCALIXITY
                        </Typography>

                        {/* Logo - mobile & tablet */}
                        <Typography
                            variant={isMobile ? "subtitle1" : "h6"}
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: { xs: '.1rem', sm: '.15rem' },
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                color: '#FFFFFF',
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
                                    sx={{ 
                                        my: 1, 
                                        color: '#FFFFFF', 
                                        display: 'block',
                                        fontSize: '1rem',
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/* Welcome message */}
                        <Box 
                            sx={{ 
                                display: { xs: 'none', sm: 'none', md: 'flex' }, 
                                mr: { md: 3 },
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '200px'
                            }}
                        >
                            <Typography noWrap sx={{ color: '#FFFFFF', fontSize: '1rem' }}>
                                Welcome, {adminUsername || "admin"}!
                            </Typography>
                        </Box>

                        {/* User menu */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open profile settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: { xs: 0.5, sm: 0.75, md: 0 } }}>
                                    <Avatar 
                                        alt={adminUsername || "admin"} 
                                        src="public\S_logo.svg" 
                                        sx={{ 
                                            width: { xs: 32, sm: 36, md: 44 }, 
                                            height: { xs: 32, sm: 36, md: 44 },
                                            border: { xs: '1.5px solid #FFFFFF', md: '2px solid #FFFFFF' }
                                        }}
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
                                PaperProps={{
                                    sx: {
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                        marginTop: '8px',
                                        border: '1px solid rgba(0, 0, 0, 0.08)',
                                        minWidth: '180px',
                                        padding: '4px',
                                    }
                                }}
                            >
                                <MenuItem 
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        router.push("/dashboard/profile");
                                    }}
                                    sx={{
                                        borderRadius: '8px',
                                        margin: '4px 8px',
                                        padding: '10px 16px',
                                        fontSize: '0.875rem',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(89, 1, 120, 0.08)',
                                            transform: 'translateX(4px)',
                                        },
                                    }}
                                >
                                    <AccountCircleIcon sx={{ mr: 1, color: '#590178', fontSize: '20px' }} />
                                    <Typography textAlign="center" sx={{ fontWeight: 500 }}>Profile</Typography>
                                </MenuItem>
                                <MenuItem 
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        handleLogout();
                                    }}
                                    sx={{
                                        borderRadius: '8px',
                                        margin: '4px 8px',
                                        padding: '10px 16px',
                                        fontSize: '0.875rem',
                                        transition: 'all 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: 'rgba(89, 1, 120, 0.08)',
                                            transform: 'translateX(4px)',
                                        },
                                    }}
                                >
                                    <LogoutIcon sx={{ mr: 1, color: '#590178', fontSize: '20px' }} />
                                    <Typography textAlign="center" sx={{ fontWeight: 500 }}>Logout</Typography>
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