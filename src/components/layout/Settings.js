import React from 'react'
import { Fade, Menu, MenuItem,
    MenuList, Button, Typography } from '@material-ui/core';

const Link = require("react-router-dom").Link;

const Settings = (props) => {
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
                    { props.authenticated ? 
                    <MenuList>
                        <MenuItem component={ Link } to='/'>
                            <Typography>Settings</Typography>
                        </MenuItem>
                        <MenuItem onClick={ props.logout }>
                            <Typography>Logout</Typography>
                        </MenuItem>
                    </MenuList> : 
                    
                    <MenuList>
                        <MenuItem component={ Link } to='/'>
                            <Typography>Settings</Typography>
                        </MenuItem>
                        <MenuItem component={ Link } to='/login'>
                            <Typography>Login</Typography>
                        </MenuItem>
                        <MenuItem component={ Link } to='/signup'>
                            <Typography>Signup</Typography>
                        </MenuItem>
                    </MenuList> }
                </Menu>
            </Button>
        </div>
    )
}

export default Settings