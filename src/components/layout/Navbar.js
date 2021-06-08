// MUI
import { Home as HomeIcon, Settings as SettingsIcon, 
    Notifications as NotificationsIcon } from '@material-ui/icons';
import { IconButton, Typography, AppBar, 
    Toolbar, Button } from "@material-ui/core";
import { Settings } from "./Settings";

import React, { useState } from 'react';

const Link = require("react-router-dom").Link;

const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    }

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className="nav-container">
                        { props.authenticated ? <Typography>Logged in</Typography> : null}
                        <Button color="inherit" component={ Link } to="/"><Typography>Forum</Typography></Button>
                        <Button color="inherit" component={ Link } to="/"><Typography>Marketplace</Typography></Button>
                        <Button color="inherit" component={ Link } to="/"><Typography>Group</Typography></Button>
                        <IconButton color="inherit" component={ Link } to="/"><NotificationsIcon color="secondary"/></IconButton>
                        <IconButton color="inherit" component={ Link } to="/"><HomeIcon color="secondary"/></IconButton>
                        <IconButton onClick={openMenu} ><SettingsIcon color="secondary"/></IconButton>
                </Toolbar>
            </AppBar>
            <Settings id="menu" 
                anchorEl={ anchorEl } 
                open={ Boolean(anchorEl) }
                onClose={ handleClose } />
        </div>
    );
}

export default Navbar;
