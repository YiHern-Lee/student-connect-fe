import React from 'react';
import { IconButton } from '@material-ui/core';
import { PlayArrow as PlayArrowIcon, PlayArrowOutlined, Forward as ForwardIcon, ForwardOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';

export const Vote = (props) => {
    return (
        <div>
            <IconButton onClick={props.onClick}>
                {props.upvoted ? 
                    <ForwardIcon style={ props.up ? { transform: 'rotate(-90deg)'} : {transform: 'rotate(90deg)'}}/> :
                    <ForwardOutlined style={ props.up ? { transform: 'rotate(-90deg)'} : {transform: 'rotate(90deg)'}}/>
                }
            </IconButton>
        </div>
    )
}

Vote.propTypes = {
    up: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}
