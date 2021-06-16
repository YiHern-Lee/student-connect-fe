import React, { useRef, useState } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

//MUI
import Delete from '../buttons/Delete';
import { Typography, Button, IconButton, MenuItem, Menu } from '@material-ui/core';
import { ModeCommentOutlined as CommentOutlined, MoreVertOutlined } from '@material-ui/icons';
import { connect } from 'react-redux';

import { Link, withRouter } from 'react-router-dom';

const More = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleClick = (event) => {
        setMenuOpen(true);
    };
    const handleClose = () => {
        setMenuOpen(false);
    };
    const buttonRef = useRef();
    const deleteItem = <Delete postId={ props.postId }/>
    return (
        <div>
            <IconButton onClick={ handleClick } ref={ buttonRef }>
                <MoreVertOutlined />
            </IconButton>
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
                    <MenuItem>
                        { deleteItem }
                    </MenuItem> : null}
            </Menu>
        </div>
    )
}

export default More
