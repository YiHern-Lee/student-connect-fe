import React, { useRef, useState } from 'react'

//MUI
import { Button, IconButton, MenuItem, Menu, Tooltip } from '@material-ui/core';
import { MoreVertOutlined } from '@material-ui/icons';

const More = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = (event) => {
        setMenuOpen(true);
    };
    const handleClose = () => {
        setMenuOpen(false);
    };
    const buttonRef = useRef();
    const deleteComponent = props.deleteComponent;
    return (
        <div>
            <Tooltip title='More' arrow>
                <IconButton onClick={ handleClick } ref={ buttonRef }>
                    <MoreVertOutlined />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={ buttonRef.current }
                open={ menuOpen }
                keepMounted
                onClose={ handleClose }>
                <MenuItem>
                    <Button>
                        Report
                    </Button>
                </MenuItem>
                { props.authenticated && props.username === props.credentials.username ? 
                    (<MenuItem>
                        { deleteComponent }
                    </MenuItem>) : null}
            </Menu>
        </div>
    )
}

export default More
