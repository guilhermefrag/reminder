import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import LogoutCard from './LoggoutCard';

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    const navigate = useNavigate();

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path: string) => {
        navigate(path);
        handleClose();
    };

    const handleLogout = () => {
        localStorage.removeItem('@token');
        setOpenLogoutModal(true);
    };

    const handleLogoutModalClose = () => {
        setOpenLogoutModal(false);
    };

    const isLoggedIn = localStorage.getItem('@token');

    return (
        <AppBar position="static" color="primary" className='mb-10'>
            <Toolbar>
            <Typography
                variant="h6"
                component={Link}
                to={isLoggedIn ? '/home' : '/login'}
                sx={{
                    flexGrow: 1,
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.8rem', // Adjust the font size as needed
                    fontWeight: 600, // Adjust the font weight as needed
                    letterSpacing: '0.5px', // Adjust the letter spacing as needed
                }}
            >
                Reminder
            </Typography>
                <Hidden mdUp>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {isLoggedIn ? (
                            <>
                                <MenuItem onClick={() => handleNavigate('/home')}>Home</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={() => handleNavigate('/login')}>Login</MenuItem>
                                <MenuItem onClick={() => handleNavigate('/signup')}>Sign Up</MenuItem>
                            </>
                        )}
                        <MenuItem onClick={() => handleNavigate('/about')}>About</MenuItem>
                        <MenuItem onClick={() => handleNavigate('/services')}>Services</MenuItem>
                        <MenuItem onClick={() => handleNavigate('/contact')}>Contact</MenuItem>
                        {isLoggedIn && (
                            <MenuItem
                            onClick={handleLogout}
                            sx={{
                                color: 'red',
                            }}
                        >
                            Logout
                        </MenuItem>
                        )}
                    </Menu>
                </Hidden>
                <Hidden smDown>
                    {isLoggedIn && (
                        <Button component={Link} to="/home" color="inherit">
                            Home
                        </Button>
                    )}
                    <Button component={Link} to="/about" color="inherit">
                        About
                    </Button>
                    <Button component={Link} to="/services" color="inherit">
                        Services
                    </Button>
                    <Button component={Link} to="/contact" color="inherit">
                        Contact
                    </Button>
                    {isLoggedIn ? (
                        <Button
                        color="inherit"
                        onClick={handleLogout}
                        sx={{
                            backgroundColor: '#ff0000',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#cc0000',
                            },
                        }}
                    >
                        Logout
                    </Button>
                    ) : (
                        <div>
                            <Button color="inherit" onClick={() => handleNavigate('/login')}>
                                Login
                            </Button>
                            <Button color="inherit" onClick={() => handleNavigate('/signup')}>
                                Sign Up
                            </Button>
                        </div>
                    )}
                </Hidden>
               
                <LogoutCard open={openLogoutModal} onClose={handleLogoutModalClose} />
            </Toolbar>
        </AppBar>
    );
}
