import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
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

    return (
        <AppBar position="static" color="primary" className='mb-10'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                        <MenuItem onClick={() => handleNavigate('/home')}>Home</MenuItem>
                        <MenuItem onClick={() => handleNavigate('/about')}>About</MenuItem>
                        <MenuItem onClick={() => handleNavigate('/services')}>Services</MenuItem>
                        <MenuItem onClick={() => handleNavigate('/contact')}>Contact</MenuItem>
                    </Menu>
                </Hidden>
                <Hidden smDown>
                    <Button component={Link} to="/home" color="inherit">
                        Home
                    </Button>
                    <Button component={Link} to="/about" color="inherit">
                        About
                    </Button>
                    <Button component={Link} to="/services" color="inherit">
                        Services
                    </Button>
                    <Button component={Link} to="/contact" color="inherit">
                        Contact
                    </Button>
                </Hidden>
                {/* Add the "Login" button here */}
                <Button color="inherit" onClick={() => handleNavigate('/login')}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
