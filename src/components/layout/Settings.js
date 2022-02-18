<<<<<<< HEAD
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react'
import { Fade, Menu, MenuItem,
    MenuList, Typography, Switch, ListItemIcon } from '@material-ui/core';

import { Link, useLocation } from 'react-router-dom';
import { setDarkMode, setLightMode } from '../../redux/actions/uiActions';
import { connect } from 'react-redux';

const styles = (theme) => ({
    ...theme.styles
})

const StyledMenuItem = withStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
})(MenuItem);

const Settings = (props) => {
    const location = useLocation();
    const currentLocation = location.pathname === '/login' || '/signup' ? '/' : location.pathname;

    const toggleDarkMode = () => {
        if (props.theme === 'light') props.setDarkMode();
        else props.setLightMode();
    }
    return (
        <div>
            <Menu id={props.id}
                anchorEl={props.anchorEl}
                keepMounted
                open={props.open}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={props.onClose}
                TransitionComponent={Fade}>
                
                <MenuList>
                    <StyledMenuItem>
                    <Typography>Darkmode</Typography>
                    <ListItemIcon>
                    <Switch 
                        checked={ props.theme === 'dark' }
                        onChange={ toggleDarkMode }
                        name='toggleDarkMode'/>
                    </ListItemIcon>
                    </ StyledMenuItem>
                    { props.authenticated ? 
                    <MenuItem onClick={ props.logout }>
                        <Typography>Logout</Typography>
                    </MenuItem> :
                    <div>
                    <MenuItem component={ Link } to={{ pathname: '/login', state: { from: currentLocation }}}>
                        <Typography>Login</Typography>
                    </MenuItem>
                    <MenuItem component={ Link } to={{ pathname: '/signup', state: { from: currentLocation }}}>
                        <Typography>Signup</Typography>
                    </MenuItem>
                    </div>
                    }
                </MenuList>
            </Menu>
        </div>
    )
}

const mapStateToProps = (state) => ({
    theme: state.UI.theme
})

export default connect(mapStateToProps, { setDarkMode, setLightMode })(withStyles(styles)(Settings));
=======
import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react'
import { Fade, Menu, MenuItem,
    MenuList, Button, Typography } from '@material-ui/core';

import { Link, useLocation } from 'react-router-dom';

const styles = (theme) => ({
    ...theme.styles
})

const Settings = (props) => {
    const location = useLocation();
    const { classes } = props;
    const currentLocation = location.pathname === '/login' || '/signup' ? '/' : location.pathname;
    return (
        <div>
            <Button>
                <Menu id={props.id}
                    anchorEl={props.anchorEl}
                    keepMounted
                    open={props.open}
                    getContentAnchorEl={null}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                    onClose={props.onClose}
                    TransitionComponent={Fade}>
                    
                    <MenuList>
                        <MenuItem component={ Link } to='/'>
                            <Typography>Settings</Typography>
                        </MenuItem>
                        { props.authenticated ? 
                        <MenuItem onClick={ props.logout }>
                            <Typography>Logout</Typography>
                        </MenuItem> :
                        <div>
                        <MenuItem component={ Link } to={{ pathname: '/login', state: { from: currentLocation }}}>
                            <Typography>Login</Typography>
                        </MenuItem>
                        <MenuItem component={ Link } to={{ pathname: '/signup', state: { from: currentLocation }}}>
                            <Typography>Signup</Typography>
                        </MenuItem>
                        </div>
                        }
                    </MenuList>
                </Menu>
            </Button>
        </div>
    )
}

export default withStyles(styles)(Settings)
>>>>>>> b2b7af50f021ccb02c1f51fc72d9bae086a0fad7
