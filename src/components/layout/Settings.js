import React from 'react'
import { Fade, Menu, MenuItem,
    MenuList, Button } from '@material-ui/core';

const Link = require("react-router-dom").Link;

export const Settings = (props) => {
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
                        Hi
                    </MenuList> : 
                    
                    <MenuList>
                        <MenuItem component={ Link } to='/login'>
                            Login
                        </MenuItem>
                        <MenuItem component={ Link } to='/signup'>
                            Signup
                        </MenuItem>
                    </MenuList> }
                </Menu>
            </Button>
        </div>
    )
}
