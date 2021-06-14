// MUI
import { Home as HomeIcon, Settings as SettingsIcon, 
    Notifications as NotificationsIcon } from '@material-ui/icons';
import { IconButton, Typography, AppBar, 
    Toolbar, Button, Avatar } from "@material-ui/core";
import Settings from "./Settings";

import React, { useState, useRef } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';

const Link = require("react-router-dom").Link;

const styles = (theme) => ({
    ...theme.styles,
})

const Navbar = (props) => {
    const { classes } = props;

    const menuRef = useRef();
    const buttonRef = useRef();

    const [isOpen, setIsOpen] = useState(false);
    
    /* const [anchorEl, setAnchorEl] = useState(null); */

    const handleClose = () => {
        setIsOpen(false);
    }
    /* const handleClose = () => {
        setAnchorEl(null);
    } */

    const openMenu = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                        <div className='nav-container-left'>
                            <Button color="inherit" component={ Link } to="/forums"><Typography>Forums</Typography></Button>
                            <Button color="inherit" component={ Link } to="/"><Typography>Marketplaces</Typography></Button>
                            <Button color="inherit" component={ Link } to="/"><Typography>Groups</Typography></Button>
                        </div>
                        { props.authenticated ? <Button style={{ textTransform: 'none'}}>
                            <Avatar className={ classes.imageSmall } 
                                alt={ props.username } 
                                src={ props.userImageUrl }></Avatar>
                            <Typography color="secondary">{ props.username }</Typography></Button> : null}
                        <IconButton color="inherit" component={ Link } to="/"><NotificationsIcon color="secondary"/></IconButton>
                        <IconButton color="inherit" component={ Link } to="/"><HomeIcon color="secondary"/></IconButton>
                        <IconButton ref={buttonRef} onClick={openMenu} ><SettingsIcon color="secondary"/></IconButton>
                </Toolbar>
            </AppBar>
            <Settings id="menu" 
                forwardRef={ menuRef }
                anchorEl={ buttonRef.current } 
                open={ isOpen }
                onClose={ handleClose }
                authenticated={ props.authenticated } 
                logout={ props.logout }/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
    username: state.user.credentials.username,
    userImageUrl: state.user.credentials.userImageUrl
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
