import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react'
import { Fade, Menu, MenuItem,
    MenuList, Typography } from '@material-ui/core';

import { Link, useLocation } from 'react-router-dom';

const styles = (theme) => ({
    ...theme.styles
})

const Settings = (props) => {
    const location = useLocation();
    const currentLocation = location.pathname === '/login' || '/signup' ? '/' : location.pathname;
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
        </div>
    )
}

export default withStyles(styles)(Settings)