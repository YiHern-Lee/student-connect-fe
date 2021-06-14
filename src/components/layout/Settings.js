import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react'
import { Fade, Menu, MenuItem,
    MenuList, Button, Typography } from '@material-ui/core';

const Link = require("react-router-dom").Link;

const styles = (theme) => ({
    ...theme.styles
})

const Settings = (props) => {
    const { classes } = props;
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
                        <MenuItem component={ Link } to='/login'>
                            <Typography>Login</Typography>
                        </MenuItem>
                        <MenuItem component={ Link } to='/signup'>
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